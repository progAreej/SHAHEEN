
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';
import NavBar from '../components/NavBar';
import JourneyMilestones from './MileStone';
import OurVision from './OurVision';
import ShaheenFooter from '../components/Footer';
import FoundersSection from './FoundersSection';
const OurStory = () => {
  const ref = useRef(null);


  // Animation container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Animation item variants
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 120
      }
    }
  };

  return (
    <motion.div ref={ref} initial="hidden" animate="visible" className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <motion.div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://aotearoaai.nz/wp-content/uploads/2024/09/Untitled-design-25.png')",
            filter: 'brightness(0.5) saturate(1.2)'
          }}
        />
        
        {/* Content on top of the background */}
        <motion.div 
          variants={containerVariants}
          className="relative z-10 text-white text-center px-6 py-12"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-white"
          >
            The  
            <span className='text-[#185B8D]'> SHAHEEN </span>
            Story
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 text-gray-200"
          >
            Pioneering AI-driven solar infrastructure monitoring through innovative drone technology
          </motion.p>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center mx-auto space-x-2 hover:bg-[#3A9AD3] transition-all shadow-lg"
          >
            <span>Explore Our Journey</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Vision Section */}
      <div>
        <OurVision />
      </div>
      <FoundersSection/>

      {/* Milestones Section */}
      <JourneyMilestones />

      {/* Call to Action Section */}
      <motion.div 
        className="bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white py-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            type: "spring", 
            damping: 12, 
            stiffness: 100 
          }
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6 px-4"
        >
          Join Our Vision for a Sustainable Future
        </motion.h2>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl max-w-3xl mx-auto mb-10 px-4 text-gray-100"
        >
          Discover how Shaheen is revolutionizing solar infrastructure monitoring through innovative drone technology and AI-powered solutions.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#2985B3] px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center mx-auto space-x-2"
        >
          <span>Explore Our Technology</span>
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </motion.div>
      <ShaheenFooter/>
    </motion.div>
  );
};

export default OurStory;
