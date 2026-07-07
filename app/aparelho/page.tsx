export default function Confirmacao() {
  return (
    <main
      style={{
        backgroundColor: "#ffffff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#2e7d32",
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          ✅ Professor chamado!
        </h1>

        <p
          style={{
            fontSize: "24px",
            marginBottom: "15px",
          }}
        >
          Aguarde alguns instantes.
        </p>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
          }}
        >
          Um professor já foi avisado e irá até o aparelho para ajudá-lo.
        </p>
      </div>
    </main>
  );
}