// Global business/site settings.
// Phone & email come from .env.local so you can change them without touching code.
// See .env.example for the list of variables.

export const siteConfig = {
  name: "BPS Industries",
  shortName: "BPS Industries",
  tagline: "Heating elements, built for every application.",
  description:
    "BPS Industries manufactures industrial, commercial, and domestic heating elements for appliances, machinery, process equipment, and specialized heating applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.bpsindustriesgroup.com/",

  // Dummy placeholders — update in .env.local
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 98765 43210",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@forgeandfield.example",

  address: {
    line1: "2nd Floor, Building No. 116",
    line2: "Street No. 06, East Vinod Nagar, Delhi - 91",
    country: "India",
  },

  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:30 PM" },
    { day: "Saturday", time: "9:30 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  // socials: {
  //   instagram: "https://instagram.com/",
  //   linkedin: "https://linkedin.com/",
  //   facebook: "https://facebook.com/",
  // },

  // Used by the /api/contact route to relay enquiries via Web3Forms.
  // Get a free key at https://web3forms.com using your business email.
  web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
};

export function whatsappLink(message) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
