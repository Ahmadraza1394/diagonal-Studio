import React from "react";
import { motion } from "framer-motion";

const PortfolioIntro = () => {
  return (
    <>
      <section className="bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-abc-monument text-base text-pantone-black/80 leading-relaxed">
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
            <p className="font-abc-monument text-justify text-3xl md:text-4xl text-pantone-black leading-snug">
              We believe that architecture goes beyond buildings—it's about
              creating experiences. Every project we undertake is driven by a
              passion for innovation, timeless design, and sustainability. Our
              goal is to craft spaces that evoke emotion, foster connection, and
              leave a lasting impact.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="w-full h-[1px] bg-pantone-black/60 "></div>
    </>
  );
};

export default PortfolioIntro;
