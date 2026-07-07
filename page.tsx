export default function Aparelho() {
  return (
    <main
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "20px",
          width: "90%",
          maxWidth: "420px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            color: "#d32f2f",
            marginBottom: "20px",
          }}
        >
          🏋️ GymCall
        </h1>

        <h2>💪 Leg Press 45°</h2>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Código: <strong>LP01</strong>
        </p>

        <button
          style={{
            width: "100%",
            backgroundColor: "#d32f2f",
            color: "white",
            border: "none",
            borderRadius: "16px",
            padding: "22px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🟥 CHAMAR PROFESSOR
        </button>
      </div>
    </main>
  );
}