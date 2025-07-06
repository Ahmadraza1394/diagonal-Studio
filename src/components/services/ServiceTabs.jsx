import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    name: "Architectural Design",
    desc: "Aether's Architectural Design service transforms visionary concepts into enduring structures that leave a lasting impact. Our approach blends innovative thinking with technical precision to create spaces that are functional, aesthetically pleasing, and responsive to their environment.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
    ],
  },
  {
    name: "Interior Styling",
    desc: "Interior Styling at Aether is about more than just decoration; it's about crafting meaningful spaces that tell a story. We specialize in designing interiors that merge aesthetics with function, creating environments that are both beautiful and livable.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
    ],
  },
  {
    name: "Cityscape Development",
    desc: "Our Cityscape Development service focuses on reimagining urban landscapes to foster vibrant, sustainable communities. By integrating cutting-edge design techniques with thoughtful urban planning, we create cityscapes that prioritize livability, connectivity, and environmental harmony.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
    ],
  },
  {
    name: "Eco-Friendly Design",
    desc: "Sustainability is at the heart of our Eco-Friendly Design services. We innovate with green materials, energy-efficient solutions, and environmentally conscious practices to create spaces that have a minimal ecological footprint. Our team is passionate about designing buildings and landscapes that promote wellness and coexistence with nature.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
    ],
  },
];

export default function ServiceTabs() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="w-full bg-white py-8 sm:py-12 md:py-20"
      id="service-tabs"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-10 md:mb-16"
        >
          <h2 className="font-museo text-xl sm:text-2xl md:text-4xl text-pantone-black font-normal leading-snug">
            Our services go beyond traditional boundaries, blending creativity
            with precision to deliver extraordinary results. From visionary
            architecture and sustainable planning to tailored interior design,
            each service reflects our commitment to innovation and excellence.
            We approach every project with a client–first mindset, ensuring
            unique solutions that align with your goals and aspirations.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-pantone-black/50">
          <div className="lg:col-span-6 flex flex-col">
            {services.map((service, i) => (
              <div
                key={service.name}
                className={`flex items-center p-4 sm:p-6 cursor-pointer border-b border-pantone-black/20 transition-colors
                  ${
                    i === active
                      ? "bg-pantone-719/10"
                      : "hover:bg-pantone-719/5"
                  }`}
                onClick={() => setActive(i)}
              >
                <span className="font-monument text-4xl sm:text-5xl md:text-6xl text-pantone-black/30 mr-4 sm:mr-6">
                  {i + 1}
                </span>
                <span
                  className={`font-monument text-xl sm:text-2xl md:text-3xl text-pantone-black ${
                    i === active ? "font-bold" : "font-normal"
                  }`}
                >
                  {service.name}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 lg:pl-8 mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-6"
              >
                <h3 className="font-monument text-2xl sm:text-3xl text-pantone-black font-semibold">
                  {services[active].name}
                </h3>
                <p className="font-museo text-base sm:text-lg text-pantone-black/90">
                  {services[active].desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {services[active].images.map((img, j) => (
                    <motion.img
                      key={img}
                      src={img}
                      alt={`${services[active].name} ${j + 1}`}
                      className="w-full aspect-[4/3] object-cover object-center rounded"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 + j * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
