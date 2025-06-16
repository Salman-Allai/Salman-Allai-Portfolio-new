import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#222831] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold text-[#eeeeee] font-['Oswald']">
              Salman Allai
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#eeeeee] hover:text-[#00adb5] transition-colors duration-200 font-['Poppins'] text-lg"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-[#eeeeee] hover:text-[#00adb5] transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Sliding Mobile Menu with Solid Background */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-[#1e1e2f] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden shadow-lg border-l border-[#393e46]`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[#eeeeee] hover:text-[#00adb5] transition-colors duration-200"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 px-6 mt-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-[#eeeeee] hover:text-[#00adb5] text-lg font-['Poppins'] transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
