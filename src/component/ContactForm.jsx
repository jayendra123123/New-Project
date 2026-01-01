
import React, { useState } from 'react';
import { Icon } from './Icon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative">
      {/* Name Input */}
      <div className="group relative">
        <label className="block text-dark-text dark:text-white text-lg font-bold mb-2 ml-4 group-focus-within:text-primary transition-colors">
          What do I call you?
        </label>
        <div className="relative">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-dark-text/30 dark:text-white/30 pointer-events-none group-focus-within:text-primary transition-colors">
            <Icon name="face" />
          </div>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-16 pl-14 pr-6 rounded-full bg-white dark:bg-white/5 border-2 border-dark-text dark:border-white/20 text-dark-text dark:text-white text-lg font-medium placeholder:text-dark-text/30 dark:placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-0 focus:shadow-comic transition-all duration-200 ease-out"
            placeholder="Captain Awesome"
            type="text"
          />
        </div>
      </div>

      {/* Email Input */}
      <div className="group relative">
        <label className="block text-dark-text dark:text-white text-lg font-bold mb-2 ml-4 group-focus-within:text-primary transition-colors">
          Where can I reach you?
        </label>
        <div className="relative">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-dark-text/30 dark:text-white/30 pointer-events-none group-focus-within:text-primary transition-colors">
            <Icon name="alternate_email" />
          </div>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-16 pl-14 pr-6 rounded-full bg-white dark:bg-white/5 border-2 border-dark-text dark:border-white/20 text-dark-text dark:text-white text-lg font-medium placeholder:text-dark-text/30 dark:placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-0 focus:shadow-comic transition-all duration-200 ease-out"
            placeholder="email@example.com"
            type="email"
          />
        </div>
      </div>

      {/* Message Input */}
      <div className="group relative">
        <label className="block text-dark-text dark:text-white text-lg font-bold mb-2 ml-4 group-focus-within:text-primary transition-colors">
          What's the plan?
        </label>
        <div className="relative">
          <div className="absolute left-5 top-6 text-dark-text/30 dark:text-white/30 pointer-events-none group-focus-within:text-primary transition-colors">
            <Icon name="edit_note" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full min-h-40 pl-14 pr-6 py-5 rounded-3xl bg-white dark:bg-white/5 border-2 border-dark-text dark:border-white/20 text-dark-text dark:text-white text-lg font-medium placeholder:text-dark-text/30 dark:placeholder:text-white/30 resize-none focus:outline-none focus:border-primary focus:ring-0 focus:shadow-comic transition-all duration-200 ease-out"
            placeholder="Tell me about your wild ideas..."
          />
        </div>
      </div>

      {/* Submit Character Button */}
      <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          {isSuccess && (
            <p className="text-green-600 dark:text-green-400 font-bold flex items-center gap-2 fade-in">
               <Icon name="check_circle" className="text-xl" />
               Success! I'll be in touch soon.
            </p>
          )}
        </div>
        
        <button
          disabled={isSubmitting}
          className={`group relative flex items-center justify-center min-w-[200px] h-16 bg-primary text-dark-text border-2 border-dark-text rounded-full shadow-comic hover:shadow-comic-hover hover:-translate-y-1 active:shadow-comic-active active:translate-y-1 transition-all duration-200 overflow-hidden ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
          type="submit"
        >
          {/* Animated Background Pattern on Button */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIi8+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')]"></div>
          
          <div className="relative flex items-center gap-3 z-10 px-6">
            <span className="text-lg font-black tracking-wide uppercase group-hover:tracking-wider transition-all">
              {isSubmitting ? 'Sending...' : 'Send It!'}
            </span>
            <div className={`flex items-center justify-center bg-white rounded-full p-1 size-8 group-hover:rotate-12 transition-transform ${isSubmitting ? 'animate-bounce' : ''}`}>
              <Icon name={isSubmitting ? 'pending' : 'send'} className="text-primary text-xl font-bold" />
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
