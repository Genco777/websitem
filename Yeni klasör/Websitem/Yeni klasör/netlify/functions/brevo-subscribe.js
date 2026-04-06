export async function handler(event) {
  const apiKey = process.env.BREVO_API_KEY || "";
  const listId = parseInt(process.env.BREVO_LIST_ID || "0", 10);

  // Health / debug (does NOT expose secrets)
  if (event.httpMethod === "GET") {
    const prefix = apiKey.split("-")[0] || "";
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ok: true,
        hasKey: !!apiKey,
        keyPrefix: prefix,
        keyLength: apiKey.length,
        hasListId: !!listId,
        listId: listId || null
      })
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let payload = {};
  try { payload = JSON.parse(event.body || "{}"); } catch (_) {}

  const email = (payload.email || "").toString().trim();
  if (!email) return { statusCode: 400, body: "Missing email" };

  if (!apiKey) return { statusCode: 500, body: "Missing BREVO_API_KEY" };
  if (!listId) return { statusCode: 500, body: "Missing BREVO_LIST_ID" };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);

  try {
    const resp = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": apiKey },
      body: JSON.stringify({ email, listIds: [listId], updateEnabled: true }),
      signal: controller.signal
    });

    const txt = await resp.text().catch(()=>'');

    if (!resp.ok) {
      // Friendly hint for unauthorized
      if (resp.status === 401 || resp.status === 403) {
        return { statusCode: resp.status, body: "unauthorized: check Brevo API key (must be API Keys / xkeysib-...)" };
      }
      return { statusCode: 400, body: txt || ("Brevo error " + resp.status) };
    }

    return { statusCode: 200, body: "ok" };
  } catch (e) {
    if (String(e).includes("AbortError")) return { statusCode: 504, body: "Brevo timeout" };
    return { statusCode: 500, body: String(e) };
  } finally {
    clearTimeout(timeout);
  }
}
