import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PrivacyConsentCheckbox from "@/components/forms/PrivacyConsentCheckbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { BlogCtaAudience } from "@/data/blogPosts";

interface BlogPostCtaProps {
  audience: BlogCtaAudience;
  slug: string;
}

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255);

const BlogPostCta = ({ audience, slug }: BlogPostCtaProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (audience === "charging") {
    return (
      <section className="border-t border-border bg-section-cool-light py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-foreground md:text-3xl">What are your idle hours worth?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
            Three numbers you already know, and you'll see what each connector earns you per year. No sign-up.
          </p>
          <Button asChild variant="link" className="mt-4 px-0 text-base text-foreground">
            <Link to="/charging-partners/calculator">Open the calculator <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    );
  }

  const isDistribution = audience === "distribution";
  const title = isDistribution ? "See what embedding charging actually involves" : "The NetworkCore Quarterly Benchmark";
  const description = isDistribution
    ? "A short technical and commercial brief: what you build, what we run, and what it costs. Sent by email, no call required."
    : "Utilisation, settlement and demand data from across the network.";
  const submitLabel = isDistribution ? "Send it to me" : "Put me on the list";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const validatedEmail = emailSchema.parse(email);
      if (!consent) throw new Error("consent");
      setIsSubmitting(true);
      const leadType = isDistribution
        ? `Distribution Partner — Blog: ${slug}`
        : `Benchmark Waitlist — Blog: ${slug}`;
      const { data, error } = await supabase.functions.invoke("send-contact-form", {
        body: {
          name: "Blog lead",
          email: validatedEmail,
          type: leadType,
          message: isDistribution ? "Requested the integration brief." : "Joined the NetworkCore Quarterly Benchmark waitlist.",
          consent: true,
          source: `blog:${slug}`,
          formLabel: isDistribution ? "Blog integration brief" : "Blog benchmark waitlist",
        },
      });
      if (error || !data?.success) throw new Error(error?.message || data?.error || "Submission failed");
      setEmail("");
      setConsent(false);
      toast({
        title: isDistribution ? "Request received" : "You're on the list",
        description: isDistribution ? "We'll send the brief by email." : "We'll let you know when the first benchmark is ready.",
      });
    } catch (error) {
      const description = error instanceof z.ZodError
        ? error.issues[0]?.message
        : error instanceof Error && error.message === "consent"
          ? "Please agree to the Privacy Policy"
          : "Please try again later.";
      toast({ variant: "destructive", title: "Unable to submit", description });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="border-t border-border bg-section-cool-light py-14 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
          <div>
            <h2 className="text-2xl font-light text-foreground md:text-3xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">{description}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                aria-label="Email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                maxLength={255}
                required
                className="h-11 bg-background"
              />
              <Button type="submit" disabled={isSubmitting} className="h-11 shrink-0">
                {isSubmitting ? "Sending…" : submitLabel}
              </Button>
            </div>
            <PrivacyConsentCheckbox
              id={`blog-consent-${slug}`}
              checked={consent}
              onCheckedChange={setConsent}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogPostCta;