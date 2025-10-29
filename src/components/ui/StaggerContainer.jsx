// src/components/ui/StaggerContainer.jsx
import React from "react";
import { motion } from "framer-motion";

export default function StaggerContainer({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}
