import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-pantone-black text-white overflow-hidden">
      <img
        src="/assets/images/aboutHero.jpeg"
        alt="Diagonal Nosotros"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 "
        style={{ filter: "brightness(1) contrast(1)" }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pantone-black/60 via-pantone-black/40 to-transparent z-5"></div>
      <div className="relative z-10 px-4">
        <motion.h1
          className="w-full text-center text-[clamp(40px,8vw,180px)] sm:text-[clamp(50px,10vw,200px)] font-extrabold uppercase tracking-tight font-monument-extended leading-[1.05] text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="not-italic block md:inline text-shadow-lg font-supreme">
            Nosotros
          </span>
        </motion.h1>
        <p className="font-abc-monument text-lg md:text-xl mt-4 max-w-3xl mx-auto text-white/90 drop-shadow-md">
          {/* */}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
