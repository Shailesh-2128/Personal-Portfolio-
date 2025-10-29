import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import { NAVIGATION, RESUME_DATA } from '../../data/resumeData';

// Import your resume file (adjust path as needed)
import resumePDF from '../../assets/Shailesh_jiwana_Resume (2).pdf';

export const Navigation = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  isScrolled, 
  activeSection 
}) => {
  
  const handleDownloadResume = () => {
    // Method 1: Open in new tab
    window.open(resumePDF, '_blank');
    
    // Method 2: Force download (alternative approach)
    // const link = document.createElement('a');
    // link.href = resumePDF;
    // link.download = 'Shailesh_Jiwana_Resume.pdf';
    // link.click();
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {RESUME_DATA.PERSONAL.NAME.split(' ')[0]}
          </span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {NAVIGATION.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative transition-colors font-medium group ${
                activeSection === item.toLowerCase() 
                  ? 'text-cyan-400' 
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </motion.a>
          ))}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold flex items-center gap-2 text-sm lg:text-base"
            onClick={handleDownloadResume}
          >
            <Download size={18} />
            Resume
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-6 py-4 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {NAVIGATION.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`py-3 transition-colors font-medium border-b border-slate-800 last:border-b-0 ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold flex items-center justify-center gap-2 mt-2"
                onClick={handleDownloadResume}
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;