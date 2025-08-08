import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
  // Only use first 6 projects for featured section
  const featuredProjects = projects.slice(0, 9);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="font-monument-extended uppercase text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pantone-7515 font-bold">
          PORTAFOLIO DESTACADO
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end my-8 sm:my-12 md:my-16">
          <div className="mb-8 lg:mb-0 w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-supreme text-pantone-2935 text-base sm:text-lg mb-2">
                DIAGONAL
              </h3>
              <p className="font-abc-monument text-pantone-black/80 text-sm sm:text-base md:text-lg max-w-xl mb-4">
                Desarrollamos proyectos integrales con un servicio
                personalizado, siempre buscando mejorar la calidad de vida de
                nuestros clientes mediante un diseño y ejecución innovadores y
                de alta calidad.
              </p>
              <motion.a
                href="/portfolio"
                className="inline-flex items-center justify-center mt-2 px-7 py-3 border border-pantone-black rounded transition hover:bg-pantone-black hover:text-white group text-base md:text-lg font-cardinal font-semibold w-fit text-pantone-black"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.04 }}
              >
                Ver todos los proyectos
                <span className="ml-2 inline-block group-hover:translate-x-1.5 transition-transform">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <span className="font-supreme text-pantone-2935 text-base sm:text-lg">
              DGNL
            </span>
            <div className="w-8 sm:w-12 h-px bg-pantone-black"></div>
            <span className="font-cardinal text-pantone-black/70 italic text-sm sm:text-base">
              Obras Seleccionadas
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={`/portfolio/${project.slug}`}>
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-3 sm:mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-monument text-base sm:text-lg md:text-xl text-pantone-black font-bold group-hover:text-pantone-2935 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-cardinal text-sm sm:text-base text-pantone-black/70 italic">
                    {project.typology} {project.year}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        {/* <motion.div
          className="text-center mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 sm:space-x-3 font-abc-monument text-sm sm:text-base text-pantone-black hover:text-[#5C2F80] transition-colors duration-300 group"
          >
            <span>View All Projects</span>
            <div className="w-6 sm:w-8 h-px bg-pantone-black group-hover:bg-[#5C2F80] transition-colors duration-300"></div>
            <span className="text-lg sm:text-xl">→</span>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FeaturedProjects;
