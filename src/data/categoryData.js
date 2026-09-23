// Product categories.
// `icon` refers to a lucide-react icon name rendered in components/shared/CategoryIcon.js

export const categories = [
  {
    slug: "industrial-heater",
    name: "Industrial Heater",
    icon: "Forklift",
    description:
      "High-performance heating solutions designed for industrial processes, manufacturing units, and demanding high-temperature applications.",
    seo: {
      title: "Industrial Heater Manufacturer & Heating Elements",
      description:
        "Explore industrial heaters and industrial heating elements for machinery, process equipment, molds, ovens, and manufacturing applications.",
      heading: "Industrial heaters and heating elements",
      intro:
        "Browse industrial heating solutions for process equipment, machinery, molds, ovens, and other production applications. Select a product to review its available specifications and send an enquiry.",
    },
  },
  {
    slug: "commercial-heater",
    name: "Commercial Heater",
    icon: "Forklift",
    description:
      "Reliable heating solutions for commercial spaces, businesses, and large facilities, delivering efficient and consistent heat.",
    seo: {
      title: "Commercial Heating Elements & Equipment",
      description:
        "Browse commercial heating elements and commercial heating equipment for kitchens, food-service appliances, water dispensers, and sterilizers.",
      heading: "Commercial heating elements and equipment",
      intro:
        "Browse commercial heaters for kitchen, food-service, water-heating, and sterilizer applications. Select a product to review its available specifications and send an enquiry.",
    },
  },
  {
    slug: "domestic-heater",
    name: "Domestic Heater",
    icon: "CircleGauge",
    description:
      "Efficient and dependable heating solutions designed for homes, providing comfortable and consistent warmth for everyday use.",
    seo: {
      title: "Domestic Heating Elements for Water & Appliances",
      description:
        "Browse domestic heating elements for geysers, water heaters, kettles, washing machines, and tiffin applications.",
      heading: "Domestic heating elements for water and appliances",
      intro:
        "Browse domestic heating elements for geysers, water heaters, kettles, washing machines, and tiffin applications. Select a product to review its available specifications and send an enquiry.",
    },
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}
