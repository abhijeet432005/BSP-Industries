// Content shown on the homepage. Edit freely — nothing here is wired to logic.

export const homeData = {
  hero: {
    eyebrow: "Industrial equipment supplier",
    heading: "Equipment for the shop floor, sourced and specced right.",
    subheading:
      "Forge & Field supplies power tools, material handling gear, pumps, welding equipment, and safety kit to workshops and contractors. Browse the catalog, then send an enquiry — no account or checkout needed.",
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
    "vx-780-angle-grinder",
    "hl-500-pallet-truck",
    "mg-210-mig-welder",
    "pw-3-water-pump",
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
    heading: "Sourcing equipment for a project?",
    body: "Send us your requirement list and we'll come back with a single consolidated quote.",
    cta: { label: "Send an enquiry", href: "/contact" },
  },
};
