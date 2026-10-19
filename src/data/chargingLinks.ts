import { z } from "zod";

export const chargingLinksProduct = {
  href: "/products/charging-links",
  label: "Charging Links",
  description: "Charging in a link. No app to build, no integration, no account for the driver. Send a link, and your drivers charge.",
  image: "/images/nav/nav-product-vira-direct.png",
  theme: "direct" as const,
  audience: "Distribution Partner",
  pricing: "public" as const,
};

export const chargingLinksEnquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  consent: z.literal(true, { error: "Please agree to the Privacy Policy." }),
});

export function chargingLinksEnquiry(values: { name: string; email: string; consent: boolean }) {
  return {
    ...chargingLinksEnquirySchema.parse(values),
    type: chargingLinksProduct.audience,
    message: "Charging Links — Payment Links brochure and scoping call enquiry",
    source: "charging-links-brochure",
    formLabel: "Charging Links brochure",
  };
}