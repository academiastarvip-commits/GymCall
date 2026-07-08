"use client";

import { useMemo } from "react";
import { Timestamp } from "firebase/firestore";

type Chamado = {
  id: string;
  numero: number;
  nome: string;
  status: string;
  criadoEm?: Timestamp;
};

type Props = {
  chamado: Chamado;
  onAtender: (id: string) => void;
  onFinalizar: (id: string) => void;
};

export default function CardChamado({
  chamado,
  onAtender,
  onFinalizar,
}: Props) {
  const tempo = useMemo(() => {
    if (!chamado.criadoEm) return "Agora";

    const criadoEm = chamado.criadoEm.toDate().getTime();
    const agora = new Date().getTime();

    const minutos = Math.floor((agora - criadoEm) / 60000);

    if (minutos <= 0) return "Agora";
    if (minutos === 1) return "1 minuto";

    return `${minutos} minutos`;
  }, [chamado.criadoEm]);

  const cor =
    chamado.status === "aguardando"
      ? "#ef4444"
      : chamado.status === "atendendo"
      ? "#facc15"
      : "#22c55e";

  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "18px",
        padding: "22px",
        marginBottom: "20px",
        borderLeft: `8px solid ${cor}`,
        boxShadow: "0 10px 20px rgba(0,0,0,.25)",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "28px",
        }}
      >
        {chamado.nome}
      </h2>

      <p
        style={{
          color: "#cbd5e1",
          marginTop: "10px",
        }}
      >
        🏋️ Aparelho {chamado.numero}
      </p>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "6px",
        }}
      >
        ⏱ {tempo}
      </p>

      <div
        style={{
          marginTop: "15px",
          marginBottom: "15px",
          display: "inline-block",
          padding: "8px 15px",
          borderRadius: "30px",
          background: cor,
          color: chamado.status === "atendendo" ? "#000" : "#fff",
          fontWeight: "bold",
        }}
      >
        {chamado.status.toUpperCase()}
      </div>

      {chamado.status === "aguardando" && (
        <button
          onClick={() => onAtender(chamado.id)}
          style={{
            width: "100%",
            padding: "15px",
            background: "#f59e0b",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          🚶 INICIAR ATENDIMENTO
        </button>
      )}

      {chamado.status === "atendendo" && (
        <button
          onClick={() => onFinalizar(chamado.id)}
          style={{
            width: "100%",
            padding: "15px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          ✅ FINALIZAR
        </button>
      )}

      {chamado.status === "finalizado" && (
        <div
          style={{
            textAlign: "center",
            padding: "14px",
            background: "#14532d",
            borderRadius: "12px",
            color: "#bbf7d0",
            fontWeight: "bold",
          }}
        >
          ✔ Atendimento concluído
        </div>
      )}
    </div>
  );
}