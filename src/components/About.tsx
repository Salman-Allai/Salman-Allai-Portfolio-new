import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code size={24} />, title: 'Frontend Development', desc: 'React, JavaScript, HTML, CSS' },
    { icon: <Database size={24} />, title: 'Backend Development', desc: 'Node.js, Express.js, MongoDB' },
    { icon: <Globe size={24} />, title: 'Web Technologies', desc: 'Modern web standards & APIs' },
    { icon: <Smartphone size={24} />, title: 'Responsive Design', desc: 'Mobile-first approach' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] mb-6 lg:mb-8">
              <span className="text-[#eeeeee]">About</span>
              <span className="text-[#00adb5]"> me</span>
            </h2>
            
            <p className="text-lg text-[#eeeeee]/75 mb-8 leading-relaxed">
              Hi, I'm Mohammad Salman Allai, a Full Stack Web Developer skilled in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and Firebase. I build responsive web applications and APIs with modern tools and deploy them using Netlify and Vercel. I'm passionate about creating smooth user experiences and solving real-world problems through clean, efficient code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-[#393e46]/30 p-6 rounded-lg hover:bg-[#393e46]/50 transition-colors duration-200">
                  <div className="text-[#00adb5] mb-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-[#eeeeee] font-bold mb-2 font-['Poppins']">
                    {skill.title}
                  </h3>
                  <p className="text-[#eeeeee]/75 text-sm">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 sm:w-96 sm:h-[28rem] rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/7124c6a0df884b6ba3cab28862636368/a213776ed419ccaa5349faf0dc775d49cabc023e?placeholderIfAbsent=true"
                  alt="About me profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00adb5] rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#00adb5]/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;