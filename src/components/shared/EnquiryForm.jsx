"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const initialState = {
  name: "",
  email: "",
  phone: "",
  quantity: "",
  message: "",
};

export function EnquiryForm({ productName, onSuccess, compact = false }) {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Honeypot
      const honeypot = e.target.company_website?.value || "";

      if (honeypot) {
        setStatus("success");
        return;
      }

      const formData = new FormData();

      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      );

      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("quantity", values.quantity || "Not specified");
      formData.append("product", productName || "General enquiry");
      formData.append("message", values.message);

      formData.append(
        "subject",
        `New enquiry — ${productName || "General enquiry"} — BPS Industries`,
      );

      formData.append("from_name", "BPS Industries");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");

      toast.success("Enquiry sent — our sales desk will reply shortly.");

      setValues(initialState);

      onSuccess?.();
    } catch (err) {
      console.error("[contact]", err);

      setStatus("error");

      toast.error(
        "Couldn't send that enquiry. Please try WhatsApp or email instead.",
      );
    }
  }

  if (status === "success" && compact) {
    return (
      <div className="rounded-[3px] border border-border bg-steel-soft/60 p-5 text-sm text-ink">
        Thanks — your enquiry about <strong>{productName}</strong> has been
        sent. We typically reply within one business day.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {productName && (
        <div className="border border-border-strong bg-steel-soft/50 px-3.5 py-2.5 text-sm text-steel">
          Enquiring about: <span className="font-medium">{productName}</span>
        </div>
      )}

      {/* Honeypot field — hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <Label htmlFor="quantity">Quantity needed</Label>
          <Input
            id="quantity"
            name="quantity"
            value={values.quantity}
            onChange={handleChange}
            placeholder="e.g. 5 units"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          value={values.message}
          onChange={handleChange}
          placeholder={
            productName
              ? `Tell us about your requirement for ${productName} — delivery location, timeline, etc.`
              : "Tell us what you're looking for."
          }
        />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}
