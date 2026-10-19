import { Link2, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  slug: string;
  title: string;
}

const ShareButtons = ({ slug }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const directUrl = `https://networkcore.org/blog/${slug}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(directUrl);
    setCopied(true);
    toast({ title: "Link copied!", description: "Share URL copied to clipboard." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-1">Share:</span>
      <Button variant="outline" size="icon" className="h-9 w-9" onClick={handleCopy} aria-label="Copy link">
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default ShareButtons;
