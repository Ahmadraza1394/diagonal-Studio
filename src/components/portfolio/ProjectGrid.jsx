import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";

const ProjectGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {projects.map((project) => (
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
                      <h3 className="font-monument text-3xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="font-abc-monument text-lg opacity-90">
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
          <motion.div
            className="absolute top-2 right-2 bg-white p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pantone-black"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </motion.div>
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
