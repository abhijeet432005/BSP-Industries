import { categories } from "@/data/categoryData";
import { siteConfig } from "@/data/siteConfig";
import { CategoryCard } from "@/components/shared/CategoryCard";

export const metadata = {
  title: "Heating Element Categories",
  description: `Explore industrial, commercial, and domestic heating element categories from ${siteConfig.name}.`,
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">Categories</p>
        <h1 className="mt-2 text-3xl font-medium text-ink sm:text-4xl">
          Heating element categories
        </h1>
        <p className="mt-3 text-[15px] text-muted">
          Browse industrial, commercial, and domestic heating elements by their
          intended application, or explore the full catalog.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
