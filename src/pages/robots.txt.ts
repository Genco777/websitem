import { siteConfig } from "../data/site";

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.siteUrl}/sitemap-index.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate"
    }
  });
}
