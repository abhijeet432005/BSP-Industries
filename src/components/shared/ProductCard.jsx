import { TransitionLink as Link } from "@/components/shared/TransitionLink";
import { ArrowUpRight } from "lucide-react";
import { getCategoryBySlug } from "@/data/categoryData";
import { ProductVisual } from "./ProductVisual";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }) {
  const category = getCategoryBySlug(product.category);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block border border-border bg-surface transition-colors hover:border-ink hover:scale-102 duration-1000"
    >
      <div className="relative aspect-[4/3]">
        <ProductVisual product={product} className="h-full w-full" />
        {product.badge && (
          <Badge variant="accent" className="absolute left-3 top-3">
            {product.badge}
          </Badge>
        )}
      </div>
      <div className="p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
          {category?.name} · {product.model}
        </p>
        <h3 className="mt-1.5 font-display text-base font-medium leading-snug text-ink">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted">
          {product.shortDescription}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-dark">
          View details
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
