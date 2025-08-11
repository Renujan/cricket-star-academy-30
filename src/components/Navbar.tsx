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
    { name: 'Our Success', path: '/success' },
    { name: 'Cricket Store', path: '/store' },
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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg shadow-lg border-b border-border">
      <div className="container-width">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/5f3870b0-855e-431d-941c-32822b629f6b.png" 
                alt="MVP Cricket Academy Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-oswald font-bold text-xl text-foreground leading-tight">MVP Cricket Academy</h1>
              <p className="text-xs text-muted-foreground">Building Future Stars</p>
            </div>
            <div className="sm:hidden">
              <h1 className="font-oswald font-bold text-lg text-foreground leading-tight">MVP Cricket</h1>
              <p className="text-xs text-muted-foreground">Academy</p>
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

          {/* Enhanced Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-muted active:scale-95 transition-all duration-200 relative"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
              }`} />
              <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
              }`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-6 border-t border-border mt-4">
            <div className="pt-6 space-y-2">
              {navLinks.map((link, index) => (
                <div key={link.name} 
                     className={`transform transition-all duration-300 ease-out ${
                       isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                     }`}
                     style={{ transitionDelay: `${index * 50}ms` }}>
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                          isActiveLink(link.path) 
                            ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                            : 'text-foreground hover:text-primary hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </Link>
                      <div className="ml-4 space-y-1">
                        {programLinks.slice(1).map((programLink) => (
                          <Link
                            key={programLink.name}
                            to={programLink.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-md transition-colors duration-200"
                          >
                            {programLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                        isActiveLink(link.path) 
                          ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                          : 'text-foreground hover:text-primary hover:bg-muted/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className={`transform transition-all duration-300 ease-out pt-4 ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${navLinks.length * 50}ms` }}>
                <Link 
                  to="/registration" 
                  onClick={() => setIsOpen(false)}
                  className="btn-hero w-full text-center"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;