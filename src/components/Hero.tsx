import { Download } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/SalmanAllaiCV.pdf';
    link.setAttribute('download', 'SalmanAllaiCV.pdf');
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
          <div className="mb-2 lg:mb-4">
            <p className="text-xl sm:text-2xl text-[#eeeeee]/75 font-medium font-['Poppins'] mb-2">
              Hi, I am Mohammad Salman
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Poppins'] leading-tight">
              <span className="text-[#eeeeee]">Full Stack</span>
              <br />
              <span className="text-[#00adb5]">Developer</span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-[#eeeeee]/75 mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0">
            Passionate about creating exceptional digital experiences with modern web technologies
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
            <button
              type="button"
              className="px-4 py-3 sm:px-8 sm:py-3 bg-[#00adb5] hover:bg-[#00adb5]/90 text-[#eeeeee] rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 font-['Poppins']"
              style={{ minWidth: '140px' }}
            >
              Hire Me
            </button>
            <a
              href="/SalmanAllaiCV.pdf"
              download
              className="no-underline flex w-[223px] pt-[10px] pr-[16px] pb-[10px] pl-[32px] gap-[10px] items-start md:items-center shrink-0 flex-nowrap bg-[rgba(57,62,70,0.75)] rounded-[24px] relative z-[15] cursor-pointer hover:bg-[rgba(57,62,70,1)] hover:shadow-2xl hover:shadow-[#222831]/80 transition-all duration-200"
              title="Download CV"
              aria-label="Download CV"
            >
              <span className="h-[27px] shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[27px] text-[#eeeeee] relative text-center md:text-left whitespace-nowrap z-[16]">
                Download CV
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-[#eeeeee]"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#00adb5]/30">
              <img
                src="https://ik.imagekit.io/rsoncnocz/ChatGPT%20Image%20Jun%2015,%202025,%2011_59_04%20PM.png?updatedAt=1750012203199?placeholderIfAbsent=true"
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
