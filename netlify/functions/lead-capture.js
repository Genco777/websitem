const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  },
  body: JSON.stringify(body)
});

const requiredFields = [
  "name",
  "email",
  "sector",
  "requested_service",
  "current_problem",
  "preferred_contact",
  "source_page",
  "privacy_consent"
];

const getFirstName = (name) => (name || "").trim().split(/\s+/).filter(Boolean)[0] || "";
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());

async function pushToBrevo(payload, apiKey) {
  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();

  return {
    ok: response.ok,
    status: response.status,
    text
  };
}

async function sendWebhook(payload, webhookUrl) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return response.ok;
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod !== "POST") {
    return json(405, { message: "Methode nicht erlaubt." });
  }

  let data;

  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { message: "Ungültige Anfrage." });
  }

  for (const field of requiredFields) {
    if (!String(data[field] || "").trim()) {
      return json(400, { message: `Pflichtfeld fehlt: ${field}` });
    }
  }

  const normalized = {
    name: String(data.name || "").trim(),
    company: String(data.company || "").trim(),
    email: String(data.email || "").trim().toLowerCase(),
    phone: String(data.phone || "").trim(),
    sector: String(data.sector || "").trim(),
    requested_service: String(data.requested_service || "").trim(),
    interest_type: String(data.interest_type || "").trim(),
    budget_range: String(data.budget_range || "").trim(),
    timeline: String(data.timeline || "").trim(),
    current_problem: String(data.current_problem || "").trim(),
    preferred_contact: String(data.preferred_contact || "").trim(),
    source_page: String(data.source_page || "").trim(),
    source_section: String(data.source_section || "").trim(),
    cta_variant: String(data.cta_variant || "").trim(),
    project_context: String(data.project_context || "").trim(),
    entry_point: String(data.entry_point || "").trim(),
    ref_project_slug: String(data.ref_project_slug || "").trim(),
    visual_context: String(data.visual_context || "").trim(),
    website: String(data.website || "").trim(),
    privacy_consent: String(data.privacy_consent || "").trim()
  };

  if (normalized.website) {
    return json(200, {
      ok: true,
      message: "Anfrage erfolgreich verarbeitet."
    });
  }

  if (!isValidEmail(normalized.email)) {
    return json(400, { message: "Bitte geben Sie eine gültige E-Mail-Adresse an." });
  }

  if (normalized.privacy_consent !== "accepted") {
    return json(400, { message: "Bitte bestätigen Sie die Datenschutzerklärung." });
  }

  const brevoApiKey = process.env.BREVO_API_KEY || "";
  const brevoListId = Number.parseInt(process.env.BREVO_LIST_ID || "0", 10);
  const leadWebhookUrl = process.env.LEAD_WEBHOOK_URL || "";

  const brevoPayload = {
    email: normalized.email,
    updateEnabled: true,
    listIds: brevoListId ? [brevoListId] : undefined,
    attributes: {
      FIRSTNAME: getFirstName(normalized.name),
      FULL_NAME: normalized.name,
      COMPANY: normalized.company,
      PHONE: normalized.phone,
      SECTOR: normalized.sector,
      REQUESTED_SERVICE: normalized.requested_service,
      INTEREST_TYPE: normalized.interest_type,
      BUDGET_RANGE: normalized.budget_range,
      TIMELINE: normalized.timeline,
      CURRENT_PROBLEM: normalized.current_problem,
      PREFERRED_CONTACT: normalized.preferred_contact,
      SOURCE_PAGE: normalized.source_page,
      SOURCE_SECTION: normalized.source_section,
      CTA_VARIANT: normalized.cta_variant,
      PROJECT_CONTEXT: normalized.project_context,
      ENTRY_POINT: normalized.entry_point,
      REF_PROJECT_SLUG: normalized.ref_project_slug,
      VISUAL_CONTEXT: normalized.visual_context,
      PRIVACY_CONSENT: normalized.privacy_consent
    }
  };

  let brevoResult = { ok: false, status: 0, text: "Brevo not configured" };

  if (brevoApiKey && brevoListId) {
    brevoResult = await pushToBrevo(brevoPayload, brevoApiKey);

    if (!brevoResult.ok) {
      const minimalRetry = await pushToBrevo(
        {
          email: normalized.email,
          updateEnabled: true,
          listIds: [brevoListId],
          attributes: {
            FIRSTNAME: getFirstName(normalized.name)
          }
        },
        brevoApiKey
      );

      if (minimalRetry.ok) {
        brevoResult = minimalRetry;
      }
    }
  }

  let webhookOk = false;

  if (leadWebhookUrl) {
    try {
      webhookOk = await sendWebhook(
        {
          ...normalized,
          createdAt: new Date().toISOString(),
          brevo: {
            ok: brevoResult.ok,
            status: brevoResult.status
          }
        },
        leadWebhookUrl
      );
    } catch {
      webhookOk = false;
    }
  }

  if (brevoResult.ok || webhookOk) {
    return json(200, {
      ok: true,
      message: "Lead erfolgreich verarbeitet."
    });
  }

  return json(500, {
    ok: false,
    message: "Lead Capture ist noch nicht vollständig konfiguriert.",
    detail: brevoResult.text
  });
}
