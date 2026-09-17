import { aboutData } from "@/data/aboutData";
import { siteConfig } from "@/data/siteConfig";
import { CountUpStat } from "@/components/shared/CountUpStat";
import { Button } from "@/components/ui/button";
import { TransitionLink as Link } from "@/components/shared/TransitionLink";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About",
  description: `Learn how ${siteConfig.name} sources and supplies industrial equipment.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-14 md:py-20">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">About us</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
            {aboutData.heading}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            {aboutData.intro}
          </p>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {aboutData.stats.map((stat) => (
              <div key={stat.label}>
                <CountUpStat
                  value={stat.value}
                  className="block font-display text-2xl font-semibold text-ink sm:text-3xl"
                />
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-page py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {aboutData.story.map((block) => (
              <div key={block.heading} className="border-t border-border-strong pt-4">
                <h2 className="font-display text-lg font-medium text-ink">
                  {block.heading}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-14 md:py-20">
          <h2 className="text-2xl font-medium text-ink sm:text-3xl">What we hold ourselves to</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {aboutData.values.map((v) => (
              <div key={v.title} className="border border-border p-5">
                <h3 className="font-display text-base font-medium text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-md font-display text-2xl font-medium text-white sm:text-3xl">
              Have a requirement in mind?
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/70">
              Send us your list and we&apos;ll come back with a single, itemised quote.
            </p>
          </div>
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
