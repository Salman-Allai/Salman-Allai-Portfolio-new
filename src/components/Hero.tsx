import { Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/SalmanAllaiCV.pdf';
  link.download = 'SalmanAllaiCV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-4 w-16 h-32 bg-gradient-to-b from-[#00adb5]/20 to-transparent rounded-lg transform rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-8 w-12 h-24 bg-gradient-to-t from-[#00adb5]/20 to-transparent rounded-lg transform -rotate-12 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Poppins'] leading-tight mb-6 lg:mb-8">
            <span className="text-[#eeeeee]">Full Stack</span>
            <br />
            <span className="text-[#00adb5]">Developer</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-[#eeeeee]/75 mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0">
            Passionate about creating exceptional digital experiences with modern web technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToContact}
              className="bg-[#00adb5] hover:bg-[#00adb5]/90 text-[#eeeeee] px-8 py-3 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 font-['Poppins']"
            >
              Hire me
            </button>
            <button
              type="button"
              onClick={handleDownload}
              title="Download CV" // <-- adds a tooltip and helps accessibility
              aria-label="Download CV" // <-- helps screen readers
              className="cursor-pointer bg-[#393e46]/75 hover:bg-[#393e46] text-[#eeeeee] px-8 py-3 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 font-['Poppins'] flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#00adb5]/30">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7124c6a0df884b6ba3cab28862636368/2d419a692b2049aba05e5fe42b5fa3586928a1bd?placeholderIfAbsent=true"
                alt="Salman Allai - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#00adb5]/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;