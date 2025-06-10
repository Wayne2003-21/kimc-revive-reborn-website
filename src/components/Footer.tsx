
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Home',
    'About Us',
    'Academic Programs',
    'Admissions',
    'Student Life',
    'Alumni',
    'Contact Us'
  ];

  const academicLinks = [
    'Diploma Courses',
    'Certificate Courses',
    'Short Courses',
    'Online Learning',
    'Academic Calendar',
    'Examination Results'
  ];

  const studentServices = [
    'Student Portal',
    'Library Services',
    'Career Services',
    'Financial Aid',
    'Student Support',
    'Campus Facilities'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* About KIMC */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">KIMC</h3>
                <p className="text-gray-400 text-sm">Excellence in Media Education</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Kenya Institute of Mass Communication has been shaping media professionals for over 60 years, 
              providing world-class education and training.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Academic Programs</h4>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-gray-300">P.O. Box 42422 - 00100</p>
                  <p className="text-gray-300">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <p className="text-gray-300">+254 20 2714411</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <p className="text-gray-300">info@kimc.ac.ke</p>
              </div>
            </div>

            <h5 className="font-semibold mb-3">Student Services</h5>
            <ul className="space-y-2">
              {studentServices.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
              <p className="text-gray-300">Subscribe to our newsletter for updates and news</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Kenya Institute of Mass Communication. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
