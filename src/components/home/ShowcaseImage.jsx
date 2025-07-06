import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ShowcaseImage({ imageUrl = "/assets/images/3.jpg" }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% visible before animating
  });

  return (
    <section className="w-full overflow-hidden">
      <motion.img
        ref={ref}
        src={imageUrl}
        alt="Architectural Highlight by Diagonal Studio"
        className="w-full h-[45vh] md:h-[85vh] object-cover object-center"
        draggable={false}
        initial={{ opacity: 0, y: 64 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </section>
  );
}
