'use client'
import React, { useState } from 'react';
import {
  Shield,
  Users,
  CalendarCheck,
  Share2,
  Handshake,
  GraduationCap
} from 'lucide-react';
import Image from 'next/image';
const img = "/Assests/Herosection/insta-shield-5.png";
const img2 = "/Assests/Herosection/crm3.png";
const img3 = "/Assests/Herosection/sarathi.png";
const img4 = "/Assests/Herosection/insta-social.png";
const img5 = "/Assests/Herosection/insta-learn.png";
const img6 = "/Assests/Herosection/insta-booking.png";


const Herosection = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: "shield",
      name: "Insta Monitoring",
      icon: Shield,
      description: "Manage and track your tasks efficiently",
      image: img
    },
    {
      id: "crm",
      name: "Insta CRM",
      icon: Users,
      description: "Real-time team communication",
      image: img2
    },
    {
      id: "booking",
      name: "Insta Booking",
      icon: CalendarCheck,
      description: "AI-powered productivity assistant",
      image: img6
    },
    {
      id: "social",
      name: "Insta Social",
      icon: Share2,
      description: "Agile sprint management",
      image: img4
    },
    {
      id: "partner",
      name: "Insta Partner",
      icon: Handshake,
      description: "Track time across projects",
      image: img3
    },
    {
      id: "lms",
      name: "Insta LMS",
      icon: GraduationCap,
      description: "Track time across projects",
      image: img5
    }
  ];
  const handleProductClick = (productId) => {
    setActiveProduct(activeProduct === productId ? null : productId);
  };

  const getDisplayedImage = () => {
    if (activeProduct) {
      return products.find(p => p.id === activeProduct)?.image;
    }
    if (hoveredProduct) {
      return products.find(p => p.id === hoveredProduct)?.image;
    }
    return img;
  };

  const shouldBlurImage = () => {
    return !activeProduct && !hoveredProduct;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-400 py-20 px-4 sm:px-6 lg:px-8 w-full">
      {/* Bottom Blur Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 hidden lg:block
        backdrop-blur-md 
        bg-gradient-to-t from-white/70 via-white to-transparent 
        pointer-events-none"
      />
      <div className="flex flex-col justify-center items-center ">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            InstaPlex Solutions <br / >
            {` `}
             Smart & Scalable Business Software
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            At InstaPlex Solutions, we deliver innovative business software solutions designed to
            accelerate growth. 
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            From CRM software and partner management systems to ecommerce platforms and real-time monitoring tools, our products help businesses
            work smarter and scale faster
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Contact InstaPlex Solutions
          </button>
          <p className="text-sm text-gray-500 mt-3">Free Forever. No Credit Card.</p>
        </div>

        {/* Main Content - Desktop Layout with Overlap */}
        <div className="hidden lg:flex items-center justify-center  border-1 border-black self-center  w-full">
          {/* Left side - Mock interface */}
          <div className="flex-1 lg:w-full z-0 ring-[0.1px] ring-white ring-offset-1 rounded-xl p-2 bg-transparent  shadow-2xl">
            <div
              className={`bg-white rounded-xl shadow-xl overflow-hidden border-2 border-white transition-all duration-300  ${shouldBlurImage() ? 'filter blur-sm' : 'filter blur-none'
                }`}
            >
              <img
                src={getDisplayedImage()}
                alt="Workspace interface"
                className="w-full h-[75vh] object-cover transition-all duration-300"
              />
              {shouldBlurImage() && (
                // Blur + color only at bottom
                <div
                  className="absolute inset-x-0 bottom-0 h-16
      backdrop-blur-md
      bg-gradient-to-t from-blue-50 via-white  to-transparent
      pointer-events-none"
                />
              )}
            </div>
          </div>

          {/* Right side - Workspace setup with raised overlap */}
          <div className='ring-[0.1px] ring-white ring-offset-1 rounded-xl bg-transparent -translate-x-[10%] shadow-2xl  '
          >
            <div className="w-80 xl:w-96 z-10 rounded-xl shadow-xl px-6  py-12 bg-white  m-2 ">
              <h2 className="text-xl font-bold text-gray-900 mb-0.5 text-center">Set up your Workspace</h2>
              <p className="text-gray-600 mb-6 text-sm text-center">Start with what you need, customize as you go.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {products.slice(0, 12).map((product) => {
                  const Icon = product.icon;
                  return (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md group ${activeProduct === product.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                        }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${activeProduct === product.id ? 'text-purple-600' : 'text-gray-600 group-hover:text-purple-600'
                        }`} />
                      <span className={`text-xs font-medium block ${activeProduct === product.id ? 'text-purple-900' : 'text-gray-700'
                        }`}>
                        {product.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
               Explore Our Software Suite
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          
          <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {products.slice(0, 9).map((product) => {
                const Icon = product.icon;
                return (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className={`flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${activeProduct === product.id
                      ? 'bg-purple-100 border-2 border-purple-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${product.id === 'tasks' ? 'bg-blue-500' :
                      product.id === 'chat' ? 'bg-purple-500' :
                        product.id === 'docs' ? 'bg-blue-600' :
                          product.id === 'calendar' ? 'bg-gray-800' :
                            product.id === 'ai' ? 'bg-pink-500' :
                              product.id === 'time-tracking' ? 'bg-green-500' :
                                product.id === 'sprints' ? 'bg-purple-600' :
                                  product.id === 'dashboards' ? 'bg-gray-700' :
                                    'bg-orange-500'
                      }`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{product.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="text-center mb-4">
              <span className="text-sm text-gray-600">and so much more...</span>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg mb-4">
              Explore Our Software Suite
            </button>

            
          </div>

          {/* Mobile Image Display */}
          {(activeProduct || hoveredProduct) && (
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-72">
              <Image
                src={getDisplayedImage()}
                alt="Selected workspace feature"
                className="w-full h-48 object-cover"
                width={100}
                height={100}
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">
                  {products.find(p => p.id === (activeProduct || hoveredProduct))?.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {products.find(p => p.id === (activeProduct || hoveredProduct))?.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Herosection;