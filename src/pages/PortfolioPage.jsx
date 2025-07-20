import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-pantone-719 to-pantone-7515">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
          <motion.div
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-monument-extended text-4xl md:text-6xl lg:text-7xl text-white mb-6 font-bold">
              Portfolio
            </h1>
            <p className="font-abc-monument text-white/90 text-xl md:text-2xl leading-relaxed">
              A curated collection of our architectural achievements, showcasing
              innovative design and thoughtful craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-monument text-3xl md:text-4xl text-pantone-black mb-4 font-bold">
                Featured Projects
              </h2>
              <div className="flex items-center justify-center space-x-4">
                <span className="font-supreme text-pantone-black text-lg">
                  diagonal
                </span>
                <div className="w-12 h-px bg-pantone-black"></div>
                <span className="font-cardinal text-pantone-black/70 italic">
                  {projects.length} Projects
                </span>
              </div>
            </motion.div>
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
                  <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-abc-monument text-white text-sm">
                        {project.area} m² • {project.location}
                      </p>
                    </div>
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
        </div>
      </section>

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
              Ready to Start Your Project?
            </h3>
            <p className="font-abc-monument text-pantone-black/80 text-lg mb-8 leading-relaxed">
              Let's discuss how we can bring your architectural vision to life
              with innovative design and exceptional craftsmanship.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-[#5C2F80] text-white px-8 py-4 font-abc-monument font-medium hover:bg-[#4A2567] transition-colors duration-300"
            >
              <span>Get In Touch</span>
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
