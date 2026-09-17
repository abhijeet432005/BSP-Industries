// Product categories.
// `icon` refers to a lucide-react icon name rendered in components/shared/CategoryIcon.js

export const categories = [
  {
    slug: "industrial-heater",
    name: "Industrial Heater",
    icon: "Forklift",
    description:
      "High-performance heating solutions designed for industrial processes, manufacturing units, and demanding high-temperature applications.",
  },
  {
    slug: "commercial-heater",
    name: "Commercial Heater",
    icon: "Forklift",
    description:
      "Reliable heating solutions for commercial spaces, businesses, and large facilities, delivering efficient and consistent heat.",
  },
  {
    slug: "domestic-heater",
    name: "Domestic Heater",
    icon: "CircleGauge",
    description:
      "Efficient and dependable heating solutions designed for homes, providing comfortable and consistent warmth for everyday use.",
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}
