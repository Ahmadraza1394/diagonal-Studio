import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    name: "Diseño Arquitectónico",
    desc: "Soluciones integrales de diseño desde el concepto hasta la ejecución, creando espacios que inspiran, funcionan y perduran en el tiempo.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
    ],
  },
  {
    name: "Diseño Ecológico",
    desc: "Arquitectura sustentable con enfoque en eficiencia energética, selección responsable de materiales y menor huella ambiental.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
    ],
  },
  {
    name: "Desarrollo de Proyectos",
    desc: "Planificación, coordinación y control de todas las etapas para materializar tu visión con eficiencia, claridad y orden.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
    ],
  },
  {
    name: "Gerencia de Proyectos",
    desc: "Supervisión experta para cumplir alcance, costos y tiempos; comunicación efectiva y control de calidad durante todo el proceso.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
    ],
  },
  {
    name: "Diseño de Interiores",
    desc: "Diseño interior que interpreta tu visión y potencia funcionalidad, materialidad y atmósferas para espacios habitables y expresivos.",
    images: [
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
      "/assets/images/3.jpg",
    ],
  },
  {
    name: "Consultoría y Planificación",
    desc: "Asesoría estratégica y planificación técnica para evaluar viabilidad, definir lineamientos y apoyar la toma de decisiones.",
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
          <h2 className="font-abc-monument text-justify text-xl sm:text-2xl md:text-4xl text-pantone-black font-normal leading-snug">
            Nuestros servicios integran creatividad y precisión técnica para
            ofrecer resultados excepcionales. Desde el diseño arquitectónico y
            la planificación sostenible hasta el diseño de interiores, cada
            servicio refleja nuestro compromiso con la innovación, la calidad y
            los objetivos de cada cliente.
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
                      ? "bg-pantone-719 text-white"
                      : "hover:bg-pantone-719/10"
                  }`}
                onClick={() => setActive(i)}
              >
                <span className="font-cardinal text-4xl sm:text-5xl md:text-6xl text-pantone-black/50 mr-4 sm:mr-6">
                  {i + 1}
                </span>
                <span
                  className={`font-monument-extended text-xl sm:text-2xl md:text-3xl ${
                    i === active ? "text-white" : "text-pantone-black"
                  } ${i === active ? "font-bold" : "font-normal"}`}
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
                <h3 className="font-monument-extended text-2xl sm:text-3xl text-pantone-black font-semibold">
                  {services[active].name}
                </h3>
                <p className="font-abc-monument text-justify text-base sm:text-lg text-pantone-black/90">
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
