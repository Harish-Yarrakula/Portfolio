import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-black justify-center items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div>
            <a href="#" className="text-white text-xl font-semibold">
              Developer
            </a>
            <p className="text-white mt-2 max-w-md">
              Building innovative digital solutions with a focus on clean code and exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-col items-end gap-4">
            <button onClick={scrollToTop} className="w-10 h-10 flex items-center justify-center text-white">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="flex text-white text-sm justify-center">© {currentYear} | Full Stack Developer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;