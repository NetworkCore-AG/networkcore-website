import { useState, useEffect } from "react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PrivacyConsentCheckbox from "./PrivacyConsentCheckbox";
import { ChevronDown, Plus } from "lucide-react";
import { z } from "zod";

export type FieldType = "text" | "email" | "select" | "textarea" | "checkbox" | "hidden";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  section?: string;
  fixedValue?: string;
}

interface PartnerSignupFormProps {
  formLabel: string; // used in email subject and "type"
  requiredFields: FormField[];
  optionalFields: FormField[];
  submitLabel: string;
  helperText?: string;
  successMessage?: string;
  optionalToggleLabel?: string;
  sendingLabel?: string;
  initialValues?: Record<string, string>;
  collapseOptional?: boolean;
  heroMode?: boolean;
  collapseRequiredAfter?: number;
  collapsedRequiredLabel?: string;
}

const PartnerSignupForm = ({
  formLabel,
  requiredFields,
  optionalFields,
  submitLabel,
  helperText = "We'll reach out within 48 hours. No spam, no automated sequences.",
  successMessage = "Thanks — we'll be in touch within 48 hours.",
  optionalToggleLabel = "Tell us more (optional)",
  sendingLabel = "Sending...",
  initialValues,
  collapseOptional = true,
  heroMode = false,
  collapseRequiredAfter: collapseRequiredAfterProp,
  collapsedRequiredLabel = "Complete partner details",
}: PartnerSignupFormProps) => {

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [optionalOpen, setOptionalOpen] = useState(false);
  const [requiredOpen, setRequiredOpen] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [values, setValues] = useState<Record<string, string>>(initialValues ?? {});
  const thirdVisibleRequiredIndex = requiredFields.findIndex(
    (field, index) =>
      field.type !== "hidden" &&
      requiredFields.slice(0, index).filter((candidate) => candidate.type !== "hidden").length === 2
  );
  const collapseRequiredAfter = collapseRequiredAfterProp ?? (
    heroMode && thirdVisibleRequiredIndex >= 0 ? thirdVisibleRequiredIndex : undefined
  );
  // Only compact when there are fields left to tuck away; otherwise show everything, message included.
  const hasCompactDetails = collapseRequiredAfter !== undefined && requiredFields.length > collapseRequiredAfter;

  useEffect(() => {
    if (initialValues) {
      setValues((p) => ({ ...p, ...initialValues }));
    }
  }, [initialValues]);

  const setField = (name: string, value: string) =>
    setValues((p) => ({ ...p, [name]: value }));

  const findField = (name: string) =>
    [...requiredFields, ...optionalFields].find((f) => f.name === name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const allFields = [...requiredFields, ...optionalFields];

      // Validate privacy consent
      if (!privacyConsent) {
        toast({
          variant: "destructive",
          title: "Consent required",
          description: "Please agree to the Privacy Policy before submitting.",
        });
        setIsSubmitting(false);
        return;
      }

      // Validate required
      for (const f of requiredFields) {
        if (f.type === "hidden") continue;
        const v = (values[f.name] ?? "").trim();
        if (f.type === "checkbox") {
          if (values[f.name] !== "true") {
            toast({
              variant: "destructive",
              title: "Missing field",
              description: `${f.label} is required.`,
            });
            setIsSubmitting(false);
            return;
          }
          continue;
        }
        if (!v) {
          if (collapseRequiredAfter !== undefined && requiredFields.indexOf(f) >= collapseRequiredAfter) {
            setRequiredOpen(true);
          }
          toast({
            variant: "destructive",
            title: "Missing field",
            description: `${f.label} is required.`,
          });
          setIsSubmitting(false);
          return;
        }
        if (f.type === "email") {
          const ok = z.string().email().safeParse(v).success;
          if (!ok) {
            toast({
              variant: "destructive",
              title: "Invalid email",
              description: `Please enter a valid ${f.label.toLowerCase()}.`,
            });
            setIsSubmitting(false);
            return;
          }
        }
      }

      // Pull canonical name/email from required set
      const nameField = requiredFields.find((f) => f.name === "name") ||
        requiredFields.find((f) =>
          /name/i.test(f.name) || /name/i.test(f.label)
        );
      const emailField = requiredFields.find((f) => f.name === "email") ||
        requiredFields.find((f) => f.type === "email");
      const referredByNameField = allFields.find((f) => f.name === "referred_by_name");
      const referredByEmailField = allFields.find((f) => f.name === "referred_by_email");
      const audienceTypeField = allFields.find((f) => f.name === "audience_type");
      const messageField = allFields.find((f) => f.type === "textarea");
      const companyField = allFields.find((f) => f.name === "company");
      const phoneField = allFields.find((f) => f.name === "phone");
      const sourceField = allFields.find((f) => f.name === "source" && f.type === "hidden");

      const name = nameField ? (values[nameField.name] ?? "").trim() : "Partner";
      const email = emailField ? (values[emailField.name] ?? "").trim() : "";

      // Compose extra fields (everything else)
      const extraFields: Record<string, string> = {};
      for (const f of allFields) {
        if (f === nameField || f === emailField) continue;
        if (["referred_by_name", "referred_by_email", "audience_type", "company", "phone", "source"].includes(f.name)) continue;
        const v = (values[f.name] ?? "").trim();
        if (v) extraFields[f.label] = v;
      }

      const message =
        (messageField && values[messageField.name]?.trim()) ||
        `New ${formLabel} submission`;

      const body: Record<string, unknown> = {
        name,
        email,
        type: audienceTypeField ? values[audienceTypeField.name] : formLabel,
        message,
        extraFields,
        formLabel,
        consent: privacyConsent,
      };

      if (referredByNameField) body.referredByName = values[referredByNameField.name];
      if (referredByEmailField) body.referredByEmail = values[referredByEmailField.name];
      if (companyField) body.company = values[companyField.name];
      if (phoneField) body.phone = values[phoneField.name];
      if (sourceField) body.source = sourceField.fixedValue ?? "website";

      const { data, error } = await supabase.functions.invoke(
        "send-contact-form",
        {
          body,
        }
      );

      if (error) throw new Error(error.message || "Failed to send");
      if (!data?.success) throw new Error(data?.error || "Failed to send");

      toast({
        title: "Submitted",
        description: successMessage,
      });
      setValues({});
      setPrivacyConsent(false);
      setOptionalOpen(false);
      setRequiredOpen(false);
    } catch (err: unknown) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: err instanceof Error ? err.message : "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (f: FormField, dim = false, nativeRequired = true) => {
    const labelClass = `${heroMode ? "text-background" : "text-foreground"} ${dim ? (heroMode ? "text-background/60" : "text-muted-foreground") : ""}`;
    const inputClass = `${heroMode ? "bg-background/10 border-background/25 text-background placeholder:text-background/45 focus:border-background/70 focus-visible:ring-background/30" : "bg-background/50 border-border focus:border-primary"} font-sans ${
      dim ? (heroMode ? "bg-background/5" : "bg-background/30") : ""
    }`;

    if (f.type === "hidden") return null;

    return (
      <div key={f.name} className="space-y-2">
        {f.type === "checkbox" ? (
          <div className="flex items-start gap-3">
            <Checkbox
              id={f.name}
              checked={values[f.name] === "true"}
              onCheckedChange={(checked) =>
                setField(f.name, checked === true ? "true" : "false")
              }
              className="mt-1 border-border data-[state=checked]:bg-foreground data-[state=checked]:text-background"
            />
            <Label htmlFor={f.name} className={`${labelClass} text-sm leading-relaxed cursor-pointer`}>
              {f.label}
              {f.required && <span className="text-destructive"> *</span>}
            </Label>
          </div>
        ) : (
          <>
            {f.label && (
              <Label htmlFor={f.name} className={labelClass}>
                {f.label}
                {f.required && <span className="text-destructive"> *</span>}
              </Label>
            )}
            {f.type === "text" || f.type === "email" ? (
              <Input
                id={f.name}
                type={f.type}
                value={values[f.name] ?? ""}
                onChange={(e) => setField(f.name, e.target.value)}
                placeholder={f.placeholder}
                className={inputClass}
                 required={nativeRequired && f.required}
                autoComplete="off"
              />
            ) : f.type === "textarea" ? (
              <Textarea
                id={f.name}
                value={values[f.name] ?? ""}
                onChange={(e) => setField(f.name, e.target.value)}
                placeholder={f.placeholder}
                className={`${inputClass} min-h-[100px]`}
                maxLength={1000}
              />
            ) : f.type === "select" ? (
              <Select
                value={values[f.name] ?? ""}
                onValueChange={(v) => setField(f.name, v)}
              >
                <SelectTrigger className={inputClass}>
                  <SelectValue placeholder={f.placeholder ?? "Select..."} />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50 max-h-72">
                  {f.options?.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : null}
          </>
        )}
      </div>
    );
  };

  const renderFieldsWithSections = (fields: FormField[], dim = false, nativeRequired = true) => {
    const result: JSX.Element[] = [];
    let lastSection: string | undefined;
    fields.forEach((f, idx) => {
      if (f.section && f.section !== lastSection) {
        lastSection = f.section;
        result.push(
          <h3 key={`section-${f.section}-${idx}`} className={`text-sm font-medium tracking-wider pt-2 ${heroMode ? "text-background/80" : "text-foreground/80"}`}>
            {f.section}
          </h3>
        );
      }
      result.push(renderField(f, dim, nativeRequired));
    });
    return result;
  };

  return (
    <Card className={heroMode ? "w-full max-w-xl mr-auto bg-foreground/35 backdrop-blur-xl border-background/20 shadow-large text-background rounded-lg" : "max-w-xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 shadow-elegant"}>
      <CardContent className={heroMode ? "p-5 sm:p-6" : "pt-6"}>
        <form onSubmit={handleSubmit} className="space-y-5">
          {!hasCompactDetails ? (
            renderFieldsWithSections(requiredFields, false)
          ) : (
            <>
              {renderFieldsWithSections(requiredFields.slice(0, collapseRequiredAfter), false)}
              {requiredFields.length > collapseRequiredAfter && (
                <Collapsible open={requiredOpen} onOpenChange={setRequiredOpen}>
                  <CollapsibleTrigger asChild>
                    <button
                      type="button"
                      className={heroMode ? "group flex w-full items-center justify-between rounded-md border border-background/35 px-4 py-3 text-sm font-medium text-background/80 transition-colors hover:border-background/65 hover:text-background" : "group flex w-full items-center justify-between rounded-md border border-border/70 px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"}
                    >
                      <span>{collapsedRequiredLabel}</span>
                      <Plus
                        className={`h-4 w-4 transition-transform duration-300 ${requiredOpen ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-5 pt-5">
                    {renderFieldsWithSections(requiredFields.slice(collapseRequiredAfter), false, false)}
                    {optionalFields.length > 0 && renderFieldsWithSections(optionalFields, true, false)}
                  </CollapsibleContent>
                </Collapsible>
              )}
            </>
          )}

          {!hasCompactDetails && optionalFields.length > 0 && (
            collapseOptional ? (
              <Collapsible open={optionalOpen} onOpenChange={setOptionalOpen}>
                <CollapsibleTrigger asChild>
                  <button
                    type="button"
                    className={heroMode ? "flex w-full items-center justify-between rounded-md border border-dashed border-background/30 px-4 py-3 text-sm font-light text-background/65 hover:text-background hover:border-background/60 transition-colors" : "flex w-full items-center justify-between rounded-md border border-dashed border-border/60 px-4 py-3 text-sm font-light text-muted-foreground hover:text-foreground hover:border-border transition-colors"}
                  >
                    <span>{optionalToggleLabel}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        optionalOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-5 opacity-90">
                  {renderFieldsWithSections(optionalFields, true)}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <div className="space-y-5">
                {renderFieldsWithSections(optionalFields, false)}
              </div>
            )
          )}

          <PrivacyConsentCheckbox
            checked={privacyConsent}
            onCheckedChange={setPrivacyConsent}
            inverse={heroMode}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className={heroMode ? "w-full bg-background hover:bg-background/90 text-foreground disabled:opacity-50 font-semibold" : "w-full bg-foreground hover:bg-foreground/90 text-background disabled:opacity-50 font-semibold"}
            size="lg"
          >
            {isSubmitting ? sendingLabel : submitLabel}
          </Button>

          <p className={heroMode ? "text-xs text-background/55 text-center font-light" : "text-xs text-muted-foreground text-center font-light"}>
            {helperText}
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default PartnerSignupForm;
