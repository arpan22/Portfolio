import { motion } from "framer-motion";

export function Card({ children, className = "" }) {
  return (
    <motion.div
      className={`bg-white shadow-md rounded-xl p-6 cursor-pointer ${className}`}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-gray-800 ${className}`}>{children}</div>;
}
