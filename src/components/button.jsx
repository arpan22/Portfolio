import { motion } from "framer-motion";

export function Button({ children, asChild = false, className = "", ...props }) {
  const Comp = asChild ? motion.span : motion.button;
  return (
    <Comp
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 12px rgba(59,130,246,0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
