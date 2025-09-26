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
import LeadFormModal from '../../Common/LeadFormModal';
import HeroAnimatedText from '../../Common/MotionUi/page';

const img = "/Assests/Herosection/monitor.png";
const img2 = "/Assests/Image/crmImg.png";
const img3 = "/Assests/Herosection/sarathi.png";
const img4 = "/Assests/Herosection/insta-social.png";
const img5 = "/Assests/Herosection/insta-learn.png";
const img6 = "/Assests/Herosection/insta-booking.png";

const Herosection = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: "crm",
      name: "Insta CRM",
      icon: Users,
      description: "AI-powered CRM for sales teams",
      image: img2
    },
    {
      id: "shield",
      name: "Insta Monitor",
      icon: Shield,
      description: "AI-powered employee monitoring",
      image: img
    },
    {
      id: "booking",
      name: "Insta Booking",
      icon: CalendarCheck,
      description: "Online appointment scheduling",
      image: img6
    },
    {
      id: "social",
      name: "Insta Social",
      icon: Share2,
      description: "Manage social media accounts",
      image: img4
    },
    {
      id: "partner",
      name: "Insta Partner",
      icon: Handshake,
      description: "Collaborate with partners",
      image: img3
    },
    {
      id: "lms",
      name: "Insta Learn",
      icon: GraduationCap,
      description: "Learning management system",
      image: img5
    }
  ];

  // Product options for the modal
  const productOptions = [
    "Insta CRM",
    "Insta Monitor",
    "Insta Booking",
    "Insta Social",
    "Insta Learn",
    "Insta Partner",
    "Insta Shop",
  ];

  const handleProductClick = (productId) => {
    setActiveProduct(activeProduct === productId ? null : productId);
  };

  const handleConnectClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 w-full">
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/Assests/Herosection/hero-bg.jpeg')] bg-cover bg-center" />
      {/* Bottom Blur Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 hidden lg:block
        backdrop-blur-md 
        bg-gradient-to-t from-white/70 via-white to-transparent 
        pointer-events-none"
      />
      <div className="flex flex-col justify-center items-center ">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <HeroAnimatedText />
          <button
            onClick={handleConnectClick}
            className="bg-[#0040df] hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Let's Connect
          </button>
        </div>

        {/* Main Content - Desktop Layout with Overlap */}
        <div className="hidden lg:flex items-center justify-center  border-1 border-black self-center  w-full">
          {/* Left side - Mock interface */}
          <div className="flex-1 lg:w-full z-0 ring-[0.1px] ring-white ring-offset-1 rounded-xl p-2 bg-transparent  shadow-2xl">
            <div
              className={`bg-white rounded-xl shadow-xl overflow-hidden border-2 border-white transition-all duration-300  ${shouldBlurImage() ? 'filter blur-sm' : 'filter blur-none'
                }`}
            >
              <Image
                src={getDisplayedImage()}
                alt="Workspace interface"
                width={500}
                height={500}
                quality={100}
                title='Workspace interface'
                loading='eager'
                objectFit='cover'
                objectPosition="center"
                aspectRatio='auto'
                className="w-full h-[75vh] transition-all duration-300"
              />
              {shouldBlurImage() && (
                // Blur + color only at bottom
                <div
                  className="absolute inset-x-0 bottom-0 h-16
      backdrop-blur-md
      bg-gradient-to-t from-blue-100 via-white  to-transparent
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
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-600'
                        }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${activeProduct === product.id ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'
                        }`} />
                      <span className={`text-xs font-medium block ${activeProduct === product.id ? 'text-blue-900' : 'text-gray-700'
                        }`}>
                        {product.name}
                      </span>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={handleConnectClick}
                className="w-full bg-[#0040df] hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Explore Our Software Suite
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Image Display */}
          {(activeProduct || hoveredProduct) && (
            <div className="bg-white rounded-xl  overflow-hidden h-72 mb-2">
              <Image
                src={getDisplayedImage()}
                alt="Selected workspace feature"
                quality={100}
                loading='eager'
                title='Product Image'
                objectFit='contain'
                objectPosition="center"
                aspectRatio='auto'
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
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="grid grid-cols-3 gap-5 mb-6">
              {products.slice(0, 9).map((product) => {
                const Icon = product.icon;
                return (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className={`flex flex-col items-center py-2 px-[1px] rounded-lg transition-all duration-200 ${activeProduct === product.id
                      ? 'bg-blue-100 border-2 border-blue-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 bg-blue-500">
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

            <button
              onClick={handleConnectClick}
              className="w-full bg-[#0040df] text-white font-semibold py-3 px-6 rounded-lg mb-4"
            >
              Explore Our Software Suite
            </button>
          </div>
        </div>
      </div>

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultProduct=""
        productOptions={productOptions}
      />
    </div>
  );
};

export default Herosection;
