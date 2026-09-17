"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { playExit } from "@/lib/pageTransition";

export function TransitionLink({ href, children, onClick, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  async function handleClick(e) {
    e.preventDefault();
    onClick?.(e);

    // Same page click — don't run transition, nothing to animate to.
    if (href === pathname) return;

    await playExit();
    router.push(href);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}