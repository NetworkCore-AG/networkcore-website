import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const DPSignupFormSection = () => {
  return (
    <section id="signup-form" className="py-20 bg-muted/30 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
            Become a Distribution Partner
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            A few quick details and we'll be in touch.
          </p>
        </div>
        <PartnerSignupForm
          formLabel="Distribution Partner Signup"
          submitLabel="Become a Partner"
          helperText="We'll reach out within 48 hours. No spam, no automated sequences."
          requiredFields={[
            { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
            { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
            {
              name: "platformType",
              label: "Platform type",
              type: "select",
              required: true,
              placeholder: "Select platform type",
              options: [
                "Automotive (OEM, leasing, dealerships, marketplaces)",
                "Mobility & Fleet",
                "Financial (wallets, neobanks, cards, loyalty)",
                "Parking & Tolling",
                "Travel, Hospitality & Destinations",
                "Insurance & Driver Services",
                "Corporate & Benefits",
                "Public Sector Mobility",
                "Other",
              ],
            },
            {
              name: "monthlyActiveUsers",
              label: "Monthly active users",
              type: "select",
              required: true,
              placeholder: "Select range",
              options: [
                "Under 50,000",
                "50,000 to 500,000",
                "500,000 to 2M",
                "2M to 10M",
                "10M+",
              ],
            },
          ]}
          optionalFields={[
            {
              name: "tellUsMore",
              label: "Tell us more",
              type: "textarea",
              placeholder: "Anything else we should know?",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default DPSignupFormSection;
