import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PrivacyConsentCheckbox from "./forms/PrivacyConsentCheckbox";

export default function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [status, setStatus] = useState<null | "saving" | "saved" | "error">(null);
  const [errorMsg, setErrorMsg] = useState("");

  const isValid =
    name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) && privacyConsent;

  async function handleSubmit() {
    if (!isValid || status === "saving") return;
    setStatus("saving");
    setErrorMsg("");

    const { error } = await supabase.functions.invoke("newsletter-signup", {
      body: { name: name.trim(), email: email.trim(), consent: privacyConsent },
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message || "Something went wrong");
      return;
    }

    setStatus("saved");
    setName("");
    setEmail("");
    setPrivacyConsent(false);
  }

  return (
    <div className="space-y-2">
      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-9 text-sm"
        aria-label="Name"
      />
      <Input
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="h-9 text-sm"
        aria-label="Email"
      />
      <PrivacyConsentCheckbox
        checked={privacyConsent}
        onCheckedChange={setPrivacyConsent}
      />

      <Button
        onClick={handleSubmit}
        disabled={status === "saving"}
        size="sm"
        className="w-full bg-black hover:bg-black/90 text-white disabled:opacity-100 disabled:bg-black disabled:text-white"
      >
        {status === "saving" ? "Subscribing…" : "Subscribe"}
      </Button>
      {status === "saved" && (
        <p className="text-xs text-muted-foreground">Thanks — you're subscribed.</p>
      )}
      {status === "error" && (
        <p className="text-xs text-destructive">{errorMsg}</p>
      )}
    </div>
  );
}
