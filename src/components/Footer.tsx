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
    { label: 'About Me', id: 'about' },
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
    <footer className="bg-[#222831] pt-2 lg:pt-4 relative overflow-hidden">
      {/* Horizontal Top Border */}
      <div className="w-full border-t border-[#393e46]"></div>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-4 w-16 h-32 bg-gradient-to-b from-[#00adb5]/20 to-transparent rounded-lg transform rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-8 w-12 h-24 bg-gradient-to-t from-[#00adb5]/20 to-transparent rounded-lg transform -rotate-12 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-[#eeeeee] py-10 lg:py-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#00adb5] font-['Poppins']">Salman Allai</h2>
            <p className="text-[#eeeeee]/75 mt-2 font-['Poppins']">Full Stack Developer</p>
            <p className="text-[#eeeeee]/50 text-sm mt-4 font-['Poppins']">
              Building scalable and elegant web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00adb5]">Quick Links</h3>
            <ul className="space-y-2 font-['Poppins']">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-[#00adb5] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00adb5]">Help & Policies</h3>
            <ul className="space-y-2 font-['Poppins']">
              <li><a href="#" className="hover:text-[#00adb5]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#00adb5]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00adb5]">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#00adb5]">Contact Info</h3>
            <ul className="space-y-2 font-['Poppins'] text-sm">
              <li>Email: <a href="mailto:salmanallai@gmail.com" className="hover:text-[#00adb5]">salmanallai@gmail.com</a></li>
              <li>Phone: <a href="tel:+91 6006214499" className="hover:text-[#00adb5]">+91 6006214499</a></li>
              <li>Location: Srinagar,Jammu & Kashmir,India</li>
            </ul>

            {/* Desktop-only Social Links */}
            <div className="hidden lg:flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#393e46] hover:bg-[#00adb5] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-only Social Links */}
        <div className="flex flex-wrap mt-10 gap-4 text-left lg:hidden">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-[#393e46] hover:bg-[#00adb5] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[14px]">{social.icon}</span>
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#393e46] pt-6 mt-10 text-sm text-[#eeeeee]/60 font-['Poppins'] text-center">
          <p>© 2024 Salman Allai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
