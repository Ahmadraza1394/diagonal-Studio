import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectGallery = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <h2 className="font-monument text-2xl tracking-wider text-pantone-black mb-16 text-center uppercase">
          Project Gallery
        </h2>
        <div className="grid grid-cols-12 gap-4">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index % 5 === 0
                  ? "col-span-8"
                  : index % 5 === 1
                  ? "col-span-4"
                  : index % 5 === 2
                  ? "col-span-6"
                  : index % 5 === 3
                  ? "col-span-6"
                  : "col-span-12"
              }`}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-full object-cover aspect-[4/3] transition-all duration-700 hover:brightness-90"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-pantone-black/90 z-50 flex items-center justify-center p-8"
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;
