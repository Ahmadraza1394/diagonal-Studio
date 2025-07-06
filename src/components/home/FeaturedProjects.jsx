import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Replace with your images & project info!
const projects = [
  // --- First Row ---
  {
    image: "/assets/images/13.jpg",
    title: "The Serene Sanctuary",
    type: "Residential",
    date: "Feb 9, 2024",
    brand: true, // Show DIAGONAL STUDIO on image
  },
  {
    image: "/assets/images/6.jpg",
    title: "Modern Minimal Villa",
    type: "Residential",
    date: "Jan 23, 2024",
  },
  {
    image: "/assets/images/10.jpg",
    title: "The Luxe Loft",
    type: "Residential",
    date: "Nov 9, 2023",
    brand: true, // Show DIAGONAL STUDIO on image
  },
  // --- Second Row ---
  {
    image: "/assets/images/11.jpg",
    title: "Harmony Haven",
    type: "Residential",
    date: "Jan 26, 2023",
    brand: true, // Show DIAGONAL STUDIO on image
  },
  {
    image: "/assets/images/12.jpg",
    title: "Skyline Plaza",
    type: "Commercial",
    date: "Nov 10, 2022",
    brand: true, // Show DIAGONAL STUDIO on image
  },
];

export default function FeaturedProjects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section className="w-full bg-white py-20" id="projects">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 md:gap-0 px-6">
        {/* Sidebar: Title, desc, button */}
        <motion.div
          className="w-full md:w-[320px] flex flex-col gap-6 md:gap-12 md:pr-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          ref={ref}
        >
          <div>
            <h3 className="font-monument text-[20px] md:text-xl text-pantone-black uppercase leading-tight mb-2 tracking-tight">
              DIAGONAL STUDIO
            </h3>
            <p className="font-museo text-[16px] text-pantone-black/85 leading-snug">
              We redefine how people experience and interact with the places
              they call home or work.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center border border-pantone-black px-7 py-3 rounded font-museo font-semibold text-pantone-black text-base transition hover:bg-pantone-black hover:text-white group w-fit"
          >
            OUR PROJECTS
            <span className="ml-2 group-hover:translate-x-1.5 transition-transform">
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
          </a>
        </motion.div>

        {/* Main Area: Heading, Desc, Grid */}
        <div className="flex-1 w-full flex flex-col gap-10">
          {/* Title & Desc */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.07, ease: "easeOut" }}
            ref={ref}
          >
            <h2 className="font-monument text-4xl md:text-6xl text-pantone-7515 leading-[1.1] mb-3 tracking-tight">
              Featured Projects
            </h2>
            <p className="font-museo text-lg md:text-xl text-pantone-black/90 mb-10">
              Explore a curated selection of our most exceptional architectural
              achievements in Mexico
            </p>
          </motion.div>

          {/* Projects Two-Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {projects.slice(0, 3).map((proj, i) => (
              <motion.div
                key={proj.title}
                className="bg-white rounded shadow-none flex flex-col"
                initial={{ opacity: 0, y: 44 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.13 + i * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-[310px] md:h-[340px] object-cover object-center rounded"
                    draggable={false}
                  />
                </div>
                <div className="pt-5 px-1">
                  <h4 className="font-monument text-xl text-pantone-black mb-1">
                    {proj.title}
                  </h4>
                  <div className="font-museo text-base text-pantone-black/70 flex flex-wrap gap-x-2">
                    <span>{proj.type}</span>
                    <span>/</span>
                    <span>{proj.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.slice(3, 5).map((proj, i) => (
              <motion.div
                key={proj.title}
                className="bg-white rounded shadow-none flex flex-col"
                initial={{ opacity: 0, y: 44 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.16 + i * 0.12,
                  ease: "easeOut",
                }}
              >
                <div className="relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-[310px] md:h-[340px] object-cover object-center rounded"
                    draggable={false}
                  />
                </div>
                <div className="pt-5 px-1">
                  <h4 className="font-monument text-xl text-pantone-black mb-1">
                    {proj.title}
                  </h4>
                  <div className="font-museo text-base text-pantone-black/70 flex flex-wrap gap-x-2">
                    <span>{proj.type}</span>
                    <span>/</span>
                    <span>{proj.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
