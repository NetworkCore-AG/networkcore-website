import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const DPHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
      <div className="hero-lead-grid">
        <div className="hero-lead-copy">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight text-white tracking-tight">
            One integration. Every charger. Zero cost. Zero ops.
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl font-light mb-4">
            Embed charging directly into your product, give users access to thousands of chargers, and earn on every session — all without building or operating infrastructure.
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl font-light">
            Your users are already charging. This brings that activity inside your platform.
          </p>
        </div>
        <div id="signup-form" className="hero-lead-form scroll-mt-24">
          <h2 className="hero-lead-form-title">Become a Distribution Partner</h2>
          <PartnerSignupForm
            heroMode
            formLabel="Distribution Partner Signup"
            submitLabel="Become a Partner"
            helperText="We'll reach out within 48 hours. No spam, no automated sequences."
            requiredFields={[
              { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
              { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
              { name: "platformType", label: "Platform type", type: "select", required: true, placeholder: "Select platform type", options: ["Automotive (OEM, leasing, dealerships, marketplaces)", "Mobility & Fleet", "Financial (wallets, neobanks, cards, loyalty)", "Parking & Tolling", "Travel, Hospitality & Destinations", "Insurance & Driver Services", "Corporate & Benefits", "Public Sector Mobility", "Other"] },
              { name: "monthlyActiveUsers", label: "Monthly active users", type: "select", required: true, placeholder: "Select range", options: ["Under 50,000", "50,000 to 500,000", "500,000 to 2M", "2M to 10M", "10M+"] },
            ]}
            optionalFields={[{ name: "tellUsMore", label: "Tell us more", type: "textarea", placeholder: "Anything else we should know?" }]}
          />
        </div>
      </div>
    </section>
  );
};

export default DPHeroSection;
