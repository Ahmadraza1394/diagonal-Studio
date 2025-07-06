import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-pantone-719 to-pantone-7515">
      {/* Architectural image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <img
          src="/assets/images/3.jpg"
          alt="Diagonal Studio Building"
          className="w-full h-full object-cover object-center"
          style={{ filter: "contrast(1.1) brightness(1.2)" }}
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full px-4 pt-20 md:pt-32">
        <motion.h1
          className="w-full text-center text-[clamp(40px,8vw,180px)] font-extrabold uppercase tracking-tight font-monument leading-[1.05] text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="not-italic block md:inline text-shadow-lg">
            diagonal
          </span>
          <span className="block md:inline md:ml-6 italic font-supreme text-[#0055b8] opacity-90">
            studio
          </span>
        </motion.h1>

        <div className="mt-12 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-[clamp(16px,3vw,24px)] font-museo text-center">
          <motion.div
            className=" rounded-lg py-3 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="text-white font-medium">Redefining Spaces</span>
          </motion.div>

          <motion.div
            className=" rounded-lg py-3 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="text-white font-bold">Elevating Lifestyles</span>
          </motion.div>

          <motion.div
            className="rounded-lg py-3 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="text-white font-medium">
              Build with Confidence
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
