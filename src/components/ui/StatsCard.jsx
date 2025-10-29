import React from 'react';
import { motion } from 'framer-motion';

export const StatsCard = ({ number, label, index }) => (
  <motion.div
    key={label}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8 + index * 0.1 }}
    className="text-center"
  >
    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      {number}
    </div>
    <div className="text-xs sm:text-sm text-slate-400 mt-1">{label}</div>
  </motion.div>
);

export default StatsCard;