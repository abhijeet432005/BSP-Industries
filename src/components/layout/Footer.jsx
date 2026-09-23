import { TransitionLink as Link } from "@/components/shared/TransitionLink";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { categories } from "@/data/categoryData";
import { Separator } from "@/components/ui/separator";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
} from "@/components/shared/SocialIcons";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative flex h-20 w-35 items-center justify-center overflow-hidden">
                <Image
                  src="/logo-1.png"
                  alt="BPS Industries"
                  fill
                  className="object-contain"
                  priority
                />
              </span>
              {/* <span className="font-display text-base font-medium text-ink">
                {siteConfig.shortName}
              </span> */}
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              {siteConfig.description}
            </p>
            {siteConfig?.socials && (
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={siteConfig?.socials?.instagram}
                  aria-label="Instagram"
                  className="text-muted hover:text-ink"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={siteConfig?.socials?.linkedin}
                  aria-label="LinkedIn"
                  className="text-muted hover:text-ink"
                >
                  <LinkedinIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={siteConfig?.socials?.facebook}
                  aria-label="Facebook"
                  className="text-muted hover:text-ink"
                >
                  <FacebookIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            )}
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-ink hover:text-accent-dark"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-ink hover:text-accent-dark"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink hover:text-accent-dark">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-ink hover:text-accent-dark"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
              Categories
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products?category=${c.slug}`}
                    className="text-ink hover:text-accent-dark"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted"
                  strokeWidth={1.5}
                />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="h-4 w-4 shrink-0 text-muted"
                  strokeWidth={1.5}
                />
                <a
                  href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
                  className="hover:text-accent-dark"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="h-4 w-4 shrink-0 text-muted"
                  strokeWidth={1.5}
                />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent-dark"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            All product data on this site is for catalog purposes — confirm
            specifications at the time of quote.
          </p>
        </div>
      </div>
    </footer>
  );
}
