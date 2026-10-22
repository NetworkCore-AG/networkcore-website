import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { z } from 'zod';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import PrivacyConsentCheckbox from '@/components/forms/PrivacyConsentCheckbox';

const AREA_OPTIONS: { label: string; value: string }[] = [
  { label: 'Engineering', value: 'engineering' },
  { label: 'Product', value: 'product' },
  { label: 'Commercial / Partnerships', value: 'commercial' },
  { label: 'Operations', value: 'operations' },
  { label: 'Compliance, Legal, Regulatory', value: 'compliance' },
  { label: 'Marketing & Content', value: 'marketing' },
  { label: 'Finance', value: 'finance' },
  { label: 'Other', value: 'other' },
];

const schema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name'),
  email: z.string().trim().email('Please enter a valid email address'),
  location: z.string().trim().min(1, 'Please enter your country and time zone'),
  area: z.string().min(1, 'Please choose an area of interest'),
  linkedin: z
    .string()
    .trim()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  about: z
    .string()
    .trim()
    .min(100, 'Please write at least 100 characters'),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: 'Please agree to the Privacy Policy',
  }),
});

const WorkWithUs = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [about, setAbout] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const reset = () => {
    setFullName('');
    setEmail('');
    setLocation('');
    setArea('');
    setLinkedin('');
    setAbout('');
    setCv(null);
    setPrivacyConsent(false);
    setErrors({});
    const fileInput = document.getElementById('cv') as HTMLInputElement | null;
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Field validation
    const parsed = schema.safeParse({ fullName, email, location, area, linkedin, about, privacyConsent });
    const fieldErrors: Record<string, string> = {};
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
    }

    // CV validation
    if (!cv) {
      fieldErrors.cv = 'Please attach your CV';
    } else {
      const okType = /\.(pdf|docx)$/i.test(cv.name);
      if (!okType) fieldErrors.cv = 'Only .pdf or .docx files are accepted';
      else if (cv.size > 10 * 1024 * 1024) fieldErrors.cv = 'File must be 10 MB or smaller';
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('fullName', fullName.trim());
      fd.append('email', email.trim().toLowerCase());
      fd.append('location', location.trim());
      fd.append('area', area);
      fd.append('linkedin', linkedin.trim());
      fd.append('about', about.trim());
      fd.append('consent', privacyConsent ? 'true' : 'false');
      fd.append('cv', cv!);

      const { data, error } = await supabase.functions.invoke('submit-application', {
        body: fd,
      });

      if (error || (data && (data as { error?: string }).error)) {
        const code = (data as { error?: string } | null)?.error;
        if (code === 'rate_limit') {
          toast({
            variant: 'destructive',
            title: 'Too many submissions',
            description: 'Too many submissions from this IP. Please try again later.',
          });
          return;
        }
        if (code === 'validation') {
          const fieldErrs = (data as { errors?: Record<string, string> }).errors ?? {};
          setErrors(fieldErrs);
          return;
        }
        console.error('Application submission failed', error ?? data);
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description:
            'Something went wrong saving your application. Please refresh and try again, or email hello@networkcore.org.',
        });
        return;
      }

      toast({
        title: 'Application received',
        description:
          "Thank you. We've received your application and will respond within two weeks.",
      });
      reset();
    } catch (err) {
      console.error('Application submission error', err);
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description:
          'Something went wrong saving your application. Please refresh and try again, or email hello@networkcore.org.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Work With Us | NetworkCore</title>
        <meta
          name="description"
          content="Join NetworkCore. We hire for seniority of thinking, not title. Remote-first across Europe and LATAM."
        />
        <meta property="og:title" content="Work With Us | NetworkCore" />
        <meta
          property="og:description"
          content="Together, we build the future. Apply to join NetworkCore."
        />
        <meta property="og:url" content="https://networkcore.org/work-with-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:title" content="Work With Us | NetworkCore" />
        <meta
          name="twitter:description"
          content="Together, we build the future. Apply to join NetworkCore."
        />
        <link rel="canonical" href="https://networkcore.org/work-with-us" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://networkcore.org/' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Work With Us',
                item: 'https://networkcore.org/work-with-us',
              },
            ],
          })}
        </script>
      </Helmet>

      <Navigation lightHero />

      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-16 bg-section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              Work With Us
            </h1>
            <p className="text-xl md:text-2xl text-primary font-light">
              Together, We Build the Future
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="text-2xl font-light text-foreground mb-6">The Opportunity</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We hire for seniority of thinking rather than seniority of title. A thoughtful engineer two years out of university outranks a fifteen-year incumbent who is coasting. We want people who can hold full ownership of a domain and make real decisions, not people who want to be managed.
              </p>
            </div>

            <div className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground mb-6">How We Work</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We operate across Europe and LATAM, remote by design, but meet in person when something is faster in a room. We speak directly because it saves everyone time, and treat each other with respect at every level. We expect kindness in how we speak, and rigour in what we say. We do not measure people by hours.
              </p>
            </div>

            <div className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground mb-2">Apply</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Tell us a bit about you. We read every application.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">
                    Country and time zone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Madrid, CET"
                    required
                  />
                  {errors.location && (
                    <p className="text-sm text-destructive">{errors.location}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">
                    Area of interest <span className="text-destructive">*</span>
                  </Label>
                  <Select value={area} onValueChange={setArea}>
                    <SelectTrigger id="area">
                      <SelectValue placeholder="Select an area" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      {AREA_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.area && <p className="text-sm text-destructive">{errors.area}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cv">
                    CV <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="cv"
                    type="file"
                    accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => setCv(e.target.files?.[0] ?? null)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">PDF or DOCX, max 10 MB.</p>
                  {errors.cv && <p className="text-sm text-destructive">{errors.cv}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://www.linkedin.com/in/..."
                  />
                  {errors.linkedin && (
                    <p className="text-sm text-destructive">{errors.linkedin}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about">
                    Why NetworkCore? <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="What draws you to what we're building? 200-500 words is plenty."
                    className="min-h-[160px]"
                    required
                  />
                  {errors.about && <p className="text-sm text-destructive">{errors.about}</p>}
                </div>

                <PrivacyConsentCheckbox
                  checked={privacyConsent}
                  onCheckedChange={setPrivacyConsent}
                />
                {errors.privacyConsent && (
                  <p className="text-sm text-destructive">{errors.privacyConsent}</p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-foreground text-background hover:bg-foreground/90"
                  size="lg"
                >
                  {submitting ? 'Sending...' : 'Send application'}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WorkWithUs;
