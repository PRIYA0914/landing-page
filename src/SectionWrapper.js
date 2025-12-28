import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const SectionWrapper = ({ children }) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ marginBottom: "120px" }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
