import { TransitionLink as Link } from "@/components/shared/TransitionLink";
import { ArrowRight } from "lucide-react";
import { DynamicIcon } from "./CategoryIcon";
import { getProductsByCategory } from "@/data/productData";

export function CategoryCard({ category }) {
  const count = getProductsByCategory(category.slug).length;

  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group flex flex-col justify-between border border-border bg-surface p-6 transition-colors hover:border-ink min-h-[200px]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-steel-soft">
          <DynamicIcon name={category.icon} className="h-5 w-5 text-steel" />
        </div>
        <span className="font-mono text-[11px] text-muted">{count} items</span>
      </div>
      <div>
        <h3 className="font-display text-lg font-medium text-ink">
          {category.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted">{category.description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ink">
          View category
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
