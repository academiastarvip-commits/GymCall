"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";

import { db } from "../../lib/firebase";

type Chamado = {
  id: string;
  numero: number;
  nome: string;
  status: string;
  criadoEm?: Timestamp;
};

export default function Historico() {
  const [historico, setHistorico] = useState<Chamado[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "chamados"),
      orderBy("criadoEm", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Chamado, "id">),
        }))
        .filter((item) => item.status === "finalizado");

      setHistorico(lista);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        📂 Histórico de Atendimentos
      </h1>

      {historico.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginTop: "60px",
          }}
        >
          Nenhum atendimento finalizado.
        </div>
      ) : (
        historico.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#1e293b",
              borderRadius: "15px",
              padding: "20px",
              marginBottom: "15px",
              borderLeft: "8px solid #22c55e",
            }}
          >
            <h2>{item.nome}</h2>

            <p>🏋️ Aparelho {item.numero}</p>

            <p
              style={{
                color: "#86efac",
                fontWeight: "bold",
              }}
            >
              ✔ Atendimento concluído
            </p>
          </div>
        ))
      )}
    </main>
  );
}