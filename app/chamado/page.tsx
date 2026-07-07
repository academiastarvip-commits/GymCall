"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import aparelhos from "../data/aparelhos";
import { criarChamado } from "../services/chamados";

export default function Chamado() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const numero = Number(searchParams.get("numero"));

  const aparelho = aparelhos.find((a) => a.numero === numero);

  useEffect(() => {
    async function enviarChamado() {
      if (!aparelho) return;

      await criarChamado(aparelho.numero, aparelho.nome);
    }

    enviarChamado();
  }, [aparelho]);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/academia.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "430px",
          background: "rgba(0,0,0,.85)",
          borderRadius: "20px",
          padding: "40px",
          textAlign: "center",
          color: "white",
        }}
      >
        <img
          src="/logo.png"
          alt="GymCall"
          style={{
            width: "90px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            color: "#22c55e",
            fontSize: "38px",
            marginBottom: "20px",
          }}
        >
          ✅ Chamado enviado!
        </h1>

        <p
          style={{
            lineHeight: "30px",
            color: "#ddd",
            marginBottom: "30px",
          }}
        >
          Seu chamado foi enviado com sucesso.
          <br />
          Um professor irá até o aparelho
          <strong> Nº {numero}</strong>.
        </p>

        <button
          onClick={() => router.push("/")}
          style={{
            width: "100%",
            padding: "18px",
            background: "#d32f2f",
            border: "none",
            borderRadius: "12px",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Voltar ao início
        </button>
      </div>
    </main>
  );
}