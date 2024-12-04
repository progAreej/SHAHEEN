

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from "../assets/CircleLogo.png";

const ShaheenFooter = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/shaheen" },
    { icon: Linkedin, href: "https://linkedin.com/company/shaheen" },
    { icon: Instagram, href: "https://instagram.com/shaheen" },
  ];

  const footerNavigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#232838] to-[#1c202c] text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className="mb-6">
            <img src={Logo} alt="Shaheen Logo" className="w-24" />
          </div>
          <p className="text-blue-200 mb-6">
            Innovative solutions driving technological excellence.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className="text-blue-200 hover:text-white transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerNavigation.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  x: 10,
                  color: "#60A5FA", // blue-400
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <a
                  href={item.href}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="bg-[#1D6397] p-4 rounded-lg"
          >
            <div className="flex items-center mb-2">
              <Mail className="mr-2 w-5 h-5 text-blue-300" />
              <a
                href="mailto:info@shaheen.com"
                className="hover:text-blue-200 transition-colors"
              >
                info@shaheen.com
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              © {new Date().getFullYear()} Shaheen. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default ShaheenFooter;
