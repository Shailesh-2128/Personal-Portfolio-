import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const iconComponents = {
  Cpu: Icons.Cpu,
  Video: Icons.Video,
  MessageCircle: Icons.MessageCircle,
  Code2: Icons.Code2,
  ExternalLink: Icons.ExternalLink,
  Github: Icons.Github,
  Zap: Icons.Zap,
  Database: Icons.Database,
  Cloud: Icons.Cloud
};

export const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  gradient, 
  liveLink, 
  githubLink, 
  icon, 
  featured = false,
  status = 'completed', // 'completed', 'in-progress', 'planned'
  metrics = null // { users, performance, uptime }
}) => {
  const IconComponent = iconComponents[icon];
  const ExternalLinkIcon = iconComponents.ExternalLink;
  const GithubIcon = iconComponents.Github;

  const statusConfig = {
    'completed': { label: 'Live', color: 'text-green-400', bg: 'bg-green-400/10' },
    'in-progress': { label: 'In Development', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    'planned': { label: 'Planned', color: 'text-blue-400', bg: 'bg-blue-400/10' }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 group cursor-pointer shadow-2xl hover:shadow-cyan-500/10 ${
        featured ? 'md:col-span-2 ring-2 ring-cyan-500/20' : ''
      }`}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig[status].bg} ${statusConfig[status].color} border border-current/20`}>
          {statusConfig[status].label}
        </span>
      </div>

      {/* Gradient Header */}
      <div className={`relative h-40 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconComponent size={56} className="text-white/90 drop-shadow-lg" />
          </motion.div>
        </div>
        
        {/* Action Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
          initial={false}
        >
          <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {liveLink && (
              <motion.a
                href={liveLink}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 hover:border-white/50 shadow-lg hover:shadow-cyan-500/25 transition-all"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View ${title} live demo`}
              >
                <ExternalLinkIcon size={20} className="text-white" />
              </motion.a>
            )}
            {githubLink && (
              <motion.a
                href={githubLink}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 hover:border-white/50 shadow-lg hover:shadow-cyan-500/25 transition-all"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View ${title} source code`}
              >
                <GithubIcon size={20} className="text-white" />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Metrics Bar */}
        {metrics && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10 px-4 py-2">
            <div className="flex justify-between text-xs text-white/80">
              {metrics.users && (
                <span>👥 {metrics.users}+ users</span>
              )}
              {metrics.performance && (
                <span>⚡ {metrics.performance}ms</span>
              )}
              {metrics.uptime && (
                <span>🟢 {metrics.uptime}% uptime</span>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 pr-2">
            {title}
          </h3>
        </div>
        
        <p className="text-slate-300/90 mb-6 leading-relaxed text-sm sm:text-base line-clamp-3 group-hover:text-slate-200 transition-colors">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((techItem, index) => (
            <motion.span
              key={techItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm rounded-lg text-xs font-medium text-cyan-300/90 border border-slate-700/50 group-hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-700/50"
            >
              {techItem}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Enhanced Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.article>
  );
};

export default ProjectCard;