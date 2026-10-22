import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacy');

  const sections = [
    'introduction',
    'dataController',
    'contactForm',
    'dataUse',
    'dataSharing',
    'thirdPartyLinks',
    'dataSecurity',
    'yourRights',
    'cookies',
    'changes',
    'contact'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | NetworkCore AG</title>
        <meta name="description" content="NetworkCore AG Privacy Policy. Learn how we handle your personal data, GDPR compliance, cookies, and your rights when using our EV charging platform services." />
        <meta property="og:title" content="Privacy Policy | NetworkCore AG" />
        <meta property="og:description" content="NetworkCore AG Privacy Policy. Learn how we handle your personal data, GDPR compliance, cookies, and your rights when using our EV charging platform services." />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:url" content="https://networkcore.org/privacy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | NetworkCore AG" />
        <meta name="twitter:description" content="How we handle personal data, GDPR compliance, cookies, and your rights." />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/privacy" />
      </Helmet>

      <Navigation lightHero />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              {t('title')}
            </h1>
            <p className="text-sm text-muted-foreground">
              <strong>{t('lastUpdated')}</strong> January 15, 2026
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-muted/30 rounded-xl border border-border/50">
            <h2 className="text-lg font-medium text-foreground mb-4">Table of Contents</h2>
            <nav className="grid sm:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#section-${section}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(`sections.${section}.title`)}
                </a>
              ))}
            </nav>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section} id={`section-${section}`} className="scroll-mt-24">
                <h2 className="text-xl font-medium text-foreground mb-4">
                  {t(`sections.${section}.title`)}
                </h2>
                
                {/* Main content */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t(`sections.${section}.content`)}
                </p>

                {/* Contact section additional info */}
                {section === 'contact' && (
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                    <p className="text-foreground font-medium">{t('sections.contact.email')}</p>
                    <p className="text-muted-foreground">{t('sections.contact.address')}</p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              This Privacy Policy is governed by Swiss law and complies with the General Data Protection Regulation (GDPR). For inquiries: compliance [at] networkcore [dot] org
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;