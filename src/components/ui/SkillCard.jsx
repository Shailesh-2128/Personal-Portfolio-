import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

// Enhanced icon mapping with more specific icons
const iconComponents = {
  Code2: Icons.Code2,
  Layers: Icons.Layers,
  Database: Icons.Database,
  Cpu: Icons.Cpu,
  Server: Icons.Server,
  Settings: Icons.Settings,
  Users: Icons.Users,
  Globe: Icons.Globe,
  Terminal: Icons.Terminal,
  Cloud: Icons.Cloud,
  GitBranch: Icons.GitBranch,
  Smartphone: Icons.Smartphone
};

// Skill level configuration with specific proficiencies
const skillLevels = {
  // Full proficiency skills
  'JavaScript': 4,
  'React.js': 4,
  'MySQL': 4,
  
  // Half proficiency skills
  'Node.js': 2,
  'Node': 2,
  'Tailwind CSS' : 2,
  'Framer Motion':2,
  'Bootstrap':3,
  'Material-UI' : 1,
  'Postman':1,
  // Default for other skills (you can customize these as needed)
  'default': 3
};

export const SkillCard = ({ 
  title, 
  icon = 'Code2', 
  data = [], 
  gradient = 'from-cyan-500 to-blue-500', 
  delay = 0,
  description,
  index = 0,
  className = ''
}) => {
  const IconComponent = iconComponents[icon] || Icons.Code2;
  
  // Enhanced animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: delay
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: delay + (i * 0.05) + 0.3,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  // Function to determine skill level based on skill name
  const getSkillLevel = (skill) => {
    return skillLevels[skill] || skillLevels.default;
  };

  // Function to get skill level color and width
  const getSkillLevelStyle = (skill) => {
    const level = getSkillLevel(skill);
    
    switch(level) {
      case 4: // Expert - Full
        return {
          width: '100%',
          color: 'bg-green-500',
          label: 'Expert'
        };
      case 3: // Advanced
        return {
          width: '75%',
          color: 'bg-blue-500',
          label: 'Advanced'
        };
      case 2: // Intermediate - Half
        return {
          width: '50%',
          color: 'bg-yellow-500',
          label: 'Intermediate'
        };
      case 1: // Beginner
        return {
          width: '25%',
          color: 'bg-orange-500',
          label: 'Beginner'
        };
      default:
        return {
          width: '60%',
          color: 'bg-gray-500',
          label: 'Proficient'
        };
    }
  };

  // Function to get skill level text color
  const getSkillTextColor = (skill) => {
    const level = getSkillLevel(skill);
    
    switch(level) {
      case 4: // Expert
        return 'text-green-600 dark:text-green-400';
      case 3: // Advanced
        return 'text-blue-600 dark:text-blue-400';
      case 2: // Intermediate
        return 'text-yellow-600 dark:text-yellow-400';
      case 1: // Beginner
        return 'text-orange-600 dark:text-orange-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={`
        relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl 
        border border-white/20 dark:border-slate-700/50 
        rounded-3xl p-6 sm:p-8 
        hover:shadow-2xl hover:shadow-cyan-500/10 
        transition-all duration-500 
        group overflow-hidden
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Gradient background overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
      
      {/* Animated border gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl`} />
      
      {/* Icon with enhanced styling */}
      <motion.div 
        className={`
          relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl 
          bg-gradient-to-br ${gradient} 
          flex items-center justify-center mb-6 
          shadow-2xl 
          group-hover:shadow-cyan-500/25
          transition-all duration-500
          before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500
        `}
        whileHover={{ 
          scale: 1.15,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.5 }
        }}
      >
        <IconComponent 
          size={32} 
          className="text-white filter drop-shadow-lg" 
        />
      </motion.div>
      
      {/* Title with enhanced typography */}
      <motion.h3 
        className="text-xl sm:text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
        whileHover={{ x: 5 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      {description && (
        <motion.p 
          className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          {description}
        </motion.p>
      )}
      
      {/* Skills grid with enhanced layout */}
      <motion.div 
        className="flex flex-wrap gap-3"
        layout
      >
        {data.map((skill, i) => {
          const levelStyle = getSkillLevelStyle(skill);
          const textColor = getSkillTextColor(skill);
          
          return (
            <motion.div
              key={skill}
              custom={i}
              variants={skillItemVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`text-sm font-medium ${textColor}`}>
                  {skill}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {levelStyle.label}
                </span>
              </div>
              
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-3">
                <motion.div 
                  className={`h-2 rounded-full ${levelStyle.color} transition-all duration-500`}
                  initial={{ width: 0 }}
                  whileInView={{ width: levelStyle.width }}
                  transition={{ 
                    delay: delay + (i * 0.05) + 0.5, 
                    duration: 1.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Legend for skill levels */}
      <motion.div 
        className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50 text-xs text-slate-500 dark:text-slate-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.8 }}
      >
        <span>Beginner</span>
        <span>Intermediate</span>
        <span>Advanced</span>
        <span>Expert</span>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${gradient} rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`}
        whileHover={{ scale: 2, rotate: 180 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
};

export default SkillCard;