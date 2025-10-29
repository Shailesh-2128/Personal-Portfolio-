import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const iconComponents = {
  Code2: Icons.Code2,
  Layers: Icons.Layers,
  Database: Icons.Database,
  Cpu: Icons.Cpu
};

export const SkillCard = ({ 
  title, 
  icon, 
  data, 
  gradient, 
  delay = 0 
}) => {
  const IconComponent = iconComponents[icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all duration-300 group"
    >
      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
        <IconComponent size={28} className="sm:w-9 sm:h-9 text-white" />
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {data.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + i * 0.1 }}
            className="px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 group-hover:border-cyan-500/50 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;