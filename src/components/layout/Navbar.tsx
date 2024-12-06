import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Button from '../shared/Button';
import Logo from '../shared/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full hover:bg-gray-200/20 ${
                  isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
                }`}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <Button href="#contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-gray-200/20 ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-600 hover:text-blue-600 focus:outline-none ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <MobileNavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ isScrolled }: { isScrolled: boolean }) => {
  const links = ['Home', 'About', 'Projects', 'Team', 'Blog'];
  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className={`font-medium hover:text-blue-600 transition-colors ${
            isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
          }`}
        >
          {link}
        </a>
      ))}
    </>
  );
};

const MobileNavLinks = () => {
  const links = ['Home', 'About', 'Projects', 'Team', 'Blog', 'Contact'];
  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          {link}
        </a>
      ))}
    </>
  );
};

export default Navbar;