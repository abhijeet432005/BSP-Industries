import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeData } from "@/data/homeData";
import { categories, getCategoryBySlug } from "@/data/categoryData";
import { getProductBySlug } from "@/data/productData";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { ProductCard } from "@/components/shared/ProductCard";
import { DynamicIcon } from "@/components/shared/CategoryIcon";
import { HeroReveal } from "@/components/shared/HeroReveal";
import { CountUpStat } from "@/components/shared/CountUpStat";
import Image from "next/image";

export const metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const { hero, highlights, process, ctaBanner } = homeData;
  const featuredCategories = homeData.featuredCategorySlugs
    .map(getCategoryBySlug)
    .filter(Boolean);
  const featuredProducts = homeData.featuredProductSlugs
    .map(getProductBySlug)
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-page grid gap-10 py-14 md:grid-cols-2 md:items-center md:py-24">
          <HeroReveal>
            <p data-reveal className="font-mono text-xs uppercase tracking-wide text-accent-dark">
              {hero.eyebrow}
            </p>
            <h1 data-reveal className="mt-4 text-[2.2rem] font-medium leading-[1.1] text-ink sm:text-5xl">
              {hero.heading}
            </h1>
            <p data-reveal className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted sm:text-base">
              {hero.subheading}
            </p>
            <div data-reveal className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>

            <div data-reveal className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <CountUpStat
                    value={stat.value}
                    className="block font-display text-2xl font-semibold text-ink sm:text-3xl"
                  />
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

          </HeroReveal>
          <div data-reveal className="crosshair relative hidden aspect-[4/3.4] bg-[#EFEFEA] md:block overflow-hidden rounded-2xl">
            <Image src="/hero2.webp" alt="hero-image" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-border bg-surface">
        <div className="container-page grid gap-8 py-14 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <DynamicIcon name={item.icon} className="h-6 w-6 text-accent-dark" />
              <h3 className="font-display text-base font-medium text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured categories */}
      <section className="border-b border-border">
        <div className="container-page py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-muted">Categories</p>
              <h2 className="mt-2 text-2xl font-medium text-ink sm:text-3xl">
                What we supply
              </h2>
            </div>
            <Link href="/categories" className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent-dark">
              View all categories <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-b border-border bg-surface">
        <div className="container-page py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-muted">Catalog picks</p>
              <h2 className="mt-2 text-2xl font-medium text-ink sm:text-3xl">
                Frequently requested equipment
              </h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent-dark">
              Browse full catalog <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border">
        <div className="container-page py-14 md:py-20">
          <h2 className="max-w-md text-2xl font-medium text-ink sm:text-3xl">
            {process.heading}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => (
              <div key={step.title} className="border-t border-border-strong pt-4">
                <span className="font-mono text-xs text-accent-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-base font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-ink">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-md font-display text-2xl font-medium text-white sm:text-3xl">
              {ctaBanner.heading}
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/70">{ctaBanner.body}</p>
          </div>
          <Button asChild variant="accent" size="lg">
            <Link href={ctaBanner.cta.href}>
              {ctaBanner.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function HeroDiagram() {
  return (
    <svg viewBox="0 0 400 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C7C8C2" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="340" fill="url(#hero-grid)" opacity="0.5" />
      <circle cx="200" cy="170" r="86" fill="none" stroke="#C4531D" strokeWidth="1.5" />
      <circle cx="200" cy="170" r="52" fill="none" stroke="#33505E" strokeWidth="1.5" />
      <circle cx="200" cy="170" r="6" fill="#16191C" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1="200"
          y1="170"
          x2={200 + 86 * Math.cos((deg * Math.PI) / 180)}
          y2={170 + 86 * Math.sin((deg * Math.PI) / 180)}
          stroke="#C7C8C2"
          strokeWidth="1"
        />
      ))}
      <text x="200" y="40" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#5B6169">
        SPEC REF — FF/2024
      </text>
      <text x="200" y="305" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#5B6169">
        SCALE 1:4
      </text>
    </svg>
  );
}
