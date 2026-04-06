import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = (process.env.PUBLIC_SITE_URL || "https://fly-froth.com").replace(/\/+$/, "");

export default defineConfig({
  site,
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: "directory"
  }
});
