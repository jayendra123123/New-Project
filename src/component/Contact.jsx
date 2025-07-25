import React, { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiGithub } from 'react-icons/fi';
import { FaArrowUp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ UPDATED handleSubmit → sends data to Formcarry
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch("https://formcarry.com/s/hZoEzFfKBYx", {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.code === 200) {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else if (result.code === 422) {
        setStatus('Validation failed: ' + result.message);
      } else {
        setStatus('Failed to send: ' + result.message);
      }
    } catch (error) {
      setStatus('Error: ' + (error.message || 'Something went wrong.'));
    }
  };

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-black text-white p-6 flex justify-center items-center">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12">
        
        {/* --- LEFT SIDE CONTACT INFO --- */}
        <div className="flex-1">
          <p className="text-xs sm:text-sm text-gray-500 mb-1 tracking-widest">____ CONTACT</p>
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-3 animate-pulse">
            CONTACT ME
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#fc8019] mb-6">
            Let's connect — I'm always excited to hear from you!
          </p>
          <div className="text-base sm:text-lg text-gray-400 space-y-4">
            <div className="flex items-center gap-3">
              <FiMail className="text-[#fc8019]" size={20} />
              <a href="mailto:jayendramalla26@gmail.com" className="hover:text-white transition">
                jayendramalla26@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-[#fc8019]" size={20} />
              <a href="tel:7842814826" className="hover:text-white transition">
                7842814826
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiGithub className="text-[#fc8019]" size={20} />
              <a
                href="https://github.com/jayendramalla123123"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                github.com
              </a>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE FORM --- */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-[#1a1a1a]/60 backdrop-blur-md px-6 sm:px-8 py-10 sm:py-12 rounded-2xl shadow-lg border border-[#fc8019]/20 transition-all duration-300"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fc8019] to-[#ffb347]">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mb-5 bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#fc8019] focus:shadow-md transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-5 bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#fc8019] focus:shadow-md transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 mb-6 bg-transparent border border-gray-700 text-white placeholder-gray-500 rounded-md focus:outline-none focus:border-[#fc8019] focus:shadow-md transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#fc8019] text-black font-bold py-3 rounded-md hover:bg-[#fff] hover:text-black transition duration-300 shadow-md"
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>

          {status && status !== 'Sending...' && (
            <p className={`text-center text-sm ${status.includes('Success') ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </p>
          )}
        </form>
      </div>

      {/* --- SCROLL TO TOP BUTTON --- */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-[#4169e1] hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 animate-bounce z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}