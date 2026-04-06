import { siteConfig, type FAQItem } from "../data/site";
import type { Project } from "../data/projects";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href)
    }))
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/brand/logo.png"),
    image: absoluteUrl("/images/social/og-default.jpg"),
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.addressLine1,
      postalCode: siteConfig.contact.postalCode,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: "DE"
    },
    areaServed: [
      { "@type": "City", name: "Karben" },
      { "@type": "City", name: "Frankfurt am Main" },
      { "@type": "AdministrativeArea", name: "Rhein-Main-Gebiet" }
    ],
    serviceType: [
      "Webdesign",
      "Brand Design",
      "Grafikdesign",
      "Automation",
      "Systeme",
      "Lead-Triage",
      "Terminlogik"
    ]
  };
}

export function createServiceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.legalName,
      url: siteConfig.siteUrl
    },
    areaServed: ["Karben", "Frankfurt am Main", "Rhein-Main-Gebiet"]
  };
}

export function createFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function createProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.publicName,
    headline: project.heroTitle,
    description: project.summary,
    creator: {
      "@type": "ProfessionalService",
      name: siteConfig.legalName,
      url: siteConfig.siteUrl
    },
    about: project.deliverables,
    keywords: project.services,
    locationCreated: project.location,
    url: absoluteUrl(`/referenzen/${project.slug}`)
  };
}
