import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Users, Zap } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import SectionHeader from '../ui/SectionHeader';

const iconComponents = {
  Cpu: Cpu,
  Users: Users,
  Zap: Zap,
  Sparkles: Sparkles
};

export const Strengths = () => (
  <section id="strengths" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/30 relative">
    <div className="max-w-4xl mx-auto">
      <SectionHeader
        badge="Key Strengths"
        title="What I Excel At"
        description=""
        badgeColor="orange"
        gradient="from-orange-400 to-red-400"
      />

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {RESUME_DATA.STRENGTHS.map((strength, idx) => (
          <StrengthCard key={strength.title} strength={strength} index={idx} />
        ))}
      </div>
    </div>
  </section>
);

const StrengthCard = ({ strength, index }) => {
  const IconComponent = iconComponents[strength.icon] || iconComponents.Sparkles;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-orange-500/30 transition-all duration-300 group text-center"
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
        <IconComponent size={28} className="text-white" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
        {strength.title}
      </h3>
      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
        {strength.description}
      </p>
    </motion.div>
  );
};

export default Strengths;