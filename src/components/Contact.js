import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://3.110.188.192:5000/send-email', formData);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error sending email.');
      console.error(error);
    }
  };

  return (
    <section id="contactme" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
        Contact Me <br />
        <span className="text-gray-500 dark:text-gray-400 text-xl font-medium">
          Let’s create something amazing together! 🎨
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="indrajit4.jpeg"
            alt="Contact Illustration"
            className="w-full h-full rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6">Contact Me</h2> */}
          <form
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <div className="relative mb-6">
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full py-3 pl-12 pr-4 border-2 border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-12 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative mb-6">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full py-3 pl-12 pr-4 border-2 border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-12 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative mb-6">
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="block w-full py-3 pl-4 pr-4 border-2 border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Message
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
              >
                <FaPaperPlane className="inline-block mr-2" />
                Send
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
