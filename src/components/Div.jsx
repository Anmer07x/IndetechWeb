import { motion } from "framer-motion";

const AnimatedLine = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1 }}
      className="h-1 bg-green-500"
    />
  );
};

export default AnimatedLine;
