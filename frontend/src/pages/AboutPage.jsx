import AboutHero from "../components/about/AboutHero";
import CompanyInfo from "../components/about/CompanyInfo";
import SEOHead from "../components/common/SEOHead";

const AboutPage = () => {
  return (
    <div>
      <SEOHead page="about" />
      <AboutHero />
      <CompanyInfo />
    </div>
  );
};

export default AboutPage;
