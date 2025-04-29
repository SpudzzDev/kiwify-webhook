let lastPayload = null; // Armazena último webhook

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      lastPayload = req.body;
      console.log("🔔 Webhook recebido:", req.body);
      return res.status(200).json({ status: "ok" });
    } catch (err) {
      console.error("Erro:", err);
      return res.status(500).json({ error: "Erro interno" });
    }
  } else if (req.method === "GET") {
    // frontend vai chamar isso para ver o último payload
    return res.status(200).json({ data: lastPayload });
  } else {
    return res.status(405).json({ error: "Método não permitido" });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};