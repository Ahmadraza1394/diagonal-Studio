import React from "react";
import { motion } from "framer-motion";

const ProjectReference = ({ reference }) => {
  if (!reference || (!reference.url && !reference.title)) {
    return null;
  }

  const hasUrl = reference.url;

  return (
    <motion.div
      className="bg-gradient-to-r from-pantone-719/10 to-pantone-7515/10 rounded-lg p-4 sm:p-6 border border-pantone-7515/20 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pantone-7515 rounded-full flex items-center justify-center">
            {hasUrl ? (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
                className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-monument text-pantone-black text-sm sm:text-base font-semibold mb-1">
            {hasUrl ? "Referencia Externa" : "Reconocimiento"}
          </h4>
          <p className="font-abc-monument text-justify text-pantone-black/70 text-xs sm:text-sm mb-2 leading-relaxed">
            {reference.title || "Ver más información sobre este proyecto"}
          </p>
          {hasUrl && (
            <a
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-cardinal text-pantone-7515 hover:text-pantone-black transition-colors text-xs sm:text-sm font-medium group"
            >
              <span>Ver artículo completo</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectReference;
