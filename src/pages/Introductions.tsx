import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Gift, Users, Mail } from "lucide-react";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const META = {
  title: "Introductions | NetworkCore",
  description:
    "Know a charging operator who should be on the NetworkCore network? Make an introduction and put them at the front of the queue.",
  url: "https://networkcore.org/introductions",
  ogAlt: "Electric Range Rover charging — NetworkCore Introductions",
};

const BENEFITS_FOR_THEM = [
  { title: "Early-adopter pricing, locked for 36 months" },
  { title: "Priority integration and onboarding support" },
  { title: "Featured placement across every Distribution Partner in their market for the first six months" },
  { title: "A direct line to the founding team" },
];

const LIMITS = [
  { label: "charging networks", value: "40" },
  { label: "private hosts", value: "77" },
  { label: "fleet depots", value: "25" },
];

const BENEFITS_FOR_YOU = [
  {
    title: "The Quarterly Benchmark",
    description:
      "We send you the NetworkCore Quarterly Benchmark: utilisation, settlement, and demand data from across the network. Yours whether the introduction goes anywhere or not.",
  },
  {
    title: "We tell you what happened",
    description: "We also tell you what happened. Always.",
  },
  {
    title: "Network advisory group",
    description:
      "Make three introductions and we'll invite you into the network advisory group: early sight of market openings, direct access to the founding team, and a standing seat at the quarterly briefing.",
  },
];

export default function Introductions() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <link rel="canonical" href={META.url} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:url" content={META.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:image:alt" content={META.ogAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
      </Helmet>

      <Navigation transparent />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/campaigns/latam-first-wave.jpg"
          alt="Electric Range Rover charging — NetworkCore Introductions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="hero-lead-grid">
          <div className="hero-lead-copy">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight text-white tracking-tight">Know an operator who should be on the network?</h1>
            <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">If you know someone who owns chargers, an introduction from you puts them at the front of the queue.</p>
          </div>
          <div className="hero-lead-form">
            <h2 className="hero-lead-form-title">Make an introduction</h2>
            <PartnerSignupForm heroMode formLabel="Introduction" submitLabel="Send the introduction" sendingLabel="Sending..." helperText="Or just forward them this page instead." successMessage="Thanks — we'll be in touch within 48 hours." collapseOptional={false} requiredFields={[
              { name: "referred_by_name", label: "Your name", type: "text", required: true, placeholder: "Your name", section: "About You" },
              { name: "referred_by_email", label: "Your email", type: "email", required: true, placeholder: "you@example.com", section: "About You" },
              { name: "name", label: "Their name", type: "text", required: true, placeholder: "Their name", section: "Who We Should Speak To" },
              { name: "company", label: "Their company", type: "text", required: true, placeholder: "Their company", section: "Who We Should Speak To" },
              { name: "email", label: "Their email", type: "email", required: true, placeholder: "their.email@example.com", section: "Who We Should Speak To" },
              { name: "audience_type", label: "What do they operate?", type: "select", required: true, options: ["Public charging network", "Hotel, retail or venue", "Fleet depot", "Not sure"], section: "Who We Should Speak To" },
              { name: "source", label: "Source", type: "hidden", fixedValue: "introduce" },
            ]} optionalFields={[
              { name: "phone", label: "Their phone", type: "text", placeholder: "+1 234 567 890" },
              { name: "message", label: "", type: "textarea", placeholder: "Optional — how you know them, why they'd be a fit, anything that helps us prepare.", section: "Anything We Should Know?" },
            ]} />
          </div>
        </div>
      </section>

      {/* What your introduction is worth to them */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What Your Introduction Is Worth To Them
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Operators introduced this way join as founding partners in their market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {BENEFITS_FOR_THEM.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-card/50 border border-border/50 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-foreground/90 font-light leading-relaxed pt-2">
                  {b.title}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 rounded-2xl border border-border/50 bg-muted/30">
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Founding places are limited per market and per quarter. Markets open in waves. An introduction secures a place.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {LIMITS.map((l, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="text-2xl md:text-3xl font-light text-foreground mb-1">{l.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{l.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What it's worth to you */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What It's Worth To You
            </h2>
          </div>

          <div className="space-y-10">
            {BENEFITS_FOR_YOU.map((b, i) => {
              const icons = [Gift, Mail, Users];
              const Icon = icons[i] ?? Check;
              return (
                <div key={i} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-light text-foreground mb-3 tracking-tight">
                      {b.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
