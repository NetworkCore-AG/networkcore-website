import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

interface PrivacyConsentCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
  inverse?: boolean;
}

export default function PrivacyConsentCheckbox({
  checked,
  onCheckedChange,
  id = "privacy-consent",
  inverse = false,
}: PrivacyConsentCheckboxProps) {
  return (
    <div className="flex items-start gap-3">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(value) => onCheckedChange(value === true)}
        className={inverse ? "mt-0.5 border-background/50 data-[state=checked]:bg-background data-[state=checked]:text-foreground" : "mt-0.5 border-border data-[state=checked]:bg-foreground data-[state=checked]:text-background"}
      />
      <Label
        htmlFor={id}
        className={inverse ? "text-sm text-background/70 leading-relaxed cursor-pointer font-light" : "text-sm text-muted-foreground leading-relaxed cursor-pointer font-light"}
      >
        I agree to the{" "}
        <Link
          to="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className={inverse ? "underline hover:text-background transition-colors" : "underline hover:text-foreground transition-colors"}
        >
          Privacy Policy
        </Link>
        <span className="text-destructive"> *</span>
      </Label>
    </div>
  );
}
