// import React, { useState } from 'react';
// import { 
//   ChevronDown, 
//   Zap, 
//   Sun, 
//   Cpu, 
//   Wind, 
//   Shield, 
//   Rocket, 
//   BarChart 
// } from 'lucide-react';

// const FAQPage = () => {
//   const [activeSection, setActiveSection] = useState('technology');
//   const [openQuestions, setOpenQuestions] = useState({});

//   const faqSections = {
//     technology: {
//       icon: <Cpu className="w-10 h-10 text-blue-600" />,
//       title: "Drone Technology",
//       questions: [
//         {
//           question: "What makes Shaheen's drones unique?",
//           answer: "Shaheen's AI-powered drones are equipped with advanced thermal detection technology, solar charging capabilities, and intelligent software that enables precise monitoring and maintenance of solar panel infrastructure. Our drones integrate cutting-edge IoT technologies with AI-driven analytics to provide unprecedented insights into solar energy systems."
//         },
//         {
//           question: "How do your drones detect solar panel issues?",
//           answer: "Our drones use high-resolution thermal cameras and AI algorithms to identify potential hotspots, efficiency drops, and potential damage in solar panels. The system can detect micro-cracks, cell degradation, and performance anomalies that are invisible to the naked eye, allowing for proactive maintenance and optimization."
//         },
//         {
//           question: "Are the drones fully autonomous?",
//           answer: "Yes, Shaheen's drones feature advanced autonomous navigation. They can pre-programmed flight paths, automatically charge using integrated solar panels, and return to base when battery levels are low. The AI system continuously learns and improves its flight and detection capabilities."
//         }
//       ]
//     },
//     operations: {
//       icon: <Wind className="w-10 h-10 text-green-600" />,
//       title: "Operational Details",
//       questions: [
//         {
//           question: "What industries can benefit from Shaheen's solutions?",
//           answer: "Our technology is ideal for industrial and commercial solar energy projects, including manufacturing plants, data centers, solar farms, and large-scale renewable energy installations. We provide solutions for energy managers, sustainability teams, and solar installation companies."
//         },
//         {
//           question: "How quickly can the drones assess a solar installation?",
//           answer: "Depending on the size of the installation, our drones can complete a comprehensive thermal and visual inspection in 1-3 hours. For a typical commercial solar setup of 10-50 acres, we can provide a detailed report within the same day of the inspection."
//         },
//         {
//           question: "What kind of data reports do you provide?",
//           answer: "Our comprehensive reports include thermal maps, performance analytics, predictive maintenance recommendations, efficiency scores, and detailed visualizations of potential issues. These reports are delivered through our cloud-based platform, accessible to technical teams and decision-makers."
//         }
//       ]
//     },
//     pricing: {
//       icon: <BarChart className="w-10 h-10 text-purple-600" />,
//       title: "Pricing & Services",
//       questions: [
//         {
//           question: "What are your pricing models?",
//           answer: "We offer flexible pricing options including per-inspection rates, monthly monitoring packages, and custom enterprise solutions. Pricing depends on the size of the solar installation, frequency of inspections, and specific analytics requirements."
//         },
//         {
//           question: "Do you offer trial inspections?",
//           answer: "Yes, we provide initial assessment trials for potential clients. This allows you to experience the depth and quality of our thermal detection and AI-powered analytics before committing to a full service package."
//         },
//         {
//           question: "What is included in your service package?",
//           answer: "Our standard package includes drone inspection, thermal imaging, AI-powered analysis, comprehensive report generation, cloud-based data visualization, and quarterly performance trend reports. Advanced packages include predictive maintenance alerts and real-time monitoring."
//         }
//       ]
//     },
//     sustainability: {
//       icon: <Sun className="w-10 h-10 text-yellow-600" />,
//       title: "Sustainability Impact",
//       questions: [
//         {
//           question: "How do Shaheen drones contribute to sustainability?",
//           answer: "By enabling early detection of solar panel issues and optimizing maintenance, our drones help increase solar energy system efficiency by up to 20%. This reduces waste, extends equipment lifespan, and maximizes renewable energy production."
//         },
//         {
//           question: "Are your drones environmentally friendly?",
//           answer: "Absolutely. Our drones are solar-charged, reducing carbon footprint. They use lightweight materials, have minimal environmental impact during operations, and are designed to maximize energy efficiency throughout their lifecycle."
//         }
//       ]
//     }
//   };

//   const toggleQuestion = (section, index) => {
//     setOpenQuestions(prev => ({
//       ...prev,
//       [`${section}_${index}`]: !prev[`${section}_${index}`]
//     }));
//   };

//   return (
//     // <div className="h-screen bg-gray-50  px-4">
//     //   <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
//     //     {/* Section Navigation */}
//     //     <div className="flex bg-gray-100 p-2 rounded-t-xl">
//     //       {Object.keys(faqSections).map(section => (
//     //         <button
//     //           key={section}
//     //           onClick={() => setActiveSection(section)}
//     //           className={`
//     //             flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
//     //             ${activeSection === section 
//     //               ? 'bg-blue-600 text-white' 
//     //               : 'text-gray-600 hover:bg-blue-100'
//     //             }
//     //           `}
//     //         >
//     //           {faqSections[section].icon}
//     //           <span className="font-medium">{faqSections[section].title}</span>
//     //         </button>
//     //       ))}
//     //     </div>

//     <div className="h-screen bg-gray-50 px-4">
//   <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden h-full">
//     {/* Section Navigation */}
//     <div className="flex bg-gray-100 p-2 rounded-t-xl h-16">
//       {Object.keys(faqSections).map(section => (
//         <button
//           key={section}
//           onClick={() => setActiveSection(section)}
//           className={`
//             flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
//             ${activeSection === section 
//               ? 'bg-blue-600 text-white' 
//               : 'text-gray-600 hover:bg-blue-100'
//             }
//           `}
//         >
//           {faqSections[section].icon}
//           <span className="font-medium">{faqSections[section].title}</span>
//         </button>
//       ))}
//     </div>

//     {/* Sections Content */}
//     <div className="h-full p-4 overflow-y-auto">
//       {/* Your content will go here */}
//     </div>
//   </div>



//         {/* FAQ Content */}
//         <div className="p-8">
//           {Object.keys(faqSections).map(section => (
//             activeSection === section && (
//               <div 
//                 key={section} 
//                 className="space-y-4 animate-fade-in"
//               >
//                 {faqSections[section].questions.map((faq, index) => (
//                   <div 
//                     key={index} 
//                     className="border-b border-gray-200 pb-4"
//                   >
//                     <button
//                       onClick={() => toggleQuestion(section, index)}
//                       className="w-full flex justify-between items-center hover:bg-gray-100 p-4 rounded-lg transition-all"
//                     >
//                       <h3 className="text-lg font-semibold text-left">
//                         {faq.question}
//                       </h3>
//                       <ChevronDown 
//                         className={`
//                           w-6 h-6 transform transition-transform duration-300
//                           ${openQuestions[`${section}_${index}`] ? 'rotate-180' : ''}
//                         `} 
//                       />
//                     </button>
//                     {openQuestions[`${section}_${index}`] && (
//                       <div 
//                         className="px-4 pt-2 text-gray-600 animate-slide-down"
//                       >
//                         {faq.answer}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )
//           ))}
//         </div>
//       </div>
//   );
// };

// export default FAQPage;

import React, { useState, useMemo } from 'react';
import { Search, Satellite,Sun, HelpCircle, ChevronDown, ChevronUp, Shield, Clock, Globe } from 'lucide-react';

// Specialized FAQ Data for Shaheen
const faqData = [
  {
    category: 'Our Technology',
    questions: [
      {
        question: 'How do Shaheens drones inspect solar panels?',
        answer: 'Our advanced drones are equipped with high-resolution thermal and visual cameras that conduct comprehensive inspections of solar panel installations. They can detect micro-cracks, hotspots, dirt accumulation, and potential efficiency losses with unprecedented precision.',
        tags: ['drone technology', 'inspection', 'solar']
      },
      {
        question: 'What makes Shaheens drone technology unique?',
        answer: 'Shaheen uses AI-powered autonomous drones with specialized thermal imaging and machine learning algorithms. Our drones can cover large solar installations quickly, providing detailed reports and predictive maintenance insights in a fraction of the time of traditional methods.',
        tags: ['ai', 'automation', 'innovation']
      }
    ]
  },
  {
    category: 'Services',
    questions: [
      {
        question: 'What areas do you serve?',
        answer: 'We currently provide drone-powered solar panel inspection and preparation services across the Middle East, with expanding operations in North Africa and parts of Southern Europe. Our goal is to make solar infrastructure maintenance smarter and more efficient.',
        tags: ['service areas', 'international']
      },
      {
        question: 'What specific services do you offer?',
        answer: 'Shaheen provides comprehensive solar panel services including: \n- Thermal and visual inspections \n- Dirt and debris analysis \n- Micro-crack detection \n- Efficiency performance mapping \n- Predictive maintenance recommendations',
        tags: ['services', 'solar maintenance']
      }
    ]
  },
  {
    category: 'Environmental Impact',
    questions: [
      {
        question: 'How does Shaheen contribute to sustainable energy?',
        answer: 'By using drone technology, we significantly reduce the carbon footprint of solar panel maintenance. Our drones minimize human intervention, reduce travel-related emissions, and help solar installations operate at peak efficiency, ultimately accelerating the transition to clean energy.',
        tags: ['sustainability', 'green technology']
      },
      {
        question: 'Are your drones environmentally friendly?',
        answer: 'Our drones are designed with sustainability in mind. We use electric batteries, optimize flight paths to reduce energy consumption, and continuously work on reducing the environmental impact of our technology.',
        tags: ['eco-friendly', 'green drone']
      }
    ]
  }
];

const ShaheenFAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [openQuestionId, setOpenQuestionId] = useState(null);

  // Extract unique categories and tags
  const categories = [...new Set(faqData.map(section => section.category))];
  const allTags = [...new Set(faqData.flatMap(section => 
    section.questions.flatMap(q => q.tags)
  ))];

  // Filtered FAQ data
  const filteredFAQs = useMemo(() => {
    return faqData
      .map(section => ({
        ...section,
        questions: section.questions.filter(question => 
          (searchTerm === '' || 
           question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           question.answer.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedCategories.length === 0 || 
           selectedCategories.includes(section.category)) &&
          (selectedTags.length === 0 || 
           selectedTags.some(tag => question.tags.includes(tag)))
       ) }))
      .filter(section => section.questions.length > 0);
  }, [searchTerm, selectedCategories, selectedTags]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleQuestion = (questionId) => {
    setOpenQuestionId(prev => prev === questionId ? null : questionId);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <div className="flex items-center mb-6 bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-lg">
        <Satellite className="mr-4 text-white" size={40} />
        <div>
          <h1 className="text-3xl font-bold text-white">Shaheen Drone Solar Solutions</h1>
          <p className="text-white opacity-80">Intelligent Drone-Powered Solar Panel Preparation</p>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Sun className="mx-auto mb-2 text-blue-600" size={40} />
          <h3 className="font-semibold">Advanced Inspection</h3>
          <p className="text-sm text-gray-600">Precision thermal and visual analysis</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Shield className="mx-auto mb-2 text-green-600" size={40} />
          <h3 className="font-semibold">Predictive Maintenance</h3>
          <p className="text-sm text-gray-600">Proactive solar panel health monitoring</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Globe className="mx-auto mb-2 text-indigo-600" size={40} />
          <h3 className="font-semibold">Sustainable Technology</h3>
          <p className="text-sm text-gray-600">Reducing carbon footprint in solar maintenance</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 flex space-x-4">
        <div className="relative flex-grow">
          <input 
            type="text" 
            placeholder="Search Shaheen's FAQ..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex space-x-4">
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Categories</h3>
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategories.includes(category)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2 py-1 rounded-full text-xs ${
                  selectedTags.includes(tag)
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      {filteredFAQs.map((section, sectionIndex) => (
        <div key={section.category} className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2">
            {section.category}
          </h2>
          {section.questions.map((faq, questionIndex) => {
            const uniqueId = `${sectionIndex}-${questionIndex}`;
            return (
              <div 
                key={uniqueId} 
                className="border-b last:border-b-0 py-4"
              >
                <button 
                  onClick={() => toggleQuestion(uniqueId)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-medium text-lg text-gray-800">
                    {faq.question}
                  </span>
                  {openQuestionId === uniqueId ? (
                    <ChevronUp className="text-blue-600" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </button>
                {openQuestionId === uniqueId && (
                  <div className="mt-3 text-gray-600">
                    <p>{faq.answer}</p>
                    <div className="flex space-x-2 mt-2">
                      {faq.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}

      {/* Contact Section */}
      <div className="bg-blue-50 p-6 rounded-lg mt-6 text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-800">Have More Questions?</h3>
        <p className="mb-4 text-gray-700">Our team is ready to help you understand how Shaheen's drone technology can revolutionize solar panel maintenance.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Contact Shaheen Drone Solutions
        </button>
      </div>

      {/* No Results State */}
      {filteredFAQs.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          <p>No FAQs match your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ShaheenFAQPage;