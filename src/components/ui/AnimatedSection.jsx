import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const AnimatedSection = ({ 
  children, 
  className = "", 
  variants = fadeInUp,
  ...props 
}) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = "" }) => (
  <motion.div
    variants={staggerChildren}
    initial="initial"
    animate="animate"
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;