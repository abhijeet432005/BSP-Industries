"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ProductsExplorer({ products, categories, initialCategory }) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.model.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [products, activeCategory, query]);

  function selectCategory(slug) {
    setActiveCategory(slug);
    router.replace(slug === "all" ? "/products" : `/products?category=${slug}`, {
      scroll: false,
    });
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={activeCategory === "all"}
            onClick={() => selectCategory("all")}
          >
            All ({products.length})
          </FilterChip>
          {categories.map((c) => (
            <FilterChip
              key={c.slug}
              active={activeCategory === c.slug}
              onClick={() => selectCategory(c.slug)}
            >
              {c.name}
            </FilterChip>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or model"
            className="pl-9"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-ink">No products match that search.</p>
          <p className="mt-1 text-sm text-muted">
            Try a different keyword, or send us your requirement directly.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "whitespace-nowrap border px-3.5 py-1.5 text-sm transition-colors",
        active
          ? "border-ink bg-ink text-white"
          : "border-border-strong text-muted hover:border-ink hover:text-ink"
      )}
    >
      {children}
    </button>
  );
}
