
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, ChevronRight } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const CallToAction = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax and transformation effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 9], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);

  // State for the email input
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle the email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setErrorMessage('Email is required');
      return;
    }

    try {
      const response = await fetch('https://shaheen-r0rh.onrender.com/api/email/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('🎉 Your email has been saved! Thank you for reaching out! 😊'); // Success toast
        setEmail(''); // Clear the email field
      } else {
        setErrorMessage(data.message || 'Error saving email');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#2485B6] to-[#1C202B] text-white"
      style={{ opacity, scale }}
    >
      {/* Decorative Background Elements */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Transform Your Solar Infrastructure Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-12 max-w-3xl mx-auto"
          >
            Unlock the full potential of your solar assets with our cutting-edge AI and drone technology. Get a comprehensive analysis and optimization strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 120,
              },
            }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20"
          >
            <div className="max-w-xl mx-auto">
              {/* Email Input */}
              <div className="flex items-center bg-white/10 rounded-full p-2 mb-6 border border-white/20">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email for a free consultation"
                  className="flex-grow bg-transparent px-4 py-3 text-white placeholder-white/50 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="bg-white text-[#2485B6] rounded-full p-3 flex items-center justify-center"
                >
                  <Send size={20} />
                </motion.button>
              </div>

              {/* Error message */}
              {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}

              {/* CTA Buttons */}
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 bg-white text-[#2485B6] rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                >
                  <span>Book Consultation</span>
                  <ChevronRight size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </motion.section>
  );
};

export default CallToAction;
