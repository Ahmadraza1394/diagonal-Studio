import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ShowcaseImage({ imageUrl = "/assets/images/3.jpg" }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="w-full overflow-hidden">
      <motion.div
        ref={ref}
        className="w-full h-[40vh] sm:h-[50vh] md:h-[85vh] lg:h-[100vh] relative"
        initial={{ opacity: 0, y: 64 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={imageUrl}
          alt="Architectural Highlight by Diagonal Studio"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </motion.div>
    </section>
  );
}
