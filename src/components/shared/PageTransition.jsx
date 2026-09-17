"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { registerContainer, playEnter } from "@/lib/pageTransition";

export function PageTransition({ children }) {
  const containerRef = useRef(null);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    registerContainer(containerRef.current);
  }, []);

  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    playEnter();
    window.__lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}