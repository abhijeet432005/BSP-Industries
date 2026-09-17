import { siteConfig } from "@/data/siteConfig";

export default function robots() {
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
