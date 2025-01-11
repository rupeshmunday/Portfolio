import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-neutral-900 min-h-[70vh] flex items-center"> 
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hello, I'm <span className="text-blue-500">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Crafting digital experiences through elegant code and design
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all">
              Contact Me
            </a>
            <a href="#projects" className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-neutral-900 transition-all">
              View Work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;