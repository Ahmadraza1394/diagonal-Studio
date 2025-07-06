import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedRevealSection({ children, className = "" }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.14 });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 72 }}
      animate={
        inView
          ? { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
          : {}
      }
    >
      {children}
    </motion.section>
  );
}
