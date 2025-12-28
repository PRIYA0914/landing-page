
import { motion, useScroll, useTransform } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.23, 1.01, 0.32, 1],
      type: "spring",
      stiffness: 60,
      damping: 18,
    },
  },
};

const SectionWrapper = ({ children, style = {}, ...props }) => {
  // Subtle parallax effect
  const { scrollYProgress } = useScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      style={{
        marginBottom: "120px",
        willChange: "transform, opacity, filter",
        ...style,
        y: parallax,
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
