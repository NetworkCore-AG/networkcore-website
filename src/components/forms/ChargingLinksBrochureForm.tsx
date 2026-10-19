import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PrivacyConsentCheckbox from "./PrivacyConsentCheckbox";
import { chargingLinksEnquiry } from "@/data/chargingLinks";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function ChargingLinksBrochureForm() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!consent) {
      toast({ variant: "destructive", title: "Consent required", description: "Please agree to the Privacy Policy." });
      return;
    }
    setIsSubmitting(true);
    try {
      const body = chargingLinksEnquiry({ name, email, consent });
      const { data, error } = await supabase.functions.invoke("send-contact-form", { body });
      if (error || !data?.success) throw new Error("Submission failed");
      toast({ title: "Request sent", description: "Thank you. We will be in touch about Charging Links." });
      setName("");
      setEmail("");
      setConsent(false);
    } catch {
      toast({ variant: "destructive", title: "Request not sent", description: "Please check your details and try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6 text-left shadow-soft sm:p-8">
      <div className="space-y-2">
        <Label htmlFor="cl-name">Name <span className="text-destructive">*</span></Label>
        <Input id="cl-name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" maxLength={100} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cl-email">Business email <span className="text-destructive">*</span></Label>
        <Input id="cl-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" maxLength={255} required />
      </div>
      <PrivacyConsentCheckbox checked={consent} onCheckedChange={setConsent} id="cl-consent" />
      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">{isSubmitting ? "Sending..." : "Send"}</Button>
    </form>
  );
}