// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Target, Zap, Cloud, FileText, CheckCircle } from "lucide-react";

// export default function HowItWorks() {
//   const [activeStep, setActiveStep] = useState(null);

//   return (
//     <section className="py-24 bg-gray-100">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//         className="container mx-auto px-6"
//       >
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ y: -50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl font-bold text-[#1C1F2E] mb-4">
//             How Our Drone Technology Works
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover how our AI-driven drones transform solar panel inspection, maintenance, and optimization processes with every step.
//           </p>
//         </motion.div>

//         {/* Steps Grid */}
//         <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.9 },
//             visible: {
//               opacity: 1,
//               scale: 1,
//               transition: {
//                 delayChildren: 0.3,
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {[
//             {
//               icon: Target,
//               title: "Step 1: Precision Mapping",
//               description:
//                 "Our drones begin by capturing high-resolution thermal and visual scans to identify potential issues in solar panels.",
//               details: [
//                 "Thermal imaging for hotspot detection",
//                 "Visual mapping for surface analysis",
//                 "Real-time data transmission",
//               ],
//             },
//             {
//               icon: Zap,
//               title: "Step 2: Performance Analytics",
//               description:
//                 "Using AI-powered analysis, our system identifies performance inefficiencies and suggests optimal improvements.",
//               details: [
//                 "Predictive modeling for maintenance",
//                 "Performance tracking and optimization",
//                 "Energy efficiency enhancements",
//               ],
//             },
//             {
//               icon: Cloud,
//               title: "Step 3: IoT Integration",
//               description:
//                 "Data collected is processed and stored securely in the cloud, providing access to real-time reports and alerts.",
//               details: [
//                 "Cloud-based data storage",
//                 "Instant alerts and performance reports",
//                 "Scalable infrastructure solutions",
//               ],
//             },
//           ].map(({ icon: Icon, title, description, details }, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.1)",
//               }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeOut",
//               }}
//               onHoverStart={() => setActiveStep(index)}
//               onHoverEnd={() => setActiveStep(null)}
//             >
//               <div className="flex items-center mb-6">
//                 <Icon className="w-12 h-12 text-blue-600 mr-4" />
//                 <h3 className="text-2xl font-bold text-[#1C1F2E]">{title}</h3>
//               </div>
//               <p className="text-gray-600 mb-4">{description}</p>
//               {activeStep === index && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="space-y-2 text-gray-700"
//                 >
//                   {details.map((detail, i) => (
//                     <li key={i} className="flex items-center">
//                       <CheckCircle className="mr-2 text-blue-500" />
//                       {detail}
//                     </li>
//                   ))}
//                 </motion.ul>
//               )}
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { 
  Satellite, 
  CloudCog, 
  ChartLine, 
  Zap 
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Satellite,
      title: "Drone Deployment",
      description: "Our advanced drones autonomously navigate solar panel installations, capturing high-resolution imagery and thermal data.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: CloudCog,
      title: "AI Analysis",
      description: "Cutting-edge AI algorithms process the collected data, detecting even the most subtle anomalies and potential performance issues.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: ChartLine,
      title: "Predictive Insights",
      description: "Generate comprehensive reports with actionable insights, predicting potential maintenance needs before they become critical problems.",
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Optimization",
      description: "Implement targeted interventions to maximize solar panel efficiency, reducing downtime and increasing overall energy production.",
      color: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

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

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24  bg-gradient-to-b from-white via-[#A4E7F8] to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6, 
              ease: "easeOut" 
            }
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1F2E] mb-6">
          How <span className='text-[#2485B6]'>SHAHEEN</span> Technology Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how our AI-driven drones transform solar panel inspection, maintenance, and optimization processes with every step.

          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative z-10 bg-white border border-gray-100 rounded-xl p-6 h-full flex flex-col items-start space-y-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`p-4 rounded-full ${step.color} ${step.iconColor}`}>
                  <step.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1C1F2E]">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 flex-grow">
                  {step.description}
                </p>
                
               
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Flow Connector */}
        <div className="hidden lg:block">
          <div className="relative flex justify-between items-center mt-12">
            {steps.slice(0, -1).map((_, index) => (
              <div 
                key={index} 
                className="absolute top-1/2 left-0 right-0 -translate-y-1/2 border-t-2 border-dashed border-gray-400"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;