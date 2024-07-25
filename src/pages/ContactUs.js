import Aos from "aos";
import React, { useEffect, useState } from "react";

const ContactUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1
        className="text-2xl md:text-3xl font-bold mb-4 text-center"
        data-aos="fade-up"
      >
        Contact Us
      </h1>
      <div className="mb-8">
        <p className="mb-2" data-aos="fade-up">
          <strong>Address:</strong>
        </p>
        <p data-aos="flip-left">Springdale Public School,</p>
        <p data-aos="flip-left">
          Sector 62, Noida, Uttar Pradesh, India, 201301
        </p>
        <p className="mb-2 mt-4" data-aos="fade-up">
          <strong>Contact Numbers:</strong>
        </p>
        <p data-aos="flip-left">Main Office: +91 123 456 7890</p>
        <p data-aos="flip-left">Admissions: +91 123 456 7891</p>
        <p className="mb-2 mt-4" data-aos="fade-up">
          <strong>Email:</strong>
        </p>
        <p data-aos="flip-left">
          General Inquiries: info@springdalepublicschool.edu.in
        </p>
        <p data-aos="flip-left">
          Admissions: admissions@springdalepublicschool.edu.in
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7000.509210348839!2d77.37221744289115!3d28.620013935496725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5487a7787d5%3A0x26a20a2f8483c119!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201301%2C%20India!5e0!3m2!1sen!2sus!4v1627651953324!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
