import { Github, Linkedin } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About me', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Salman-Allai', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/salman-allai-12520b231/', label: 'LinkedIn' },
   { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/salman019__/', label: 'Instagram' },
  { icon: <FaFacebook size={20} />, href: 'https://www.facebook.com/salm.an.456842', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[#222831] py-12 lg:py-16 relative overflow-hidden">
      {/* Background decorative elements - same as other sections */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-4 w-16 h-32 bg-gradient-to-b from-[#00adb5]/20 to-transparent rounded-lg transform rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-8 w-12 h-24 bg-gradient-to-t from-[#00adb5]/20 to-transparent rounded-lg transform -rotate-12 hidden lg:block"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#393e46]/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#eeeeee] hover:text-[#00adb5] transition-colors duration-200 font-['Poppins'] text-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 bg-[#393e46] hover:bg-[#00adb5] rounded-full flex items-center justify-center text-[#eeeeee] transition-all duration-200 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-[#393e46] pt-8">
            <p className="text-[#eeeeee]/75 font-['Poppins']">
              © 2024 Salman Allai. All rights reserved.
            </p>
            <p className="text-[#eeeeee]/50 text-sm mt-2">
              Terms of Service - Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;