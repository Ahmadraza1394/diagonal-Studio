import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";
import { useProjectTranslation } from "../../hooks/useProjectTranslation";

const ProjectGrid = () => {
  const { t } = useTranslation("portfolio");
  const { getTranslatedProject } = useProjectTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  // Only show the requested projects
  const allowedTitles = [
    "Puerto Aventuras Hotel and Beach Club",
    "Rouge Hunab",
    "Casa Romeo",
    "Casa Bak 90-91",
    "Caphe-Ha",
    "Casa Imox",
    "UJO",
    "Parque Lineal Rio Mixcoac",
    "Prime Burgers",
    "Xibak",
    "Rouge",
    "Kai Hotel",
  ];
  const filteredProjects = projects
    .filter((p) => allowedTitles.includes(p.title))
    .sort(
      (a, b) => allowedTitles.indexOf(a.title) - allowedTitles.indexOf(b.title)
    );

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <Link to="/#featuredProjects">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center justify-center mt-2 px-7 py-3 border border-pantone-black rounded transition hover:bg-pantone-black hover:text-white group text-base md:text-lg font-cardinal font-semibold w-fit text-pantone-black"
            >
              <span className="italic">{t("grid.filterAll")}</span>
            </motion.button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => {
            const translatedProject = getTranslatedProject(project);
            return (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link
                  to={`/portfolio/${project.slug}`}
                  state={{ from: "portfolio" }}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] rounded-lg shadow-lg">
                    <img
                      src={project.image}
                      alt={translatedProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedImage(project.image);
                      }}
                    />

                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                    {/* Title overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="text-center">
                        <h3 className="text-white font-supreme uppercase tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                          {translatedProject.title}
                        </h3>

                        {/* Project metadata */}
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white/80 font-cardinal text-xs sm:text-sm italic">
                            {translatedProject.typology} • {project.year}
                          </p>
                          {project.location && (
                            <p className="text-white/70 font-abc-monument text-xs mt-1">
                              {project.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Reference indicator */}
                    {project.reference && (
                      <div className="absolute top-3 right-3 w-6 h-6 sm:w-8 sm:h-8 bg-pantone-7515 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                        {project.reference.url ? (
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-full max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 sm:top-2 sm:right-2 w-8 h-8 sm:w-10 sm:h-10 bg-pantone-7515 hover:bg-pantone-black text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                aria-label="Cerrar imagen"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Instructions */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-2 rounded-full text-xs sm:text-sm font-abc-monument backdrop-blur-sm">
                Haz clic fuera para cerrar
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;
