import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, ExternalLink, User } from "lucide-react";
import { RESUME_DATA } from "../../data/resumeData";
import { StaggerContainer, StatsCard } from "../ui";
import ScrollIndicator from "./ScrollIndicator";

import profilePicture from "../../assets/images/ProfilePicture.jpg";

export const Hero = ({ opacity, scale }) => (
  <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
    
    <motion.div 
      style={{ opacity, scale }}
      className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10"
    >
      {/* Text Content */}
      <StaggerContainer className="text-center lg:text-left">
        <motion.div
          className="mb-6"
        >
          <span className="inline-flex px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
            👋 Hello, I'm {RESUME_DATA.PERSONAL.NAME}
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
        >
          Full Stack
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Developer
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
        >
          {RESUME_DATA.PERSONAL.TAGLINE}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 40px rgba(34, 211, 238, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl font-semibold flex items-center justify-center gap-3 group text-sm sm:text-base"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>View My Projects</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "rgb(34, 211, 238)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-600 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all group text-sm sm:text-base"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {RESUME_DATA.STATS.map((stat, index) => (
            <StatsCard key={stat.label} {...stat} index={index} />
          ))}
        </motion.div>
      </StaggerContainer>

      {/* Profile Picture */}
      <ProfilePictureWithFallback />
    </motion.div>

    <ScrollIndicator />
  </section>
);

const ProfilePictureWithFallback = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotate: 5 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
    >
      <div className="relative">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl">
          {!imageError ? (
            <img
              src={profilePicture}
              alt={RESUME_DATA.PERSONAL.NAME}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User size={32} className="sm:w-12 sm:h-12 text-cyan-400" />
                </div>
                <p className="text-sm">Profile Picture</p>
              </div>
            </div>
          )}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        </div>

        <FloatingIcon 
          icon={Code2} 
          position="top-left" 
          gradient="from-cyan-500 to-blue-500"
          animation={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        />
        <FloatingIcon 
          icon={Sparkles} 
          position="bottom-right" 
          gradient="from-purple-500 to-pink-500"
          animation={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          delay={1}
        />
      </div>
    </motion.div>
  );
};

const FloatingIcon = ({ icon: Icon, position, gradient, animation, delay = 0 }) => {
  const positionClasses = {
    'top-left': '-top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20',
    'bottom-right': '-bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16'
  };

  return (
    <motion.div
      animate={animation}
      transition={{ 
        repeat: Infinity, 
        duration: position === 'top-left' ? 4 : 3,
        ease: "easeInOut",
        delay
      }}
      className={`absolute ${positionClasses[position]} bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20`}
    >
      <Icon size={position === 'top-left' ? 24 : 20} className="text-white" />
    </motion.div>
  );
};

export default Hero;