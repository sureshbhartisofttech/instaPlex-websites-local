'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
const logo = "/Assests/client_logo/instaplex-logo.jpg";

// Reusable dropdown menu component
const DropdownMenu = ({ title, isOpen, toggle, children, scrolled }) => {
  const dropdownRef = useRef(null);
  const menuItemRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isOpen) toggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggle]);

  return (
    <div className="relative group" ref={dropdownRef}>
      <button
        className="flex items-center space-x-1"
        onClick={() => toggle(!isOpen)}
        ref={menuItemRef}
      >
        <span>{title}</span>
        <IoIosArrowDown
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}
        />
      </button>
    </div>
  );
};

// Dropdown item component with icon
const DropdownItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3 group cursor-pointer">
    <div className="p-2 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
      {icon}
    </div>
    <div>
      <h3 className="font-medium group-hover:text-purple-600">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

// Integration item component
const IntegrationItem = ({ logo, title, description }) => (
  <div className="flex items-start space-x-3 group cursor-pointer">
    <div className="p-2 bg-gray-100 rounded-full flex items-center justify-center">
      {logo}
    </div>
    <div>
      <h3 className="font-medium group-hover:text-purple-600">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

// Resource item component with image
const ResourceItem = ({ image, title, linkText }) => (
  <div className="flex items-start space-x-3 cursor-pointer">
    <div className="flex-shrink-0">
      {image}
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <a href="#" className="text-purple-600 inline-flex items-center mt-1 text-sm">
        {linkText} <IoIosArrowForward className="ml-1" />
      </a>
    </div>
  </div>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Project dropdown content
  const platformDropdown = (
    <>
      <div>
        <div className="p-4 mb-5 rounded-lg bg-gradient-to-r from-[#1373d6] via-[#f44363] to-[#ff9a68]">
          <h2 className="text-xl font-bold mb-2 text-white">Insta CRM</h2>
          <p className="text-white">Streamline customer relationship management with advanced tools for voice, messaging, and email automation.</p>
        </div>
        <h3 className="font-bold mb-3">InstaCRM</h3>
        <div className="space-y-4">
          <DropdownItem
            icon={<span className="text-xl">📂</span>}
            title="Customer Data Management"
            description="Centralize and manage customer data efficiently"
          />
          <DropdownItem
            icon={<span className="text-xl">📊</span>}
            title="Sales Pipeline Tracking"
            description="Monitor and optimize your sales pipeline"
          />
          <DropdownItem
            icon={<span className="text-xl">🔔</span>}
            title="Task & Activity Reminders"
            description="Stay on top of tasks with automated reminders"
          />
          <DropdownItem
            icon={<span className="text-xl">📈</span>}
            title="Performance Analytics"
            description="Gain insights into team and individual performance"
          />
        </div>

        <div className="flex items-center">
          <span className="font-medium">InstaPartner</span>
          <span className="ml-2 bg-yellow-400 text-xs px-2 py-0.5 rounded-full">New</span>
        </div>
        <div className="space-y-4 mt-4">
          <DropdownItem
            icon={<span className="text-xl">🤝</span>}
            title="Vendor Management"
            description="Efficiently manage and collaborate with vendors in one place"
          />
          <DropdownItem
            icon={<span className="text-xl">📋</span>}
            title="Vendor Portal"
            description="Dedicated portal for vendor documentation and communication"
          />
          <DropdownItem
            icon={<span className="text-xl">📊</span>}
            title="Vendor Performance Tracking"
            description="Monitor and optimize vendor performance"
          />
          <DropdownItem
            icon={<span className="text-xl">📈</span>}
            title="Vendor Analytics"
            description="Gain insights into vendor performance"
          />

        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl mb-4">Integrations</h2>
        <p className="mb-5">Go live in an instant with 10+ plug-n-play integrations</p>

        <h3 className="font-bold mb-3 mt-5">InstaBooking</h3>
        <div className="space-y-4">
          <DropdownItem
            icon={<span className="text-xl">📅</span>}
            title="Appointment Scheduling"
            description="Seamlessly schedule and manage appointments with customers"
          />
          <DropdownItem
            icon={<span className="text-xl">🔄</span>}
            title="Real-time Availability"
            description="Provide real-time availability for bookings across multiple channels"
          />
          <DropdownItem
            icon={<span className="text-xl">📲</span>}
            title="Mobile Booking"
            description="Enable customers to book appointments directly from their mobile devices"
          />
          <DropdownItem
            icon={<span className="text-xl">🔔</span>}
            title="Automated Reminders"
            description="Send automated reminders to reduce no-shows and improve customer experience"
          />
        </div>

        <h3 className="font-bold mb-3 mt-5">InstaMonitoring</h3>
        <div className="space-y-4">
          <DropdownItem
            icon={<span className="text-xl">📊</span>}
            title="Real-time reports and dashboards"
            description="Get insights into your customer interactions"
          />
          <DropdownItem
            icon={<span className="text-xl">🔒</span>}
            title="Data Security"
            description="Ensure customer data is protected with enterprise-grade security measures"
          />
          <DropdownItem
            icon={<span className="text-xl">⚙️</span>}
            title="Customizable Workflows"
            description="Tailor workflows to meet your business needs"
          />
          <DropdownItem
            icon={<span className="text-xl">📈</span>}
            title="Performance Analytics"
            description="Track and optimize team performance with detailed analytics"
          />
          <DropdownItem
            icon={<span className="text-xl">🛡️</span>}
            title="Fraud Detection"
            description="Identify and mitigate fraudulent activities in real-time"
          />
        </div>
      </div>
    </>
  );

  // Our Services dropdown content
  const solutionsDropdown = (
    <div className="flex  justify-evenly items-center gap-6  p-4 w-[200%] ">
      <div className=' '>
        <h2 className="font-bold text-2xl mb-4">Our Services</h2>
        <div className="space-y-5 w-96">
          <DropdownItem icon={<span className="text-xl">🌐</span>} title="Websites Development" description="Create responsive and modern websites tailored to your needs" />
          <DropdownItem icon={<span className="text-xl">📱</span>} title="App Development" description="Build user-friendly mobile applications for iOS and Android" />
        </div>
      </div>
      <div className=' w-96 '>
        <h2 className="font-bold text-2xl mb-4">&nbsp;</h2>
        <div className="space-y-5">
          <DropdownItem icon={<span className="text-xl">💻</span>} title="Software Development" description="Custom software solutions to streamline your business processes" />
          <DropdownItem icon={<span className="text-xl">📊</span>} title="Data Analytics" description="Leverage data insights to drive smarter business decisions" />
        </div>
      </div>
    </div>
  );

  // Contact Us dropdown content - Updated version
  const llmsDropdown = (
    <div className="flex flex-col items-center p-4 w-[200%]">
      {/* <h2 className="font-bold text-2xl mb-4 align-start">Contact Us</h2> */}

      <div className="flex justify-between w-full max-w-4xl gap-6">
        {/* Left side - Phone and Email */}
        <div className="flex flex-col space-y-5 w-1/2">
          <DropdownItem
            icon={<span className="text-xl">📧</span>}
            title="Email"
            type="email"
            description="instaplexsolutions@gmail.com"
          />
          <DropdownItem
            icon={<span className="text-xl">📞</span>}
            title="Phone"
            type="tel"
            description="+91 9368303030"
          />
          <DropdownItem
            icon={<span className="text-xl">🕒</span>}
            title="Office Hours"
            description="Monday to Friday, 9 AM - 6 PM"
          />
        </div>

        {/* Right side - Address */}
        <div className="flex flex-col w-1/2 space-y-5">
          <DropdownItem
            icon={<span className="text-xl">📍</span>}
            title="Address"
            description="InstaPlex Solutions Pvt. Ltd. Office No 4010, 4th Floor, Marvel Fuego, Near Amanora Mall, opp WeWork/Seasons Mall, 28, Magarpatta, Pune, Maharashtra 411028"
          />
          <DropdownItem
            icon={<span className="text-xl">💬</span>}
            title="Get in Touch"
            description="Feel free to reach out for any inquiries or project discussions. We're here to help with customized solutions."
          />
        </div>
      </div>
    </div>
  );


  return (
    <div>
      <nav className={`fixed w-full transition-all duration-300 ${scrolled ? 'bg-[#f9fafb] border-b' : 'bg-[#f9fafb]'} z-50`} ref={navbarRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
              <Link href="/" title="InstaPlex Solutions">
                <Image
                  title='InstaPlex Solutions'
                  src={logo}
                  width={70}
                  height={50}
                  alt="InstaPlex Solutions"
                  priority
                />
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <DropdownMenu
                title={<span className={`${scrolled ? 'text-gray-700 hover:text-black' : 'text-gray-700:text-gray-200'}`}>Product</span>}
                isOpen={activeDropdown === 'platform'}
                toggle={() => toggleDropdown('platform')}
                scrolled={scrolled}
              />

              <DropdownMenu
                title={<span className={`${scrolled ? 'text-gray-700 hover:text-black' : 'text-gray-700 hover:text-gray-200'}`}>Services</span>}
                isOpen={activeDropdown === 'solutions'}
                toggle={() => toggleDropdown('solutions')}
                scrolled={scrolled}
              />

              <DropdownMenu
                title={<span className={`${scrolled ? 'text-gray-700 hover:text-black' : 'text-gray-700 hover:text-gray-200'}`}>Contact Us</span>}
                isOpen={activeDropdown === 'llms'}
                toggle={() => toggleDropdown('llms')}
                scrolled={scrolled}
              />

            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:to-purple-700 hover:scale-105  ">
                Contact InstaPlex Solutions
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop-only Global Dropdown */}
          {activeDropdown && !activeDropdown.includes('mobile') && (
            <div className="hidden md:block absolute left-0 right-0 mx-auto mt-0 w-11/12 bg-white rounded-lg shadow-lg overflow-hidden backdrop-blur-2xl z-50">
              <div className="max-h-[80vh] overflow-y-auto">
                <div className="p-6 grid grid-cols-2 gap-6">
                  {activeDropdown === 'platform' && platformDropdown}
                  {activeDropdown === 'solutions' && solutionsDropdown}
                  {activeDropdown === 'llms' && llmsDropdown}
                </div>
              </div>
            </div>
          )}
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden w-full space-y-2 pt-2 px-3 pb-4 bg-white rounded-lg mt-2 shadow-lg backdrop-blur-lg z-50">
              <div className="border-b border-gray-200 py-2">
                <button
                  onClick={() => toggleDropdown('mobile-platform')}
                  className={`flex items-center justify-between w-full ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}
                >
                  <span className='font-semibold'>Product</span>
                  <IoIosArrowDown className={`transition-transform duration-200 ${activeDropdown === 'mobile-platform' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-platform' && (
                  <div className="py-2 px-4 space-y-2 mt-2 max-h-64 overflow-y-auto">
                    <a href="#" className="block py-1">InstaCRM</a>
                    <a href="#" className="block py-1">InstaMonitering</a>
                    <a href="#" className="block py-1">InstaPartner</a>
                    <a href="#" className="block py-1">InstaBooking</a>
                    <a href="#" className="block py-1">InstaLMS</a>
                    <a href="#" className="block py-1">InstaSocial</a>
                  </div>
                )}
              </div>
              <div className="border-b border-gray-200 py-2">
                <button
                  onClick={() => toggleDropdown('mobile-solutions')}
                  className={`flex items-center justify-between w-full ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}
                >
                  <span className='font-semibold'>Services</span>
                  <IoIosArrowDown className={`transition-transform duration-200 ${activeDropdown === 'mobile-solutions' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-solutions' && (
                  <div className="py-2 px-4 space-y-2 mt-2 max-h-64 overflow-y-auto">
                    <a href="#" className="block py-1">Websites Development</a>
                    <a href="#" className="block py-1">App Development</a>
                    <a href="#" className="block py-1">Software Development</a>
                    <a href="#" className="block py-1">Data Analytics</a>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200 py-2">
                <button
                  onClick={() => toggleDropdown('mobile-llms')}
                  className={`flex items-center justify-between w-full ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}
                >
                  <span className='font-semibold'>Contact Us</span>
                  <IoIosArrowDown className={`transition-transform duration-200 ${activeDropdown === 'mobile-llms' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-llms' && (
                  <div className="py-2 px-4 space-y-2 mt-2 max-h-64 overflow-y-auto">
                    <p className="font-medium">Get in Touch</p>
                    <a href="mailto:instaplexsolutions@gmail.com" className="block py-1 flex items-center gap-2">
                      📧 instaplexsolutions@gmail.com
                    </a>
                    <a href="tel:+919368303030" className="block py-1 flex items-center gap-2">
                      📞 +91 9368303030
                    </a>
                  </div>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-2 rounded-full hover:bg-purple-700 mt-4">
                Contact InstaPlex Solutions
              </button>
            </div>
          )}
        </div>
      </nav>
      {/* Add padding to offset the fixed navbar */}
      <div className="h-16"></div>
    </div>
  )
}

export default Navbar