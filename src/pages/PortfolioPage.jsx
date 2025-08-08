import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import PortfolioIntro from "../components/portfolio/PortfolioIntro";
import PortfolioHero from "../components/portfolio/PortfolioHero";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PortfolioHero />

      {/* Portfolio Introduction */}
      <PortfolioIntro />

      {/* Projects Grid */}
      <ProjectGrid />

      {/* Call to Action */}
      <section className="py-16 bg-pantone-719/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-monument text-3xl text-pantone-black mb-6 font-bold">
              Listo para Iniciar tu Proyecto?
            </h3>
            <p className="font-abc-monument text-pantone-black/80 text-lg mb-8 leading-relaxed">
              Hagamos que tu visín arquitect́ica se haga realidad con diseño
              innovador y ejecucíon excepcional.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 border border-pantone-black text-pantone-black px-8 py-4 font-cardinal font-semibold  hover:bg-pantone-black hover:text-white transition-colors duration-300"
            >
              <span>Contáctanos</span>
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
