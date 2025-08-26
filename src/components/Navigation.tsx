import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

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
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto flex justify-between items-center py-6">
        {/* Logo/Name */}
        <Link to="/" className="flex items-center gap-4">
          <div className="text-2xl font-bold text-foreground">
            Itai Katz
          </div>
          <span className="systems-arrow text-sm">
            system → emotions
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
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

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navigation;