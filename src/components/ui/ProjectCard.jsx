import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const iconComponents = {
  Cpu: Icons.Cpu,
  Video: Icons.Video,
  MessageCircle: Icons.MessageCircle,
  Code2: Icons.Code2,
  ExternalLink: Icons.ExternalLink,
  Github: Icons.Github
};

export const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  gradient, 
  liveLink, 
  githubLink, 
  icon, 
  featured = false 
}) => {
  const IconComponent = iconComponents[icon];
  const ExternalLinkIcon = iconComponents.ExternalLink;
  const GithubIcon = iconComponents.Github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.2 }}
      whileHover={{ y: -10 }}
      className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 group cursor-pointer ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center`}>
        <IconComponent size={64} className="text-white/80" />
        <motion.div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3">
            <motion.a
              href={liveLink}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLinkIcon size={18} className="text-white" />
            </motion.a>
            <motion.a
              href={githubLink}
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon size={18} className="text-white" />
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-slate-300 transition-colors">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((techItem) => (
            <motion.span
              key={techItem}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-2 py-1 bg-slate-800 rounded-full text-xs sm:text-sm text-cyan-400 border border-slate-700 group-hover:border-cyan-500/50 transition-colors"
            >
              {techItem}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;