
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Lock, Mail, User, X, Eye, EyeOff,Earth } from 'lucide-react'; // Added Eye and EyeOff imports
import bg from "../assets/BG.webp";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear the error when input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://shaheen-r0rh.onrender.com/api/auth/signup', formData);
      navigate('/login'); // Redirect to login after successful signup
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong'); // Handle the error gracefully
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 15,
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] p-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Create an Account on <span className="text-white">SHAHEEN</span>
          </h2>
          <p className="text-white/80 mt-2">
            Secure Access to Solar Infrastructure Insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center justify-between"
            >
              <p className="text-red-600">{error}</p>
              <X
                className="text-red-500 cursor-pointer"
                onClick={() => setError('')}
              />
            </motion.div>
          )}

          {/* Name Input */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2985B3]/50 transition-all"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2985B3]/50 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2985B3]/50 transition-all"
                placeholder="Enter your password"
                required
              />
              {formData.password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2985B3] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
            </div>
          </div>

          {/* City Input */}
          <div className="relative">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <div className="relative">
            <Earth className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2985B3]/50 transition-all"
                placeholder="Enter your Country"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white py-3 rounded-3xl font-semibold hover:opacity-90 transition-all flex items-center justify-center space-x-2"
          >
            <span>Sign Up</span>
          </motion.button>

          {/* Login Redirect */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-[#2985B3] hover:text-[#4ECDC4] font-semibold transition-colors"
              >
                Log In
              </a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupPage;
