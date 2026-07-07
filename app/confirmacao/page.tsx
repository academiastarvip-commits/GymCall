"use client";

import { useSearchParams, useRouter } from "next/navigation";
import aparelhos from "../data/aparelhos";

export default function Confirmacao() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const numero = Number(searchParams.get("numero"));

  const aparelho = aparelhos.find((a) => a.numero === numero);

  if (!aparelho) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#111",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            textAlign: "center",
            background: "#1c1c1c",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h1 style={{ color: "#ef4444" }}>
            Aparelho não encontrado
          </h1>

          <button
            onClick={() => router.push("/aluno")}
            style={{
              marginTop: "30px",
              padding: "16px 30px",
              border: "none",
              background: "#d32f2f",
              color: "white",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Voltar
          </button>
        </div>
      </main>
    );
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

        <p
          style={{
            color: "#999",
            marginBottom: "10px",
          }}
        >
          Confirme o aparelho
        </p>

        <h1
          style={{
            color: "#d32f2f",
            fontSize: "36px",
            marginBottom: "15px",
          }}
        >
          {aparelho.nome}
        </h1>

        <h2
          style={{
            fontSize: "60px",
            marginBottom: "25px",
          }}
        >
          Nº {aparelho.numero}
        </h2>

        <p
          style={{
            color: "#ccc",
            marginBottom: "35px",
          }}
        >
          Você está utilizando este aparelho?
        </p>

        <button
          onClick={() =>
            router.push(`/chamado?numero=${aparelho.numero}`)
          }
          style={{
            width: "100%",
            padding: "18px",
            background: "#22c55e",
            border: "none",
            borderRadius: "12px",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          ✅ SIM, CHAMAR PROFESSOR
        </button>

        <button
          onClick={() => router.push("/aluno")}
          style={{
            width: "100%",
            padding: "18px",
            background: "transparent",
            border: "2px solid #666",
            borderRadius: "12px",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ✏ Corrigir número
        </button>
      </div>
    </main>
  );
}