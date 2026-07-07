"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
          background: "rgba(0,0,0,.82)",
          borderRadius: "22px",
          padding: "40px",
          textAlign: "center",
          color: "white",
          backdropFilter: "blur(8px)",
          boxShadow: "0 15px 40px rgba(0,0,0,.4)",
        }}
      >
        <img
          src="/logo.png"
          alt="GymCall"
          style={{
            width: "120px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            color: "#d32f2f",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          GymCall
        </h1>

        <p
          style={{
            color: "#ddd",
            lineHeight: "28px",
            marginBottom: "35px",
          }}
        >
          Chame um professor rapidamente durante o seu treino.
        </p>

        <button
          onClick={() => router.push("/aluno")}
          style={{
            width: "100%",
            padding: "18px",
            border: "none",
            borderRadius: "12px",
            background: "#d32f2f",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          👨‍🎓 SOU ALUNO
        </button>

        <button
          onClick={() => router.push("/professor")}
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "12px",
            border: "2px solid #666",
            background: "transparent",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          👨‍🏫 SOU PROFESSOR
        </button>

        <p
          style={{
            marginTop: "30px",
            color: "#888",
            fontSize: "13px",
          }}
        >
          GymCall • Sistema de Chamados
        </p>
      </div>
    </main>
  );
}