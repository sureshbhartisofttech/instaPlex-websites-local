'use client'
import React, { useState } from "react";

const accordionData = [
    {
        title: "Mobile App Development",
        description:
            "Build cutting-edge mobile applications tailored to your business needs, ensuring seamless user experiences and high performance.",
        bullets: [
            "Develop native and cross-platform mobile apps.",
            "Ensure intuitive UI/UX design for better engagement.",
            "Integrate advanced features like push notifications, geolocation, and more.",
        ],
    },
    {
        title: "Web Development",
        description:
            "Create responsive and scalable websites that deliver exceptional user experiences and drive business growth.",
        bullets: [
            "Design and develop custom websites tailored to your brand.",
            "Ensure mobile-first, responsive design for all devices.",
            "Implement robust backend systems for seamless functionality.",
        ],
    },
    {
        title: "Software Development",
        description:
            "Deliver custom software solutions to streamline operations and enhance productivity for your business.",
        bullets: [
            "Develop scalable and secure software applications.",
            "Provide end-to-end software development services.",
            "Ensure seamless integration with existing systems.",
        ],
    },
    {
        title: "Data Analytics",
        description:
            "Leverage data-driven insights to make informed decisions and drive business success.",
        bullets: [
            "Analyze and visualize data for actionable insights.",
            "Implement predictive analytics for future trends.",
            "Optimize business operations using data-driven strategies.",
        ],
    },
];

const CustomerServiceSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <div className="bg-white py-8 px-4 md:px-12 lg:px-20">
            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Transforming services for{" "}
                    <span className="text-[#5c42fc]">businesses and leaders</span>
                </h2>
                <p className="text-gray-600">
                    Deliver unmatched solutions through innovative technologies and expert-driven strategies.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Accordion Section */}
                <div className="flex-1 space-y-6">
                    {accordionData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg shadow-sm"
                        >
                            <div
                                onClick={() => toggleAccordion(index)}
                                className="flex justify-between items-center p-4 cursor-pointer bg-[#e9edff] hover:bg-gray-100"
                            >
                                <h2 className="font-semibold text-lg text-gray-800">
                                    {item.title}
                                </h2>
                                <span
                                    className={`text-xl transform transition-transform duration-200 ${activeIndex === index ? "rotate-45" : ""
                                        }`}
                                >
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="p-4 text-gray-700">
                                    <p className="mb-4">{item.description}</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {item.bullets.map((bullet, idx) => (
                                            <li key={idx}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Video Section */}
                <div className="flex-1 rounded-lg overflow-hidden">
                    <video loading="lazy" autoPlay={true} playsInline={true} loop={true} muted={true} >
                        <source src="https://yellow.ai/wp-content/uploads/2024/07/For-customers_fast.webm" type="video/webm" />
                        <source src="https://yellow.ai/wp-content/uploads/2024/07/For-customers_fast.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>

    );
};

export default CustomerServiceSection;
