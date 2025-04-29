import { useEffect, useState } from "react";

export default function InterfacePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("/api/webhook");
      const json = await res.json();
      setData(json.data);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📩 Webhook da Kiwify</h1>
      {data ? (
        <pre
          style={{
            background: "#111",
            color: "#0f0",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <p>🔍 Aguardando webhook...</p>
      )}
    </div>
  );
}