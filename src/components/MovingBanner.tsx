import MonochromeLogo from "./MonochromeLogo";

interface PartnerLogo {
  name: string;
  logo: string;
  height?: string;
  renderAsIs?: boolean;
}

interface MovingBannerProps {
  partners: PartnerLogo[];
  mode?: 'makeWhite' | 'asIs' | 'maskWhite' | 'maskBlack';
}

const MovingBanner = ({ partners, mode = 'makeWhite' }: MovingBannerProps) => {
  const getFilterClass = (name: string) => {
    if (mode === 'asIs') return "";
    return name.toLowerCase() === "ford"
      ? "filter saturate-0 brightness-0"
      : "filter saturate-0 brightness-0 invert";
  };

  const getBaseImgClass = (partner: PartnerLogo) =>
    `${partner.height || 'h-8'} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow`;

  const getMaskedClass = (partner: PartnerLogo) =>
    `${partner.height || 'h-8'} w-full opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow`;

  const renderLogo = (partner: PartnerLogo) => {
    const name = partner.name.toLowerCase();
    const imgClass = getBaseImgClass(partner);
    const maskClass = getMaskedClass(partner);
    if (mode === 'asIs' || partner.renderAsIs) {
      return (
        <img src={partner.logo} alt={partner.name} className={imgClass} />
      );
    }
    if (mode === 'maskWhite') {
      return (
        <MonochromeLogo src={partner.logo} alt={partner.name} tone="white" className={maskClass} />
      );
    }
    if (mode === 'maskBlack') {
      if (name === 'ford') {
        return (
          <img src={partner.logo} alt={partner.name} className={`${imgClass} filter saturate-0 brightness-0`} />
        );
      }
      return (
        <MonochromeLogo src={partner.logo} alt={partner.name} tone="black" className={maskClass} />
      );
    }
    // default: makeWhite via CSS filters
    return (
      <img src={partner.logo} alt={partner.name} className={`${imgClass} ${getFilterClass(partner.name)}`} />
    );
  };

  return (
    <div className="overflow-hidden bg-section-neutral/20 py-8">
      <div className="relative">
        <div className="flex animate-scroll space-x-12">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
            >
              {renderLogo(partner)}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
            >
              {renderLogo(partner)}
            </div>
          ))}
          {/* Third set for better seamless effect */}
          {partners.map((partner, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
            >
              {renderLogo(partner)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingBanner;