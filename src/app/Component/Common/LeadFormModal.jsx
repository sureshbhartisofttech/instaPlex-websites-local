"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronDown, User, Phone, Mail, Building } from "lucide-react";

export default function LeadFormModal({ isOpen, onClose, defaultProduct, productOptions }) {
  const [form, setForm] = useState({
    product: "",
    fullName: "",
    lastName: "",
    email: "",
    mobile: "",
    company:"",
  });

  useEffect(() => {
    if (defaultProduct) {
      setForm((prev) => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative">
        {/* Cross Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 z-10"
        >
          <X size={16} />
        </button>

        <div className="p-4">
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800 mb-0.5">
              Insta<span className="text-[#0040df]">Plex</span>
            </h2>
            <p className="text-xs text-gray-600">Your Business Solutions Partner</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Product Selection */}
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">Select Product</label>
              <div className="relative">
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs focus:border-[#0040df] focus:outline-none bg-gray-50 appearance-none pr-8"
                  required
                >
                  <option value="">Select Product</option>
                  {productOptions.map((p, idx) => (
                    <option key={idx} value={p}>{p}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown size={12} className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-200 rounded-lg p-2.5 pl-8 text-xs focus:border-[#0040df] focus:outline-none bg-gray-50"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <User size={12} className="text-gray-400" />
                </div>
              </div>
            </div>
            {/* Mobile Number */}
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">Mobile Number</label>
              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full border border-gray-200 rounded-lg p-2.5 pl-8 text-xs focus:border-[#0040df] focus:outline-none bg-gray-50"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <Phone size={12} className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-lg p-2.5 pl-8 text-xs focus:border-[#0040df] focus:outline-none bg-gray-50"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <Mail size={12} className="text-gray-400" />
                </div>
              </div>
            </div>
            {/* Company Name */}
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-700">Company Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full border border-gray-200 rounded-lg p-2.5 pl-8 text-xs focus:border-[#0040df] focus:outline-none bg-gray-50"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <Building size={12} className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-[#0040df] text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-[#0033b3] transition-colors duration-200 text-xs"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
