import React, { useState, useRef } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send Message');
  const [isSending, setIsSending] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    setButtonText('Sending...');

    emailjs
      .sendForm(
        'service_9le86ce',    // Replace with your EmailJS service ID
        'template_tqp8zko',   // Replace with your EmailJS template ID
        form.current,
        'OO-qOAVY58D2NqaPb'     // Replace with your EmailJS public key
      )
      .then(
        () => {
          setButtonText('Sent');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => {
            setButtonText('Send Message');
            setIsSending(false);
          }, 3000);
        },
        () => {
          setButtonText('Send Message');
          setIsSending(false);
          alert('Failed to send message, please try again.');
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'salmanallaie@gmail.com',
      link: 'mailto:salmanallaie@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 6006214499',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Srinagar J&K,India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] mb-6 lg:mb-8">
              <span className="text-[#eeeeee]">Got a project in</span>
              <br />
              <span className="text-[#00adb5]">mind?</span>
            </h2>
            
            <p className="text-lg text-[#eeeeee]/75 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-[#393e46]/30 rounded-lg hover:bg-[#393e46]/50 transition-colors duration-200 group"
                >
                  <div className="text-[#00adb5] group-hover:scale-110 transition-transform duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-[#eeeeee] font-bold font-['Poppins']">
                      {info.title}
                    </h3>
                    <p className="text-[#eeeeee]/75">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#393e46]/20 p-6 lg:p-8 rounded-2xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#eeeeee] font-bold mb-2 font-['Poppins']">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-[#393e46]/50 border border-[#393e46] rounded-lg text-[#eeeeee] placeholder-[#eeeeee]/50 focus:outline-none focus:border-[#00adb5] transition-colors duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#eeeeee] font-bold mb-2 font-['Poppins']">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-[#393e46]/50 border border-[#393e46] rounded-lg text-[#eeeeee] placeholder-[#eeeeee]/50 focus:outline-none focus:border-[#00adb5] transition-colors duration-200"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#eeeeee] font-bold mb-2 font-['Poppins']">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-[#393e46]/50 border border-[#393e46] rounded-lg text-[#eeeeee] placeholder-[#eeeeee]/50 focus:outline-none focus:border-[#00adb5] transition-colors duration-200 resize-vertical"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-[#00adb5] hover:bg-[#00adb5]/90 text-[#eeeeee] px-8 py-3 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 font-['Poppins'] flex items-center gap-2"
                disabled={isSending}
              >
                {buttonText}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;