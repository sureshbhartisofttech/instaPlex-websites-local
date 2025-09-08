import React from 'react';
import { Facebook, Mail, Video } from 'lucide-react';
import { FaWhatsapp, FaSalesforce } from 'react-icons/fa';
import Image from 'next/image';
const InstaPlex = "/Assests/client_logo/instaplex-logo-2.jpg";

const IntegrationSection = () => {
  // Tool icons with their fixed positions and orbit animations
  const tools = [
    { 
      name: 'Gmail', 
      icon: (
        <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center p-3">
          <Mail className="w-full h-full text-white" />
        </div>
      ), 
      size: 'w-16 h-16', 
      position: 'top-10 right-10 md:top-1/4 md:right-1/4', 
      orbit: 'orbit-1'
    },
    {
      name: 'GoogleMeet',
      icon: (
        <div className="w-full h-full flex items-center justify-center bg-white rounded-full p-2">
         <Image src="https://upload.wikimedia.org/wikipedia/commons/archive/9/9b/20221213135235%21Google_Meet_icon_%282020%29.svg" alt="GoogleMeet" width={100} height={100}  />
        </div>
      ),
      size: 'w-16 h-16',
      position: 'bottom-10 right-10 md:top-[60%] md:right-10',
      orbit: 'orbit-6'
    },
    { 
      name: 'Zoom', 
      icon: (
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center p-3">
          <Video className="w-full h-full text-white" />
        </div>
      ), 
      size: 'w-16 h-16', 
      position: 'top-10 left-10 md:bottom-1/4 md:right-1/3', 
      orbit: 'orbit-5'
    },
    { 
      name: 'WhatsApp', 
      icon: (
        <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center p-3">
          <FaWhatsapp className="w-full h-full text-white" />
        </div>
      ), 
      size: 'w-16 h-16', 
      position: 'bottom-10 left-10 md:bottom-20 md:left-1/3', 
      orbit: 'orbit-2'
    },
    { 
      name: 'Slack', 
      icon: (
        <div className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center p-3">
          <Facebook className="w-full h-full text-white" />
        </div>
      ), 
      size: 'w-16 h-16', 
      position: 'top-1/3 left-5 md:bottom-1/3 md:left-1/4', 
      orbit: 'orbit-3'
    },
    { 
      name: 'Salesforce', 
      icon: (
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
          <Image src="/Assests/microsoft-teams-svgrepo-com.svg" alt="GoogleMeet" width={100} height={100}  />
        </div>
      ), 
      size: 'w-16 h-16', 
      position: 'top-5 left-1/2 md:bottom-10 md:right-20', 
      orbit: 'orbit-4'
    },
    { 
      name: 'Google', 
      icon: (
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
          <Image src="/Assests/google-svgrepo-com.svg" alt="Google" width={100} height={100}  />
        </div>
      ), 
      size: 'w-16 h-16', 
      position: 'bottom-5 left-[55%] md:top-[55%] md:right-10', 
      orbit: 'orbit-7'
    },
  ];

  return (
    <section className="relative w-full bg-[#030b1d] overflow-hidden py-20 px-6 md:px-10 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 z-10 mb-16 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="bg-blue-800/20 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                </svg>
              </div>
              <span className="text-blue-400 tracking-wide uppercase text-sm font-medium">INTEGRATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Integrate with all<br />
              the tools you use<br />
              and love
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Extend InstaPlex to build purpose-driven solutions with ease.
            </p>
            <a href="#integrations" className="inline-flex items-center text-white font-medium group">
              <span>See all Integrations</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          {/* Right Side - Tool Icons on Orbits */}
          <div className="lg:w-1/2 relative h-80 md:h-96 lg:h-[500px] w-full">
            {/* Orbital paths */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border border-blue-700/40 absolute"></div>
              <div className="w-60 h-60 rounded-full border border-blue-700/40 absolute"></div>
              <div className="w-80 h-80 rounded-full border border-blue-700/40 absolute"></div>
              <div className="w-96 h-96 rounded-full border border-blue-700/40 absolute"></div>
              <div className="w-[28rem] h-[28rem] rounded-full border border-blue-700/40 absolute"></div>
              <div className="w-[32rem] h-[32rem] rounded-full border border-blue-700/40 absolute"></div>
            </div>
            {/* Center Point */}
             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full z-20  ">
            <Image src={InstaPlex} alt="Center Point" width={100} height={100} className='rounded-full animate-pulse' title='Center Point' />
            </div>
            {/* Tool Icons */}
            {tools.map((tool) => (
              <div 
                key={tool.name}
                className={`absolute ${tool.position} ${tool.size} ${tool.orbit} hover-wiggle`}
              >
                <div className="orbit-container">
                  {tool.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
