import PortfolioHero from "../components/portfolio/PortfolioHero";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import PortfolioIntro from "../components/portfolio/PortfolioIntro";

const PortfolioPage = () => {
  return (
    <div>
      <PortfolioHero />
            <PortfolioIntro />
      <ProjectGrid />
    </div>
  );
};

export default PortfolioPage;
