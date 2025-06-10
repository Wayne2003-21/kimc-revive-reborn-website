
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { 
      label: 'About', 
      href: '#about',
      submenu: ['History', 'Vision & Mission', 'Leadership', 'Campus Facilities', 'Quality Assurance']
    },
    { 
      label: 'Academics', 
      href: '#academics',
      submenu: ['Diploma Courses', 'Certificate Courses', 'Short Courses', 'Online Learning', 'Academic Calendar']
    },
    { 
      label: 'Admissions', 
      href: '#admissions',
      submenu: ['How to Apply', 'Entry Requirements', 'Fees Structure', 'Scholarships', 'International Students']
    },
    { 
      label: 'Student Life', 
      href: '#student-life',
      submenu: ['Campus Life', 'Clubs & Societies', 'Sports', 'Accommodation', 'Student Support']
    },
    { label: 'News & Events', href: '#news' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://kimc.ac.ke/wp-content/themes/kimc-main/assets/images/logo.png" 
              alt="KIMC Logo" 
              className="h-12 w-auto" 
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">KIMC</h1>
              <p className="text-xs text-muted-foreground">Kenya Institute of Mass Communication</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
                >
                  <span>{item.label}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="text-sm">
              Student Portal
            </Button>
            <Button size="sm" className="gradient-kimc text-sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg animate-fade-in">
            <nav className="py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-gray-50 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 py-3 space-y-2 border-t mt-2">
                <Button variant="outline" size="sm" className="w-full text-sm">
                  Student Portal
                </Button>
                <Button size="sm" className="w-full gradient-kimc text-sm">
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
