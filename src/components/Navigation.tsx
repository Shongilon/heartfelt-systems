import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', id: 'home' },
    { to: '/about', label: 'About', id: 'about' },
    { to: '/research', label: 'Research', id: 'research' },
    { to: '/vision', label: 'Vision', id: 'vision' },
    { to: '/contact', label: 'Contact', id: 'contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
    >
      <nav className="container mx-auto flex justify-between items-center py-6">
        {/* Logo/Name - Professional Clean Layout */}
        <Link to="/" className="flex flex-col">
          <div className="brand-name">
            Itai Katz
          </div>
          <div className="brand-tagline">
            systems → emotions
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-body">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                className={`nav-link ${isActive(link.to) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Progress Indicator */}
        <div className="hidden md:block w-16 h-1 bg-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent rounded-full transition-all duration-300 ease-smooth"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
};

export default Navigation;