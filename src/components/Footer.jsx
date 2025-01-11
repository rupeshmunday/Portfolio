import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa'; // Import icons

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const scrollToTopButton = document.getElementById('scroll-to-top');
        if (scrollToTopButton) {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.remove('opacity-0', 'invisible');
                scrollToTopButton.classList.add('opacity-100', 'visible');
            } else {
                scrollToTopButton.classList.add('opacity-0', 'invisible');
                scrollToTopButton.classList.remove('opacity-100', 'visible');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer id="footer" className="bg-neutral-900 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* About */}
                    <div className="animate__animated animate__fadeIn">
                        <h3 className="text-2xl font-bold text-white mb-4">Portfolio</h3>
                        <p className="text-gray-400 mb-6">Crafting digital experiences through elegant code and design solutions.</p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/rupeshmunday" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub className="w-6 h-6" /> {/* GitHub Icon */}
                            </a>
                            <a href="https://www.linkedin.com/in/rupesh-kumar-b43585121/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin className="w-6 h-6" /> {/* LinkedIn Icon */}
                            </a>
                            <a href="https://x.com/RuRupeshj620" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter className="w-6 h-6" /> {/* Twitter Icon */}
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="animate__animated animate__fadeIn" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="animate__animated animate__fadeIn" style={{ animationDelay: '0.4s' }}>
                        <h3 className="text-white font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="animate__animated animate__fadeIn" style={{ animationDelay: '0.6s' }}>
                        <h3 className="text-white font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe to receive updates and news.</p>
                        <form className="flex" onSubmit={handleSubscribe}>
                            <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 px-4 py-2 rounded-l-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8">
                    <div className="text-center text-gray-400">
                        <p>© 2024 Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </div>

            <button id="scroll-to-top" onClick={scrollToTop} className="fixed bottom-8 right-8 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all opacity-0 invisible">
                <FaArrowUp className="w-6 h-6" /> {/* Scroll to top icon */}
            </button>
        </footer>
    );
};

export default Footer;