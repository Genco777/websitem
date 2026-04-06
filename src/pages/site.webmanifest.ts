import { siteConfig } from "../data/site";

export function GET() {
  const body = {
    name: siteConfig.legalName,
    short_name: siteConfig.brand,
    description: siteConfig.defaultDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#050812",
    theme_color: siteConfig.theme.themeColor,
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate"
    }
  });
}
