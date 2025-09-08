import React from "react";
import Image from "next/image"; 

// Icons for the cards
const icons = {
  voice: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#6366F1" />
      <path d="M12 7.5V16.5M9 10.5V13.5M15 9V15M6 12H6.01M18 12H18.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  email: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#6366F1" />
      <path d="M6 8H18V16H6V8Z M6 8L12 13L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chat: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#6366F1" />
      <path d="M7 8H17C17.5523 8 18 8.44772 18 9V15C18 15.5523 17.5523 16 17 16H7C6.44772 16 6 15.5523 6 15V9C6 8.44772 6.44772 8 7 8Z" stroke="white" strokeWidth="2" />
      <path d="M10 12H14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  serviceCloud: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#6366F1" />
      <path d="M6 14H18M6 10H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  contactCenter: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#6366F1" />
      <path d="M9 9H9.01M15 9H15.01M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  analyze: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#6366F1" />
      <path d="M12 24V18M18 24V12M24 24V16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  manage: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#6366F1" />
      <path d="M18 12V24M12 18H24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="18" r="4" stroke="white" strokeWidth="2.5" />
    </svg>
  ),
};

const cardStyles = "bg-gradient-to-br from-[#e0d4ff] to-[#fefeff] bg-opacity-60 backdrop-blur-md rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-110";
const whiteCardStyles = "bg-[#ffffff] rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-110";
const centerCardStyles = "bg-gradient-to-br from-[#e3d9ff] to-[#f1e3d2] bg-opacity-60 backdrop-blur-md rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-110";

const logos = [
  { id: "sap", src: "https://yellow.ai/wp-content/uploads/2024/07/sap.svg", alt: "SAP Logo" },
  { id: "salesforce", src: "https://yellow.ai/wp-content/uploads/2024/07/saleforce.svg", alt: "Salesforce Logo" },
  { id: "nice", src: "https://yellow.ai/wp-content/uploads/2024/07/nice.svg", alt: "NICE Logo" },
  { id: "servicenow", src: "https://yellow.ai/wp-content/uploads/2024/07/servicenow.svg", alt: "ServiceNow Logo" },
];

const RedefineCustomerService = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:h-[140vh] bg-[#f3f6ff] overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Title */}
        <h2 className="text-center text-2xl lg:text-4xl font-bold text-gray-900 my-6 md:my-8 lg:my-10">
          Redefine customer service with InstaPlex
        </h2>

        {/* Mobile Layout */}
        <div className="md:hidden flex-1 flex flex-col items-center justify-center space-y-4">
          {/* Insta Connect Card */}
          <div className={`${whiteCardStyles} w-full max-w-sm`}>
            <h3 className="text-xl font-bold text-center mb-1">Insta Connect (vendor)</h3>
            <p className="text-sm text-center mb-4">
              Seamlessly connect with vendors<br />through our platform.
            </p>
          </div>

          {/* Insta Shield Card */}
          <div className={`${cardStyles} w-full max-w-sm`}>
            <h3 className="text-xl font-semibold text-center mb-3">Insta Shield</h3>
            <p className="text-sm text-center">
              Advanced security for your<br />business operations.
            </p>
          </div>

          {/* Insta Booking Card */}
          <div className={`${whiteCardStyles} w-full max-w-sm`}>
            <h3 className="text-xl font-bold text-center mb-1">Insta Booking</h3>
            <p className="text-sm text-center mb-4">
              Simplify scheduling and<br />appointments with ease.
            </p>
          </div>

          {/* Insta Call Recording Card */}
          <div className={`${cardStyles} w-full max-w-sm`}>
            <h3 className="text-xl font-semibold text-center mb-3">Insta Call Recording</h3>
            <p className="text-sm text-center">
              Record and manage calls<br />for better insights.
            </p>
          </div>
        </div>

        {/* Desktop Layout (Circular)  */}
        <div className="hidden md:block flex-1">
          <div className="relative h-[700px] max-h-[80vh] flex justify-center items-center mt-28">
            {/* Central Box */}
            <div className={`${centerCardStyles} absolute w-80 z-30 text-center`}>
              <h3 className="text-xl font-semibold mb-4">Insta CRM</h3>
              <p className="text-sm">
                Manage customer relationships<br />efficiently with Insta CRM.
              </p>
            </div>

            {/* Insta Connect Card - Top */}
            <div className={`${whiteCardStyles} absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 z-40 text-center`}>
              <h3 className="text-xl font-bold mb-2">Insta Connect (vendor)</h3>
              <p className="text-sm mb-4">
                Seamlessly connect with vendors<br />through our platform.
              </p>
            </div>

            {/* Insta Shield Card - Left */}
            <div className={`${cardStyles} absolute left-0 top-1/2 transform -translate-y-1/2 w-72 z-40 text-center`}>
              <h3 className="text-xl font-bold my-2">Insta Shield</h3>
              <p className="text-sm">
                Advanced security for your<br />business operations.
              </p>
            </div>

            {/* Insta Booking Card - Bottom */}
            <div className={`${whiteCardStyles} absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-80 z-40 text-center`}>
              <h3 className="text-xl font-bold mb-2">Insta Booking</h3>
              <p className="text-sm mb-4">
                Simplify scheduling and<br />appointments with ease.
              </p>
            </div>

            {/* Insta Call Recording Card - Right */}
            <div className={`${cardStyles} absolute right-0 top-1/2 transform -translate-y-1/2 w-72 z-40 text-center`}>
              <h3 className="text-xl font-bold my-2">Insta Call Recording</h3>
              <p className="text-sm">
                Record and manage calls<br />for better insights.
              </p>
            </div>

            {/* Connectors with Arrows */}
            <div className="absolute flex items-center justify-center top-[100px] h-16">
              <div className="h-16 border-l border-purple-300 border-dashed"></div>
              <div className="absolute top-1/2 -translate-y-1/2 text-purple-500">▲</div>
              <div className="absolute bottom-1/2 translate-y-1/2 text-purple-500">▼</div>
            </div>
            
            <div className="absolute flex items-center justify-center bottom-[100px] h-16">
              <div className="h-16 border-l border-purple-300 border-dashed"></div>
              <div className="absolute top-1/2 -translate-y-1/2 text-purple-500">▲</div>
              <div className="absolute bottom-1/2 translate-y-1/2 text-purple-500">▼</div>
            </div>

            {/* Circular Connectors */}
            <div className="absolute rounded-full border-dashed border-2 border-purple-300 w-[750px] h-[400px]"></div>
            <div className="absolute rounded-full border-dashed border-2 border-purple-300 w-[650px] h-[340px]"></div>
            <div className="absolute rounded-full border-dashed border-2 border-purple-300 w-[550px] h-[280px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedefineCustomerService;