import { siteConfig } from "@/data/siteConfig";
import { products } from "@/data/productData";
import { categories } from "@/data/categoryData";

export default function sitemap() {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = ["", "/about", "/contact", "/products", "/categories"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    })
  );

  const categoryRoutes = categories.map((c) => ({
    url: `${base}/products?category=${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
