import { motion } from "framer-motion";

const logos = [
  "/assets/images/companiesLogo/300px-LOGO_BJ - Edited.png",
  "/assets/images/companiesLogo/453-4539969_sunglass-hut-logo-hd-png-download - Edited.png",
  "/assets/images/companiesLogo/Comunicado - Edited.png",
  "/assets/images/companiesLogo/LOGO-VC - Edited.png",
  "/assets/images/companiesLogo/Logo-INM - Edited.png",
  "/assets/images/companiesLogo/Logo_Petróleos_Mexicanos.svg - Edited.png",
  "/assets/images/companiesLogo/Logo_Secretaría_del_Trabajo_y_de_Previsión_Social_México_Actual - Edited.png",
  "/assets/images/companiesLogo/Logo_del_FONATUR.svg - Edited.png",
  "/assets/images/companiesLogo/Logoedomex.png",
  "/assets/images/companiesLogo/Logotipo-grupo-idinsa - Edited.png",
  "/assets/images/companiesLogo/SEGOB - Edited.png",
  "/assets/images/companiesLogo/iztacalco_nav - Edited.png",
  "/assets/images/companiesLogo/luxottica-vector-logo-11574254816cesmfwpoqx - Edited.png",
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
  return (
    <section className="py-8 sm:py-10 md:py-16 lg:py-20 bg-white ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-widest text-pantone-7515 mb-1 sm:mb-2">
            Confían en nosotros
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-pantone-black">
            Colaboramos con empresas destacadas
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <LogosRow speed={50} />
          <LogosRow speed={50} reverse />
        </div>
      </div>
    </section>
  );
}
