import AnimatedRevealSection from "../common/AnimatedRevealSection";
import { motion } from "framer-motion";

// Example service items
const services = [
  "Dise o Arquitect nico",
  "Estilismo de Interiores",
  "Desarrollo de Paisajes Urbanos",
  "Dise o Ecol gico",
  "Restauraci n y Mejora",
  "An lisis de Viabilidad de Proyectos",
];

export default function AnimatedServices() {
  return (
    <AnimatedRevealSection className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="font-monument text-4xl sm:text-6xl md:text-7xl text-pantone-2935 mb-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          Exceptional Services,
          <br />
          Endless Possibilities
        </motion.h2>
        {/* Subtitle */}
        <motion.p
          className="font-museo text-xl sm:text-2xl text-pantone-black/80 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.13, ease: "easeOut" }}
        >
          We help transform your ideas into iconic spaces and experiences.
        </motion.p>
        {/* Services List with Stagger */}
        <div className="flex flex-col divide-y divide-pantone-black/10">
          {services.map((service, i) => (
            <motion.div
              key={service}
              className="flex items-center py-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.7,
                delay: 0.22 + i * 0.08,
                ease: "easeOut",
              }}
            >
              <span className="font-museo text-pantone-283 text-base md:text-lg w-10 text-right mr-6 select-none">
                {i + 1}.
              </span>
              <span className="font-monument text-2xl sm:text-3xl md:text-4xl text-pantone-black">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedRevealSection>
  );
}
