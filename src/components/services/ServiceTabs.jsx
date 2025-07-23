import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
      className="w-full bg-white py-4 md:py-8 lg:py-12 px-4 sm:px-6 lg:px-8"
      id="service-tabs"
    >
      <div className="max-w-[1440px] mx-auto">
        <section className="bg-white py-8 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-start">
            <motion.div
              className="md:w-1/3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="font-abc-monument text-base sm:text-lg text-pantone-black/80 leading-relaxed">
                We aim to craft spaces that inspire, challenge conventions, and
                enhance the lives of those who experience them.
              </p>
            </motion.div>
            <motion.div
              className="md:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              <p className="font-abc-monument text-justify text-2xl sm:text-3xl md:text-4xl text-pantone-black leading-snug">
                We believe that architecture goes beyond buildings—it's about
                creating experiences. Every project we undertake is driven by a
                passion for innovation, timeless design, and sustainability. Our
                goal is to craft spaces that evoke emotion, foster connection,
                and leave a lasting impact.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="w-full h-[1px] bg-pantone-black/60"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-10">
          <div className="lg:col-span-5 flex flex-col">
            {services.map((service, i) => (
              <div
                key={service.name}
                className={`flex items-center font-monument p-3 sm:p-4 md:p-6 cursor-pointer border-b border-pantone-black/20 transition-colors
                  ${
                    i === active
                      ? "bg-pantone-black text-white"
                      : "hover:bg-pantone-black/10"
                  }`}
                onClick={() => setActive(i)}
              >
                <span className="font-monument text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-pantone-black/50 mr-3 sm:mr-4 md:mr-6">
                  {i + 1}
                </span>
                <span
                  className={`font-monument text-lg sm:text-xl md:text-2xl lg:text-3xl ${
                    i === active ? "text-white" : "text-pantone-black"
                  } ${
                    i === active ? "font-bold" : "font-normal font-monument"
                  }`}
                >
                  {service.name}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 lg:pl-4 xl:pl-8 mt-6 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 42 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="font-monument text-xl sm:text-2xl md:text-3xl text-pantone-black font-bold">
                  {services[active].name}
                </h3>
                <p className="font-abc-monument text-justify text-lg sm:text-xl md:text-2xl lg:text-3xl text-pantone-black/90">
                  {services[active].desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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

      <div className="flex flex-col items-center mt-12 md:mt-16 lg:mt-20 mb-8 md:mb-12 px-4">
        <p className="font-abc-monument text-base sm:text-lg text-pantone-black/80 mb-4 sm:mb-6 max-w-2xl text-center">
          Ready to transform your space? Our team of experts is here to bring
          your vision to life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className="bg-pantone-black text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md font-monument text-base sm:text-lg hover:bg-white hover:text-pantone-black hover:border-pantone-black hover:border transition-colors flex items-center gap-2"
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
