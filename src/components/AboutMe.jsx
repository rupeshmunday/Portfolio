import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-neutral-100 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 animate__animated animate__fadeInLeft">
            <div className="bg-neutral-800 rounded-2xl p-1">
              <div className="aspect-square w-full rounded-xl bg-neutral-700 flex items-center justify-center">
                {/* Rounded Rectangle Image */}
                <img 
                  src="./../../public/Image.jpeg" 
                  alt="Profile" 
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 animate__animated animate__fadeInRight">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800">About Me</h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              I'm a passionate web developer with a keen eye for detail and a drive for creating exceptional digital experiences. With expertise in modern web technologies, I transform ideas into elegant, functional solutions.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-2 text-neutral-800">3+ Years</h3>
                <p className="text-neutral-600">Professional Experience</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-2 text-neutral-800">50+</h3>
                <p className="text-neutral-600">Projects Completed</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#projects" className="bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-all">
                View Projects
              </a>
              <a href="#contact" className="border border-neutral-800 text-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-800 hover:text-white transition-all">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
