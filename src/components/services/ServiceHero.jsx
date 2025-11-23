import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ServiceHero() {
  const { t } = useTranslation("serviceHero");
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-pantone-black text-white overflow-hidden">
      {/* Background Image */}
      <motion.img
        src="/assets/images/serviceHero.jpg"
        alt="Diagonal Servicios"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 "
        draggable={false}
        loading="eager"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Gradient Overlay (match portfolio hero) */}
      <div className="absolute inset-0 bg-gradient-to-t from-pantone-black/60 via-pantone-black/40 to-transparent z-5"></div>

      {/* Centered Title */}
      <div className="relative z-10 px-4">
        <motion.h1
          className="w-full text-center text-[clamp(40px,8vw,180px)] sm:text-[clamp(50px,10vw,200px)] font-extrabold uppercase tracking-tight font-monument-extended leading-[1.05] text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="not-italic block md:inline text-shadow-lg font-supreme">
            {t("title")}
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
