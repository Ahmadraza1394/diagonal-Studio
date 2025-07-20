import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-pantone-719 to-pantone-7515">
      {/* Architectural image with overlay and zoom-out animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <motion.img
          src="/assets/images/3.jpg"
          alt="Diagonal Building"
          className="w-full h-full object-cover object-center"
          style={{ filter: "contrast(1.1) brightness(1.2)" }}
          draggable={false}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      {/* Content with increased width */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-[1600px] px-4 pt-20 md:pt-32">
        <motion.h1
          className="w-full text-center text-[clamp(50px,10vw,200px)] font-extrabold uppercase tracking-tight font-monument-extended leading-[1.05] text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="not-italic block md:inline text-shadow-lg font-supreme">
            diagonal
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
