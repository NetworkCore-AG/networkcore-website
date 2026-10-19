import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToHash from "@/components/ScrollToHash";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HowItWorks from "./pages/HowItWorks";
import DistributionPartners from "./pages/DistributionPartners";
import ChargePointOperators from "./pages/ChargePointOperators";
import ChargingPartners from "./pages/ChargingPartners";
import ChargingPartnersCalculator from "./pages/ChargingPartnersCalculator";
import LatamFirstWave from "./pages/LatamFirstWave";
import PrivateHosts from "./pages/PrivateHosts";
import FleetHosts from "./pages/FleetHosts";
import Benefits from "./pages/Benefits";
import Platform from "./pages/Platform";
import AboutUs from "./pages/AboutUs";
import EvChargingForOems from "./pages/EvChargingForOems";
import EvChargingForParkingAndRoadPlatforms from "./pages/EvChargingForParkingAndRoadPlatforms";
import PublicEvChargingForFleets from "./pages/PublicEvChargingForFleets";
import EvChargingForFinancialPlatforms from "./pages/EvChargingForFinancialPlatforms";
import EvChargingForInsuranceAndDriverServices from "./pages/EvChargingForInsuranceAndDriverServices";
import EvChargingForPublicSectorMobility from "./pages/EvChargingForPublicSectorMobility";
import EvChargingForEmployeeBenefits from "./pages/EvChargingForEmployeeBenefits";
import EvChargingForTravelAndHospitality from "./pages/EvChargingForTravelAndHospitality";
import ApiHub from "./pages/ApiHub";
import SecurityCompliance from "./pages/SecurityCompliance";
import WorkWithUs from "./pages/WorkWithUs";
import Faqs from "./pages/Faqs";
import EsgPolicy from "./pages/EsgPolicy";
import Pricing from "./pages/Pricing";
import EvRoamingHubIntegration from "./pages/EvRoamingHubIntegration";
import Introductions from "./pages/Introductions";
import NetworkAccess from "./pages/products/NetworkAccess";
import JustCharge from "./pages/products/JustCharge";
import ChargePack from "./pages/products/ChargePack";
import ChargingLinks from "./pages/products/ChargingLinks";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:lang" element={<Index />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/:lang/how-it-works" element={<HowItWorks />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/:lang/benefits" element={<Benefits />} />
        <Route path="/the-network" element={<Platform />} />
        <Route path="/:lang/the-network" element={<Platform />} />
        <Route path="/platform" element={<Navigate to="/the-network" replace />} />
        <Route path="/:lang/platform" element={<Navigate to="/the-network" replace />} />
        <Route path="/distribution-partners/ev-charging-for-oems" element={<EvChargingForOems />} />
        <Route path="/:lang/distribution-partners/ev-charging-for-oems" element={<EvChargingForOems />} />
        <Route path="/distribution-partners/ev-charging-for-parking-and-road-platforms" element={<EvChargingForParkingAndRoadPlatforms />} />
        <Route path="/:lang/distribution-partners/ev-charging-for-parking-and-road-platforms" element={<EvChargingForParkingAndRoadPlatforms />} />
        <Route path="/distribution-partners/public-ev-charging-for-fleets" element={<PublicEvChargingForFleets />} />
        <Route path="/:lang/distribution-partners/public-ev-charging-for-fleets" element={<PublicEvChargingForFleets />} />
        <Route path="/distribution-partners/ev-charging-for-financial-platforms" element={<EvChargingForFinancialPlatforms />} />
        <Route path="/:lang/distribution-partners/ev-charging-for-financial-platforms" element={<EvChargingForFinancialPlatforms />} />
        <Route path="/distribution-partners/ev-charging-for-insurance-and-driver-services" element={<EvChargingForInsuranceAndDriverServices />} />
        <Route path="/:lang/distribution-partners/ev-charging-for-insurance-and-driver-services" element={<EvChargingForInsuranceAndDriverServices />} />
        <Route path="/distribution-partners/ev-charging-for-public-sector-mobility" element={<EvChargingForPublicSectorMobility />} />
        <Route path="/:lang/distribution-partners/ev-charging-for-public-sector-mobility" element={<EvChargingForPublicSectorMobility />} />
        <Route path="/distribution-partners/ev-charging-for-employee-benefits" element={<EvChargingForEmployeeBenefits />} />
        <Route path="/:lang/distribution-partners/ev-charging-for-employee-benefits" element={<EvChargingForEmployeeBenefits />} />
        <Route path="/distribution-partners/ev-charging-for-travel-and-hospitality" element={<EvChargingForTravelAndHospitality />} />
        <Route path="/:lang/distribution-partners/ev-charging-for-travel-and-hospitality" element={<EvChargingForTravelAndHospitality />} />
        <Route path="/distribution-partners" element={<DistributionPartners />} />
        <Route path="/:lang/distribution-partners" element={<DistributionPartners />} />
        <Route path="/demand-partners" element={<Navigate to="/distribution-partners" replace />} />
        <Route path="/:lang/demand-partners" element={<Navigate to="/distribution-partners" replace />} />
        <Route path="/charge-point-operators/latam-first-wave" element={<LatamFirstWave />} />
        <Route path="/:lang/charge-point-operators/latam-first-wave" element={<LatamFirstWave />} />
        <Route path="/charging-partners/calculator" element={<ChargingPartnersCalculator />} />
        <Route path="/charging-partners" element={<ChargingPartners />} />
        <Route path="/:lang/charging-partners" element={<ChargingPartners />} />
        <Route path="/charge-point-operators" element={<ChargePointOperators />} />
        <Route path="/:lang/charge-point-operators" element={<ChargePointOperators />} />
        <Route path="/private-hosts" element={<PrivateHosts />} />
        <Route path="/:lang/private-hosts" element={<PrivateHosts />} />
        <Route path="/fleet-hosts" element={<FleetHosts />} />
        <Route path="/:lang/fleet-hosts" element={<FleetHosts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/:lang/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/:lang/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/:lang/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />
        <Route path="/:lang/about" element={<Navigate to="/about-us" replace />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/:lang/about-us" element={<AboutUs />} />
        <Route path="/api" element={<ApiHub />} />
        <Route path="/:lang/api" element={<ApiHub />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/:lang/work-with-us" element={<WorkWithUs />} />
        <Route path="/security-compliance" element={<SecurityCompliance />} />
        <Route path="/:lang/security-compliance" element={<SecurityCompliance />} />
        <Route path="/esg-policy" element={<EsgPolicy />} />
        <Route path="/:lang/esg-policy" element={<EsgPolicy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/:lang/pricing" element={<Pricing />} />
        <Route path="/ev-roaming-hub-integration" element={<EvRoamingHubIntegration />} />
        <Route path="/blog/ev-roaming-hub-integration" element={<Navigate to="/ev-roaming-hub-integration" replace />} />
        <Route path="/introductions" element={<Introductions />} />
         <Route path="/products/network-access" element={<NetworkAccess />} />
         <Route path="/products/networkcore-access" element={<Navigate to="/products/network-access" replace />} />
         <Route path="/products/just-charge" element={<JustCharge />} />
        <Route path="/products/charge-pack" element={<ChargePack />} />
        <Route path="/products/charging-links" element={<ChargingLinks />} />
        <Route path="/products/sales-channel" element={<Navigate to="/products/network-access" replace />} />
        <Route path="/products/embedded-charging" element={<Navigate to="/products/just-charge" replace />} />
        <Route path="/products/white-label-ev-charging" element={<Navigate to="/products/just-charge" replace />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/:lang/faqs" element={<Faqs />} />
        <Route path="/faq" element={<Navigate to="/faqs" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}