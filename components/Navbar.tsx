
import React from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems: { label: string; value: Section; icon: string }[] = [
    { label: 'About', value: 'about', icon: 'fa-user' },
    { label: 'Projects', value: 'projects', icon: 'fa-pencil-ruler' },
    { label: 'CV', value: 'cv', icon: 'fa-file-signature' },
    { label: 'Wiki', value: 'wiki', icon: 'fa-brain' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => setActiveSection('about')}
        >
          <span className="font-bold text-xl tracking-tighter">by<span className="text-gray-400">diljitsingh</span></span>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveSection(item.value)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeSection === item.value 
                  ? 'text-black border-b-2 border-black rounded-none' 
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              <span className="uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
