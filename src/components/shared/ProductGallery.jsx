"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProductVisual } from "./ProductVisual";
import Image from "next/image";

export function ProductGallery({ product, className }) {
  const hasMultiple = Array.isArray(product.images) && product.images.length > 1;
  const [active, setActive] = useState(product.images?.[0]);

  return (
    <div>
      <div className={className}>
        <ProductVisual product={product} activeImage={active} className="h-full w-full" />
      </div>

      {hasMultiple && (
        <div className="mt-3 flex gap-2.5">
          {product.images.map((src) => (
            <button
              key={src}
              onClick={() => setActive(src)}
              className={cn(
                "relative h-16 w-16 shrink-0 overflow-hidden border bg-[#EFEFEA]",
                active === src ? "border-ink" : "border-border hover:border-border-strong"
              )}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}