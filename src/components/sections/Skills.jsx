import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../../data/resumeData';
import SkillCard from '../ui/SkillCard';
import SectionHeader from '../ui/SectionHeader';

const skillCategories = [
  { title: 'Programming Languages', icon: 'Code2', data: RESUME_DATA.SKILLS.languages, gradient: 'from-cyan-500 to-blue-500', delay: 0 },
  { title: 'Frontend Technologies', icon: 'Layers', data: RESUME_DATA.SKILLS.frontend, gradient: 'from-purple-500 to-pink-500', delay: 0.1 },
  { title: 'Backend Technologies', icon: 'Database', data: RESUME_DATA.SKILLS.backend, gradient: 'from-orange-500 to-red-500', delay: 0.2 },
  { title: 'Databases', icon: 'Database', data: RESUME_DATA.SKILLS.databases, gradient: 'from-green-500 to-teal-500', delay: 0.3 },
  { title: 'Tools & Technologies', icon: 'Cpu', data: RESUME_DATA.SKILLS.tools, gradient: 'from-indigo-500 to-purple-500', delay: 0.4 }
];

export const Skills = () => (
  <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 relative">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        badge="Technical Skills"
        title="Technologies I Use"
        description=""
        badgeColor="purple"
        gradient="from-cyan-400 to-purple-400"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((category, idx) => (
          <SkillCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;