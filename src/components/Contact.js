import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import contactFormValidation from "../validationSuit/contactFormValidation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input change and validate individual fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Validate individual field on change
    const validation = contactFormValidation({ ...formData, [id]: value }, id);
    if (validation.hasErrors(id)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: validation.getErrors(id)[0], // Show the first error message for this field
      }));
    } else {
      setErrors((prevErrors) => {
        const { [id]: removedError, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Full form validation on submit
    const validation = contactFormValidation(formData);
    if (validation.hasErrors()) {
      const fieldErrors = {};
      validation.getErrors().forEach((error) => {
        fieldErrors[error.field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    } else {
      setErrors({});
    }

    setIsLoading(true);
    setIsSuccess(false);

    try {
      await axios.post('http://3.110.188.192:5000/send-email', formData);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(true);
    } catch (error) {
      alert("Error sending email.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <section id="contactme" className="py-20 px-6 bg-white dark:bg-gray-800">
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
            className="w-full h-full rounded-lg shadow-xl"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold text-black dark:text-white mb-4 text-center">
            Contact Me
          </h2>
          <form
            className="bg-white dark:bg-gray-700 p-8 shadow-2xl rounded-xl"
          >
            <div className="mb-6">
              <label
                className="flex justify-start text-gray-700 dark:text-gray-300 font-semibold text-lg mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow-md appearance-none border-2 border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-6">
              <label
                className="flex justify-start text-gray-700 dark:text-gray-300 font-semibold text-lg mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow-md appearance-none border-2 border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label
                className="flex justify-start text-gray-700 dark:text-gray-300 font-semibold text-lg mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow-md appearance-none border-2 border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                id="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <div className="flex items-center justify-center relative">
              <button

            onSubmit={handleSubmit}
                className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-24 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner-border animate-spin w-6 h-6 border-4 border-t-4 border-white rounded-full"></div>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>

          {isSuccess && (
            <div
              className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <span className="font-medium">Success!</span> Message Sent
              Successfully.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
