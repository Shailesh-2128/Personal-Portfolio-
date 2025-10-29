import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const Footer = () => (
  <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-slate-800/50 bg-slate-900/30 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 sm:gap-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {RESUME_DATA.PERSONAL.NAME}
          </span>
        </div>
        <p className="text-slate-400 text-sm sm:text-base">
          © 2025 Portfolio. Built with ❤️ using React & Framer Motion
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;