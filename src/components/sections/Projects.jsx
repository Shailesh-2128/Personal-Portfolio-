import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import ProjectCard from '../ui/ProjectCard';
import SectionHeader from '../ui/SectionHeader';

export const Projects = () => (
  <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/30 relative">
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        badge="My Projects"
        title="Featured Work"
        description=""
        badgeColor="pink"
        gradient="from-purple-400 to-pink-400"
      />

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {RESUME_DATA.PROJECTS.map((project, idx) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;