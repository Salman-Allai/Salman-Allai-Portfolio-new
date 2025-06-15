import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'React', 'Full Stack', 'Frontend'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'React',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Frontend',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Responsive portfolio website with modern design',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'React',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Weather dashboard with location-based forecasts',
      technologies: ['React', 'API Integration', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      category: 'Full Stack',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full-featured blog platform with admin panel',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Landing Page',
      category: 'Frontend',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-converting landing page with animations',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#222831] relative overflow-hidden">
      {/* Background decorative elements - same as other sections */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-4 w-16 h-32 bg-gradient-to-b from-[#00adb5]/20 to-transparent rounded-lg transform rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-8 w-12 h-24 bg-gradient-to-t from-[#00adb5]/20 to-transparent rounded-lg transform -rotate-12 hidden lg:block"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#393e46]/30 to-transparent"></div>
        
        {/* Additional decorative elements for visual richness */}
        <div className="absolute top-16 right-16 w-8 h-16 bg-gradient-to-b from-[#00adb5]/10 to-transparent rounded-lg transform -rotate-45 hidden xl:block"></div>
        <div className="absolute bottom-32 left-32 w-6 h-12 bg-gradient-to-t from-[#00adb5]/15 to-transparent rounded-lg transform rotate-30 hidden xl:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] mb-6">
            <span className="text-[#eeeeee]">My recent</span>
            <span className="text-[#00adb5]"> works</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-200 font-['Poppins'] ${
                  activeFilter === filter
                    ? 'bg-[#00adb5] text-[#eeeeee]'
                    : 'bg-[#393e46]/50 text-[#eeeeee] hover:bg-[#393e46]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#393e46]/30 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#00adb5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#00adb5] text-sm font-bold font-['Poppins']">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="text-[#eeeeee]/60 hover:text-[#00adb5] transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-[#eeeeee]/60 hover:text-[#00adb5] transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-[#eeeeee] text-xl font-bold mb-2 font-['Poppins']">
                  {project.title}
                </h3>
                
                <p className="text-[#eeeeee]/75 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#00adb5]/20 text-[#00adb5] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;