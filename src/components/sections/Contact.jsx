import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import SectionHeader from '../ui/SectionHeader';

const iconComponents = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail
};

export const Contact = () => (
  <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 relative">
    <div className="max-w-4xl mx-auto text-center">
      <SectionHeader
        badge="Get In Touch"
        title="Let's Work Together"
        description="Have a project in mind? I'd love to hear about it. Let's create something amazing together!"
        badgeColor="cyan"
        gradient="from-cyan-400 to-purple-400"
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-8"
      >
        {RESUME_DATA.SOCIAL_LINKS.map((social) => (
          <SocialLink key={social.label} social={social} />
        ))}
      </motion.div>

      {/* Additional Contact Info */}
      <ContactInfo />
    </div>
  </section>
);

const SocialLink = ({ social }) => {
  const IconComponent = iconComponents[social.icon];
  
  return (
    <motion.a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/50 border-2 border-slate-700 flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-sm ${social.color}`}
      aria-label={social.label}
    >
      <IconComponent size={24} className="sm:w-7 sm:h-7 text-slate-400 hover:text-white transition-colors" />
    </motion.a>
  );
};

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.8 }}
    className="mt-12 p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl max-w-md mx-auto"
  >
    <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
    <div className="space-y-3 text-left">
      <ContactItem 
        label="Email" 
        value={RESUME_DATA.PERSONAL.EMAIL} 
        href={`mailto:${RESUME_DATA.PERSONAL.EMAIL}`}
      />
      <ContactItem 
        label="GitHub" 
        value="Shailesh-2128" 
        href={RESUME_DATA.PERSONAL.GITHUB}
      />
      <ContactItem 
        label="Location" 
        value={RESUME_DATA.PERSONAL.LOCATION} 
      />
    </div>
  </motion.div>
);

const ContactItem = ({ label, value, href }) => (
  <div className="flex items-center justify-between">
    <span className="text-slate-400 text-sm">{label}:</span>
    {href ? (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
      >
        {value}
      </a>
    ) : (
      <span className="text-white text-sm">{value}</span>
    )}
  </div>
);

export default Contact;