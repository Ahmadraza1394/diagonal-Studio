import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services = [
  {
    name: "Diseño Arquitectónico",
    slug: "architectural-design",
    description:
      "Soluciones integrales de diseño desde el concepto hasta la ejecución, creando espacios que inspiran y perduran.",
  },
  {
    name: "Diseño Ecológico",
    slug: "eco-friendly-design",
    description:
      "Arquitectura sustentable que armoniza con el entorno mientras reduce el impacto ecológico.",
  },
  {
    name: "Desarrollo de Proyectos",
    slug: "project-development",
    description:
      "Coordinación integral de proyectos para asegurar una ejecución fluida desde la planificación hasta la entrega final.",
  },
  {
    name: "Gerencia de Proyectos",
    slug: "project-management",
    description:
      "Supervisión y coordinación experta para cumplir tiempos, presupuestos y alcances, garantizando calidad y comunicación en cada etapa.",
  },
  {
    name: "Diseño de Interiores",
    slug: "interior-styling",
    description:
      "Diseño interior que interpreta tu visión y optimiza funcionalidad, materialidad y atmósferas para espacios habitables y expresivos.",
  },
  {
    name: "Consultoría y Planificación",
    slug: "consulting",
    description:
      "Asesoría estratégica y planificación técnica para resolver desafíos complejos, evaluar viabilidad y orientar la toma de decisiones.",
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
              <span className="font-supreme text-pantone-2935 text-base sm:text-lg">
                <span className="italic">DG</span>
                <span className="">NL</span>
              </span>
              <p className="font-abc-monument text-sm sm:text-base text-pantone-black/80 mb-6 sm:mb-8 leading-relaxed text-justify">
                Transformando entornos en espacios dise ados con pensamiento,
                futuristas y que inspiran y perduran.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center border border-pantone-black px-6 sm:px-7 py-2.5 sm:py-3 rounded-md font-cardinal font-semibold text-pantone-black text-sm sm:text-base transition-all duration-300 hover:bg-pantone-black hover:text-white group w-fit"
              >
                EXPLORAR SERVICIOS
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-8 lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-monument text-4xl sm:text-5xl md:text-7xl text-pantone-7515 leading-none mb-4 sm:mb-6 font-bold">
              SERVICIOS
            </h2>
            <p className="font-abc-monument text-base sm:text-lg md:text-xl text-pantone-black/80 max-w-2xl mb-8 sm:mb-10 text-justify">
              Combinamos experiencia, conocimiento técnico y atención al detalle
              en cada servicio, desde estudios preliminares y diseño conceptual
              hasta gestión de obra. Cada solución se adapta a tu proyecto.
            </p>
          </motion.div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="group relative border border-pantone-black/15 rounded-xl p-6 sm:p-7 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#5C2F80] focus-within:ring-2 focus-within:ring-[#5C2F80]/30 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
              >
                {/* Accent bar */}
                <span className="absolute inset-x-0 -top-px h-0.5 bg-transparent  rounded-t-xl transition-colors duration-300" />

                {/* Number + Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pantone-719/15 text-pantone-7515 flex items-center justify-center font-cardinal text-lg">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <h3 className="font-monument text-xl sm:text-2xl text-pantone-black font-bold">
                      {service.name}
                    </h3>
                  </div>
                  <svg
                    className="w-5 h-5 text-pantone-black/60 group-hover:text-[#5C2F80] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Description */}
                <p className="font-abc-monument text-sm sm:text-base text-pantone-black/80 leading-relaxed mb-6 text-justify">
                  {service.description}
                </p>

                {/* Footer CTAs */}
                <div className="mt-auto pt-4 border-t border-pantone-black/10 flex items-center justify-between gap-3">
                  <Link
                    to={`/services#${service.slug}`}
                    aria-label={`Ver más sobre ${service.name}`}
                    className="inline-flex items-center gap-2 text-[#5C2F80] hover:text-pantone-black transition-colors font-abc-monument text-sm"
                  >
                    Ver más
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                  <Link
                    to={`/contact?subject=${encodeURIComponent(service.name)}`}
                    aria-label={`Contactar sobre ${service.name}`}
                    className="inline-flex items-center justify-center px-3.5 py-2 border border-pantone-black rounded-md text-sm font-cardinal hover:bg-pantone-black hover:text-white transition-colors"
                  >
                    Contactar
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all CTA */}
          <div className="mt-10 sm:mt-12">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-pantone-black rounded-md transition hover:bg-pantone-black hover:text-white group text-base font-cardinal font-semibold text-pantone-black"
            >
              EXPLORAR TODOS LOS SERVICIOS
              <span className="ml-2 inline-block group-hover:translate-x-1.5 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
