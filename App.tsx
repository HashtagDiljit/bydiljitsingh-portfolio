
import React, { useState } from 'react';
import { Section, Project } from './types';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import { PROJECTS, EXPERIENCES, EDUCATION, SKILLS, WIKI_ENTRIES } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openContributions, setOpenContributions] = useState<number[]>([0]); // Default first one open

  // Using the filename of the photo provided by the user
  const profileImageUrl = "Diljit Singh.jpg"; 

  const toggleContribution = (index: number) => {
    setOpenContributions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-24 animate-in fade-in duration-700">
            <section className="min-h-[70vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <div className="flex-1 text-left">
                <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block">MEng Automotive Engineering @ Birmingham</span>
                <h1 className="text-6xl sm:text-8xl font-serif mb-8 leading-[1.1] tracking-tight">
                  Engineering with <span className="italic text-gray-400">purpose.</span>
                </h1>
                <p className="max-w-xl text-lg text-gray-600 leading-relaxed mb-10">
                  I'm Diljit Singh, a final year mechanical engineering student. This is my professional portfolio reflecting my journey, including projects, achievements, and my CV.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <button 
                    onClick={() => setActiveSection('projects')}
                    className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-95"
                  >
                    Explore Projects
                  </button>
                  <div className="flex space-x-3">
                    <a href="https://www.linkedin.com/in/diljitsingh03/" target="_blank" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/hashtagdiljit/" target="_blank" className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-72 h-72 sm:w-[450px] sm:h-[450px]">
                   <div className="absolute inset-0 bg-gray-50 rounded-3xl rotate-3"></div>
                   <div className="absolute inset-0 border-2 border-black rounded-3xl -rotate-2 transition-transform hover:rotate-0 duration-500 z-10"></div>
                   <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl z-20">
                     <img 
                      src={profileImageUrl} 
                      alt="Diljit Singh" 
                      className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                     />
                   </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gray-100 pt-20">
              <div className="md:col-span-1">
                <h2 className="text-xl font-bold uppercase tracking-widest text-black">The Mindset</h2>
              </div>
              <div className="md:col-span-2 text-lg text-gray-500 space-y-8 leading-relaxed">
                <p>
                  My engineering philosophy is rooted in continuous refinement. Whether I'm optimizing a 
                  suspension linkage or editing a cinematic sequence, the goal remains the same: 
                  uncompromising quality and structural integrity.
                </p>
                <p>
                  My background in <span className="text-black font-semibold">Olympic Weightlifting</span> isn't just a hobby—it's 
                  the foundation of my work ethic. It demands focus, technical excellence, and the 
                  persistence to push through failures until a goal is achieved.
                </p>
              </div>
            </section>
          </div>
        );

      case 'projects':
        if (selectedProject) {
          return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto px-4 pb-24">
              <button 
                onClick={() => setSelectedProject(null)}
                className="group flex items-center space-x-2 text-gray-400 hover:text-black mb-12 font-bold uppercase tracking-widest text-xs transition-colors"
              >
                <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                <span>Back to All Projects</span>
              </button>

              {/* Title & Summary */}
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-serif text-black mb-6 leading-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed max-w-4xl">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Metadata Badges */}
              <div className="flex flex-wrap gap-3 mb-16">
                {selectedProject.teamSize && (
                  <div className="flex items-center bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-600">
                    <i className="fas fa-users mr-3 text-gray-400"></i>
                    <span>Team size: {selectedProject.teamSize}</span>
                  </div>
                )}
                {selectedProject.role && (
                  <div className="flex items-center bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-600">
                    <i className="fas fa-star mr-3 text-gray-400"></i>
                    <span>Role: {selectedProject.role}</span>
                  </div>
                )}
                {selectedProject.duration && (
                  <div className="flex items-center bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-600">
                    <i className="fas fa-calendar mr-3 text-gray-400"></i>
                    <span>Duration: {selectedProject.duration}</span>
                  </div>
                )}
                {selectedProject.tools && (
                  <div className="flex items-center bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-600">
                    <i className="fas fa-pencil mr-3 text-gray-400"></i>
                    <span>Tools: {selectedProject.tools.join(', ')}</span>
                  </div>
                )}
              </div>

              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden mb-24 shadow-2xl">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="p-4 bg-gray-50 text-xs text-gray-400 text-center italic">
                  Concept image for our project (illustrative visual).
                </div>
              </div>

              {/* Context Section */}
              <section className="mb-24">
                <h3 className="text-3xl font-serif text-black mb-8">Context & Challenge</h3>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">{selectedProject.context}</p>
              </section>

              {/* Objectives & KPIs */}
              {selectedProject.objectives && (
                <section className="mb-24">
                  <h3 className="text-3xl font-serif text-black mb-8">Objectives & KPIs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedProject.objectives.map((obj, i) => (
                      <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                        <i className={`fas ${obj.icon} text-black text-xl mb-6`}></i>
                        <h4 className="font-bold text-lg mb-2">{obj.label}</h4>
                        <p className="text-gray-500">{obj.value}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Leadership Block */}
              {selectedProject.leadership && (
                <section className="mb-24">
                  <h3 className="text-3xl font-serif text-black mb-8">My Role & Leadership</h3>
                  <div className="space-y-8">
                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">{selectedProject.leadership.summary}</p>
                    
                    <div className="relative pl-12 py-4">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-100 rounded-full"></div>
                      <p className="text-xl italic text-gray-700 leading-relaxed">
                        "{selectedProject.leadership.quote}"
                      </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                       <ul className="space-y-4">
                         {selectedProject.leadership.stats.map((stat, i) => {
                           const parts = stat.split(/(\d+)/);
                           return (
                             <li key={i} className="flex items-center text-lg text-gray-700">
                               <span className="w-1.5 h-1.5 rounded-full bg-black mr-4"></span>
                               <span>
                                 {parts.map((p, idx) => /\d+/.test(p) ? <strong key={idx}>{p}</strong> : p)}
                               </span>
                             </li>
                           );
                         })}
                       </ul>
                    </div>
                  </div>
                </section>
              )}

              {/* Technical Contributions - DROPDOWNS */}
              {selectedProject.technicalContributions && (
                <section className="mb-24">
                  <h3 className="text-3xl font-serif text-black mb-12">Technical Contributions</h3>
                  <div className="space-y-4">
                    {selectedProject.technicalContributions.map((tech, i) => {
                      const isOpen = openContributions.includes(i);
                      return (
                        <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                          <button 
                            onClick={() => toggleContribution(i)}
                            className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
                          >
                            <h4 className="text-2xl font-bold tracking-tight">{tech.title}</h4>
                            <i className={`fas fa-chevron-down text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                          </button>
                          
                          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-8 pt-0 space-y-8 animate-in fade-in duration-500">
                              <p className="text-lg text-gray-600 leading-relaxed border-t border-gray-50 pt-8">
                                {tech.description}
                              </p>
                              <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
                                <img 
                                  src={tech.imageUrl} 
                                  alt={tech.title} 
                                  className="w-full h-auto object-cover"
                                />
                              </div>
                              {tech.subtext && (
                                <p className="text-xs text-gray-400 italic text-center px-4">
                                  {tech.subtext}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Achievements & Metrics */}
              <section className="mb-24">
                <h3 className="text-3xl font-serif text-black mb-8">What We Achieved</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {selectedProject.achievementMetrics?.map((metric, i) => (
                    <div key={i} className="bg-black text-white p-8 rounded-2xl text-center flex flex-col justify-center min-h-[160px]">
                      <span className="text-2xl md:text-3xl font-black mb-2">{metric.value}</span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
                  {selectedProject.achievementsSummary}
                </p>

                <div className="mt-12">
                   <a 
                    href={selectedProject.reportUrl}
                    className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-95"
                   >
                     <i className="fas fa-file-pdf"></i>
                     <span className="uppercase text-xs tracking-widest">View Full Technical Report</span>
                   </a>
                </div>
              </section>
            </div>
          );
        }

        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 px-4">
            <div className="max-w-2xl mb-20">
              <h2 className="text-5xl font-serif mb-6">Technical Portfolio</h2>
              <p className="text-gray-500 text-lg">Detailed case studies focusing on CAD, FEA, CFD, and Manufacturing Engineering.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PROJECTS.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-black transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                       <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                         {project.date}
                       </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:underline">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                    <div className="flex items-center text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      View Project Details <i className="fas fa-arrow-right ml-2 text-[10px]"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'cv':
        return (
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24 px-4">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between border-b-4 border-black pb-10">
              <div>
                <h2 className="text-6xl font-serif mb-2 uppercase tracking-tighter">Resume</h2>
                <p className="text-gray-400 font-bold tracking-widest uppercase text-sm">Diljit Singh • Birmingham, UK</p>
              </div>
              <a href="#" className="mt-8 sm:mt-0 flex items-center space-x-3 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                <i className="fas fa-file-pdf"></i>
                <span className="uppercase text-xs tracking-widest">Download Full CV</span>
              </a>
            </header>

            {/* Expertise Section */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-300">Expertise</div>
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-10">
                {SKILLS.map(skill => (
                  <div key={skill.category}>
                    <h4 className="font-black text-sm uppercase tracking-widest mb-4 border-l-2 border-black pl-3">{skill.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <span key={item} className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-100">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-gray-100">
              <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-300">Education</div>
              <div className="md:col-span-3 space-y-12">
                {EDUCATION.map(edu => (
                  <div key={edu.id}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h4 className="font-bold text-xl">{edu.institution}</h4>
                      <span className="text-sm font-bold text-gray-400 tracking-widest">{edu.period}</span>
                    </div>
                    <p className="text-lg text-black font-medium mb-3">{edu.degree}</p>
                    <p className="text-gray-500">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-gray-100">
              <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-300">Experience</div>
              <div className="md:col-span-3 space-y-16">
                {EXPERIENCES.map(exp => (
                  <div key={exp.id} className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                      <h4 className="font-black text-2xl uppercase tracking-tight">{exp.company}</h4>
                      <span className="text-sm font-bold text-gray-400 tracking-widest">{exp.period}</span>
                    </div>
                    <p className="text-lg text-black font-serif italic mb-6">{exp.role}</p>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                          <span className="mr-3 text-black">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'wiki':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 px-4">
            <div className="max-w-3xl mb-20">
              <h2 className="text-5xl font-serif mb-6">Lessons Learnt</h2>
              <p className="text-gray-500 text-lg">A growing archive of reflections from engineering labs, mentorship sessions, and personal development.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {WIKI_ENTRIES.map(entry => (
                <div key={entry.id} className="group flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-48 text-gray-300 font-bold tracking-widest uppercase text-xs pt-1">
                    {entry.date} / {entry.category}
                  </div>
                  <div className="flex-1 pb-12 border-b border-gray-100">
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-gray-600 transition-colors">{entry.title}</h3>
                    <p className="text-gray-600 text-xl leading-relaxed mb-8">{entry.content}</p>
                    <div className="flex flex-wrap gap-3">
                      {entry.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest border border-gray-200 px-3 py-1 rounded">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const handleNavChange = (section: Section) => {
    setActiveSection(section);
    setSelectedProject(null); // Reset project view when navigating
    setOpenContributions([0]); // Reset dropdowns
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={handleNavChange} />
      
      <main className="max-w-6xl mx-auto py-12">
        {renderContent()}
      </main>

      <footer className="max-w-6xl mx-auto mt-32 py-16 px-4 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
           <div className="space-y-4">
             <div className="text-2xl font-bold tracking-tighter">by<span className="text-gray-400">diljitsingh</span></div>
             <p className="text-gray-400 text-sm max-w-xs font-medium">Mechanical Engineering student at University of Birmingham. Driven by purpose and technical excellence.</p>
           </div>
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <a href="https://www.linkedin.com/in/diljitsingh03/" className="text-gray-400 hover:text-black font-bold text-xs uppercase tracking-widest transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/hashtagdiljit/" className="text-gray-400 hover:text-black font-bold text-xs uppercase tracking-widest transition-colors">Instagram</a>
              <a href="mailto:diljitsingh2003@gmail.com" className="text-gray-400 hover:text-black font-bold text-xs uppercase tracking-widest transition-colors">Email</a>
           </div>
        </div>
        <div className="mt-16 text-center text-[10px] font-bold tracking-[0.3em] uppercase text-gray-300">
          © 2024 bydiljitsingh — Birmingham, UK
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
