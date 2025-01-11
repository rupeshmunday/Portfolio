import React, { useState } from 'react';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-neutral-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">Portfolio</a>
          <div className="lg:hidden">
            <button
              id="menu-toggle"
              className="text-white hover:text-gray-300"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className={`hidden lg:flex space-x-8 ${isMobileMenuOpen ? '' : 'hidden'}`}>
            <a href="#hero" className="text-white hover:text-gray-300">Home</a>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
            <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
            <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
            <a href="#experience" className="text-white hover:text-gray-300">Experience</a>
            <a href="#testimonials" className="text-white hover:text-gray-300">Testimonials</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </div>
        </div>
        <div id="mobile-menu" className={`flex flex-col space-y-4 lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#hero" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
          <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="#experience" className="text-white hover:text-gray-300">Experience</a>
          <a href="#testimonials" className="text-white hover:text-gray-300">Testimonials</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;