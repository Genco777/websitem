import type { AssetCollectionSlug, DeliverableType } from "./projects";

const normalizeUrl = (value: string) => value.replace(/\/+$/, "");
const defaultSiteUrl = "https://fly-froth.com";
const siteUrl = normalizeUrl(import.meta.env.PUBLIC_SITE_URL || defaultSiteUrl);
const siteDomain = siteUrl.replace(/^https?:\/\//, "");
const plausibleDomain = import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN || siteDomain;
const calComUrl = import.meta.env.PUBLIC_CAL_COM_URL || "https://cal.com/fly-froth/erstberatung";

export type NavItem = {
  href: string;
  label: string;
  description: string;
};

export type LinkItem = {
  label: string;
  href: string;
  description?: string;
};

export type StatItem = {
  value: string;
  label: string;
  detail?: string;
};

export type ServicePillar = {
  slug: string;
  shortLabel: string;
  title: string;
  heroTitle: string;
  intro: string;
  promise: string;
  seoTitle: string;
  seoDescription: string;
  whatThisSolves: string[];
  deliverables: string[];
  visualProof: string;
  process: string[];
  investment: string;
  pricingFactors: string[];
  relatedProjects: string[];
  featuredDeliverables: DeliverableType[];
  heroAssetCollection: AssetCollectionSlug;
  supportingAssetCollections: AssetCollectionSlug[];
  featuredShowcaseAssets: string[];
  visualTone: string;
  ctaPreset: string;
  ctaTitle: string;
  ctaText: string;
};

export type SectorPage = {
  slug: string;
  title: string;
  heroTitle: string;
  intro: string;
  promise: string;
  seoTitle: string;
  seoDescription: string;
  painPoints: string[];
  solutionBlocks: string[];
  localAngle: string;
  relatedProjects: string[];
  heroAssetCollection: AssetCollectionSlug;
  supportingAssetCollections: AssetCollectionSlug[];
  featuredShowcaseAssets: string[];
  visualTone: string;
  ctaTitle: string;
  ctaText: string;
};

export type AutomationUseCase = {
  title: string;
  trigger: string;
  flow: string;
  output: string;
  value: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

export const analyticsEvents = {
  projectCtaClick: "Project CTA Click",
  whatsappClick: "WhatsApp Click",
  calClick: "Cal.com Click",
  leadFormSubmit: "Lead Form Submit"
} as const;

export const siteConfig = {
  brand: "Fly & Froth",
  legalName: "Fly & Froth Grafik- & Webdesign",
  domain: siteDomain,
  siteUrl,
  defaultTitle: "Fly & Froth | Webdesign, Brand Design und Systeme aus Karben",
  defaultDescription:
    "Fly & Froth entwickelt Websites, Markenauftritte und strukturierte Systeme für Unternehmen in Karben, Frankfurt am Main und dem Rhein-Main-Gebiet.",
  positioning:
    "Fly & Froth verbindet Webdesign, Brand Design und strukturierte Anfragewege zu einem hochwertigen Gesamtauftritt für lokale Unternehmen.",
  heroBadge: "Karben · Frankfurt am Main · Rhein-Main",
  contact: {
    email: "info@fly-froth.com",
    phoneDisplay: "+49 163 1474127",
    phoneRaw: "+491631474127",
    whatsappRaw: "491631474127",
    whatsappMessage:
      "Hallo Fly & Froth, ich möchte eine kostenlose Erstberatung für Website, Brand Design oder Systeme anfragen.",
    addressLine1: "Röderweg 19",
    postalCode: "61184",
    city: "Karben",
    region: "Hessen",
    country: "Deutschland"
  },
  integrations: {
    plausibleDomain,
    plausibleScript: "https://plausible.io/js/script.js",
    calComUrl
  },
  theme: {
    themeColor: "#07111f",
    accentColor: "#6f9dff",
    panelGlow: "cobalt"
  },
  brandVoice: {
    tone: "klar, ruhig, hochwertig, direkt",
    avoid: ["Hype-Sprache", "Freelancer-Anmutung", "künstliche Verknappung"]
  },
  ctaMapping: {
    primary: "Projekt anfragen",
    secondary: "WhatsApp",
    calendar: "Erstgespräch"
  },
  socialLinks: [{ label: "Instagram", href: "https://www.instagram.com/fly.froth/" }],
  mediaPolicy: {
    strategy: "Nur reale Arbeiten und kuratierte eigene Projektbilder im Vordergrund.",
    founderVisibility: "kontrolliert und sekundär"
  }
} as const;

export function createWhatsappHref(customMessage?: string) {
  return `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    customMessage || siteConfig.contact.whatsappMessage
  )}`;
}

export function createContactHref(params: Record<string, string | undefined> = {}) {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) search.set(key, value);
  });

  const query = search.toString();
  return query ? `/kontakt?${query}#projektanfrage` : "/kontakt#projektanfrage";
}

export const navigation: NavItem[] = [
  {
    href: "/",
    label: "Start",
    description: "Positionierung, echte Arbeiten und der direkte Einstieg in das System von Fly & Froth."
  },
  {
    href: "/arbeiten",
    label: "Arbeiten",
    description: "Portfolio-Überblick mit Websites, Markenarbeit, Flyern und ausgewählten Printflächen."
  },
  {
    href: "/leistungen",
    label: "Leistungen",
    description: "Webdesign, Brand Design und strukturierte Systeme in einer durchgängigen Logik."
  },
  {
    href: "/branchen",
    label: "Branchen",
    description: "Für Dienstleister und Handwerk mit regionalem Fokus auf Karben, Frankfurt und Rhein-Main."
  },
  {
    href: "/prozess",
    label: "Prozess",
    description: "Wie Projekte von Positionierung bis Launch und Betreuung aufgebaut werden."
  },
  {
    href: "/ueber-fly-froth",
    label: "Über",
    description: "Founder-led Studio mit hoher gestalterischer Disziplin und direkter Verantwortung."
  },
  {
    href: "/kontakt",
    label: "Kontakt",
    description: "Qualifizierte Anfrage, WhatsApp oder Erstgespräch als nächster sinnvoller Schritt."
  }
];

export const heroStats: StatItem[] = [
  {
    value: "4",
    label: "reale Referenzlinien",
    detail: "Website, Branding, Print und strukturierte Kontaktführung."
  },
  {
    value: "Karben",
    label: "Standort mit Nähe zu Frankfurt",
    detail: "Regional verankert, visuell deutlich über dem lokalen Standard."
  },
  {
    value: "Founder-led",
    label: "direkte Verantwortung",
    detail: "Weniger Reibung zwischen Idee, Design und Umsetzung."
  }
];

export const servicePillars: ServicePillar[] = [
  {
    slug: "webdesign-websites",
    shortLabel: "Websites",
    title: "Webdesign & Websites",
    heroTitle: "Websites, die nicht nur modern aussehen, sondern Ihr Unternehmen klarer und wertiger verkaufen.",
    intro:
      "Fly & Froth entwickelt Websites für lokale Unternehmen, Dienstleister und kleine Betriebe, die online professioneller auftreten und Anfragen strukturierter führen wollen.",
    promise:
      "Ein Auftritt, der schneller Vertrauen aufbaut, regional besser anschlussfähig ist und den nächsten Kontakt klar vorbereitet.",
    seoTitle: "Webdesign & Websites | Fly & Froth Karben",
    seoDescription:
      "Webdesign aus Karben für Frankfurt und Rhein-Main: hochwertige Websites mit klarer Struktur, lokaler SEO und sauberer Lead-Führung.",
    whatThisSolves: [
      "Veraltete oder unübersichtliche Websites mit schwacher mobiler Wirkung.",
      "Zu wenig Differenzierung gegenüber lokalen Mitbewerbern.",
      "Unklare Anfragen, weil Angebot und nächster Schritt nicht sauber geführt werden."
    ],
    deliverables: [
      "Positionierung und Seitenarchitektur",
      "Startseite, Unterseiten und mobile Version",
      "klare CTA-Logik für WhatsApp, Formular und Erstgespräch",
      "Grundlage für lokale SEO in Karben, Frankfurt und Rhein-Main",
      "ruhiges, hochwertiges Interface mit starker Typografie"
    ],
    visualProof:
      "Relaunches, Vorher-Nachher-Vergleiche und mobile Ansichten zeigen, wie stark bereits eine neue Struktur und bessere Führung wirken.",
    process: [
      "Zuerst werden Positionierung, Zielgruppe und Seitenlogik geklärt.",
      "Danach entsteht die visuelle Richtung mit klarer Hierarchie und hochwertiger Oberfläche.",
      "Im letzten Schritt werden Kontaktwege, SEO-Basis und Tracking sauber zusammengeführt."
    ],
    investment: "ca. 1.500 € – 2.500 € für kompakte Lösungen, darüber hinaus je nach Umfang",
    pricingFactors: [
      "Anzahl und Tiefe der Seiten",
      "Text- und Positionierungsarbeit",
      "ob Referenzen, Case Studies oder zusätzliche Landingpages benötigt werden",
      "Schnittstellen zu Formularen, WhatsApp, Cal.com oder Automationen"
    ],
    relatedProjects: ["caremobil-greiz"],
    featuredDeliverables: ["homepage_desktop", "homepage_mobile", "booking_ui"],
    heroAssetCollection: "website",
    supportingAssetCollections: ["website", "divider"],
    featuredShowcaseAssets: ["showcase-caremobil-before-after"],
    visualTone: "präzise, ruhig, digital klar",
    ctaPreset: "website",
    ctaTitle: "Sie möchten eine Website, die sichtbar hochwertiger wirkt und klarer anfragt?",
    ctaText:
      "Dann definieren wir gemeinsam, welche Seitenstruktur, welches Qualitätsniveau und welcher Investitionsrahmen für Ihr Unternehmen wirklich Sinn ergeben."
  },
  {
    slug: "brand-design-grafikdesign",
    shortLabel: "Brand Design",
    title: "Brand Design & Grafikdesign",
    heroTitle: "Markenauftritte, die über Website, Print und Anwendungen hinweg konsistent und professionell wirken.",
    intro:
      "Brand Design bei Fly & Froth beginnt nicht bei Dekoration, sondern bei Klarheit. Logo, Farbe, Typografie und Anwendungen werden so entwickelt, dass Ihr Unternehmen auf jeder Fläche belastbar auftritt.",
    promise:
      "Eine visuelle Sprache, die Wiedererkennbarkeit schafft, sauber einsetzbar bleibt und nicht nach Zufall oder Baukasten aussieht.",
    seoTitle: "Brand Design & Grafikdesign | Fly & Froth Karben",
    seoDescription:
      "Brand Design und Grafikdesign aus Karben für Unternehmen in Rhein-Main: Logo-Systeme, Printdesign und konsistente Markenauftritte.",
    whatThisSolves: [
      "Inkonsistente Gestaltung auf Website, Print und Social Media.",
      "Ein Logo oder Erscheinungsbild, das nicht mehr zum Anspruch passt.",
      "Werbemittel, die zwar vorhanden sind, aber keine klare Linie tragen."
    ],
    deliverables: [
      "Logo-Refresh oder kompletter Markenaufbau",
      "Farben, Typografie und Gestaltungsprinzipien",
      "Anwendungen für Flyer, Roll-ups, Service-Sheets und Visitenkarten",
      "Brand-Boards und praxistaugliche Designvorlagen",
      "druckfertige Daten für reale Einsätze"
    ],
    visualProof:
      "Logo-Refreshes, Markenboards, Business Cards und Werbemittel zeigen, wie aus einzelnen Grafiken ein belastbares Erscheinungsbild wird.",
    process: [
      "Zu Beginn wird die gewünschte Wirkung präzise sortiert: seriös, klar, lokal, hochwertig.",
      "Danach wird das visuelle System reduziert, geschärft und für Anwendungen aufgebaut.",
      "Zum Schluss werden konkrete Medien umgesetzt und für reale Nutzung vorbereitet."
    ],
    investment: "ca. 700 € – 1.800 € für fokussierte Marken- und Printpakete",
    pricingFactors: [
      "ob nur ein Refresh oder ein kompletter Markenaufbau benötigt wird",
      "Anzahl der Anwendungen und Printprodukte",
      "Tiefe der Markensystematik und Vorlagen",
      "Aufwand für Druckdaten, Varianten und Adaptionen"
    ],
    relatedProjects: ["conner-exteriors", "reinigung-hd", "me-con"],
    featuredDeliverables: ["brand_board", "logo_sheet", "flyer", "poster"],
    heroAssetCollection: "branding",
    supportingAssetCollections: ["branding", "print"],
    featuredShowcaseAssets: ["showcase-brand-business-card", "showcase-manifesto-panel"],
    visualTone: "griffig, elegant, systematisch",
    ctaPreset: "brand",
    ctaTitle: "Sie brauchen keinen hübschen Einzelfall, sondern einen Auftritt mit Linie?",
    ctaText:
      "Dann bauen wir eine Marken- und Medienlogik, die sowohl auf der Website als auch in Print und im Vertrieb professionell trägt."
  },
  {
    slug: "automation-systeme",
    shortLabel: "Systeme",
    title: "Automation & Systeme",
    heroTitle: "Kontakt- und Anfragewege, die nicht nur eingebaut, sondern sinnvoll orchestriert sind.",
    intro:
      "Fly & Froth verbindet Formulare, WhatsApp, Cal.com, Follow-up und Tracking so, dass Anfragen ruhiger, klarer und besser vorqualifiziert entstehen.",
    promise:
      "Weniger unklare Erstkontakte, bessere Übergaben und ein digitaler Ablauf, der zum Anspruch des Unternehmens passt.",
    seoTitle: "Automation & Systeme | Fly & Froth Karben",
    seoDescription:
      "Termin- und Automatisierungssysteme aus Karben für Unternehmen im Rhein-Main-Gebiet: klare Lead-Führung, WhatsApp, Formulare und Follow-up.",
    whatThisSolves: [
      "Zu viele unstrukturierte Anfragen über verschiedene Kanäle.",
      "Fehlende Vorqualifizierung vor dem Gespräch.",
      "Keine klare Logik zwischen Kontaktformular, WhatsApp und Terminbuchung."
    ],
    deliverables: [
      "qualifizierte Anfrageformulare",
      "WhatsApp-CTA-Logik und Vorqualifizierung",
      "Cal.com als zweiter Schritt für passende Leads",
      "Brevo-Integration und einfache Nachverfolgung",
      "Plausible-Tracking für relevante Kontaktpunkte"
    ],
    visualProof:
      "Starke Systeme wirken oft unsichtbar. Deshalb werden hier reale Kontaktpunkte, mobile Seitenführung und klar strukturierte Projektstarts gezeigt.",
    process: [
      "Zuerst wird geklärt, welche Kontaktwege wirklich gebraucht werden.",
      "Dann werden Formular, WhatsApp und Terminlogik in eine saubere Reihenfolge gebracht.",
      "Zum Schluss werden Tracking, Follow-up und die Übergabe in den Alltag eingerichtet."
    ],
    investment: "ca. 2.000 € – 4.000 € für Website plus Anfrage- und Systemlogik",
    pricingFactors: [
      "wie viele Kontaktwege und Formulare eingebunden werden",
      "welche Automations- oder CRM-Schnittstellen vorhanden sind",
      "ob bestehende Systeme integriert oder neu strukturiert werden",
      "wie tief Tracking und Nachverfolgung aufgebaut werden sollen"
    ],
    relatedProjects: ["caremobil-greiz", "me-con"],
    featuredDeliverables: ["booking_ui", "homepage_mobile", "homepage_desktop"],
    heroAssetCollection: "website",
    supportingAssetCollections: ["website"],
    featuredShowcaseAssets: ["showcase-caremobil-before-after"],
    visualTone: "geordnet, digital, vertrauensstark",
    ctaPreset: "systeme",
    ctaTitle: "Sie möchten weniger Streuverlust und mehr Klarheit im Anfrageprozess?",
    ctaText:
      "Dann planen wir nicht nur die Oberfläche, sondern auch die Reihenfolge Ihrer Kontaktwege so, dass aus Interessenten sauber qualifizierte Leads werden."
  }
];

export const sectorPages: SectorPage[] = [
  {
    slug: "fuer-dienstleister",
    title: "Für Dienstleister",
    heroTitle: "Für Dienstleister, die über Kompetenz, Vertrauen und Klarheit verkaufen.",
    intro:
      "Dienstleister verkaufen selten ein Standardprodukt. Genau deshalb muss der digitale Auftritt Kompetenz, Struktur und Ruhe ausstrahlen, bevor überhaupt gesprochen wird.",
    promise:
      "Ein Auftritt, der Fachlichkeit sichtbar macht und aus Interessenten besser vorbereitete Gespräche entstehen lässt.",
    seoTitle: "Websites für Dienstleister | Fly & Froth Rhein-Main",
    seoDescription:
      "Websites und Markenauftritte für Dienstleister im Rhein-Main-Gebiet: klar, hochwertig und mit sauberem Anfrageprozess.",
    painPoints: [
      "Leistung wird online zu unscharf dargestellt.",
      "Die Website sieht ordentlich aus, verkauft aber die Kompetenz nicht präzise.",
      "Anfragen sind zu unklar und kosten im Erstgespräch zu viel Zeit."
    ],
    solutionBlocks: [
      "klare Angebotsarchitektur statt Textwand",
      "ruhige Premium-Wirkung mit hoher Lesbarkeit",
      "qualifizierte Anfragewege über Formular, WhatsApp und Erstgespräch"
    ],
    localAngle:
      "Gerade im Rhein-Main-Gebiet wird Kompetenz oft zuerst digital bewertet. Ein hochwertiger Erstkontakt verbessert Vertrauen und Preiswahrnehmung spürbar.",
    relatedProjects: ["caremobil-greiz", "me-con"],
    heroAssetCollection: "website",
    supportingAssetCollections: ["website"],
    featuredShowcaseAssets: ["showcase-caremobil-before-after"],
    visualTone: "klar, vertrauensvoll, unaufgeregt",
    ctaTitle:
      "Wenn Ihr Dienstleistungsangebot online präziser und vertrauenswürdiger wirken soll, ist das der richtige Einstieg.",
    ctaText:
      "Fly & Froth verbindet klare Sprache, starke visuelle Führung und strukturierte Kontaktwege zu einer ruhigen, professionellen Präsenz."
  },
  {
    slug: "fuer-handwerk",
    title: "Für Handwerk",
    heroTitle: "Für Handwerksbetriebe, die lokal professioneller und klarer auftreten wollen.",
    intro:
      "Gerade im Handwerk entscheiden Sichtbarkeit, Vertrauen und ein klarer Leistungsrahmen darüber, ob aus einem Besuch eine Anfrage wird oder nicht.",
    promise:
      "Ein regionaler Auftritt, der hochwertiger wirkt, Leistungen schnell erfassbar macht und Kontakt ohne Reibung ermöglicht.",
    seoTitle: "Website für Handwerker Frankfurt | Fly & Froth",
    seoDescription:
      "Website und Markenauftritt für Handwerker in Frankfurt und Rhein-Main: professionell, lokal und conversion-stark.",
    painPoints: [
      "Der Betrieb wirkt digital schwächer als die tatsächliche Arbeit.",
      "Flyer, Website und Markenbild sprechen nicht dieselbe Sprache.",
      "Preis, Leistung und Kontakt werden nicht klar genug geführt."
    ],
    solutionBlocks: [
      "präziser Webauftritt für lokale Sichtbarkeit",
      "Marken- und Printmittel mit sauberer Wiedererkennung",
      "klare Kontaktwege für schnelle Erstgespräche und WhatsApp-Anfragen"
    ],
    localAngle:
      "Für Handwerker in Karben, Frankfurt und Rhein-Main zählt ein Auftritt, der sauber, greifbar und direkt vertrauenswürdig wirkt.",
    relatedProjects: ["conner-exteriors", "reinigung-hd"],
    heroAssetCollection: "print",
    supportingAssetCollections: ["branding", "print"],
    featuredShowcaseAssets: ["showcase-brand-business-card"],
    visualTone: "griffig, lokal, belastbar",
    ctaTitle: "Ihr Handwerksbetrieb soll online so professionell wirken wie die Arbeit vor Ort?",
    ctaText:
      "Dann entwickeln wir einen Auftritt, der Leistungen klar zeigt, Preiswahrnehmung stützt und regional sichtbar souveräner wirkt."
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    text: "Ausgangslage, Zielgruppe, Wettbewerbsumfeld und gewünschte Wirkung werden zuerst klar sortiert."
  },
  {
    step: "02",
    title: "Positionierung",
    text: "Angebot, Tonalität, Seitenlogik und Prioritäten werden so geschärft, dass die Leistung präziser verständlich wird."
  },
  {
    step: "03",
    title: "Designsystem",
    text: "Visuelle Richtung, Typografie, Farbdisziplin und Deliverables werden in eine konsistente Linie gebracht."
  },
  {
    step: "04",
    title: "Umsetzung",
    text: "Website, Printprodukte und Kontaktlogik werden sauber gebaut, getestet und für reale Nutzung vorbereitet."
  },
  {
    step: "05",
    title: "Launch / Betreuung",
    text: "Nach dem Launch werden Übergabe, Tracking, Druckdaten und weitere Ausbauschritte klar vorbereitet."
  }
];

export const automationUseCases: AutomationUseCase[] = [
  {
    title: "Lead-Triage",
    trigger: "Eine Anfrage kommt über Formular oder Landingpage herein.",
    flow:
      "Pflichtfelder, Budget und Interesse werden direkt sortiert, damit der erste Kontakt nicht bei null beginnt.",
    output: "Mehr Kontext vor dem Gespräch und deutlich weniger Rückfragen im ersten Schritt.",
    value: "Bessere Qualität der Leads und schnellere Einordnung."
  },
  {
    title: "Terminlogik",
    trigger: "Ein Lead passt grundsätzlich zur Leistung und soll den nächsten Schritt buchen.",
    flow:
      "WhatsApp, Formular und Cal.com werden nicht parallel nebeneinandergestellt, sondern in eine Reihenfolge gebracht.",
    output: "Weniger Reibung im Kontakt und klarere Übergabe vom Interesse zum Gespräch.",
    value: "Sauberer Ablauf statt Kanalchaos."
  },
  {
    title: "Follow-up",
    trigger: "Ein Lead wurde bereits erfasst, aber noch nicht abgeschlossen.",
    flow:
      "Kontaktinformationen, Wunschleistung und Kontext werden für Nachverfolgung oder Brevo-Listen vorbereitet.",
    output: "Keine verstreuten Informationen und ein ruhigerer Vertriebsalltag.",
    value: "Mehr Übersicht und bessere Anschlusskommunikation."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "Arbeitet Fly & Froth nur an Websites?",
    answer:
      "Nein. Die Stärke liegt gerade darin, Website, Markenauftritt und strukturierte Anfragewege zusammenzudenken. Projekte können einzeln starten, wirken aber am stärksten als System."
  },
  {
    question: "Sind die Preise fix oder nur Richtwerte?",
    answer:
      "Die Preisbereiche sind bewusst als Investitionsrahmen angelegt. Der tatsächliche Umfang hängt von Seitenzahl, Design-Tiefe, Printbedarf und technischer Anbindung ab."
  },
  {
    question: "Ist Fly & Froth nur für Karben gedacht?",
    answer:
      "Karben ist der lokale Ausgangspunkt. Fly & Froth arbeitet für Unternehmen aus Karben, Frankfurt am Main und dem gesamten Rhein-Main-Gebiet."
  },
  {
    question: "Muss ein komplettes Rebranding gestartet werden?",
    answer:
      "Nicht zwingend. Häufig reicht ein fokussierter Einstieg: erst Website, erst Brand-Refresh oder zuerst die Kontaktlogik. Entscheidend ist die richtige Reihenfolge."
  }
];

export const formOptions = {
  sectors: ["Handwerk", "Dienstleistung", "Immobilien", "Praxis / Studio", "Kleinunternehmen", "Sonstiges"],
  budgets: ["unter 1.500 €", "1.500 € – 2.500 €", "2.500 € – 4.000 €", "4.000 €+"],
  timelines: ["so bald wie möglich", "innerhalb von 4 Wochen", "innerhalb von 2 Monaten", "noch offen"]
};

export const supportingLinks: LinkItem[] = [
  {
    label: "Webdesign Karben",
    href: "/webdesign-karben",
    description: "Lokale Landingpage für Karben und Wetterau."
  },
  {
    label: "Webdesign Frankfurt am Main",
    href: "/webdesign-frankfurt-am-main",
    description: "Lokale Landingpage für Frankfurt am Main."
  },
  {
    label: "Websites für Dienstleister Rhein-Main",
    href: "/websites-fuer-dienstleister-rhein-main",
    description: "SEO-Landingpage für Dienstleister im Rhein-Main-Gebiet."
  }
];

export const footerLinkGroups = [
  {
    title: "Leistungen",
    links: servicePillars.map((service) => ({
      label: service.title,
      href: `/leistungen/${service.slug}`
    }))
  },
  {
    title: "Branchen",
    links: [
      { label: "Branchen-Überblick", href: "/branchen" },
      ...sectorPages.map((sector) => ({
        label: sector.title,
        href: `/branchen/${sector.slug}`
      }))
    ]
  },
  {
    title: "Mehr",
    links: [
      { label: "Arbeiten", href: "/arbeiten" },
      { label: "Referenzen", href: "/referenzen" },
      { label: "Prozess", href: "/prozess" },
      { label: "Über Fly & Froth", href: "/ueber-fly-froth" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" }
    ]
  }
] as const;

export const serviceMap = Object.fromEntries(servicePillars.map((service) => [service.slug, service])) as Record<
  string,
  ServicePillar
>;

export const sectorMap = Object.fromEntries(sectorPages.map((sector) => [sector.slug, sector])) as Record<
  string,
  SectorPage
>;
