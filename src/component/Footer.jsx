import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-4 sm:px-8 border-t border-dark-text/10 dark:border-white/10 bg-white dark:bg-[#221f10]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side - Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl text-primary">emoji_emotions</span>
            <h2 className="text-lg font-black tracking-tight dark:text-white">Jayendra Malla</h2>
          </div>
          <p className="text-sm font-medium text-dark-text/60 dark:text-white/60 text-center md:text-left">
            © {currentYear} Jayendra Malla. All rights reserved.
          </p>
        </div>

        {/* Right Side - Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4">
          {[
            { name: 'Work', href: '#work' },
            { name: 'About Me', href: '#about-me' },
            { name: 'Skills', href: '#skills' },
            { name: 'Contact', href: '#contact-form' }
          ].map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="px-4 py-2 bg-white dark:bg-[#332f1d] dark:text-white rounded-full border-2 border-dark-text dark:border-white/20 font-bold text-sm shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
