import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-[70vh] flex items-center bg-white py-16 md:py-28"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 px-6">
        {/* Left: Short intro */}
        <motion.div
          className="md:col-span-1 flex items-start"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-pantone-black font-normal text-justify font-abc-monument text-lg md:text-xl leading-normal">
            La flexibilidad de nuestro equipo nos permite manejar proyectos de
            acuerdo a su tamaño y complejidad, manteniendo siempre la
            responsabilidad total y la dedicación al cliente.
          </p>
        </motion.div>
        {/* Right: Main about text */}
        <div className="md:col-span-2 flex flex-col justify-between h-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.95, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="text-pantone-black text-justify font-abc-monument text-2xl md:text-4xl leading-snug mb-8 font-semibold">
              Con más de 35 años de experiencia, Diagonal Studio es un despacho
              de arquitectura dedicado a satisfacer las necesidades del mercado
              en el desarrollo de proyectos arquitectónicos y la ejecución de
              obras, tanto públicas como privadas, siempre con la más alta
              calidad.
            </h2>
            <p className="text-pantone-7515 font-abc-monument text-2xl md:text-4xl leading-snug mb-8 font-semibold">
              Desarrollamos soluciones específicas para cada proyecto, de la
              mano de personal calificado y con los conocimientos técnicos
              necesarios para ejercer nuestra actividad de forma confiable.
            </p>
          </motion.div>
          {/* Button */}
          <motion.a
            href="#"
            className="inline-flex items-center justify-center mt-2 px-7 py-3 border border-pantone-black rounded transition hover:bg-pantone-black hover:text-white group text-base md:text-lg font-cardinal font-semibold w-fit text-pantone-black"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
          >
            MORE ABOUT US
            <span className="ml-2 inline-block group-hover:translate-x-1.5 transition-transform">
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
          </motion.a>
        </div>
      </div>
    </section>
  );
}
