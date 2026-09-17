import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/siteConfig";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Contact",
  description: `Send an enquiry to ${siteConfig.name} — get a quote by form, WhatsApp, phone, or email.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">Contact</p>
        <h1 className="mt-2 text-3xl font-medium text-ink sm:text-4xl">
          Send us an enquiry
        </h1>
        <p className="mt-3 text-[15px] text-muted">
          Fill in the form and our sales desk will reply with pricing and lead
          time — usually within one business day. Prefer to talk? Use WhatsApp
          or call directly.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Info column */}
        <div>
          <div className="space-y-6">
            <ContactRow icon={Phone} label="Phone">
              <a href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-accent-dark">
                {siteConfig.phoneDisplay}
              </a>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-dark">
                {siteConfig.email}
              </a>
            </ContactRow>
            <ContactRow icon={MessageCircle} label="WhatsApp">
              <a
                href={whatsappLink("Hi, I'd like to know more about your products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-dark"
              >
                Message us directly
              </a>
            </ContactRow>
            <ContactRow icon={MapPin} label="Address">
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}, {siteConfig.address.country}
              </span>
            </ContactRow>
          </div>

          <Separator className="my-8" />

          <div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted">
              <Clock className="h-3.5 w-3.5" />
              Business hours
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 text-ink">
                  <span className="text-muted">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form column */}
        <div className="border border-border bg-surface p-6 sm:p-8">
          <h2 className="font-display text-lg font-medium text-ink">Enquiry form</h2>
          <p className="mt-1 text-sm text-muted">
            Include quantity and delivery location for a faster quote.
          </p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-3.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-steel-soft">
        <Icon className="h-[18px] w-[18px] text-steel" strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wide text-muted">{label}</p>
        <p className="mt-0.5 text-sm text-ink">{children}</p>
      </div>
    </div>
  );
}
