import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const logos = [
  "/assets/Diagonal fotos/Home Page/Logos BW/300px-LOGO_BJ - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/369-3698095_escudo-del-estado-de-mexico-png-escudo-del - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/Comunicado - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/LOGO-VC - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/Logo-INM - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/Logo_Petróleos_Mexicanos.svg - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/Logo_Secretaría_del_Trabajo_y_de_Previsión_Social_México_Actual - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/Logo_del_FONATUR.svg - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/Logotipo-grupo-idinsa - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/SEGOB - Edited - Edited (1).png",
  "/assets/Diagonal fotos/Home Page/Logos BW/el-colegio-de-mexico-logo-png_seeklogo-450938 - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/iztacalco_nav - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/logo-bfeb1add - Edited - Edited.png",
  "/assets/Diagonal fotos/Home Page/Logos BW/luxottica-vector-logo-11574254816cesmfwpoqx - Edited - Edited.png",
];

function LogosRow({ speed = 30, reverse = false }) {
  // Duplicate list to create a seamless loop
  const items = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        aria-hidden="true"
      >
        {items.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="flex-none  hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={src}
              alt="Trusted partner logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain "
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>

      {/* Gradient edge masks for smooth fade effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r " />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l " />
    </div>
  );
}

export default function TrustedPartners() {
  const { t } = useTranslation("trustedPartners");

  return (
    <section className="py-8 sm:py-10 md:py-16 lg:py-20 bg-white ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <p className="font-monument-extended text-xs uppercase tracking-widest text-pantone-7515 mb-1 sm:mb-2">
            {t("subtitle")}
          </p>
          <h2 className="font-monument-extended text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-pantone-black">
            {t("title")}
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <LogosRow speed={50} />
        </div>
      </div>
    </section>
  );
}
