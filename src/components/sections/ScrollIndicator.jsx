import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => (
  <motion.div
    animate={{ y: [0, 20, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm text-slate-400">Scroll Down</span>
      <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
        />
      </div>
    </div>
  </motion.div>
);

export default ScrollIndicator;