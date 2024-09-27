"use client";
import React, { useState } from "react";
import { PropagateLoader } from "react-spinners";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    date: "",
    course: "Advanced Excel",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/postDemo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
          college: "",
          date: "",
        });
        // Show popup
        setShowPopup(true);
        // Hide popup after 3 seconds
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold text-center text-[#075935] mb-8">
        Book a Demo Class
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-[#075935] font-bold mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-[#32B080] rounded-md focus:outline-none focus:ring-2 focus:ring-[#075935]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[#075935] font-bold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-[#32B080] rounded-md focus:outline-none focus:ring-2 focus:ring-[#075935]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-[#075935] font-bold mb-2">
            Mobile *
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-[#32B080] rounded-md focus:outline-none focus:ring-2 focus:ring-[#075935]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="college"
            className="block text-[#075935] font-bold mb-2">
            College or School Name *
          </label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-[#32B080] rounded-md focus:outline-none focus:ring-2 focus:ring-[#075935]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-[#075935] font-bold mb-2">
            Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-[#32B080] rounded-md focus:outline-none focus:ring-2 focus:ring-[#075935]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#EDA915] text-white font-bold py-2 px-4 rounded-md hover:bg-[#075935] transition-colors duration-300"
          disabled={isSubmitting}>
          {isSubmitting ? (
            <PropagateLoader
              color="white"
              cssOverride={{}}
              loading
              size={5}
              speedMultiplier={1}
            />
          ) : (
            "Book Demo"
          )}
        </button>
      </form>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#075935] border border-white rounded-lg p-10 shadow-lg">
            <p className="text-[#ffffff] font-bold text-lg">
              Demo class has been booked!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDemo;
