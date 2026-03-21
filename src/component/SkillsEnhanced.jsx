import React from 'react';
import ToggleAnimation from '../animations/ToggleAnimation';
import TechStackCarousel from '../animations/TechStackCarousel';
import { ScrollRevealText } from '../animations/ScrollRevealText';

const SkillsEnhanced = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'code',
      description: 'Building responsive and interactive user interfaces with modern frameworks and libraries.',
      keyHighlights: [
        'Responsive & Mobile-First Design',
        'Interactive UI/UX Components',
        'State Management & Performance',
        'Accessibility & SEO Optimization'
      ],
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'GSAP', 'Three.js'],
      details: [
        { category: 'Core', items: ['React Hooks', 'Component Architecture', 'Props & State Management', 'Custom Hooks'] },
        { category: 'Styling', items: ['Tailwind CSS', 'CSS Grid/Flexbox', 'Responsive Design', 'Dark Mode Implementation'] },
        { category: 'Animation', items: ['GSAP Animations', 'Three.js 3D', 'Scroll Triggers', 'Transition Effects'] },
        { category: 'Best Practices', items: ['Code Splitting', 'Performance Optimization', 'SEO Optimization', 'Web Accessibility (WCAG)'] }
      ]
    },
    {
      title: 'Backend Development',
      icon: 'dns',
      description: 'Creating robust server-side applications, APIs, and scalable solutions.',
      keyHighlights: [
        'RESTful API Development',
        'Server Architecture & Design',
        'Authentication & Security',
        'Database Integration'
      ],
      skills: ['Node.js', 'Express.js', 'PHP', 'REST API', 'Authentication'],
      details: [
        { category: 'Runtime & Framework', items: ['Node.js', 'Express.js', 'Middleware', 'Routing & Controllers'] },
        { category: 'APIs & Integration', items: ['REST API Design', 'Request/Response Handling', 'Error Handling', 'API Documentation'] },
        { category: 'Security', items: ['JWT Authentication', 'Password Hashing', 'Input Validation', 'CORS & Security Headers'] },
        { category: 'Deployment', items: ['Environment Variables', 'Server Configuration', 'Process Management', 'Logging & Monitoring'] }
      ]
    },
    {
      title: 'Database Management',
      icon: 'storage',
      description: 'Designing and managing both SQL and NoSQL databases for optimal performance.',
      keyHighlights: [
        'Schema Design & Optimization',
        'Query Optimization',
        'Data Integrity & Relations',
        'Indexing & Performance Tuning'
      ],
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization'],
      details: [
        { category: 'NoSQL', items: ['MongoDB Collections', 'Document Structure', 'Aggregation Pipeline', 'Indexing Strategies'] },
        { category: 'SQL', items: ['Relational Design', 'Normalization', 'Complex Queries (JOINs)', 'Transaction Management'] },
        { category: 'Optimization', items: ['Query Optimization', 'Index Creation', 'Caching Strategies', 'Performance Monitoring'] },
        { category: 'Management', items: ['Backup & Recovery', 'Data Migration', 'Security & Permissions', 'Scaling Approaches'] }
      ]
    },
    {
      title: 'Tools & Deployment',
      icon: 'build_circle',
      description: 'Version control, deployment pipelines, and cloud services for production-ready applications.',
      keyHighlights: [
        'CI/CD Pipeline Management',
        'Cloud Deployment',
        'Version Control & Collaboration',
        'Containerization & DevOps'
      ],
      skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Render', 'AWS', 'VS Code'],
      details: [
        { category: 'Version Control', items: ['Git Workflow', 'Branch Management', 'Pull Request Reviews', 'Commit Best Practices'] },
        { category: 'Deployment Platforms', items: ['Vercel (Frontend)', 'Netlify (Static/JAMstack)', 'Render (Backend)', 'AWS Services'] },
        { category: 'Development Tools', items: ['VS Code Extensions', 'Build Tools (Webpack, Vite)', 'Package Managers (npm, yarn)', 'Debugging Tools'] },
        { category: 'DevOps & CI/CD', items: ['GitHub Actions', 'Automated Testing', 'Environment Management', 'Monitoring & Logging'] }
      ]
    }
  ];

  return (
    <section id="skills-enhanced" className="w-full py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-bg-dark dark:to-bg-dark/80 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-primary/20 border-2 border-primary rounded-full mb-4">
            <span className="text-sm font-black uppercase tracking-widest text-dark-text">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-dark-text via-primary to-dark-text dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent mb-4 leading-tight">
            <ScrollRevealText type="chars">What I Do</ScrollRevealText>
          </h2>
          <p className="text-lg md:text-xl text-dark-text/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
            <ScrollRevealText type="words">
              Click on each section to explore my technical expertise, skills, and specialized knowledge areas
            </ScrollRevealText>
          </p>
        </div>

        {/* Skills Grid with Expandable Items */}
        <div className="grid grid-cols-1 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <ToggleAnimation 
              key={`skill-${index}`} 
              title={category.title} 
              icon={category.icon}
            >
              {/* Description */}
              <p className="text-dark-text/70 dark:text-white/70 mb-6 leading-relaxed text-base sm:text-lg font-medium">
                {category.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-8">
                <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-3">Key Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {category.keyHighlights.map((highlight, i) => (
                    <div key={`highlight-${i}`} className="flex items-start gap-2">
                      <span className="text-primary font-black mt-1 text-lg flex-shrink-0">✓</span>
                      <span className="text-dark-text/80 dark:text-white/80 text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Topics */}
              <div className="mb-8">
                <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-4">Technical Areas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.details.map((detail, detailIdx) => (
                    <div 
                      key={`detail-${detailIdx}`} 
                      className="bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-primary/20 dark:border-primary/30"
                    >
                      <h5 className="font-black text-xs uppercase tracking-wider text-primary mb-2">
                        {detail.category}
                      </h5>
                      <ul className="space-y-1">
                        {detail.items.map((item, itemIdx) => (
                          <li key={`item-${itemIdx}`} className="text-xs sm:text-sm text-dark-text/70 dark:text-white/70">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={`skill-tag-${i}`}
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-yellow-400/20 border-2 border-primary/40 dark:border-primary/30 rounded-lg font-bold text-xs sm:text-sm text-dark-text dark:text-white hover:border-primary dark:hover:border-primary/60 hover:scale-105 transition-all duration-300 cursor-default"
                    > 
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ToggleAnimation>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 sm:my-20 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        {/* Tech Stack Carousel Section */}
        <div className="mt-20 relative">
          {/* Section Background */}
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 to-blue-400/10 dark:from-primary/5 dark:to-blue-400/5 rounded-3xl blur-2xl -z-10"></div>
          
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary/20 border-2 border-primary rounded-full mb-4">
              <span className="text-sm font-black uppercase tracking-widest text-dark-text">3D Experience</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-dark-text via-primary to-dark-text dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent mb-4 leading-tight">
              <ScrollRevealText type="chars">Tech Stack Universe</ScrollRevealText>
            </h3>
            <p className="text-lg md:text-xl text-dark-text/75 dark:text-white/75 max-w-3xl mx-auto leading-relaxed">
              Explore an interactive 3D visualization of all the technologies I work with. Each sphere represents a different tech—hover to interact!
            </p>
          </div>
          
          <div className="relative p-2 sm:p-4 md:p-6">
            <TechStackCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;
