export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const webhookData = req.body;

    console.log("Recebi Webhook da Kiwify:", webhookData);

    // Aqui você pode salvar no Firebase, mandar para Discord, etc.
    
    return res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("Erro no Webhook:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Essa função diz para o Next.js/Serverless que o body é RAW (não parse JSON automático)
export const config = {
  api: {
    bodyParser: true,
  },
};