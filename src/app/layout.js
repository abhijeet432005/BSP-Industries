import { Toaster } from "sonner";

// Self-hosted fonts (Fontsource) — no runtime fetch to Google Fonts needed.
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { PageTransition } from "@/components/shared/PageTransition";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Heating Element Manufacturer & Supplier | BPS Industries",
    template: "%s | BPS Industries",
  },
  description:
    "BPS Industries manufactures and supplies industrial, commercial, and domestic heating elements including tubular heaters, cartridge heaters, immersion heaters, finned heaters, infrared heaters, and custom heating solutions.",
  alternates: {
    canonical: siteConfig.url,
  },

  keywords: [
    "heating elements",
    "industrial heating elements",
    "commercial heating elements",
    "domestic heating elements",
    "heating element manufacturer",
    "heating element supplier",
    "industrial heater manufacturer",
    "electric heating elements",
    "tubular heating elements",
    "cartridge heaters",
    "immersion heaters",
    "BPS Industries",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "BPS Industries",
    url: siteConfig.url,
    description:
      "BPS Industries manufactures and supplies industrial, commercial, and domestic heating elements for appliances, machinery, process equipment, and specialized heating applications.",
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.line2,
      addressCountry: siteConfig.address.country,
    },

    knowsAbout: [
      "Heating Elements",
      "Industrial Heating Elements",
      "Commercial Heating Elements",
      "Domestic Heating Elements",
      "Tubular Heaters",
      "Cartridge Heaters",
      "Immersion Heaters",
      "Finned Heaters",
      "Infrared Heaters",
    ],
  };

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScrollProvider>
        <WhatsAppButton />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
