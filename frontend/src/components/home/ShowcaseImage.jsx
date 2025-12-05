import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { getAltText } from "../../utils/seoAltText";

export default function ShowcaseImage({ imageUrl = "/assets/images/3.jpg" }) {
  const { i18n } = useTranslation();
  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const [ref, inViewRef] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inViewRef) {
      setInView(inViewRef);
      controls.start("visible");
    }
  }, [inViewRef, controls]);

  const imageVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: inView ? 1.1 : 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: inView ? 0.2 : 0,
      },
    },
    hover: {
      scale: inView ? 1.2 : 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="w-full overflow-hidden">
      <motion.div
        ref={ref}
        className="w-full h-[40vh] sm:h-[50vh] md:h-[85vh] lg:h-[100vh] relative"
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 64 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: inView ? 0.2 : 0,
        }}
        exit={{ y: 64, opacity: 0, transition: { duration: 0.8 } }}
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("visible")}
      >
        <motion.img
          src={imageUrl}
          alt={getAltText("showcase", i18n.language)}
          className="w-full h-full object-cover object-center"
          draggable={false}
          initial="hidden"
          variants={imageVariants}
          animate="visible"
        />
      </motion.div>
    </section>
  );
}
