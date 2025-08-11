import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs', hasDropdown: true },
    { name: 'Registration', path: '/registration' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Our Success', path: '/success' },
    { name: 'Staff', path: '/staff' },
    { name: 'Policies', path: '/policies' },
    { name: 'Contact', path: '/contact' }
  ];

  const programLinks = [
    { name: 'All Programs', path: '/programs' },
    { name: 'Beginner Program', path: '/programs#beginner' },
    { name: 'Youth League', path: '/programs#youth' },
    { name: 'Leather Ball', path: '/programs#advanced' },
    { name: 'Tennis Ball', path: '/programs#recreational' }
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-lg border-b border-border">
      <div className="container-width">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/5f3870b0-855e-431d-941c-32822b629f6b.png" 
                alt="MVP Cricket Academy Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-oswald font-bold text-xl text-foreground">Cricket Academy</h1>
              <p className="text-xs text-muted-foreground">Building Future Stars</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsProgramsOpen(true)}
                    onMouseLeave={() => setIsProgramsOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                        isActiveLink(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {isProgramsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-lg border border-border py-2">
                        {programLinks.map((programLink) => (
                          <Link
                            key={programLink.name}
                            to={programLink.path}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                          >
                            {programLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium transition-colors duration-200 ${
                      isActiveLink(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/registration" className="btn-hero">
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border mt-4">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isActiveLink(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/registration" 
                onClick={() => setIsOpen(false)}
                className="btn-hero w-fit"
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;