import type { ImageMetadata } from "astro";

import caremobilAfterDesktop from "../assets/projects/caremobil-greiz/website-after-desktop.png";
import caremobilAfterMobile from "../assets/projects/caremobil-greiz/website-after-mobile.png";
import caremobilBeforeAfter from "../assets/projects/caremobil-greiz/website-before-after.png";
import caremobilBeforeDesktop from "../assets/projects/caremobil-greiz/website-before-desktop.png";
import caremobilBefore from "../assets/projects/caremobil-greiz/website-before.png";
import caremobilBeforeAfterWide from "../assets/projects/caremobil-greiz/website-before-after-wide.png";
import caremobilDesktopAfter from "../assets/projects/caremobil-greiz/website-desktop-after.png";
import caremobilHeroCrop from "../assets/projects/caremobil-greiz/website-hero-crop.png";
import caremobilMobileAfter from "../assets/projects/caremobil-greiz/website-mobile-after.png";
import connerBrandApplicationsGrid from "../assets/projects/conner-exteriors/brand-applications-grid.png";
import connerBrandApplications from "../assets/projects/conner-exteriors/brand-applications.png";
import connerLogoAfterSlide from "../assets/projects/conner-exteriors/logo-after-slide.png";
import connerLogoAfter from "../assets/projects/conner-exteriors/logo-after.png";
import connerLogoBeforeSlide from "../assets/projects/conner-exteriors/logo-before-slide.png";
import connerLogoBefore from "../assets/projects/conner-exteriors/logo-before.png";
import meConExpoBanner from "../assets/projects/me-con/expo-banner.png";
import meConFlyerOverview from "../assets/projects/me-con/flyer-overview.png";
import meConRollupOverview from "../assets/projects/me-con/rollup-overview.png";
import reinigungBrandComparison from "../assets/projects/reinigung-hd/flyer-brand-comparison.png";
import reinigungBeforeSlide from "../assets/projects/reinigung-hd/flyer-before-slide.png";
import reinigungComparison from "../assets/projects/reinigung-hd/flyer-comparison.png";
import reinigungFinalMockup from "../assets/projects/reinigung-hd/flyer-final-mockup.png";
import reinigungFlyerIdentitySlide from "../assets/projects/reinigung-hd/flyer-identity-slide.png";
import reinigungFlyerMockupGrid from "../assets/projects/reinigung-hd/flyer-mockup-grid.png";
import businessCardSystem from "../assets/showcase/branding/business-card-system.png";
import dividerMarkeWebsiteStruktur from "../assets/showcase/dividers/marke-website-struktur.png";
import frankfurtAerial from "../assets/showcase/local/frankfurt-aerial.png";
export type AssetVariantType = "square_original" | "wide_banner" | "device_mockup" | "print_mockup" | "detail_crop";
export type DisplaySurfaceTone = "dark" | "light" | "neutral";
export type ComparisonRole = "before" | "after" | "compare";
export type MockupStyle = "clean" | "photoreal" | "mixed";
export type VisualContentRole = "text-sensitive" | "ui-sensitive" | "logo-sensitive" | "visual-only" | "comparison";
export type VisualCropMode = "cover" | "contain";
export type VisualSafeInset = "none" | "sm" | "md" | "lg";
export type VisualSurface =
  | "mockup-lead"
  | "mockup-support"
  | "project-card"
  | "curated-card"
  | "curated-featured"
  | "service-card"
  | "gallery"
  | "gallery-wide"
  | "comparison"
  | "ribbon"
  | "latest-work"
  | "divider"
  | "mosaic"
  | "branch-card"
  | "photo-hero"
  | "real-work-lead"
  | "real-work-support";

export type VisualPresentation = {
  contentRole: VisualContentRole;
  cropMode: VisualCropMode;
  objectPosition: string;
  mobileObjectPosition: string;
  safeInset: VisualSafeInset;
  mobileSafeInset: VisualSafeInset;
};

export type DeliverableType =
  | "homepage_desktop"
  | "homepage_mobile"
  | "booking_ui"
  | "brand_board"
  | "logo_sheet"
  | "business_card"
  | "flyer"
  | "brochure"
  | "poster"
  | "social_campaign"
  | "print_mockup"
  | "message_panel"
  | "city_visual";

export type AssetOrientation = "landscape" | "portrait" | "square";
export type AssetRatio = "16:9" | "4:5" | "1:1" | "3:4" | "4:3" | "9:16";
export type FeaturedUsage = "hero" | "gallery" | "card" | "divider";
export type AssetCollectionSlug = "website" | "branding" | "print" | "local" | "divider" | "mosaic";
export type AssetUsageSlot =
  | "home_hero"
  | "home_ribbon"
  | "home_mosaic"
  | "service_hero"
  | "service_gallery"
  | "case_hero"
  | "case_gallery"
  | "portfolio_card"
  | "section_divider"
  | "local_page_visual"
  | "contact_visual";

type VisualAssetBase = {
  id: string;
  src: ImageMetadata;
  alt: string;
  kind: DeliverableType;
  orientation: AssetOrientation;
  ratio: AssetRatio;
  sourceId: string;
  sourceCategory: string;
  variantType: AssetVariantType;
  surfaceTone: DisplaySurfaceTone;
  displayPriority: number;
  lightSafe: boolean;
  mockupStyle: MockupStyle;
  contentRole: VisualContentRole;
  cropMode: VisualCropMode;
  objectPosition: string;
  mobileObjectPosition: string;
  safeInset: VisualSafeInset;
  mobileSafeInset: VisualSafeInset;
  comparisonRole?: ComparisonRole;
  publicApproved: boolean;
};

export type ProjectAsset = VisualAssetBase & {
  projectSlug: string;
  featuredUsage: FeaturedUsage;
};

export type ShowcaseAsset = VisualAssetBase & {
  sourceFolder: string;
  collection: AssetCollectionSlug;
  usageSlots: AssetUsageSlot[];
  relatedProjectSlug?: string;
};

export type VisualAsset = ProjectAsset | ShowcaseAsset;

export type Project = {
  slug: string;
  publicName: string;
  sector: string;
  location: string;
  services: string[];
  summary: string;
  challenge: string;
  approach: string[];
  results: string[];
  deliverables: string[];
  metrics: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  featured: boolean;
  heroTitle: string;
  heroIntro: string;
  seoTitle: string;
  seoDescription: string;
  heroScenes: HeroScene[];
  selectedWorkAssetIds: string[];
  lightSurfaceAssetIds: string[];
  comparisonAssetIds?: string[];
  assets: ProjectAsset[];
};

export type HeroScene = {
  id: string;
  label: string;
  serviceLabel: string;
  title: string;
  text: string;
  projectSlug: string;
  assetIds: string[];
  tone: DisplaySurfaceTone;
};

export type PortfolioCollection = {
  slug: string;
  label: string;
  description: string;
  kinds: DeliverableType[];
  previewAssetId?: string;
};

export type AssetCollection = {
  slug: AssetCollectionSlug;
  label: string;
  description: string;
};

type CurateVisualOptions = {
  count?: number;
  uniqueSource?: boolean;
  preferredVariants?: AssetVariantType[];
  preferredTones?: DisplaySurfaceTone[];
  preferredUsages?: FeaturedUsage[];
  excludeIds?: string[];
  excludeSourceIds?: string[];
};

const visualInsetOrder: Record<VisualSafeInset, number> = {
  none: 0,
  sm: 1,
  md: 2,
  lg: 3
};

function maxSafeInset(left: VisualSafeInset, right: VisualSafeInset): VisualSafeInset {
  return visualInsetOrder[left] >= visualInsetOrder[right] ? left : right;
}

function getDefaultContentRole(kind: DeliverableType, comparisonRole?: ComparisonRole): VisualContentRole {
  if (comparisonRole) return "comparison";

  switch (kind) {
    case "homepage_desktop":
    case "homepage_mobile":
    case "booking_ui":
    case "message_panel":
    case "social_campaign":
      return "ui-sensitive";
    case "brand_board":
    case "logo_sheet":
    case "business_card":
      return "logo-sensitive";
    case "flyer":
    case "brochure":
    case "poster":
    case "print_mockup":
      return "text-sensitive";
    default:
      return "visual-only";
  }
}

function getDefaultCropMode(variantType: AssetVariantType, contentRole: VisualContentRole): VisualCropMode {
  if (contentRole === "comparison") return "contain";
  if (contentRole === "visual-only") return "cover";
  if (variantType === "detail_crop") return "cover";
  return "contain";
}

function getDefaultObjectPosition(kind: DeliverableType, contentRole: VisualContentRole): string {
  if (contentRole === "comparison") return "center top";

  switch (kind) {
    case "homepage_desktop":
    case "homepage_mobile":
    case "booking_ui":
    case "message_panel":
    case "flyer":
    case "brochure":
    case "poster":
    case "social_campaign":
      return "center top";
    default:
      return "center center";
  }
}

function getDefaultSafeInset(kind: DeliverableType, contentRole: VisualContentRole, cropMode: VisualCropMode): VisualSafeInset {
  if (cropMode === "cover") return "none";

  switch (contentRole) {
    case "comparison":
      return "lg";
    case "ui-sensitive":
      return "md";
    case "logo-sensitive":
      return "md";
    case "text-sensitive":
      return kind === "poster" ? "sm" : "md";
    default:
      return "none";
  }
}

function getDefaultMobileSafeInset(kind: DeliverableType, contentRole: VisualContentRole, cropMode: VisualCropMode): VisualSafeInset {
  if (cropMode === "cover") return "none";

  switch (contentRole) {
    case "comparison":
      return "md";
    case "ui-sensitive":
    case "logo-sensitive":
      return "sm";
    case "text-sensitive":
      return kind === "poster" ? "sm" : "md";
    default:
      return "none";
  }
}

function resolveVisualDefaults(
  kind: DeliverableType,
  variantType: AssetVariantType,
  comparisonRole?: ComparisonRole
): Pick<VisualAssetBase, "contentRole" | "cropMode" | "objectPosition" | "mobileObjectPosition" | "safeInset" | "mobileSafeInset"> {
  const contentRole = getDefaultContentRole(kind, comparisonRole);
  const cropMode = getDefaultCropMode(variantType, contentRole);
  const objectPosition = getDefaultObjectPosition(kind, contentRole);
  const mobileObjectPosition = objectPosition;

  return {
    contentRole,
    cropMode,
    objectPosition,
    mobileObjectPosition,
    safeInset: getDefaultSafeInset(kind, contentRole, cropMode),
    mobileSafeInset: getDefaultMobileSafeInset(kind, contentRole, cropMode)
  };
}

const createProjectAsset = (
  projectSlug: string,
  id: string,
  src: ImageMetadata,
  alt: string,
  kind: DeliverableType,
  orientation: AssetOrientation,
  ratio: AssetRatio,
  featuredUsage: FeaturedUsage,
  options: Partial<
    Pick<
      VisualAssetBase,
      | "sourceId"
      | "sourceCategory"
      | "variantType"
      | "surfaceTone"
      | "displayPriority"
      | "lightSafe"
      | "mockupStyle"
      | "contentRole"
      | "cropMode"
      | "objectPosition"
      | "mobileObjectPosition"
      | "safeInset"
      | "mobileSafeInset"
      | "comparisonRole"
    >
  > = {}
): ProjectAsset => ({
  ...resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole),
  id,
  src,
  alt,
  kind,
  orientation,
  ratio,
  sourceId: options.sourceId || id,
  sourceCategory: options.sourceCategory || projectSlug,
  variantType: options.variantType || "square_original",
  surfaceTone: options.surfaceTone || "dark",
  displayPriority: options.displayPriority ?? 50,
  lightSafe: options.lightSafe ?? true,
  mockupStyle: options.mockupStyle || "mixed",
  contentRole: options.contentRole || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).contentRole,
  cropMode: options.cropMode || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).cropMode,
  objectPosition: options.objectPosition || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).objectPosition,
  mobileObjectPosition:
    options.mobileObjectPosition || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).mobileObjectPosition,
  safeInset: options.safeInset || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).safeInset,
  mobileSafeInset:
    options.mobileSafeInset || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).mobileSafeInset,
  comparisonRole: options.comparisonRole,
  projectSlug,
  featuredUsage,
  publicApproved: true
});

const createShowcaseAsset = (
  id: string,
  src: ImageMetadata,
  alt: string,
  kind: DeliverableType,
  orientation: AssetOrientation,
  ratio: AssetRatio,
  collection: AssetCollectionSlug,
  sourceFolder: string,
  usageSlots: AssetUsageSlot[],
  relatedProjectSlug?: string,
  options: Partial<
    Pick<
      VisualAssetBase,
      | "sourceId"
      | "sourceCategory"
      | "variantType"
      | "surfaceTone"
      | "displayPriority"
      | "lightSafe"
      | "mockupStyle"
      | "contentRole"
      | "cropMode"
      | "objectPosition"
      | "mobileObjectPosition"
      | "safeInset"
      | "mobileSafeInset"
      | "comparisonRole"
    >
  > = {}
): ShowcaseAsset => ({
  ...resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole),
  id,
  src,
  alt,
  kind,
  orientation,
  ratio,
  sourceId: options.sourceId || id,
  sourceCategory: options.sourceCategory || sourceFolder,
  variantType: options.variantType || "square_original",
  surfaceTone: options.surfaceTone || "dark",
  displayPriority: options.displayPriority ?? 50,
  lightSafe: options.lightSafe ?? true,
  mockupStyle: options.mockupStyle || "mixed",
  contentRole: options.contentRole || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).contentRole,
  cropMode: options.cropMode || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).cropMode,
  objectPosition: options.objectPosition || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).objectPosition,
  mobileObjectPosition:
    options.mobileObjectPosition || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).mobileObjectPosition,
  safeInset: options.safeInset || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).safeInset,
  mobileSafeInset:
    options.mobileSafeInset || resolveVisualDefaults(kind, options.variantType || "square_original", options.comparisonRole).mobileSafeInset,
  comparisonRole: options.comparisonRole,
  sourceFolder,
  collection,
  usageSlots,
  relatedProjectSlug,
  publicApproved: true
});

const caremobilAssets = [
  createProjectAsset(
    "caremobil-greiz",
    "caremobil-hero-crop",
    caremobilHeroCrop,
    "Hero-Ausschnitt der neuen CareMobil-Greiz-Website mit klarer Navigation, starker Titelzone und vertrauensvoller Bildführung.",
    "homepage_desktop",
    "landscape",
    "4:3",
    "hero",
    {
      sourceId: "caremobil-after-desktop-family",
      variantType: "detail_crop",
      surfaceTone: "dark",
      displayPriority: 98,
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "caremobil-greiz",
    "caremobil-after-desktop",
    caremobilAfterDesktop,
    "Überarbeitete Desktop-Startseite von CareMobil Greiz mit ruhiger Hierarchie, klaren CTAs und modernerem Gesamteindruck.",
    "homepage_desktop",
    "square",
    "1:1",
    "card",
    {
      sourceId: "caremobil-after-desktop-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 92,
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "caremobil-greiz",
    "caremobil-after-mobile",
    caremobilAfterMobile,
    "Mobile Version des Website-Relaunchs für CareMobil Greiz mit besser lesbarer Struktur und deutlicher Kontaktführung.",
    "homepage_mobile",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "caremobil-after-mobile-family",
      variantType: "device_mockup",
      surfaceTone: "light",
      displayPriority: 88,
      comparisonRole: "after",
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "caremobil-greiz",
    "caremobil-before-desktop",
    caremobilBeforeDesktop,
    "Vorher-Ansicht der alten CareMobil-Greiz-Website mit unruhiger Struktur und schwächerer Nutzerführung.",
    "homepage_desktop",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "caremobil-before-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 52,
      comparisonRole: "before",
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "caremobil-greiz",
    "caremobil-before-after-wide",
    caremobilBeforeAfterWide,
    "Breiter Vorher-Nachher-Vergleich des CareMobil-Relaunchs mit alter und neuer Website auf Desktop und Smartphone.",
    "homepage_desktop",
    "landscape",
    "4:3",
    "divider",
    {
      sourceId: "caremobil-comparison-family",
      variantType: "wide_banner",
      surfaceTone: "light",
      displayPriority: 94,
      comparisonRole: "compare",
      mockupStyle: "mixed"
    }
  ),
  createProjectAsset(
    "caremobil-greiz",
    "caremobil-before-after-square",
    caremobilBeforeAfter,
    "Quadratischer Vorher-Nachher-Vergleich des CareMobil-Relaunchs mit alter und neuer Website in direkter Gegenüberstellung.",
    "homepage_desktop",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "caremobil-comparison-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 84,
      comparisonRole: "compare",
      mockupStyle: "mixed"
    }
  ),
  createProjectAsset(
    "caremobil-greiz",
    "caremobil-before",
    caremobilBefore,
    "Ältere CareMobil-Webansicht als Ausgangslage vor der gestalterischen und strukturellen Überarbeitung.",
    "homepage_desktop",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "caremobil-before-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 48,
      comparisonRole: "before",
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "caremobil-greiz",
    "caremobil-desktop-after",
    caremobilDesktopAfter,
    "Desktopansicht der finalen CareMobil-Website mit ruhigerer Hierarchie und klarerem Seitenaufbau.",
    "homepage_desktop",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "caremobil-after-desktop-family",
      variantType: "device_mockup",
      surfaceTone: "light",
      displayPriority: 86,
      comparisonRole: "after",
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "caremobil-greiz",
    "caremobil-mobile-after-alt",
    caremobilMobileAfter,
    "Alternative mobile Präsentation des CareMobil-Relaunchs mit deutlicher Kontaktführung und fokussierter Oberfläche.",
    "homepage_mobile",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "caremobil-after-mobile-family",
      variantType: "device_mockup",
      surfaceTone: "light",
      displayPriority: 82,
      comparisonRole: "after",
      mockupStyle: "clean"
    }
  )
];

const connerAssets = [
  createProjectAsset(
    "conner-exteriors",
    "conner-brand-applications-grid",
    connerBrandApplicationsGrid,
    "Anwendungsübersicht des überarbeiteten Conner-Logos auf unterschiedlichen Medien und Oberflächen.",
    "brand_board",
    "square",
    "1:1",
    "hero",
    {
      sourceId: "conner-brand-applications-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 96,
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "conner-exteriors",
    "conner-logo-after-slide",
    connerLogoAfterSlide,
    "Finale Logo-Version für Conner Exteriors & More mit reduzierter Form und klarerem Markencharakter.",
    "logo_sheet",
    "square",
    "1:1",
    "card",
    {
      sourceId: "conner-logo-after-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 90,
      comparisonRole: "after",
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "conner-exteriors",
    "conner-logo-before-slide",
    connerLogoBeforeSlide,
    "Vorher-Logo von Conner Aluminum & Remodeling als Ausgangslage vor dem Markenrefresh.",
    "logo_sheet",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "conner-logo-before-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 56,
      comparisonRole: "before",
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "conner-exteriors",
    "conner-brand-applications",
    connerBrandApplications,
    "Quadratische Brand-Anwendung von Conner Exteriors & More mit klarer Typografie und konsistenter Markenfläche.",
    "brand_board",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "conner-brand-applications-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 84,
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "conner-exteriors",
    "conner-logo-after",
    connerLogoAfter,
    "Logo-Anwendung der finalen Conner-Marke in einer reduzierten, präziseren Präsentation.",
    "logo_sheet",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "conner-logo-after-family",
      variantType: "detail_crop",
      surfaceTone: "light",
      displayPriority: 78,
      comparisonRole: "after",
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "conner-exteriors",
    "conner-logo-before",
    connerLogoBefore,
    "Frühere Logo-Anwendung von Conner als Ausgangspunkt vor dem Markenrefresh.",
    "logo_sheet",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "conner-logo-before-family",
      variantType: "detail_crop",
      surfaceTone: "light",
      displayPriority: 44,
      comparisonRole: "before",
      mockupStyle: "clean"
    }
  )
];

const reinigungAssets = [
  createProjectAsset(
    "reinigung-hd",
    "reinigung-flyer-mockup-grid",
    reinigungFlyerMockupGrid,
    "Zwei Mockup-Situationen des neuen Reinigung-HD-Flyers mit klarer Preisstruktur und starkem Direktkontakt-Fokus.",
    "flyer",
    "landscape",
    "4:3",
    "hero",
    {
      sourceId: "reinigung-flyer-hero-family",
      variantType: "wide_banner",
      surfaceTone: "dark",
      displayPriority: 95,
      mockupStyle: "photoreal"
    }
  ),
  createProjectAsset(
    "reinigung-hd",
    "reinigung-flyer-identity-slide",
    reinigungFlyerIdentitySlide,
    "Präsentationsfolie zum Flyer-Redesign von Reinigung HD mit klarer visueller Hierarchie und professioneller Identität.",
    "print_mockup",
    "square",
    "1:1",
    "card",
    {
      sourceId: "reinigung-flyer-final-family",
      variantType: "print_mockup",
      surfaceTone: "light",
      displayPriority: 90,
      comparisonRole: "after",
      mockupStyle: "photoreal"
    }
  ),
  createProjectAsset(
    "reinigung-hd",
    "reinigung-flyer-before-slide",
    reinigungBeforeSlide,
    "Vorher-Flyer von Reinigung HD mit reduzierter Information und geringerer Überzeugungskraft.",
    "flyer",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "reinigung-flyer-before-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 50,
      comparisonRole: "before",
      mockupStyle: "clean"
    }
  ),
  createProjectAsset(
    "reinigung-hd",
    "reinigung-flyer-brand-comparison",
    reinigungBrandComparison,
    "Vergleich zwischen altem Werbemittel und neuer Markenwirkung des Reinigung-HD-Flyers im realen Einsatz.",
    "print_mockup",
    "square",
    "1:1",
    "divider",
    {
      sourceId: "reinigung-flyer-comparison-family",
      variantType: "print_mockup",
      surfaceTone: "light",
      displayPriority: 86,
      comparisonRole: "compare",
      mockupStyle: "photoreal"
    }
  ),
  createProjectAsset(
    "reinigung-hd",
    "reinigung-comparison",
    reinigungComparison,
    "Vergleichsfläche zwischen alter und neuer Printwirkung von Reinigung HD mit direkter visueller Gegenüberstellung.",
    "print_mockup",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "reinigung-flyer-comparison-family",
      variantType: "square_original",
      surfaceTone: "light",
      displayPriority: 82,
      comparisonRole: "compare",
      mockupStyle: "mixed"
    }
  ),
  createProjectAsset(
    "reinigung-hd",
    "reinigung-final-mockup",
    reinigungFinalMockup,
    "Finales Mockup des Reinigung-HD-Flyers in einer sauberen Präsentationssituation mit klarer Preis- und Kontaktwirkung.",
    "print_mockup",
    "square",
    "1:1",
    "gallery",
    {
      sourceId: "reinigung-flyer-final-family",
      variantType: "print_mockup",
      surfaceTone: "light",
      displayPriority: 88,
      comparisonRole: "after",
      mockupStyle: "photoreal"
    }
  )
];

const meConAssets = [
  createProjectAsset(
    "me-con",
    "me-con-expo-banner",
    meConExpoBanner,
    "Großformatiges Werbebanner für ME CON mit klarer Leistungsbotschaft und starkem Immobilienbezug.",
    "poster",
    "landscape",
    "16:9",
    "hero",
    { variantType: "wide_banner", surfaceTone: "dark", displayPriority: 94, mockupStyle: "photoreal" }
  ),
  createProjectAsset(
    "me-con",
    "me-con-flyer-overview",
    meConFlyerOverview,
    "Flyer-Übersicht von ME CON mit Leistungsmodulen, QR-Code und Kontaktführung für den Erstkontakt.",
    "flyer",
    "portrait",
    "3:4",
    "gallery",
    { variantType: "print_mockup", surfaceTone: "light", displayPriority: 76, mockupStyle: "clean" }
  ),
  createProjectAsset(
    "me-con",
    "me-con-rollup-overview",
    meConRollupOverview,
    "Roll-up von ME CON für einen konsistenten Messeauftritt und schnell erfassbare Leistungsargumente.",
    "poster",
    "portrait",
    "3:4",
    "divider",
    { variantType: "print_mockup", surfaceTone: "light", displayPriority: 80, mockupStyle: "photoreal" }
  )
];

export const projectLibrary: Project[] = [
  {
    slug: "caremobil-greiz",
    publicName: "CareMobil Greiz",
    sector: "Alltagsservice & Begleitung",
    location: "Greiz",
    services: ["webdesign-websites", "automation-systeme"],
    summary:
      "Website-Relaunch für einen regionalen Dienstleister mit klarerer Seitenlogik, ruhigerem Look und deutlich besserer mobiler Führung.",
    challenge:
      "Die bestehende Website wirkte unübersichtlich, visuell überladen und führte weder Angebot noch Kontakt sauber durch den ersten Eindruck.",
    approach: [
      "Neue Startseitenarchitektur mit klarer Positionierung und deutlich besserer Leserichtung.",
      "Mobil priorisierte Oberfläche mit direktem Erstgespräch-CTA und ruhigerem Seitenaufbau.",
      "Stärkere Vertrauenssignale für regionale Nähe, Erreichbarkeit und Menschlichkeit."
    ],
    results: [
      "Deutlich modernerer und vertrauenswürdigerer Auftritt.",
      "Bessere mobile Nutzung mit klar geführtem Kontaktweg.",
      "Spürbar hochwertigerer erster Eindruck für einen sensiblen Dienstleistungsbereich."
    ],
    deliverables: [
      "Website-Relaunch",
      "Struktur und Inhaltsführung",
      "Mobile Optimierung",
      "CTA-Logik für Erstgespräch und Kontakt"
    ],
    metrics: ["Vorher/Nachher sichtbar", "mobil optimiert", "regional klarer"],
    featured: true,
    heroTitle: "Website-Relaunch mit klarer Struktur und deutlich mehr Vertrauen im ersten Eindruck.",
    heroIntro:
      "Für CareMobil Greiz wurde eine unübersichtliche Website in eine ruhige, moderne und mobil saubere Präsenz überführt.",
    seoTitle: "CareMobil Greiz Case Study | Fly & Froth",
    seoDescription:
      "Case Study zum Website-Relaunch für CareMobil Greiz mit neuer Struktur, besserer mobiler Wirkung und klarerer Kontaktführung.",
    heroScenes: [
      {
        id: "caremobil-scroll-scene",
        label: "Website",
        serviceLabel: "Webdesign & Systeme",
        title: "Website-Relaunch mit klarer Hierarchie und besserer mobiler Führung.",
        text: "Desktop, Mobile und Vergleichsflächen zeigen denselben Effekt: weniger visuelle Unruhe, mehr Vertrauen und ein sauber geführter nächster Schritt.",
        projectSlug: "caremobil-greiz",
        assetIds: ["caremobil-hero-crop", "caremobil-after-desktop", "caremobil-after-mobile", "caremobil-before-after-wide"],
        tone: "dark"
      }
    ],
    selectedWorkAssetIds: ["caremobil-hero-crop", "caremobil-after-mobile", "caremobil-before-after-wide"],
    lightSurfaceAssetIds: ["caremobil-after-desktop", "caremobil-after-mobile", "caremobil-desktop-after"],
    comparisonAssetIds: ["caremobil-before-desktop", "caremobil-after-desktop", "caremobil-before-after-wide"],
    assets: caremobilAssets
  },
  {
    slug: "conner-exteriors",
    publicName: "Conner Exteriors & More",
    sector: "Handwerk / Exteriors",
    location: "Markenprojekt",
    services: ["brand-design-grafikdesign"],
    summary:
      "Logo-Refresh und Markenvereinheitlichung für einen handwerklich geprägten Betrieb mit stärkerer Wiedererkennbarkeit über mehrere Medien.",
    challenge:
      "Die bisherige Marke war typografisch unruhig, im Einsatz wenig flexibel und vermittelte keine klare, belastbare Wiedererkennung.",
    approach: [
      "Reduziertes Logo-System mit klarerer Form und besserer medialer Einsetzbarkeit.",
      "Anwendungslogik für Packaging, Screen und Geschäftsausstattung.",
      "Fokus auf ein sachliches, dauerhaft belastbares Erscheinungsbild statt kurzfristiger Effekte."
    ],
    results: [
      "Zeitloserer Markenauftritt mit sauberer Konstruktion.",
      "Bessere Einsetzbarkeit in Print, Digital und Anwendungen.",
      "Höhere Wiedererkennbarkeit bei gleichzeitiger Reduktion."
    ],
    deliverables: [
      "Logo-Refresh",
      "Mini Brand System",
      "Markenanwendungen",
      "Anwendungs-Mockups"
    ],
    metrics: ["klar reduziert", "medienfähig", "stärker wiedererkennbar"],
    featured: true,
    heroTitle: "Markenrefresh mit weniger Lärm und deutlich mehr Wiedererkennung.",
    heroIntro:
      "Für Conner entstand ein reduziertes Logo-System, das auf Anwendungen, Packaging und digitalen Flächen deutlich souveräner wirkt.",
    seoTitle: "Conner Exteriors Case Study | Fly & Froth",
    seoDescription:
      "Case Study zum Logo-Refresh für Conner Exteriors & More mit klarerem Markenauftritt und medienfähigen Anwendungen.",
    heroScenes: [
      {
        id: "conner-scroll-scene",
        label: "Brand",
        serviceLabel: "Brand Design",
        title: "Markenrefresh mit klaren Anwendungen statt bloßer Logo-Deko.",
        text: "Das Projekt zeigt, wie aus einem reduzierten Zeichen, einem Brand Board und Anwendungen ein deutlich souveränerer Markenauftritt entsteht.",
        projectSlug: "conner-exteriors",
        assetIds: ["conner-brand-applications-grid", "conner-logo-after-slide", "conner-brand-applications", "showcase-brand-business-card"],
        tone: "light"
      }
    ],
    selectedWorkAssetIds: ["conner-brand-applications-grid", "conner-logo-after-slide", "conner-brand-applications"],
    lightSurfaceAssetIds: ["conner-brand-applications-grid", "conner-brand-applications", "conner-logo-after"],
    comparisonAssetIds: ["conner-logo-before-slide", "conner-logo-after-slide"],
    assets: connerAssets
  },
  {
    slug: "reinigung-hd",
    publicName: "Reinigung HD",
    sector: "Gebäudereinigung",
    location: "Deutschland",
    services: ["brand-design-grafikdesign"],
    summary:
      "Flyer-Redesign für einen Reinigungsbetrieb mit klarerer Preisstruktur, stärkerer visueller Hierarchie und besserer Argumentation.",
    challenge:
      "Der frühere Flyer transportierte Preis und Kontakt, aber nicht genug Vertrauen, Leistungstiefe oder visuelle Führung für einen überzeugenden Erstkontakt.",
    approach: [
      "Überarbeitung der Titellogik mit klarer Preisführung und stärkeren Leistungsargumenten.",
      "Illustrative Leitfigur und sauberere Informationshierarchie für schnelle Erfassung.",
      "Mockup-basierte Prüfung der Wirkung im echten Einsatz statt reiner Bildschirmansicht."
    ],
    results: [
      "Mehr Klarheit in Preis, Leistung und Nutzen.",
      "Stärkeres Werbemittel für den lokalen Direktkontakt.",
      "Deutlich professionellerer Eindruck trotz kompakter Fläche."
    ],
    deliverables: [
      "Flyer-Konzept",
      "Redesign und Inhaltsverdichtung",
      "Printfreigabe",
      "Mockup-Präsentation"
    ],
    metrics: ["klare Preisstruktur", "starke Hierarchie", "verkaufsnäher"],
    featured: true,
    heroTitle: "Ein Flyer, der Leistung, Preis und Vertrauen auf einer Fläche zusammenführt.",
    heroIntro:
      "Für Reinigung HD wurde aus einem einfachen Werbemittel ein klar aufgebauter und deutlich überzeugenderer Printkontaktpunkt.",
    seoTitle: "Reinigung HD Case Study | Fly & Froth",
    seoDescription:
      "Case Study zum Flyer-Redesign für Reinigung HD mit klarer Hierarchie, professionellerem Look und besserer Leistungsargumentation.",
    heroScenes: [
      {
        id: "reinigung-scroll-scene",
        label: "Print",
        serviceLabel: "Print & Conversion",
        title: "Flyer-Redesign, das Preis, Nutzen und Vertrauen auf einer Fläche ordnet.",
        text: "Statt eines hektischen Werbemittels steht hier ein klar geführter Printkontaktpunkt im Zentrum, ergänzt durch Mockups und Vergleichsflächen.",
        projectSlug: "reinigung-hd",
        assetIds: ["reinigung-flyer-mockup-grid", "reinigung-final-mockup", "reinigung-flyer-identity-slide", "reinigung-flyer-brand-comparison"],
        tone: "light"
      }
    ],
    selectedWorkAssetIds: ["reinigung-flyer-mockup-grid", "reinigung-final-mockup", "reinigung-flyer-brand-comparison"],
    lightSurfaceAssetIds: ["reinigung-final-mockup", "reinigung-flyer-identity-slide", "reinigung-comparison"],
    comparisonAssetIds: ["reinigung-flyer-before-slide", "reinigung-final-mockup", "reinigung-flyer-brand-comparison"],
    assets: reinigungAssets
  },
  {
    slug: "me-con",
    publicName: "ME CON",
    sector: "Immobilien & Bausachverstand",
    location: "Rhein-Main",
    services: ["brand-design-grafikdesign", "automation-systeme"],
    summary:
      "Visuelles System für Messe, Print und Beratungskommunikation im Immobilienumfeld mit klarer Nutzenbotschaft und starker Farbdisziplin.",
    challenge:
      "Für ein erklärungsbedürftiges Leistungsangebot mussten Vertrauen, Sachverstand und schnelle Erfassbarkeit über mehrere analoge Kontaktpunkte sichtbar gemacht werden.",
    approach: [
      "Einheitliche Farb- und Typografielinie für Banner, Roll-up und Flyer-Kommunikation.",
      "Fokussierung auf Nutzen, Risikoabbau und direkte Kontaktaufforderung.",
      "Anpassung der Motive für Messekontext, Beratung und Social-Anmutung."
    ],
    results: [
      "Kohärenter Auftritt über mehrere Print- und Messeflächen.",
      "Bessere Kommunikation komplexer Leistungen im Immobilienbereich.",
      "Stärkere Wiedererkennbarkeit durch konsequentes Markensystem."
    ],
    deliverables: [
      "Expo-Banner",
      "Roll-up Design",
      "Flyer-Kommunikation"
    ],
    metrics: ["starker Messeauftritt", "klarer Nutzen", "konsistente Marke"],
    featured: true,
    heroTitle: "Markensystem und Printflächen für ein beratungsintensives Immobilienangebot.",
    heroIntro:
      "ME CON zeigt, wie ein fachlich anspruchsvolles Thema über Banner, Flyer und Roll-up klar und vertrauenswürdig übersetzt werden kann.",
    seoTitle: "ME CON Case Study | Fly & Froth",
    seoDescription:
      "Case Study für ME CON mit Expo-Banner, Roll-up und Flyer-Kommunikation für einen klaren Auftritt im Immobilien- und Bausachverständigenumfeld.",
    heroScenes: [
      {
        id: "mecon-scroll-scene",
        label: "System",
        serviceLabel: "Brand + Systeme",
        title: "Mehrere Print- und Beratungsflächen, aber eine einzige ruhige Markenlogik.",
        text: "Banner, Roll-up und Flyer zeigen, wie ein beratungsintensives Angebot konsistent, fachlich und hochwertig übersetzt werden kann.",
        projectSlug: "me-con",
        assetIds: ["me-con-expo-banner", "me-con-rollup-overview", "me-con-flyer-overview"],
        tone: "dark"
      }
    ],
    selectedWorkAssetIds: ["me-con-expo-banner", "me-con-flyer-overview", "me-con-rollup-overview"],
    lightSurfaceAssetIds: ["me-con-flyer-overview", "me-con-rollup-overview"],
    assets: meConAssets
  }
];

export const assetRegistry: ShowcaseAsset[] = [
  createShowcaseAsset(
    "showcase-caremobil-before-after",
    caremobilBeforeAfterWide,
    "Kuratiertes Vorher-Nachher-Panel des CareMobil-Relaunchs mit Website-Vergleich auf Desktop und Mobilgerät.",
    "homepage_desktop",
    "landscape",
    "4:3",
    "website",
    "Kleinanzeigen/Ana",
    ["home_ribbon", "home_mosaic", "service_gallery", "portfolio_card", "section_divider"],
    "caremobil-greiz",
    {
      sourceId: "caremobil-comparison-family",
      variantType: "wide_banner",
      surfaceTone: "light",
      displayPriority: 90,
      comparisonRole: "compare",
      mockupStyle: "mixed"
    }
  ),
  createShowcaseAsset(
    "showcase-brand-business-card",
    businessCardSystem,
    "Business-Card-Visual für eine Markenanwendung mit sauberer Typografie und präziser Flächenaufteilung.",
    "business_card",
    "square",
    "1:1",
    "branding",
    "Kleinanzeigen/Flyer",
    ["home_mosaic", "portfolio_card", "service_gallery", "contact_visual"],
    undefined,
    { variantType: "print_mockup", surfaceTone: "light", displayPriority: 86, mockupStyle: "photoreal" }
  ),
  createShowcaseAsset(
    "showcase-manifesto-panel",
    dividerMarkeWebsiteStruktur,
    "Breites Manifest-Panel mit der Aussage Marke, Website und Struktur als gemeinsame Systemlogik.",
    "message_panel",
    "landscape",
    "16:9",
    "divider",
    "Kleinanzeigen/Görsel Galeri",
    ["home_ribbon", "section_divider"],
    undefined,
    { variantType: "wide_banner", surfaceTone: "dark", displayPriority: 78, mockupStyle: "clean", lightSafe: false }
  ),
  createShowcaseAsset(
    "showcase-frankfurt-aerial",
    frankfurtAerial,
    "Luftaufnahme von Frankfurt am Main als lokaler Kontext für Rhein-Main und Frankfurt-Seiten.",
    "city_visual",
    "square",
    "1:1",
    "local",
    "Kleinanzeigen/Drone",
    ["local_page_visual", "section_divider"],
    "me-con",
    { variantType: "square_original", surfaceTone: "dark", displayPriority: 40, mockupStyle: "mixed", lightSafe: false }
  )
];

const projectAssetRegistry = projectLibrary.flatMap((project) => project.assets);
export const visualAssetRegistry: VisualAsset[] = [...projectAssetRegistry, ...assetRegistry];

export const showcaseCollections: AssetCollection[] = [
  {
    slug: "website",
    label: "Website",
    description: "Relaunches, mobile Ansichten und klare erste Kontaktflächen."
  },
  {
    slug: "branding",
    label: "Branding",
    description: "Logo-Systeme, Markenboards und Anwendungen mit konsistenter Linie."
  },
  {
    slug: "print",
    label: "Print",
    description: "Flyer, Service-Sheets und Messemittel mit klarer Hierarchie."
  },
  {
    slug: "local",
    label: "Lokalität",
    description: "Regionale Signale für Karben, Frankfurt und Rhein-Main."
  },
  {
    slug: "divider",
    label: "Leitgedanken",
    description: "Kurze Bildbotschaften für Trennung, Rhythmus und Orientierung."
  },
  {
    slug: "mosaic",
    label: "Mosaik",
    description: "Kuratiertes Material für hochwertige Mischkompositionen."
  }
];

export const portfolioCollections: PortfolioCollection[] = [
  {
    slug: "websites",
    label: "Websites",
    description: "Relaunches, mobile Führung und deutlich präzisere Nutzerwege.",
    kinds: ["homepage_desktop", "homepage_mobile"],
    previewAssetId: "caremobil-after-desktop"
  },
  {
    slug: "branding",
    label: "Branding",
    description: "Logo-Systeme, Markenboards und Anwendungen mit sauberer Wiedererkennung.",
    kinds: ["brand_board", "logo_sheet", "business_card", "social_campaign", "message_panel"],
    previewAssetId: "conner-brand-applications-grid"
  },
  {
    slug: "print",
    label: "Print",
    description: "Flyer, Roll-ups, Service-Sheets und Werbemittel mit starker visueller Ordnung.",
    kinds: ["flyer", "brochure", "poster", "print_mockup"],
    previewAssetId: "reinigung-flyer-mockup-grid"
  },
  {
    slug: "systeme",
    label: "Systeme",
    description: "Kontaktführung, mobile Einstiegspunkte und ruhige digitale Übergänge.",
    kinds: ["homepage_desktop", "homepage_mobile", "booking_ui", "city_visual"],
    previewAssetId: "caremobil-after-mobile"
  }
];

export const featuredProjects = projectLibrary.filter((project) => project.featured);
export const publicProjects = projectLibrary.filter((project) => project.assets.some((asset) => asset.publicApproved));

const featuredUsageOrder: Record<FeaturedUsage, number> = {
  hero: 0,
  card: 1,
  gallery: 2,
  divider: 3
};

const defaultVariantOrder: AssetVariantType[] = ["detail_crop", "wide_banner", "print_mockup", "device_mockup", "square_original"];
const defaultToneOrder: DisplaySurfaceTone[] = ["light", "dark", "neutral"];

const byDisplayPriority = (left: VisualAsset, right: VisualAsset) => right.displayPriority - left.displayPriority;

const getPreferenceScore = <T extends string>(value: T, order: T[]) => {
  const index = order.indexOf(value);
  return index === -1 ? 0 : order.length - index;
};

const getUsagePreference = (asset: VisualAsset, preferredUsages: FeaturedUsage[]) => {
  if (!("featuredUsage" in asset)) return 0;
  return getPreferenceScore(asset.featuredUsage, preferredUsages);
};

const contentBearingRoles = new Set<VisualContentRole>(["text-sensitive", "ui-sensitive", "logo-sensitive", "comparison"]);

const surfaceMinimumInsets: Partial<Record<VisualSurface, VisualSafeInset>> = {
  "mockup-lead": "sm",
  "mockup-support": "md",
  "project-card": "md",
  "curated-card": "md",
  "curated-featured": "sm",
  "service-card": "md",
  gallery: "md",
  "gallery-wide": "sm",
  comparison: "lg",
  ribbon: "md",
  "latest-work": "sm",
  divider: "sm",
  mosaic: "sm",
  "branch-card": "md",
  "photo-hero": "sm",
  "real-work-lead": "sm",
  "real-work-support": "md"
};

const surfaceMinimumMobileInsets: Partial<Record<VisualSurface, VisualSafeInset>> = {
  "mockup-lead": "sm",
  "mockup-support": "sm",
  "project-card": "sm",
  "curated-card": "sm",
  "curated-featured": "sm",
  "service-card": "sm",
  gallery: "sm",
  "gallery-wide": "sm",
  comparison: "md",
  ribbon: "sm",
  "latest-work": "sm",
  divider: "sm",
  mosaic: "sm",
  "branch-card": "sm",
  "photo-hero": "sm",
  "real-work-lead": "sm",
  "real-work-support": "sm"
};

function getSurfaceCropMode(asset: VisualAsset, surface: VisualSurface): VisualCropMode {
  if (!contentBearingRoles.has(asset.contentRole)) {
    return asset.cropMode;
  }

  if (surface === "comparison") {
    return "contain";
  }

  if (asset.variantType === "detail_crop") {
    return "cover";
  }

  if (surface === "photo-hero" && asset.contentRole === "visual-only") {
    return "cover";
  }

  return "contain";
}

export function getVisualPresentation(asset: VisualAsset, surface: VisualSurface): VisualPresentation {
  const cropMode = getSurfaceCropMode(asset, surface);
  const safeInset =
    cropMode === "contain"
      ? maxSafeInset(asset.safeInset, surfaceMinimumInsets[surface] || "none")
      : "none";
  const mobileSafeInset =
    cropMode === "contain"
      ? maxSafeInset(asset.mobileSafeInset, surfaceMinimumMobileInsets[surface] || "none")
      : "none";

  return {
    contentRole: asset.contentRole,
    cropMode,
    objectPosition: cropMode === "cover" ? asset.objectPosition : "center center",
    mobileObjectPosition: cropMode === "cover" ? asset.mobileObjectPosition : "center center",
    safeInset,
    mobileSafeInset
  };
}

export function curateVisualAssets(assets: Array<VisualAsset | undefined>, options: CurateVisualOptions = {}) {
  const {
    count = 4,
    uniqueSource = true,
    preferredVariants = defaultVariantOrder,
    preferredTones = defaultToneOrder,
    preferredUsages = ["hero", "card", "gallery", "divider"],
    excludeIds = [],
    excludeSourceIds = []
  } = options;

  const excludedIds = new Set(excludeIds);
  const excludedSourceIds = new Set(excludeSourceIds);
  const seenSources = new Set<string>();

  return mergeVisualAssets(assets)
    .filter((asset) => !excludedIds.has(asset.id) && !excludedSourceIds.has(asset.sourceId))
    .sort((left, right) => {
      const leftScore =
        left.displayPriority * 100 +
        getPreferenceScore(left.variantType, preferredVariants) * 8 +
        getPreferenceScore(left.surfaceTone, preferredTones) * 4 +
        getUsagePreference(left, preferredUsages) * 6 +
        (left.lightSafe ? 1 : 0);
      const rightScore =
        right.displayPriority * 100 +
        getPreferenceScore(right.variantType, preferredVariants) * 8 +
        getPreferenceScore(right.surfaceTone, preferredTones) * 4 +
        getUsagePreference(right, preferredUsages) * 6 +
        (right.lightSafe ? 1 : 0);

      return rightScore - leftScore;
    })
    .filter((asset) => {
      if (!uniqueSource) return true;
      if (seenSources.has(asset.sourceId)) return false;
      seenSources.add(asset.sourceId);
      return true;
    })
    .slice(0, count);
}

export function getAssetCollectionForKind(kind: DeliverableType): AssetCollectionSlug {
  switch (kind) {
    case "homepage_desktop":
    case "homepage_mobile":
    case "booking_ui":
      return "website";
    case "brand_board":
    case "logo_sheet":
    case "business_card":
    case "social_campaign":
      return "branding";
    case "flyer":
    case "brochure":
    case "poster":
    case "print_mockup":
      return "print";
    case "city_visual":
      return "local";
    case "message_panel":
      return "divider";
    default:
      return "mosaic";
  }
}

export function getVisualAssetCollection(asset: VisualAsset): AssetCollectionSlug {
  return "collection" in asset ? asset.collection : getAssetCollectionForKind(asset.kind);
}

export function mergeVisualAssets(...assetGroups: Array<Array<VisualAsset | undefined>>) {
  const seen = new Set<string>();

  return assetGroups
    .flat()
    .filter((asset): asset is VisualAsset => Boolean(asset))
    .filter((asset) => {
      if (seen.has(asset.id)) return false;
      seen.add(asset.id);
      return asset.publicApproved;
    });
}

export function getProjectBySlug(slug: string) {
  return projectLibrary.find((project) => project.slug === slug);
}

export function getProjectsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));
}

export function getProjectsForService(serviceSlug: string) {
  return projectLibrary.filter((project) => project.services.includes(serviceSlug));
}

export function getVisualAssetById(id: string) {
  return visualAssetRegistry.find((asset) => asset.id === id);
}

export function getVisualAssetsByIds(ids: string[]) {
  return ids
    .map((id) => getVisualAssetById(id))
    .filter((asset): asset is VisualAsset => Boolean(asset))
    .sort(byDisplayPriority);
}

export function getProjectAssetsByIds(project: Project, ids: string[]) {
  return ids
    .map((id) => project.assets.find((asset) => asset.id === id))
    .filter((asset): asset is ProjectAsset => Boolean(asset))
    .sort((left, right) => right.displayPriority - left.displayPriority);
}

export function getProjectHeroScenes(project: Project) {
  return project.heroScenes.map((scene) => ({
    ...scene,
    project,
    assets: curateVisualAssets(getVisualAssetsByIds(scene.assetIds), {
      count: 3,
      uniqueSource: true,
      preferredTones: [scene.tone, "light", "dark", "neutral"],
      preferredVariants: ["detail_crop", "wide_banner", "print_mockup", "device_mockup", "square_original"]
    })
  }));
}

export function getShowcaseAssetById(id: string) {
  return assetRegistry.find((asset) => asset.id === id);
}

export function getShowcaseAssetsByIds(ids: string[]) {
  return ids
    .map((id) => getShowcaseAssetById(id))
    .filter((asset): asset is ShowcaseAsset => Boolean(asset));
}

export function getShowcaseAssetsByUsage(slot: AssetUsageSlot, count = 6) {
  return curateVisualAssets(
    assetRegistry.filter((asset) => asset.publicApproved && asset.usageSlots.includes(slot)),
    { count }
  );
}

export function getShowcaseAssetsByCollection(collection: AssetCollectionSlug, count = 6) {
  return curateVisualAssets(
    assetRegistry.filter((asset) => asset.publicApproved && asset.collection === collection),
    { count }
  );
}

export function getAssetsByCollection(collection: AssetCollectionSlug, count = 6) {
  return curateVisualAssets(
    visualAssetRegistry.filter((asset) => asset.publicApproved && getVisualAssetCollection(asset) === collection),
    { count }
  );
}

export function getProjectPrimaryAsset(project: Project, usage: FeaturedUsage = "card") {
  return (
    [...project.assets]
      .filter((asset) => asset.publicApproved && asset.featuredUsage === usage)
      .sort((left, right) => right.displayPriority - left.displayPriority)[0] ||
    [...project.assets]
      .filter((asset) => asset.publicApproved)
      .sort((left, right) => {
        const byUsage = featuredUsageOrder[left.featuredUsage] - featuredUsageOrder[right.featuredUsage];
        return byUsage !== 0 ? byUsage : right.displayPriority - left.displayPriority;
      })[0] ||
    project.assets[0]
  );
}

export function getProjectSelectedAssets(project: Project, count = 3) {
  return curateVisualAssets(getProjectAssetsByIds(project, project.selectedWorkAssetIds), {
    count,
    preferredVariants: ["wide_banner", "detail_crop", "print_mockup", "device_mockup", "square_original"],
    preferredUsages: ["hero", "card", "gallery", "divider"]
  });
}

export function getProjectGalleryAssets(project: Project, count = 4) {
  return curateVisualAssets(
    [...project.assets]
      .filter((asset) => asset.publicApproved)
      .sort((left, right) => {
        const byUsage = featuredUsageOrder[left.featuredUsage] - featuredUsageOrder[right.featuredUsage];
        return byUsage !== 0 ? byUsage : right.displayPriority - left.displayPriority;
      }),
    {
      count,
      preferredVariants: ["wide_banner", "print_mockup", "device_mockup", "detail_crop", "square_original"],
      preferredUsages: ["hero", "card", "gallery", "divider"]
    }
  );
}

export function getCollectionAssets(collection: PortfolioCollection, count = 6) {
  return curateVisualAssets(
    visualAssetRegistry.filter((asset) => asset.publicApproved && collection.kinds.includes(asset.kind)),
    { count }
  );
}

export function getCollectionPreviewAsset(collection: PortfolioCollection) {
  return (
    (collection.previewAssetId ? getVisualAssetById(collection.previewAssetId) : undefined) ||
    getCollectionAssets(collection, 1)[0]
  );
}
