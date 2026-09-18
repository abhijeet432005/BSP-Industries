// Content shown on the homepage. Edit freely — nothing here is wired to logic.

export const homeData = {
  hero: {
    eyebrow: "Heating Element Manufacturer & Supplier",
    heading: "Reliable heating elements, engineered for every application.",
    subheading:
      "BPS Industries manufactures and supplies industrial, commercial, and domestic heating elements for appliances, machinery, process equipment, kitchens, water heating, and specialized applications. Explore our product range and send an enquiry for the right heating solution.",
    primaryCta: { label: "Browse the catalog", href: "/products" },
    secondaryCta: { label: "Talk to sales", href: "/contact" },
    stats: [
      { value: "500+", label: "SKUs across 6 categories" },
      { value: "1,200+", label: "Businesses supplied" },
      { value: "24 hr", label: "Typical quote turnaround" },
    ],
  },

  highlights: [
    {
      title: "Direct from the supplier",
      body: "No marketplace mark-up. Every enquiry is quoted by our own sales desk.",
      icon: "Handshake",
    },
    {
      title: "Specs you can trust",
      body: "Every listing carries verified specifications, not marketing copy.",
      icon: "ClipboardCheck",
    },
    {
      title: "Bulk & repeat orders",
      body: "Standing orders and volume pricing available for regular buyers.",
      icon: "PackageSearch",
    },
  ],

  featuredCategorySlugs: [
    "industrial-heater",
    "commercial-heater",
    "domestic-heater",
  ],

  featuredProductSlugs: [
    "ceramic-infrared-heater",
    "alkaline-heater",
    "popcorn-heating-elements",
    "kettle-elements",
  ],

  process: {
    heading: "How an enquiry works",
    steps: [
      {
        title: "Browse the catalog",
        body: "Filter by category and open any listing for full specifications.",
      },
      {
        title: "Send an enquiry",
        body: "Submit the form with quantity and delivery location — no account needed.",
      },
      {
        title: "Get a quote",
        body: "Our sales desk replies with pricing and lead time within one business day.",
      },
      {
        title: "Confirm and receive",
        body: "Approve the quote and we handle dispatch and delivery tracking.",
      },
    ],
  },

  ctaBanner: {
    heading: "Looking for the right heating element?",
    body: "Share your heating requirements and our team will help you find the right solution.",
    cta: { label: "Send an enquiry", href: "/contact" },
  },
};
