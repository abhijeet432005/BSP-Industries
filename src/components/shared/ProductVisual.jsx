import { getCategoryBySlug } from "@/data/categoryData";
import { DynamicIcon } from "./CategoryIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProductVisual({ product, className, activeImage }) {
  const category = getCategoryBySlug(product.category);
  const tone = product.tone === "steel" ? "steel" : "accent";
  const hasImages = Array.isArray(product.images) && product.images.length > 0;
  const imageSrc = activeImage || (hasImages ? product.images[0] : null);

  return (
    <div
      style={{ viewTransitionName: `product-visual-${product.slug}` }}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-white",
        className
      )}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          fill
          className="object-contain"
          alt={`${product.name} heating element product image`}
        />
      ) : (
        <div
          className={cn(
            "relative flex items-center justify-center rounded-full",
            tone === "accent" ? "bg-accent-soft" : "bg-steel-soft"
          )}
          style={{ width: "44%", aspectRatio: "1 / 1" }}
        >
          <DynamicIcon
            name={category?.icon}
            className={cn("w-1/2 h-1/2", tone === "accent" ? "text-accent-dark" : "text-steel")}
          />
        </div>
      )}
    </div>
  );
}
