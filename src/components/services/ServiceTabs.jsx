import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    name: "Architectural Design",
    desc: "Comprehensive design solutions from concept to completion, creating spaces that inspire and endure. Our approach blends innovative thinking with technical precision to deliver functional, aesthetically pleasing, and environmentally responsive structures.",
    images: [
      "/assets/images/1.jpg",
      "/assets/images/2.jpg",
      "/assets/images/3.jpg",
    ],
  },
  {
    name: "Eco-Friendly Design",
    desc: "Sustainable architecture that harmonizes with the environment while reducing ecological impact. We innovate with green materials, energy-efficient solutions, and environmentally conscious practices to create spaces with minimal ecological footprint.",
    images: [
      "/assets/images/2.jpg",
      "/assets/images/3.jpg",
      "/assets/images/4.jpg",
    ],
  },
  {
    name: "Project Development",
    desc: "End-to-end project coordination ensuring seamless execution from planning to final delivery. We manage every aspect of development to bring your architectural vision to life efficiently and effectively.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/4.jpg",
      "/assets/images/1.jpg",
    ],
  },
  {
    name: "Project Management",
    desc: "Expert oversight and coordination to deliver projects on time, within budget, and to specification. Our experienced team ensures quality control and seamless communication throughout the entire project lifecycle.",
    images: [
      "/assets/images/4.jpg",
      "/assets/images/1.jpg",
      "/assets/images/2.jpg",
    ],
  },
  {
    name: "Interior Styling",
    desc: "Thoughtful interior design that reflects your vision while maximizing functionality and aesthetics. We craft meaningful spaces that tell your story, merging beauty with livability in every detail.",
    images: [
      "/assets/images/1.jpg",
      "/assets/images/3.jpg",
      "/assets/images/2.jpg",
    ],
  },
  {
    name: "Consulting",
    desc: "Strategic architectural guidance and expert advice for complex design challenges and opportunities. Our consulting services provide valuable insights to help you make informed decisions throughout your project.",
    images: [
      "/assets/images/2.jpg",
      "/assets/images/4.jpg",
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
                  className={`font-monument-extended text-xl sm:text-2xl md:text-3xl text-pantone-black ${
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
                <h3 className="font-monument-extended text-2xl sm:text-3xl text-pantone-black font-bold">
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
