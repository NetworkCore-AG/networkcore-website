import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import PrivacyConsentCheckbox from "./forms/PrivacyConsentCheckbox";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  type: z.string()
    .min(1, { message: "Please select an option" }),
  message: z.string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
  privacyConsent: z.boolean()
    .refine((val) => val === true, { message: "Please agree to the Privacy Policy" }),
});

type FormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  heroMode?: boolean;
  compact?: boolean;
  fallbackMessage?: string;
}

const ContactForm = ({ heroMode = false, compact = false, fallbackMessage = "Pricing enquiry" }: ContactFormProps) => {
  const { t } = useTranslation(['contact', 'common']);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageExpanded, setMessageExpanded] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    type: compact ? "Other" : "Distribution Partner",
    message: "",
    privacyConsent: false,
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePrivacyConsentChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacyConsent: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse({
        ...formData,
        message: compact && !formData.message.trim() ? fallbackMessage : formData.message,
      });

      // Send via edge function (API key is server-side)
      const { data, error } = await supabase.functions.invoke('send-contact-form', {
        body: {
          name: validatedData.name,
          email: validatedData.email,
          type: validatedData.type,
          message: validatedData.message,
          consent: validatedData.privacyConsent,
        },
      });

      if (error) {
        throw new Error(error.message || 'Failed to send message');
      }

      if (data?.success) {
        toast({
          title: t('contact:form.success', 'Message sent!'),
          description: t('contact:form.successDescription', 'Thank you for contacting us. We will get back to you soon.'),
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          type: compact ? "Other" : "Distribution Partner",
          message: "",
          privacyConsent: false,
        });
      } else {
        throw new Error(data?.error || 'Failed to send message');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.issues[0];
        toast({
          variant: "destructive",
          title: t('contact:form.error', 'Validation Error'),
          description: firstError.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: t('contact:form.error', 'Error'),
          description: t('contact:form.errorDescription', 'Failed to send message. Please email us directly at victor.p@networkcore.org'),
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={heroMode ? `w-full mr-auto bg-foreground/35 backdrop-blur-xl border-background/20 shadow-large text-background rounded-lg ${compact ? "max-w-md" : "max-w-xl"}` : "max-w-xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 shadow-elegant"}>
      <CardContent className={heroMode ? compact ? "p-4 sm:p-5" : "p-5 sm:p-6" : "pt-6"}>
        <form onSubmit={handleSubmit} className={heroMode ? compact ? "space-y-3" : "space-y-4" : "space-y-6"}>
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className={heroMode ? "text-background" : "text-foreground"}>
              {t('contact:form.name', 'Name')} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder={t('contact:form.namePlaceholder', 'Your name')}
              className={heroMode ? "bg-background/10 border-background/25 text-background placeholder:text-background/45 focus:border-background/70 focus-visible:ring-background/30 font-sans" : "bg-background/50 border-border focus:border-primary font-sans"}
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className={heroMode ? "text-background" : "text-foreground"}>
              {t('contact:form.email', 'Email')} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder={t('contact:form.emailPlaceholder', 'your.email@example.com')}
              className={heroMode ? "bg-background/10 border-background/25 text-background placeholder:text-background/45 focus:border-background/70 focus-visible:ring-background/30 font-sans" : "bg-background/50 border-border focus:border-primary font-sans"}
              required
            />
          </div>

          {/* Type Select */}
          {!compact && <div className="space-y-2">
            <Label htmlFor="type" className={heroMode ? "text-background" : "text-foreground"}>
              {t('contact:form.iAm', 'I am')} <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.type}
              onValueChange={(value) => handleInputChange("type", value)}
            >
              <SelectTrigger className={heroMode ? "bg-background/10 border-background/25 text-background focus:ring-background/30 font-sans" : "bg-background/50 border-border font-sans"}>
                <SelectValue placeholder={t('contact:form.selectType', 'Select type')} />
              </SelectTrigger>
              <SelectContent className="bg-background border-border z-50">
                <SelectItem value="Distribution Partner">{t('contact:form.distributionPartner', 'Distribution Partner')}</SelectItem>
                <SelectItem value="Charging Partner">{t('contact:form.chargingPartner', 'Charging Partner')}</SelectItem>
                <SelectItem value="Other">{t('contact:form.other', 'Other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>}

          {/* Message Field */}
          {compact && <Button type="button" variant="ghost" aria-expanded={messageExpanded} aria-controls="message-field" onClick={() => setMessageExpanded((expanded) => !expanded)} className={heroMode ? "h-8 w-full justify-start px-0 text-background hover:bg-background/10 hover:text-background" : "h-8 w-full justify-start px-0 text-foreground"}>
            {messageExpanded ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
            {t('contact:form.message', 'Message')} (optional)
          </Button>}
          <div id={compact ? "message-field" : undefined} hidden={compact && !messageExpanded} className="space-y-2">
            <Label htmlFor="message" className={heroMode ? "text-background" : "text-foreground"}>
              {t('contact:form.message', 'Message')}{!compact && <span className="text-destructive"> *</span>}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder={t('contact:form.messagePlaceholder', 'Tell us about your needs...')}
              className={heroMode ? `bg-background/10 border-background/25 text-background placeholder:text-background/45 focus:border-background/70 focus-visible:ring-background/30 font-sans ${compact ? "min-h-[68px]" : "min-h-[88px]"}` : "bg-background/50 border-border focus:border-primary min-h-[120px] font-sans"}
              required={!compact}
            />
          </div>

          {/* Privacy consent */}
          <PrivacyConsentCheckbox
            checked={formData.privacyConsent}
            onCheckedChange={handlePrivacyConsentChange}
            inverse={heroMode}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={heroMode ? "w-full bg-background hover:bg-background/90 text-foreground disabled:opacity-50 disabled:cursor-not-allowed font-semibold" : "w-full bg-foreground hover:bg-foreground/90 text-background disabled:opacity-50 disabled:cursor-not-allowed font-semibold"}
            size="lg"
          >
            {isSubmitting
              ? t('contact:form.sending', 'Sending...')
              : t('contact:form.send', 'Send Message')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
