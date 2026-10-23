import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { Linkedin, ArrowRight } from 'lucide-react';
import { getPublishedPosts } from '@/data/blogPosts';
import { chargingLinksProduct } from '@/data/chargingLinks';
import FooterGlobe from '@/components/FooterGlobe';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation('common');
  const { lang } = useParams();

  const navItems: { href: string; label: string; external?: boolean; highlight?: boolean; theme?: 'cp' | 'dp' }[] = [
    { href: '/charging-partners', label: 'Charging Partners', highlight: true, theme: 'cp' },
    { href: '/distribution-partners', label: t('navigation.distributionPartners', 'Distribution Partners'), highlight: true, theme: 'dp' },
    { href: '/the-network', label: t('navigation.theNetwork', 'The Network') },
    { href: 'https://docs.networkcore.org/', label: 'API Documentation', external: true },
    { href: '/blog', label: t('navigation.blog', 'Blog') },
    { href: 'https://hub.networkcore.org/partner/login', label: 'Sign In', external: true },
    { href: '/#contact', label: t('navigation.contactUs', 'Contact Us') },
  ];

  const productItems: { href: string | null; label: string; theme: 'cp' | 'dp' | 'pack' | 'direct' | 'both'; badge?: string }[] = [
    { href: '/products/network-access', label: 'Network Access', theme: 'cp' },
    { href: '/products/just-charge', label: 'Just Charge', theme: 'dp' },
    { ...chargingLinksProduct, theme: 'dp' },
    { href: '/products/charge-pack', label: 'Charge Pack', theme: 'both' },
  ];

  const aboutItems: { href: string; label: string; external?: boolean }[] = [
    { href: '/faqs', label: 'FAQs' },
    { href: '/about-us', label: t('navigation.about', 'About Us') },
    { href: '/work-with-us', label: 'Work With Us' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/security-compliance', label: 'Security & Compliance' },
    { href: '/esg-policy', label: 'ESG Policy' },
    { href: '/privacy', label: t('footer.privacyPolicy', 'Privacy Policy') },
  ];

  const topPosts = getPublishedPosts().slice(0, navItems.length);

  // Extract main keyword (before colon) from post titles
  const getShortTitle = (title: string) => {
    const colonIndex = title.indexOf(':');
    return colonIndex > 0 ? title.substring(0, colonIndex).trim() : title;
  };

  const makePath = (path: string) => lang ? `/${lang}${path}` : path;

  return (
    <footer id="footer" className="relative overflow-hidden bg-section-dark text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Four-column link layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-8 mb-8 border-b border-border">

          {/* Col 1: Ecosystem Access */}
          <div>
            <p className="text-sm font-bold text-foreground mb-3">Ecosystem Access</p>
            <ul className="space-y-2">
              {navItems.map((item) => {
                 const hoverBg = item.highlight ? `identity-${item.theme ?? 'cp'} identity-highlight` : 'hover:bg-muted/30';

                return (
                  <li
                    key={item.href}
                    className={`
                      flex items-center px-3 rounded-md transition-all duration-200
                      ${item.highlight
                        ? `h-8 text-foreground hover:translate-x-1 hover:shadow-soft ${hoverBg}`
                        : `h-7 ${hoverBg} hover:translate-x-0.5`}
                    `}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-foreground/70 transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href.startsWith('/#') ? makePath('/') + item.href.substring(1) : makePath(item.href)}
                        className="text-sm text-foreground hover:text-foreground/70 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 2: Products */}
          <div>
            <p className="text-sm font-bold text-foreground mb-3">Products</p>
            <ul className="space-y-2">
              {productItems.map((item) => {
                 const identityClass = `identity-${item.theme} identity-highlight`;

                const label = (
                  <span className="text-sm text-foreground transition-colors">
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 text-[10px] uppercase tracking-wider opacity-70">
                        {item.badge}
                      </span>
                    )}
                  </span>
                );
                return (
                  <li
                    key={item.label}
                    className={`min-h-8 flex items-center px-3 py-1 rounded-md transition-all duration-200 ${identityClass} ${
                      item.href ? 'hover:translate-x-1 hover:shadow-soft' : 'opacity-60'
                    }`}
                  >
                    {item.href ? (
                      <Link
                        to={makePath(item.href)}
                        className="text-sm text-foreground hover:text-foreground/70 transition-colors"
                      >
                        {item.label}
                        {item.badge && (
                          <span className="ml-2 text-[10px] uppercase tracking-wider opacity-70">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ) : (
                      label
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: About NetworkCore */}
          <div>
            <p className="text-sm font-bold text-foreground mb-3">About NetworkCore</p>
            <ul className="space-y-2">
              {aboutItems.map((item) => (
                <li key={item.href} className="h-7 flex items-center">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-foreground/70 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={makePath(item.href)}
                      className="text-sm text-foreground hover:text-foreground/70 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Top blog posts */}
          <div>
            <p className="text-sm font-bold text-foreground mb-3">Top 7 Articles</p>
            <ul className="space-y-2">
              {topPosts.map((post) => (
                <li key={post.slug} className="h-7 flex items-center">
                  <Link
                    to={makePath(`/blog/${post.slug}`)}
                    className="text-sm text-foreground hover:text-foreground/70 transition-colors truncate"
                  >
                    {getShortTitle(post.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Join + Social row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-5 mb-6 border-b border-border">
          <div className="relative isolate min-h-[152px] border-border py-4 sm:min-h-[184px] sm:px-2 lg:min-h-[208px] lg:col-span-3 lg:border-r lg:py-2 lg:pr-10">
            <div className="footer-globe-fade pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
              <FooterGlobe className="w-[380px] sm:w-[520px] lg:w-[680px]" />
            </div>
            <div className="relative grid h-full items-center gap-4 sm:grid-cols-2">
              <div>
                <p className="text-lg font-semibold text-foreground md:text-xl">Ready to join the network?</p>
                <p className="mt-1 text-sm text-foreground/70">Create your partner account in minutes.</p>
              </div>
              <div className="sm:flex sm:justify-end">
                <a
                  href="https://hub.networkcore.org/partner/ui/#signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 whitespace-nowrap"
                >
                  Sign me up
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <p className="text-sm font-bold text-foreground mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/networkcore-ag/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/70 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://x.com/NetworkCoreAG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/70 transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="space-y-4">
          <p className="text-xs font-bold text-foreground uppercase tracking-wider">Disclaimer</p>
          <p className="text-xs text-foreground/70 leading-relaxed">
            NetworkCore AG | Baarerstrasse 43, 6300 Zug, Switzerland.
          </p>
          <p className="text-xs text-foreground/70 leading-relaxed">
            NetworkCore operates across LATAM through licensed BaaS partner structures, with all client funds safeguarded at partner banks under the applicable regulated entity in each market. In Mexico, NetworkCore additionally operates through a wholly-owned subsidiary, and the Institución de Fondos de Pago Electrónico (IFPE) authorisation process before the Comisión Nacional Bancaria y de Valores (CNBV) is currently underway, with PCGA acting as legal counsel.
          </p>
          <p className="text-xs text-foreground/70 leading-relaxed">
            Information on this page is for general informational purposes only and does not constitute legal, regulatory, or financial advice. Regulatory permissions are subject to local laws and regulator decisions, and the regulatory perimeter may evolve as NetworkCore expands into new jurisdictions.
          </p>
          <p className="text-xs text-foreground/70 leading-relaxed">
            © 2026 NetworkCore AG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
