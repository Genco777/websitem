# Fly & Froth Launch Checklist

## 1. Live Data Freeze
- `PUBLIC_SITE_URL` final eintragen
- `PUBLIC_PLAUSIBLE_DOMAIN` final eintragen
- `PUBLIC_CAL_COM_URL` final eintragen
- `siteConfig.contact.email` prüfen
- `siteConfig.contact.phoneDisplay` und `phoneRaw` prüfen
- `siteConfig.contact.whatsappRaw` prüfen
- `siteConfig.contact.addressLine1`, `postalCode`, `city` prüfen
- `BREVO_LIST_ID` und `BREVO_API_KEY` setzen
- Optional `LEAD_WEBHOOK_URL` setzen

## 2. Legal Review
- Impressum gegen finale Geschäftsangaben prüfen
- Datenschutz gegen finale Tool-Nutzung prüfen
- Externe Links zu Instagram, WhatsApp und Cal.com testen

## 3. Smoke Tests
- Startseite laden
- `Arbeiten`, `Leistungen`, `Referenzen`, `Kontakt` prüfen
- `404` manuell testen
- WhatsApp-Link testen
- Cal.com-Link testen
- Formular erfolgreich absenden
- Formular-Fehlerfall prüfen

## 4. SEO / Share Check
- Canonical URLs prüfen
- `robots.txt` prüfen
- `sitemap-index.xml` prüfen
- OG Preview mit Standardbild prüfen
- Seitentitel und Descriptions stichprobenartig prüfen

## 5. Final Build
- `npm run check`
- `npm run build`
- Netlify Deploy Preview prüfen
- Production Deploy freigeben
