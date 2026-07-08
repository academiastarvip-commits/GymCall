"use client";

import { useEffect, useRef, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";

import { db } from "../lib/firebase";
import {
  atenderChamado,
  finalizarChamado,
} from "../services/chamados";

import Dashboard from "../components/Dashboard";
import CardChamado from "../components/CardChamado";

type Chamado = {
  id: string;
  numero: number;
  nome: string;
  status: string;
  criadoEm?: Timestamp;
};

export default function Professor() {
  const [chamados, setChamados] = useState<Chamado[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);
  const primeiraCarga = useRef(true);
  const quantidadeAnterior = useRef(0);

  useEffect(() => {
    const q = query(
      collection(db, "chamados"),
      orderBy("criadoEm", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Chamado, "id">),
      }));

      setChamados(lista);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (primeiraCarga.current) {
      quantidadeAnterior.current = chamados.length;
      primeiraCarga.current = false;
      return;
    }

    if (chamados.length > quantidadeAnterior.current) {
      audioRef.current?.play().catch(() => {});
    }

    quantidadeAnterior.current = chamados.length;
  }, [chamados]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setChamados((lista) => [...lista]);
    }, 60000);

    return () => clearInterval(intervalo);
  }, []);

  const aguardando = chamados.filter(
    (c) => c.status === "aguardando"
  ).length;

  const atendendo = chamados.filter(
    (c) => c.status === "atendendo"
  ).length;

  const finalizados = chamados.filter(
    (c) => c.status === "finalizado"
  ).length;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <audio
        ref={audioRef}
        src="/notification.mp3"
        preload="auto"
      />

      <h1
        style={{
          textAlign: "center",
          fontSize: "38px",
          marginBottom: "5px",
        }}
      >
        🏋️ GymCall
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Painel do Professor
      </p>

      <Dashboard
        aguardando={aguardando}
        atendendo={atendendo}
        finalizados={finalizados}
      />

      {chamados.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginTop: "60px",
            fontSize: "20px",
          }}
        >
          Nenhum chamado no momento.
        </div>
      ) : (
        chamados.map((item) => (
          <CardChamado
            key={item.id}
            chamado={item}
            onAtender={atenderChamado}
            onFinalizar={finalizarChamado}
          />
        ))
      )}
    </main>
  );
}