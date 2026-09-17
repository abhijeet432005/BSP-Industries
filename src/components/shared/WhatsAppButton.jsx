"use client";

import { whatsappLink } from "@/data/siteConfig";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.11.56 4.09 1.53 5.8L3 29l8.4-2.44a12.9 12.9 0 0 0 4.62.86h.01c6.62 0 12.02-5.37 12.02-11.98A11.9 11.9 0 0 0 16.02 3Zm0 21.83h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-3.73 1.08 1.1-3.66-.24-.38a9.93 9.93 0 0 1-1.55-5.27c0-5.5 4.48-9.98 10-9.98a9.9 9.9 0 0 1 7.06 2.93 9.86 9.86 0 0 1 2.92 7.03c0 5.5-4.5 9.87-10.08 9.87Zm5.48-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function WhatsAppButton({ message }) {
  const defaultMessage =
    message || "Hi, I'd like to know more about your products.";

  return (
    <a
      href={whatsappLink(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
