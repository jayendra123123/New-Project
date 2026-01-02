import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-4 sm:px-8 border-t border-dark-text/10 dark:border-white/10 bg-white dark:bg-[#221f10]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl text-primary">emoji_emotions</span>
            <h2 className="text-lg font-black tracking-tight dark:text-white">Jayendra Malla</h2>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/jayendra123123" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white dark:bg-[#332f1d] rounded-full border-2 border-dark-text dark:border-white/20 shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-dark-text dark:text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white dark:bg-[#332f1d] rounded-full border-2 border-dark-text dark:border-white/20 shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-[#0077b5]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white dark:bg-[#332f1d] rounded-full border-2 border-dark-text dark:border-white/20 shadow-comic-sm hover:shadow-comic hover:-translate-y-1 transition-all text-[#FFA116]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
            </a>
          </div>

          <p className="text-sm font-medium text-dark-text/60 dark:text-white/60 text-center md:text-left">
            © {currentYear} Jayendra Malla. All rights reserved.
          </p>
        </div>
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
