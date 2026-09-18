import { TransitionLink as Link } from "@/components/shared/TransitionLink";
import { notFound } from "next/navigation";
import { ChevronRight, Check, MessageCircle } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/productData";
import { getCategoryBySlug } from "@/data/categoryData";
import { siteConfig, whatsappLink } from "@/data/siteConfig";
import { ProductVisual } from "@/components/shared/ProductVisual";
import { ProductCard } from "@/components/shared/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/shared/EnquiryDialog";
import { ProductGallery } from "@/components/shared/ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  const productUrl = `${siteConfig.url}/products/${product.slug}`;

  return {
    title: product.name,
    description: product.shortDescription,

    alternates: {
      canonical: productUrl,
    },

    openGraph: {
      type: "website",
      url: productUrl,
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,
      siteName: siteConfig.name,

      ...(product.images?.length > 0 && {
        images: product.images.map((image) => ({
          url: `${siteConfig.url}${image}`,
          alt: product.name,
        })),
      }),
    },

    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,

      ...(product.images?.[0] && {
        images: [`${siteConfig.url}${product.images[0]}`],
      }),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product);

  const sku =
    product.specs?.find(
      (spec) => spec.label.toLowerCase() === "sku"
    )?.value;

  const productUrl = `${siteConfig.url}/products/${product.slug}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.name,

    description: product.description,

    url: productUrl,

    image:
      product.images?.map(
        (image) => `${siteConfig.url}${image}`
      ) ?? [],

    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },

    model: product.model,

    ...(sku && sku !== "—"
      ? {
        sku: sku,
      }
      : {}),

    category: category?.name,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category?.name ?? product.category,
        item: `${siteConfig.url}/products?category=${product.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
      },
    ],
  };

  return (
    <div className="container-page py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
        <Link href="/" className="hover:text-ink">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/products" className="hover:text-ink">Products</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href={`/products?category=${product.category}`} className="hover:text-ink">
          {category?.name}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <div className="relative lg:sticky lg:top-24 lg:self-start">
          <ProductGallery product={product} className="relative aspect-[4.5/4.5]" />
          {product.badge && (
            <Badge variant="accent" className="absolute left-4 top-4">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Details */}
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-muted">
            {category?.name} · Model {product.model}
          </p>
          <h1 className="mt-2 text-2xl font-medium text-ink sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <EnquiryDialog productName={product.name} />
            <Button asChild variant="outline" size="lg">
              <a
                href={whatsappLink(
                  `Hi, I'm interested in the ${product.name} (Model ${product.model}). Could you share pricing and availability?`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-2.5 text-xs text-muted">
            Pricing is quoted per enquiry based on quantity and delivery location.
          </p>

          {/* Features */}
          {product.features?.length > 0 && (
            <div className="mt-9">
              <h2 className="font-display text-base font-medium text-ink">Key features</h2>
              <ul className="mt-3 space-y-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications */}
          {product.applications?.length > 0 && (
            <div className="mt-9">
              <h2 className="font-display text-base font-medium text-ink">Key applications</h2>
              <ul className="mt-3 space-y-2.5">
                {product.applications.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specs */}
          {product.specs?.length > 0 && (
            <div className="mt-9">
              <h2 className="font-display text-base font-medium text-ink">Specifications</h2>
              <dl className="mt-3 divide-y divide-border border-y border-border">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 py-2.5 text-sm">
                    <dt className="text-muted">{spec.label}</dt>
                    <dd className="font-mono text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-20 border-t border-border pt-10">
          <h2 className="text-xl font-medium text-ink sm:text-2xl">
            More from {category?.name}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
