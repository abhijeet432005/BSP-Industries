"use client";

import { TransitionLink as Link } from "@/components/shared/TransitionLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const threshold = 80; // itni scroll hone tak navbar hamesha dikhega

    function handleScroll() {
      const currentY = window.scrollY;

      if (currentY < threshold) {
        setHidden(false);
      } else if (currentY > lastScrollY.current) {
        setHidden(true); // neeche scroll -> hide
      } else {
        setHidden(false); // upar scroll -> show
      }

      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-18 w-28 items-center justify-center overflow-hidden">
            <Image
              src="/logo-1.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </span>
          {/* <span className="font-display text-[15px] font-medium leading-tight text-ink sm:text-base">
            {siteConfig.shortName}
          </span> */}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active ? "text-ink font-medium" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="accent" size="sm">
            <Link href="/contact">
              Get a quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-[3px] text-ink md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Menu</SheetTitle>
            <nav className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`border-b border-border py-3.5 text-base ${
                      active ? "font-medium text-ink" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button asChild variant="accent" size="lg" className="mt-8 w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get a quote
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
