import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { chargingLinksProduct } from "@/data/chargingLinks";
const networkCoreLogoBlack = "/images/networkcore-logo-black.png";
const networkCoreLogoWhite = "/images/networkcore-logo.png";



const LATAM_PATH = "/charge-point-operators/latam-first-wave";
const LATAM_LANGS = [
  { code: "en", label: "English", path: LATAM_PATH },
  { code: "es", label: "Español", path: "/es" + LATAM_PATH },
  { code: "pt", label: "Português", path: "/pt" + LATAM_PATH },
];

function LangSwitcher({
  transparent,
  isScrolled,
}: {
  transparent: boolean;
  isScrolled: boolean;
}) {
  const location = useLocation();
  const current =
    location.pathname === LATAM_PATH
      ? "en"
      : location.pathname.startsWith("/es") 
        ? "es"
        : location.pathname.startsWith("/pt") 
          ? "pt"
          : "en";

  const textClass =
    transparent && !isScrolled
      ? "text-background"
      : isScrolled
        ? "text-foreground"
        : "text-background";

  return (
    <div className="flex items-center gap-1 ml-3 border-l border-current/20 pl-3">
      {LATAM_LANGS.map((l) => {
        const active = l.code === current;
        return (
          <Link
            key={l.code}
            to={l.path}
            hrefLang={l.code}
            aria-label={l.label}
            aria-current={active ? "page" : undefined}
            className={`text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-full transition-colors ${textClass} ${
              active
                ? "bg-current/15"
                : "opacity-70 hover:opacity-100 hover:bg-current/10"
            }`}
            style={{ textDecoration: "none" }}
          >
            {l.code}
          </Link>
        );
      })}
    </div>
  );
}

const Navigation = ({ transparent = false }: { transparent?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname.match(/^\/[a-z]{2}$/);
  const isLatamPage = location.pathname.includes('/charge-point-operators/latam-first-wave');
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSub(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMenuOpen]);

  const cpSubItems = [
    { href: "/charge-point-operators", label: "Charge Point Operators", description: "Public charging networks adding a new demand channel.", image: "/images/nav/nav-cp-cpo-plug.png" },
    { href: "/private-hosts", label: "Private Hosts", description: "Hotels, retail, workplaces earning from idle bays.", image: "/images/nav/nav-cp-private.png" },
    { href: "/fleet-hosts", label: "Fleet Hosts", description: "Depot charging that earns during the working day while your fleet stays first in line.", image: "/images/nav/nav-cp-private.png" },
    { href: null, label: "Peer-to-Peer", description: "Your home or building charger, earning when you are not using it.", image: "/images/nav/nav-cp-p2p.png", badge: "Coming soon" },
  ];

  const dpSubItems = [
    { href: "/distribution-partners/ev-charging-for-oems", label: "Automotive Platforms / OEMs", description: "In-car charging and payment for OEM apps.", image: "/images/nav/nav-dp-oem.png" },
    { href: "/distribution-partners/public-ev-charging-for-fleets", label: "Mobility & Fleet Platforms", description: "Public charging for fleet and mobility platforms.", image: "/images/nav/nav-dp-fleet.png" },
    { href: "/distribution-partners/ev-charging-for-financial-platforms", label: "Financial Platforms", description: "Add EV charging to banks, wallets, and fintech.", image: "/images/nav/nav-dp-finance.png" },
    { href: "/distribution-partners/ev-charging-for-parking-and-road-platforms", label: "Parking & Road Platforms", description: "Charging for parking, road, and curb platforms.", image: "/images/nav/nav-dp-parking.png" },
    { href: "/distribution-partners/ev-charging-for-insurance-and-driver-services", label: "Insurance & Driver Services", description: "Bundle charging into insurance and driver services.", image: "/images/nav/nav-dp-insurance.png" },
    { href: "/distribution-partners/ev-charging-for-employee-benefits", label: "Corporate & Benefits Platforms", description: "Add charging to employee benefits and mobility programs.", image: "/images/nav/nav-dp-corporate.png" },
    { href: "/distribution-partners/ev-charging-for-travel-and-hospitality", label: "Travel, Hospitality & Destinations", description: "Guests charge while they stay, shop, or fly.", image: "/images/nav/nav-dp-travel.png" },
    { href: "/distribution-partners/ev-charging-for-public-sector-mobility", label: "Public Sector Mobility", description: "Neutral city-wide charging for every resident.", image: "/images/nav/nav-dp-public.png" },
  ];

  const productSubItems = [
    { href: "/products/network-access", label: "Network Access", description: "For charging networks, venues, and depots. You run the chargers. We bring the drivers and settle the money.", image: "/images/nav/nav-product-saleschannel.png", theme: "cp" },
    { href: "/products/just-charge", label: "Just Charge", description: "For platforms that already own the driver. Charging lives inside your product, under your brand, at the price you choose.", image: "/images/nav/nav-product-embedded-v2.png", theme: "dp" },
    { href: "/products/charge-pack", label: "Charge Pack", description: "Funded charging by you, by a charging operator, or by both together. Redeemable across the network, under your brand.", image: "/images/nav/nav-product-charge-pack.png", theme: "pack" },
    chargingLinksProduct,
  ];

  const navItems = [
    {
      href: "/charging-partners",
      label: "Charging Partners",
      isPage: true,
      subItems: cpSubItems,
      overline: "Charging Partners",
      blurb: "We bring paying drivers to chargers you have already built",
      columns: 4,
    },
    {

      href: "/distribution-partners",
      label: t('navigation.distributionPartners'),
      isPage: true,
      subItems: dpSubItems,
      overline: "Distribution Partners",
      blurb: "With one integration you access every charger in the network",
      columns: 4,
    },
    {
      href: "/products/network-access",
      label: "Products",
      isPage: true,
      subItems: productSubItems,
      overline: "Products",
      blurb: "Three ways into the network with one set of rails. Which products you use depends on what you own.",
      columns: 4,
    },
    { href: "/pricing", label: "Pricing", isPage: true },
  ];


  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  const handleNavigation = (href: string, isPage?: boolean) => {
    if (isPage) {
      window.location.href = href;
    } else if (isHomePage) {
      scrollToSection(href);
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      transparent && !isScrolled
        ? 'bg-transparent border-b border-transparent'
        : isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-soft'
          : 'bg-foreground border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue rounded-md"
              aria-label="NetworkCore AG home"
            >
              <img
                src={isScrolled ? networkCoreLogoBlack : networkCoreLogoWhite}
                alt="NetworkCore AG"
                className={`h-5 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.href} className="group static">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className={`font-medium transition-colors ${
                      transparent && !isScrolled
                        ? 'text-background hover:text-background/80 hover:bg-background/10'
                        : isScrolled
                          ? 'text-foreground hover:text-foreground/80 hover:bg-accent'
                          : 'text-background hover:text-background/80 hover:bg-background/10'
                    }`}
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </Button>
                  <div className="fixed inset-x-0 top-16 pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="bg-background border-y border-border shadow-2xl">
                      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
                        <div className="mb-8">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                            {item.overline}
                          </p>
                          <p className="text-xl font-light text-foreground leading-snug tracking-tight max-w-none">
                            {item.blurb}
                          </p>
                        </div>
                        <div
                          className={`grid gap-x-8 gap-y-2 ${
                            item.columns === 3
                              ? 'grid-cols-2 lg:grid-cols-3'
                              : 'grid-cols-2 lg:grid-cols-4'
                          }`}
                        >
                          {item.subItems.map((sub) => {
                            const content = (
                              <>
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-muted/50 border border-border/50 overflow-hidden flex items-center justify-center group-hover/item:border-foreground/30 transition-all duration-300">
                                  <img
                                    src={sub.image}
                                    alt=""
                                    loading="lazy"
                                    width={56}
                                    height={56}
                                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover/item:scale-110"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="flex items-center gap-2 font-medium text-foreground leading-snug">
                                    {sub.label}
                                    {'badge' in sub && sub.badge && (
                                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </span>
                                  <span className="block text-xs text-muted-foreground mt-1 leading-relaxed">
                                    {sub.description}
                                  </span>
                                </div>
                              </>
                            );
                             const productTheme = 'theme' in sub ? sub.theme : undefined;
                             const identityClass = productTheme ? `identity-${productTheme} identity-card` : 'border border-border/40 hover:bg-muted/60';
                             const cardContent = productTheme ? <><div className="flex items-start gap-4 p-5 flex-1">{content}</div><div className="identity-band flex items-center justify-between gap-2 px-5 py-3"><span className="text-[9px] uppercase font-medium whitespace-nowrap">{productTheme === 'cp' ? 'Charging Partners' : productTheme === 'pack' ? 'Charging & Distribution Partners' : 'Distribution Partners'}</span><span className="identity-marker h-1 w-10 rounded-full" aria-hidden /></div></> : content;

                            return sub.href ? (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                className={`${productTheme ? "flex flex-col" : "flex items-start gap-4 p-4"} rounded-lg overflow-hidden text-sm transition-all duration-300 group/item ${identityClass}`}
                              >
                                {cardContent}
                              </Link>
                            ) : (
                              <div
                                key={sub.label}
                                className={`${productTheme ? "flex flex-col" : "flex items-start gap-4 p-4"} rounded-lg overflow-hidden text-sm opacity-60 cursor-default group/item ${identityClass}`}
                              >
                                {cardContent}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              ) : (
                <Button
                  key={item.href}
                  asChild
                  variant="ghost"
                  size="sm"
                  className={`font-medium transition-colors ${
                    transparent && !isScrolled
                      ? 'text-background hover:text-background/80 hover:bg-background/10'
                      : isScrolled
                        ? 'text-foreground hover:text-foreground/80 hover:bg-accent'
                        : 'text-background hover:text-background/80 hover:bg-background/10'
                  }`}
                >
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              )
            ))}
            <Button
              asChild
              variant="ghost"
              size="compact"
              className={`border font-medium transition-colors ${
                transparent && !isScrolled
                  ? 'border-background text-background hover:bg-background hover:text-foreground'
                  : isScrolled 
                    ? 'border-foreground text-foreground hover:bg-foreground hover:text-background' 
                    : 'border-background text-background hover:bg-background hover:text-foreground'
              }`}
            >
              <a href="https://hub.networkcore.org/partner/ui/#signup" target="_blank" rel="noopener noreferrer">Get Started</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={`font-medium transition-colors ${
                transparent && !isScrolled
                  ? 'text-background hover:text-background/80 hover:bg-background/10'
                  : isScrolled 
                    ? 'text-foreground hover:text-foreground/80 hover:bg-accent' 
                    : 'text-background hover:text-background/80 hover:bg-background/10'
              }`}
            >
              <Link to="/#contact">Contact Us</Link>
            </Button>
            {isLatamPage && (
              <LangSwitcher transparent={transparent} isScrolled={isScrolled} />
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className={isScrolled ? '' : 'text-background hover:bg-background/10'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
            <div className="min-h-full space-y-4 border-t border-border bg-background px-5 py-8 pb-12">
              {navItems.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="flex-1 justify-start text-lg font-medium text-foreground hover:bg-accent"
                    >
                      <Link to={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
                    </Button>
                    {item.subItems && (
                      <button
                        type="button"
                        onClick={() => setOpenSub(openSub === item.href ? null : item.href)}
                        aria-expanded={openSub === item.href}
                        aria-label={`Toggle ${item.label} submenu`}
                        className="rounded-md p-3 text-foreground transition-colors hover:bg-accent"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${openSub === item.href ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  {item.subItems && openSub === item.href && (
                    <div className="mt-3 mb-4 space-y-2">
                      {item.subItems.map((sub) => {
                        const inner = (
                          <>
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-current/10 border border-current/10 overflow-hidden flex items-center justify-center">
                              <img
                                src={sub.image}
                                alt=""
                                loading="lazy"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover grayscale contrast-125"
                              />
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                              <span className="block text-sm font-medium">
                                {sub.label}
                                {'badge' in sub && sub.badge && (
                                  <span className="ml-2 text-[10px] uppercase tracking-wider opacity-70">{sub.badge}</span>
                                )}
                              </span>
                              <span className="block text-xs leading-snug mt-0.5 text-muted-foreground">{sub.description}</span>
                            </div>
                          </>
                        );
                         const productTheme = 'theme' in sub ? sub.theme : undefined;
                         const identityClass = productTheme ? `identity-${productTheme} identity-card` : 'border border-current/10 hover:bg-accent';
                         const cls = `w-full ${productTheme ? 'flex flex-col' : 'flex items-center gap-4 py-3 px-3'} rounded-lg overflow-hidden text-foreground/90 ${identityClass}`;
                         const cardContent = productTheme ? <><div className="flex items-center gap-4 p-4">{inner}</div><div className="identity-band flex items-center justify-between gap-2 px-4 py-2"><span className="text-[9px] uppercase font-medium whitespace-nowrap">{productTheme === 'cp' ? 'Charging Partners' : productTheme === 'pack' ? 'Charging & Distribution Partners' : 'Distribution Partners'}</span><span className="identity-marker h-1 w-10 rounded-full" aria-hidden /></div></> : inner;

                        return sub.href ? (
                          <Link key={sub.label} to={sub.href} onClick={() => setIsMenuOpen(false)} className={cls}>
                            {cardContent}
                          </Link>
                        ) : (
                          <div key={sub.label} className={`${cls} opacity-60`}>
                            {cardContent}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="space-y-4">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start border border-foreground text-lg font-medium text-foreground hover:bg-foreground hover:text-background"
                >
                  <a href="https://hub.networkcore.org/partner/ui/#signup" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Get Started</a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-lg font-medium text-foreground hover:bg-accent"
                >
                  <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
              {isLatamPage && (
                <div className="pt-6 mt-6 border-t border-current/10">
                  <div className="flex items-center gap-3">
                    {LATAM_LANGS.map((l) => {
                      const active =
                        (l.code === "en" && location.pathname === LATAM_PATH) ||
                        location.pathname.startsWith(`/${l.code}`);
                      return (
                        <Link
                          key={l.code}
                          to={l.path}
                          hrefLang={l.code}
                          aria-label={l.label}
                          aria-current={active ? "page" : undefined}
                          className={`text-sm font-medium uppercase tracking-wider px-4 py-2 rounded-full transition-colors ${
                            isScrolled
                              ? active
                                ? "bg-foreground text-background"
                                : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                              : active
                                ? "bg-background text-foreground"
                                : "text-background/70 hover:text-background hover:bg-background/10"
                          }`}
                          style={{ textDecoration: "none" }}
                        >
                          {l.code}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;