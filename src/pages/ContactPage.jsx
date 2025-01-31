import React, { useState } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const ContactPage = () => {
  const [isFocus, setIsFocus] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center py-12 px-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Main Content */}
      <div className="max-w-3xl w-full space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-2 text-lg text-gray-700">
            We'd love to hear from you! Fill out the form below or reach out via email.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
          >
            <PaperPlaneIcon className="mr-2 -rotate-45 w-5 h-5" />
            Send Message
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="text-center space-y-4">
          <p className="text-gray-800">
            Alternatively, you can email us directly at{" "}
            <a href="mailto:contact@example.com" className="text-blue-600 underline">
              contact@example.com
            </a>
            .
          </p>
          <p className="text-gray-600">
            Follow us on social media for updates:
            <a
              href="https://www.github.com/codebyfaisal"
              className="ml-2 text-blue-600 underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;