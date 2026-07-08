"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Aluno() {
  const router = useRouter();

  const [numero, setNumero] = useState("");

  function adicionarNumero(valor: string) {
    if (numero.length >= 3) return;

    setNumero((n) => n + valor);
  }

  function apagar() {
    setNumero((n) => n.slice(0, -1));
  }

  function continuar() {
    if (!numero) return;

    router.push(`/confirmacao?numero=${numero}`);
  }

  function Botao({
    texto,
    onClick,
    cor = "#1e293b",
  }: {
    texto: string;
    onClick: () => void;
    cor?: string;
  }) {
    return (
      <button
        onClick={onClick}
        style={{
          height: "75px",
          borderRadius: "18px",
          border: "none",
          background: cor,
          color: "white",
          fontSize: "28px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {texto}
      </button>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          GymCall
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px",
            fontSize: "18px",
          }}
        >
          Digite o número do aparelho
        </p>

        <div
          style={{
            background: "#1e293b",
            borderRadius: "18px",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "25px",
            border: "2px solid #334155",
          }}
        >
          {numero || "_"}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "12px",
          }}
        >
          <Botao texto="7" onClick={() => adicionarNumero("7")} />
          <Botao texto="8" onClick={() => adicionarNumero("8")} />
          <Botao texto="9" onClick={() => adicionarNumero("9")} />

          <Botao texto="4" onClick={() => adicionarNumero("4")} />
          <Botao texto="5" onClick={() => adicionarNumero("5")} />
          <Botao texto="6" onClick={() => adicionarNumero("6")} />

          <Botao texto="1" onClick={() => adicionarNumero("1")} />
          <Botao texto="2" onClick={() => adicionarNumero("2")} />
          <Botao texto="3" onClick={() => adicionarNumero("3")} />          <Botao texto="⌫" onClick={apagar} cor="#991b1b" />
          <Botao texto="0" onClick={() => adicionarNumero("0")} />
          <Botao texto="✔" onClick={continuar} cor="#16a34a" />
        </div>

        <button
          onClick={continuar}
          disabled={!numero}
          style={{
            width: "100%",
            marginTop: "25px",
            height: "65px",
            border: "none",
            borderRadius: "18px",
            background: numero ? "#dc2626" : "#475569",
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: numero ? "pointer" : "not-allowed",
          }}
        >
          CONTINUAR
        </button>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginTop: "25px",
            fontSize: "14px",
          }}
        >
          GymCall • Star Vip
        </p>
      </div>
    </main>
  );
}