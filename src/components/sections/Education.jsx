import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../../data/resumeData';
import SectionHeader from '../ui/SectionHeader';

export const Education = () => (
  <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 relative">
    <div className="max-w-4xl mx-auto">
      <SectionHeader
        badge="Education"
        title="Academic Background"
        description=""
        badgeColor="green"
        gradient="from-cyan-400 to-green-400"
      />

      <div className="space-y-6">
        {RESUME_DATA.EDUCATION.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const EducationCard = ({ education, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all duration-300 group"
  >
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {education.degree}
        </h3>
        <p className="text-cyan-400 text-lg mb-2">{education.institution}</p>
        <p className="text-slate-400">{education.location}</p>
      </div>
      <div className="mt-4 sm:mt-0 sm:text-right flex-shrink-0">
        <ScoreBadge score={education.score} />
        <p className="text-slate-400 mt-2 text-sm sm:text-base">{education.period}</p>
      </div>
    </div>
  </motion.div>
);

const ScoreBadge = ({ score }) => {
  const isCGPA = score.includes('CGPA');
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
      isCGPA 
        ? 'bg-cyan-500/20 text-cyan-400' 
        : 'bg-green-500/20 text-green-400'
    }`}>
      {score}
    </span>
  );
};

export default Education;