export const RESUME_DATA = {
  PERSONAL: {
    NAME: 'Shailesh Jiwana',
    TITLE: 'Full Stack Developer',
    COLLEGE: 'Prof. Ramkrishna More Arts, Commerce and Science College',
    LOCATION: 'Akurdi, Pune',
    EDUCATION: 'Bachelor of Science in Computer Science (Third Year)',
    CGPA: '8.7/10',
    EMAIL: 'shaileshjiwana128@gmail.com',
    GITHUB: 'https://github.com/Shailesh-2128',
    LINKEDIN: 'https://www.linkedin.com/in/shailesh-jiwana-944b9b380/?trk=opento_sprofile_goalscard',
    TAGLINE: 'Passionate and results-driven Software Developer with hands-on experience in React.js, Node.js and Java. Proficient in developing full-stack web applications, real-time chat systems, and AI-powered tools.'
  },
  SKILLS: {
    languages: ['JavaScript', 'Java', 'C', 'HTML', 'CSS'],
    frontend: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'Material-UI'],
    backend: ['Node.js', 'Express.js', 'Socket.IO', 'WebRTC'],
    databases: ['MySQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'Linux', 'IntelliJ IDEA']
  },
  PROJECTS: [
    {
      title: 'AI Powered Code Reviewer',
      description: 'Built an AI-powered web application integrating Google Gemini API to provide intelligent code review and real-time feedback.',
      tech: ['React.js', 'Node.js', 'Express.js', 'Google Gemini API'],
      gradient: 'from-purple-600 to-pink-600',
      liveLink: '#',
      githubLink: 'https://github.com/Shailesh-2128/AI-Powered-Code-Reviewer-',
      icon: 'Cpu',
      featured: true
    },
    {
      title: 'Video Chat Application',
      description: 'Developed a peer-to-peer video chat platform using WebRTC for real-time video streaming and Node.js signaling server.',
      tech: ['React.js', 'Node.js', 'WebRTC', 'Tailwind CSS'],
      gradient: 'from-blue-600 to-cyan-600',
      liveLink: '#',
      githubLink: 'https://github.com/Shailesh-2128/Video-Chat-Application',
      icon: 'Video',
      featured: false
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Created a real-time messaging system with room-based chats and live message updates using Socket.IO.',
      tech: ['React.js', 'Node.js', 'Socket.IO'],
      gradient: 'from-green-600 to-teal-600',
      liveLink: '#',
      githubLink: 'https://github.com/Shailesh-2128/Chat-Application-',
      icon: 'MessageCircle',
      featured: false
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed a modern, responsive portfolio website featuring project showcases and smooth animations.',
      tech: ['React.js', 'Framer Motion', 'Tailwind CSS'],
      gradient: 'from-orange-600 to-red-600',
      liveLink: '#',
      githubLink: 'https://github.com/Shailesh-2128/portfolio-website',
      icon: 'Code2',
      featured: false
    }
  ],
  EDUCATION: [
    {
      degree: 'Bachelor of Science in Computer Science (Third Year)',
      institution: 'Prof. Ramkrishna More Arts, Commerce and Science College',
      location: 'Akurdi, Pune',
      score: 'CGPA: 8.7/10',
      period: 'June 2023 – Present'
    },
    {
      degree: 'Higher Secondary Certificate (HSC) – 12th Grade',
      institution: 'Maharashtra State Board of Higher Secondary Education',
      location: 'Pune, India',
      score: 'Percentage: 63.3%',
      period: 'March 2023'
    }
  ],
  STRENGTHS: [
    {
      title: 'Problem Solving',
      description: 'Strong analytical skills with ability to break down complex problems and implement effective solutions',
      icon: 'Cpu'
    },
    {
      title: 'Teamwork and Collaboration',
      description: 'Experience working in team environments with excellent communication skills',
      icon: 'Users'
    },
    {
      title: 'Quick Adaptation to New Technologies',
      description: 'Fast learner with proven ability to quickly master new frameworks and tools',
      icon: 'Zap'
    }
  ],
  STATS: [
    { number: '4+', label: 'Projects Completed' },
    { number: '8.7', label: 'CGPA Score' },
    { number: '5+', label: 'Tech Stacks' },
    { number: '3', label: 'Certificates' }
  ],
  SOCIAL_LINKS: [
    { 
      icon: 'Github', 
      label: 'GitHub', 
      color: 'hover:bg-purple-500/20 hover:border-purple-500/50',
      link: 'https://github.com/Shailesh-2128'
    },
    { 
      icon: 'Linkedin', 
      label: 'LinkedIn', 
      color: 'hover:bg-blue-500/20 hover:border-blue-500/50',
      link: 'https://www.linkedin.com/in/shailesh-jiwana-944b9b380/?trk=opento_sprofile_goalscard'
    },
    { 
      icon: 'Mail', 
      label: 'Email', 
      color: 'hover:bg-cyan-500/20 hover:border-cyan-500/50',
      link: 'shaileshjiwana128@gmail.com'
    }
  ]
};

export const NAVIGATION = ['About', 'Skills', 'Projects', 'Education', 'Contact'];