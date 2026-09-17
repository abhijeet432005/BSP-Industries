import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[2px] px-2 py-0.5 text-[11px] font-medium tracking-wide font-mono",
  {
    variants: {
      variant: {
        default: "bg-ink text-white",
        accent: "bg-accent text-white",
        steel: "bg-steel-soft text-steel",
        outline: "border border-border-strong text-muted",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
