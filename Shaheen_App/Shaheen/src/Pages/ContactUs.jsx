

import React, { useState } from 'react';
import { 
  Mail, 
  User, 
  MessageCircle, 
  Send, 
  MapPin, 
  Phone, 
  Clock 
} from 'lucide-react';
import NavBar from '../components/NavBar';
import ShaheenFooter from '../components/Footer';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    try {
      const response = await fetch('https://shaheen-r0rh.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <NavBar/>
    <div className="min-h-screen bg-white flex items-center justify-center py-28">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Column - Contact Information */}
        <div className="bg-[#1c202c] text-white p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Contact SHAHEEN</h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 text-[#2985B3]" />
              {/* <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="text-sm text-gray-200">
                  Tech Innovation Park, 
                  Solar Street, Dubai, UAE
                </p>
              </div> */}

<div>
  <h3 className="font-semibold">Our Offices</h3>
  <p className="text-sm text-gray-200">
    <strong>Head Office:</strong> Dubai
  </p>
  <p className="text-sm text-gray-200">
    <strong>Marketing Offices:</strong> Germany, Qatar, and Jordan
  </p>
</div>

            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-[#2985B3]" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-sm text-gray-200">
                  contact@shaheen-drones.com
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-[#2985B3]" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-gray-200">
                  +971 50 123 4567
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Clock className="w-8 h-8 text-[#2985B3]" />
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-sm text-gray-200">
                  Monday - Friday: 9 AM - 5 PM
                  Saturday: 10 AM - 2 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#2985B3] pt-6 text-center">
            <p className="text-sm text-gray-200">
              Shaheen Technologies - Innovative Solar Drone Solutions
            </p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="p-12">
          <h2 className="text-2xl font-semibold text-[#2985B3] mb-6 text-center">
            Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <div className="flex items-center">
                <User className="absolute left-3 text-gray-400 transition-all group-focus-within:text-blue-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <div className="flex items-center">
                <Mail className="absolute left-3 text-gray-400 transition-all group-focus-within:text-blue-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <div className="flex items-center">
                <MessageCircle className="absolute left-3 top-10 text-gray-400 transition-all group-focus-within:text-blue-500" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {status && (
              <div className={`text-center ${status.startsWith('Your message') ? 'text-green-500' : 'text-red-500'}`}>
                {status}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white font-semibold rounded-2xl hover:bg-[#2985B3] focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              disabled={loading}
            >
              <Send className="mr-2" />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
      <ShaheenFooter/>
    </div>
  );
};

export default ContactUs;
