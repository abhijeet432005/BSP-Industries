"use client";

import { useState } from "react";
import { MessageSquarePlus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "./EnquiryForm";

export function EnquiryDialog({ productName }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="accent" size="lg" className="w-full sm:w-auto">
          <MessageSquarePlus className="h-4 w-4" />
          Send enquiry
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogTitle>Send an enquiry</DialogTitle>
        <DialogDescription>
          Fill this in and our sales desk will get back to you with pricing and
          lead time.
        </DialogDescription>
        <div className="mt-5">
          <EnquiryForm
            productName={productName}
            compact
            onSuccess={() => setTimeout(() => setOpen(false), 1400)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
