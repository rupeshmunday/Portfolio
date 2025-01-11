import React from 'react';
import './index.css'; 
import Nav from './components/Nav';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-gray-800 min-h-screen flex flex-col">
      <Nav />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
    
  );
}

export default App;