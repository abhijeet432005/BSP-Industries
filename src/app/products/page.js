import { products } from "@/data/productData";
import { categories } from "@/data/categoryData";
import { siteConfig } from "@/data/siteConfig";
import { ProductsExplorer } from "./ProductsExplorer";

export const metadata = {
  title: "Product Catalog",
  description: `Browse the full ${siteConfig.name} catalog — power tools, material handling, pumps & motors, welding equipment, safety gear, and hand tools.`,
  alternates: { canonical: "/products" },
};

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const initialCategory = params?.category || "all";

  return (
    <section className="container-page py-12 md:py-16">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">Catalog</p>
        <h1 className="mt-2 text-3xl font-medium text-ink sm:text-4xl">
          Browse the full catalog
        </h1>
        <p className="mt-3 text-[15px] text-muted">
          Filter by category or search by name. Open any listing for full
          specifications and to send an enquiry.
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
