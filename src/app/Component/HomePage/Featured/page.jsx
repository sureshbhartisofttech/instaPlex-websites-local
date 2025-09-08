import Image from "next/image";
import React from "react";

const logos = [
  { src: "/Assests/client_logo/4.png", alt: "BSM" },
  { src: "/Assests/client_logo/1.png", alt: "BBC" },
  { src: "/Assests/client_logo/2.png", alt: "Bharti Resort" },
  { src: "/Assests/client_logo/3.png", alt: "Bharti Group" },
  { src: "/Assests/client_logo/5.png", alt: "Softech" },
  { src: "/Assests/client_logo/6.png", alt: "Digital Markrting" },
];

const FeatureSection = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-12 lg:px-14">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="bg-[#29165e] text-white rounded-lg p-6 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-lg md:text-2xl font-bold mb-4">
              Upcoming Product: <span className="text-yellow-400">Insta Booking</span>
            </h2>
            <p className="mb-6">
              Revolutionize your booking experience with AI-powered automation.
              Seamlessly manage appointments and reservations in real-time.
            </p>
            <a
              href="#"
              className="text-yellow-400 hover:underline font-semibold"
            >
              Discover Insta Booking →
            </a>
          </div>
          <div className="mt-6">
            <Image
              src="/Assests/Product/UpcomingProduct.png"
              alt="Insta Booking"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-100 rounded-lg p-6 flex-1">
          <h2 className="text-lg md:text-2xl font-bold text-purple-800 mb-4">
            Did you know
          </h2>
          <p className="text-gray-700 mb-6">
            InstaPlex has been recognized by leading industry leaders
          </p>
          <hr className="border-gray-300 mb-6" />
          <div className="text-purple-800 text-4xl font-bold mb-2">10+</div>
          <p className="text-gray-600 mb-6">mentions by</p>
          {/* Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 ">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={200}
                className="h-16  mx-auto bg-white rounded-lg p-2 shadow-md object-cover hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
          <a
            href="#"
            className="text-purple-800 hover:underline font-semibold"
          >
            View all recognitions →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
