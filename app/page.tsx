"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#111111 0%,#1a1a1a 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          textAlign: "center",
        }}
      >
        <img
          src="/logo-starvip.png"
          alt="Star Vip"
          style={{
            width: "260px",
            marginBottom: "40px",
          }}
        />

        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "52px",
            margin: 0,
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          GymCall
        </h1>

        <p
          style={{
            color: "#CFCFCF",
            fontSize: "18px",
            marginTop: "15px",
            marginBottom: "45px",
            lineHeight: "28px",
          }}
        >
          Chame um professor em poucos segundos durante o seu treino.
        </p>

        <button
          onClick={() => router.push("/aluno")}
          style={{
            width: "100%",
            height: "65px",
            background: "#C8102E",
            color: "#FFF",
            border: "none",
            borderRadius: "18px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "18px",
            transition: ".2s",
          }}
        >
          SOU ALUNO
        </button>

        <button
          onClick={() => router.push("/professor")}
          style={{
            width: "100%",
            height: "65px",
            background: "transparent",
            color: "#FFFFFF",
            border: "2px solid #C8102E",
            borderRadius: "18px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          SOU PROFESSOR
        </button>

        <div
          style={{
            marginTop: "45px",
            color: "#777",
            fontSize: "14px",
          }}
        >
          Star Vip Academia
          <br />
          GymCall • Versão 1.0
        </div>
      </div>
    </main>
  );
}