import { products } from "@/data/productData";
import { categories } from "@/data/categoryData";
import { siteConfig } from "@/data/siteConfig";
import { ProductsExplorer } from "./ProductsExplorer";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const category = categories.find((item) => item.slug === params?.category);

  if (category) {
    const categoryUrl = `${siteConfig.url}/products?category=${category.slug}`;
    return {
      title: category.seo.title,
      description: category.seo.description,
      alternates: { canonical: categoryUrl },
      openGraph: {
        type: "website",
        url: categoryUrl,
        title: `${category.seo.title} | ${siteConfig.name}`,
        description: category.seo.description,
      },
    };
  }

  return {
    title: "Heating Element Product Catalog",
    description: `Browse industrial, commercial, and domestic heating elements from ${siteConfig.name}.`,
    alternates: { canonical: "/products" },
  };
}

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const category = categories.find((item) => item.slug === params?.category);
  const initialCategory = category?.slug || "all";
  const heading = category?.seo.heading || "Heating element product catalog";
  const intro =
    category?.seo.intro ||
    "Browse industrial, commercial, and domestic heating elements. Filter by category or open a listing for available specifications and an enquiry option.";

  const breadcrumbJsonLd = category
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` },
          { "@type": "ListItem", position: 3, name: category.name, item: `${siteConfig.url}/products?category=${category.slug}` },
        ],
      }
    : null;

  return (
    <section className="container-page py-12 md:py-16">
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          {category ? category.name : "Catalog"}
        </p>
        <h1 className="mt-2 text-3xl font-medium text-ink sm:text-4xl">
          {heading}
        </h1>
        <p className="mt-3 text-[15px] text-muted">
          {intro}
        </p>
      </div>

      <ProductsExplorer
        products={products}
        categories={categories}
        initialCategory={initialCategory}
      />
    </section>
  );
}
