"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Aluno() {
  const router = useRouter();
  const [numero, setNumero] = useState("");

  function continuar() {
    const n = Number(numero);

    if (!n || n <= 0) {
      alert("Digite um número válido.");
      return;
    }

    router.push(`/confirmacao?numero=${n}`);
  }

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
          maxWidth: "420px",
          background: "rgba(0,0,0,.85)",
          borderRadius: "20px",
          padding: "40px",
          color: "white",
          textAlign: "center",
          backdropFilter: "blur(8px)",
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
            color: "#d32f2f",
            marginBottom: "10px",
          }}
        >
          Informe o aparelho
        </h1>

        <p
          style={{
            color: "#bbb",
            marginBottom: "30px",
            lineHeight: "24px",
          }}
        >
          Digite o número do aparelho onde você está treinando.
        </p>

        <input
          type="number"
          placeholder="Número do aparelho"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "30px",
            textAlign: "center",
            borderRadius: "12px",
            border: "2px solid #333",
            background: "#222",
            color: "white",
            marginBottom: "25px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={continuar}
          style={{
            width: "100%",
            padding: "18px",
            background: "#d32f2f",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          CONTINUAR →
        </button>

        <button
          onClick={() => router.push("/")}
          style={{
            width: "100%",
            padding: "16px",
            marginTop: "15px",
            background: "transparent",
            border: "2px solid #666",
            color: "white",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ← Voltar
        </button>
      </div>
    </main>
  );
}