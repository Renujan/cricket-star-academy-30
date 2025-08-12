import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Registration', path: '/registration' }
  ];

  const programLinks = [
    { name: 'Beginner Program', path: '/programs#beginner' },
    { name: 'Youth League', path: '/programs#youth' },
    { name: 'Leather Ball Program', path: '/programs#advanced' },
    { name: 'Tennis Ball Program', path: '/programs#recreational' }
  ];

  const supportLinks = [
    { name: 'Announcements', path: '/announcements' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Our Success', path: '/success' },
    { name: 'Staff', path: '/staff' },
    { name: 'Policies', path: '/policies' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/10636441-a54d-4571-b219-2b52ab6ff600.png" 
                alt="MVP Cricket Academy Logo" 
                className="w-12 h-12 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="font-oswald font-bold text-lg">MVP Cricket Academy</h3>
                <p className="text-sm text-secondary-foreground/80">Building Future Cricket Stars</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Developing cricket talent through professional coaching, modern facilities, and a passion for the game. Join us in building the next generation of cricket stars.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/mvpcricketacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/mvpcricketacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@mvpcricket" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-oswald font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-oswald font-semibold text-lg mb-4 text-primary">Programs</h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-oswald font-semibold text-lg mb-4 text-primary">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/80 text-sm">info@mvpcricket.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-secondary-foreground/80 text-sm">
                  Minnesota, USA
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-2">Support</h4>
              <ul className="space-y-1">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200 text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} MVP Cricket Academy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/policies" 
                className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/policies" 
                className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/policies" 
                className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;