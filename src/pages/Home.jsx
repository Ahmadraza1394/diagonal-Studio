import Hero from "../components/home/Hero";
import About from "../components/home/About";
import ShowcaseImage from "../components/home/ShowcaseImage";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ServicesList from "../components/home/ServicesList";
import Sustainability from "../components/home/Sustainability";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      <motion.div variants={sectionVariants} ref={ref}>
        <About />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <ShowcaseImage imageUrl="/assets/images/10.jpg" />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <FeaturedProjects />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <ShowcaseImage imageUrl="/assets/images/12.jpg" />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <ServicesList />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <ShowcaseImage imageUrl="/assets/images/13.jpg" />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Sustainability />
      </motion.div>
    </motion.div>
  );
}
