import ServiceHero from "../components/services/ServiceHero";
import ServiceTabs from "../components/services/ServiceTabs";
import SEOHead from "../components/common/SEOHead";

export default function ServicesPage() {
  return (
    <>
      <SEOHead page="services" />
      <ServiceHero />
      {/* <AnimatedServices /> */}
      <ServiceTabs />
    </>
  );
}
