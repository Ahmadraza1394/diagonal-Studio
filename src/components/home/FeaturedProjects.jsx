import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="font-monument text-4xl md:text-5xl lg:text-6xl text-pantone-black font-bold">
          OUR PORTFOLIO
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end my-16">
          <div className="mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-supreme text-pantone-black text-lg mb-2">
                DIAGONAL
              </h3>
              <p className="font-abc-monument text-pantone-black/80 text-lg max-w-xl mb-4">
                We redefine how people experience and interact with the places
                they call home or work.
              </p>
            </motion.div>
          </div>

          {/* <div className="flex items-center space-x-4">
            <span className="font-supreme text-pantone-black text-lg">
              diagonal
            </span>
            <div className="w-12 h-px bg-pantone-black"></div>
            <span className="font-cardinal text-pantone-black/70 italic">
              Selected Works
            </span>
          </div> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/portfolio/${project.slug}`}>
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-monument text-xl text-pantone-black font-bold group-hover:text-[#5C2F80] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-cardinal text-pantone-black/70 italic">
                    {project.typology} {project.year}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-3 font-abc-monument text-pantone-black hover:text-[#5C2F80] transition-colors duration-300 group"
          >
            <span>View All Projects</span>
            <div className="w-8 h-px bg-pantone-black group-hover:bg-[#5C2F80] transition-colors duration-300"></div>
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
