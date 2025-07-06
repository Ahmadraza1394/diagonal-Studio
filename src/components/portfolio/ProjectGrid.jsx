import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";

const categories = ["All", "Residential", "Commercial", "Urban Planning"];

const ProjectGrid = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-museo text-lg px-8 py-3 rounded-lg transition-all border ${
                filter === category
                  ? "bg-pantone-black text-white border-pantone-black shadow-lg"
                  : "bg-white text-pantone-black border-pantone-black/30 hover:bg-pantone-7515 hover:text-white hover:border-pantone-7515"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl shadow-xl"
              >
                <div
                  onClick={() => setSelectedImage(project.image)}
                  className="cursor-zoom-in"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <Link to={`/portfolio/${project.slug}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-pantone-black/80 via-pantone-black/40 to-transparent flex items-end p-8 transition-opacity hover:opacity-90">
                    <div className="text-white">
                      <h3 className="font-cardinal text-3xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="font-supreme text-lg opacity-90">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
