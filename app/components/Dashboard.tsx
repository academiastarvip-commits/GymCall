type Props = {
  aguardando: number;
  atendendo: number;
  finalizados: number;
};

export default function Dashboard({
  aguardando,
  atendendo,
  finalizados,
}: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "15px",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          background: "#991b1b",
          borderRadius: "16px",
          padding: "18px",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "32px" }}>
          {aguardando}
        </h2>

        <p style={{ marginTop: "8px" }}>
          🔴 Aguardando
        </p>
      </div>

      <div
        style={{
          background: "#92400e",
          borderRadius: "16px",
          padding: "18px",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "32px" }}>
          {atendendo}
        </h2>

        <p style={{ marginTop: "8px" }}>
          🟡 Atendendo
        </p>
      </div>

      <div
        style={{
          background: "#166534",
          borderRadius: "16px",
          padding: "18px",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "32px" }}>
          {finalizados}
        </h2>

        <p style={{ marginTop: "8px" }}>
          🟢 Finalizados
        </p>
      </div>
    </div>
  );
}