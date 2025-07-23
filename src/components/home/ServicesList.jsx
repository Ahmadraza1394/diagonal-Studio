import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Architectural Design",
    slug: "architectural-design",
    description:
      "Comprehensive design solutions from concept to completion, creating spaces that inspire and endure.",
  },
  {
    name: "Eco-Friendly Design",
    slug: "eco-friendly-design",
    description:
      "Sustainable architecture that harmonizes with the environment while reducing ecological impact.",
  },
  {
    name: "Project Development",
    slug: "project-development",
    description:
      "End-to-end project coordination ensuring seamless execution from planning to final delivery.",
  },
  {
    name: "Project Management",
    slug: "project-management",
    description:
      "Expert oversight and coordination to deliver projects on time, within budget, and to specification.",
  },
  {
    name: "Interior Styling",
    slug: "interior-styling",
    description:
      "Thoughtful interior design that reflects your vision while maximizing functionality and aesthetics.",
  },
  {
    name: "Consulting",
    slug: "consulting",
    description:
      "Strategic architectural guidance and expert advice for complex design challenges and opportunities.",
  },
];

export default function ServicesList() {
  return (
    <section
      className="w-full bg-white py-16 sm:py-20 md:py-28 overflow-hidden"
      id="services"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 px-4 sm:px-6">
        {/* Left Sidebar */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="sticky top-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-supreme text-base sm:text-lg text-pantone-black uppercase tracking-tight mb-3 sm:mb-4">
                DIAGONAL
              </h3>
              <p className="font-abc-monument text-sm sm:text-base text-pantone-black/80 mb-6 sm:mb-8 leading-relaxed">
                Transforming environments into thoughtfully designed,
                future-ready spaces that inspire and endure.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center border border-pantone-black px-6 sm:px-7 py-2.5 sm:py-3 rounded-md font-cardinal font-semibold text-pantone-black text-sm sm:text-base transition-all duration-300 hover:bg-pantone-black hover:text-white group w-fit"
              >
                EXPLORE SERVICES
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-8 lg:col-span-9">
          <Link to="/services">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-monument-extended text-4xl sm:text-5xl md:text-7xl text-pantone-7515 leading-none mb-4 sm:mb-6 font-bold">
                Services
              </h2>
              <p className="font-abc-monument text-base sm:text-lg md:text-xl text-pantone-black/80 max-w-xl mb-12 sm:mb-16">
                Creating innovative solutions that blend aesthetics with
                functionality for tomorrow's architectural challenges.
              </p>
            </motion.div>

            <div className="flex flex-col">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="border-t border-pantone-black/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <div className="py-6 sm:py-8 flex items-center group transition-all duration-300 hover:bg-neutral-50/80 px-4 -mx-4 rounded-lg">
                    <span className="font-cardinal text-base sm:text-lg text-pantone-black/50 w-8 sm:w-12 shrink-0">
                      {(index + 1).toString().padStart(2, "0")}.
                    </span>
                    <h3 className="font-monument-extended text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pantone-black transition-transform duration-300 group-hover:translate-x-2 font-bold">
                      {service.name}
                    </h3>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-pantone-black/60">
                      →
                    </span>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-pantone-black/20"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
