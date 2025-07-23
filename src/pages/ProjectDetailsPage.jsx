import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../data/projects";

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const project = projects.find((p) => p.slug === slug);
  const galleryImages = project ? project.images.slice(0, 5) : [];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-monument text-2xl text-pantone-black mb-4">
            Project Not Found
          </h1>
          <Link
            to="/portfolio"
            className="font-abc-monument text-pantone-black hover:underline"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={project.images[selectedImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-16">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-monument-extended text-4xl md:text-6xl lg:text-7xl text-white mb-4 font-bold">
              {project.title}
            </h1>
            <p className="font-cardinal text-white/90 text-xl italic">
              {project.typology} {project.year}
            </p>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 font-abc-monument text-white hover:text-[#5C2F80] transition-colors duration-300"
          >
            <span className="text-xl">←</span>
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </section>
      {/* Project Details */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Project Information */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <motion.div
                className="sticky top-24 space-y-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {/* Project Details */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="font-monument uppercase text-xl md:text-2xl text-pantone-black mb-6 font-bold after:content-[''] after:block after:w-16 after:h-1 after:bg-pantone-7515 after:mt-2">
                    Project Details
                  </h3>

                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div className="col-span-1">
                      <dt className="font-monument text-pantone-black/70 text-xs uppercase tracking-wider">
                        Typology
                      </dt>
                      <dd className="font-monument text-pantone-black text-base md:text-lg mt-1.5">
                        {project.typology}
                      </dd>
                    </div>

                    <div className="col-span-1">
                      <dt className="font-monument text-pantone-black/70 text-xs uppercase tracking-wider">
                        Area
                      </dt>
                      <dd className="font-monument text-pantone-black text-base md:text-lg mt-1.5">
                        {project.area} m²
                      </dd>
                    </div>

                    <div className="col-span-1">
                      <dt className="font-monument text-pantone-black/70 text-xs uppercase tracking-wider">
                        Location
                      </dt>
                      <dd className="font-monument text-pantone-black text-base md:text-lg mt-1.5">
                        {project.location}
                      </dd>
                    </div>

                    <div className="col-span-1">
                      <dt className="font-monument text-pantone-black/70 text-xs uppercase tracking-wider">
                        Year
                      </dt>
                      <dd className="font-monument text-pantone-black text-base md:text-lg mt-1.5">
                        {project.year}
                      </dd>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="font-monument uppercase text-xl md:text-2xl text-pantone-black mb-4 font-bold after:content-[''] after:block after:w-16 after:h-1 after:bg-pantone-7515 after:mt-2">
                    Description
                  </h3>
                  <p className="font-abc-monument text-pantone-black/80 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Image Gallery */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <motion.div
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                {/* Main Image */}
                <div className="aspect-[16/10] overflow-hidden rounded-lg shadow-lg">
                  <motion.img
                    src={project.images[selectedImageIndex]}
                    alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    key={selectedImageIndex}
                    initial={{ opacity: 0.8, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Image Thumbnails */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-square overflow-hidden rounded-md transition-all duration-300 transform ${
                        selectedImageIndex === index
                          ? "ring-2 ring-pantone-7515 opacity-100 scale-[0.98]"
                          : "opacity-70 hover:opacity-90 shadow-sm"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-16 bg-pantone-719/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-monument uppercase text-3xl text-pantone-black font-bold">
              More Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  to={`/portfolio/${otherProject.slug}`}
                  className="group"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={otherProject.image}
                      alt={otherProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-monument text-lg text-pantone-black font-bold group-hover:text-[#5C2F80] transition-colors duration-300">
                    {otherProject.title}
                  </h4>
                  <p className="font-abc-monument text-pantone-black/70 italic">
                    {otherProject.typology} {otherProject.year}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsPage;
