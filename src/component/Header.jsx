import React, { useState } from 'react';

const Header = ({ toggleDarkMode, isDarkMode, onOpenResume }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-8 py-6 flex justify-center sticky top-0 z-50 pointer-events-none">
      <div className="w-full max-w-[1200px] flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 bg-white dark:bg-bg-card-dark px-5 py-2 rounded-full border-2 border-dark-text dark:border-white/20 shadow-comic transition-transform hover:-rotate-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-3xl text-primary">emoji_emotions</span>
          <h2 className="text-lg font-black tracking-tight dark:text-black">Jayendra Malla</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-white dark:bg-bg-card-dark border-2 border-dark-text dark:border-white/20 shadow-comic-sm hover:shadow-comic transition-all mr-2">
            <span className="material-symbols-outlined text-xl">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          {[
            { name: 'Work', href: '#work', icon: 'grid_view' },
            { name: 'About Me', href: '#about-me', icon: 'person' },
            { name: 'Skills', href: '#skills-certificates', icon: 'code'},
            { name: 'Certificates', href: '#skills-certificates', icon: 'workspace_premium'}
          ].map((link) => (
            link.isButton ? (
              <button
                key={link.name}
                onClick={onOpenResume}
                className="px-5 py-2 bg-white dark:bg-bg-card-dark dark:text-white rounded-full border-2 border-dark-text dark:border-white/20 font-bold text-sm shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">{link.icon}</span>
                {link.name}
              </button>
            ) : (
              <a 
                key={link.name}
                href={link.href}
                className="px-5 py-2 bg-white dark:bg-bg-card-dark dark:text-white rounded-full border-2 border-dark-text dark:border-white/20 font-bold text-sm shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all duration-200 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">{link.icon}</span>
                {link.name}
              </a>
            )
          ))}
          <a 
            href="#contact-form"
            className="ml-4 flex items-center justify-center rounded-full h-11 px-6 bg-primary border-2 border-dark-text text-dark-text text-sm font-black tracking-wide shadow-comic hover:shadow-comic-hover hover:-translate-y-1 transition-all"
          >
            Let's Talk!
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
           <button onClick={toggleDarkMode} className="p-2 rounded-full bg-white dark:bg-bg-card-dark border-2 border-dark-text dark:border-white/20 shadow-comic-sm">
            <span className="material-symbols-outlined text-xl dark:text-white">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center size-12 bg-white dark:bg-bg-card-dark rounded-full border-2 border-dark-text dark:border-white/20 shadow-comic dark:text-white"
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[100px] z-40 bg-white dark:bg-bg-dark p-6 pointer-events-auto border-t-4 border-dark-text dark:border-white/10">
          <nav className="flex flex-col gap-4">
            {[
              { name: 'Work', href: '#work', icon: 'grid_view' },
              { name: 'About Me', href: '#about-me', icon: 'person' },
              { name: 'Skills', href: '#skills-certificates', icon: 'code' },
              { name: 'Certificates', href: '#skills-certificates', icon: 'workspace_premium' },
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black p-4 border-b-2 border-dashed border-dark-text/20 dark:text-white flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-3xl text-primary">{link.icon}</span>
                {link.name}
              </a>
            ))}
            <a 
              href="#contact-form"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 w-full py-4 bg-primary border-2 border-dark-text text-dark-text font-black rounded-xl shadow-comic flex justify-center items-center"
            >
              Let's Talk!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
