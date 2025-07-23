import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts to ensure smooth animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Architectural image with overlay and improved animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <motion.div
          className="w-full h-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          <motion.img
            src="/assets/images/3.jpg"
            alt="Diagonal Building"
            className="w-full h-full object-cover object-center"
            style={{ filter: "contrast(1.15) brightness(1.1)" }}
            draggable={false}
            initial={{ scale: 1.05 }}
            animate={isLoaded ? { scale: 1 } : {}}
            transition={{
              duration: 6,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 1.5 },
            }}
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      </div>

      {/* Content with increased width */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-[1600px] px-4 pt-20 md:pt-32">
        <motion.h1
          className="w-full text-center text-[clamp(40px,8vw,180px)] sm:text-[clamp(50px,10vw,200px)] font-extrabold uppercase tracking-tight font-monument-extended leading-[1.05] text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="not-italic block md:inline text-shadow-lg font-supreme">
            diagonal
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
