'use client'
import Image from "next/image";
import { useState } from "react";

export default function Automation() {
    const [activeIndex, setActiveIndex] = useState(0);

    const accordionData = [
        {
            title: "CRM platform that enhances customer relationships",
            content: `
        Empower your team with a CRM platform that prioritizes customer satisfaction. Our solution is designed
        to streamline interactions, improve customer retention, and drive business growth.
`,
        },
        {
            title: "Seamless integration with your existing tools",
            content: `
        Our CRM integrates effortlessly with your current systems, ensuring a smooth transition and enabling
        your team to work more efficiently without disruptions.
      `,
        },
        {
            title: "Expert support for optimized CRM implementation",
            content: `
        Leverage our professional services team to ensure a successful CRM implementation. We provide expert
        guidance to help you maximize the value of your CRM investment.
      `,
        },
    ];

    const toggleSection = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };
    return (
        <div className="flex flex-col gap-10 md:flex-row items-center justify-between px-4 md:px-12 lg:px-24 py-28">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2  flex justify-center md:justify-start">
                <div className="relative w-3/4 md:w-full h-[500px] aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/Assests/cloudtech.png"
                        alt="Team collaborating"
                        width={900}
                        height={900}
                        className="object-cover w-full h-full"
                    />

                </div>
            </div>
            {/* Right Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        Insta CRM platform that
                        <span className="text-purple-600"> enhances customer </span>relationships
                    </h2>
                </div>

                {/* Right Content Section */}
                <div className="w-full  text-center md:text-left mt-8 md:mt-6">
                    {/* Accordion Sections */}
                    <div className="space-y-6">
                        {accordionData.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 pb-4">
                                {/* Section Title */}
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="text-xl font-semibold flex items-center justify-between w-full"
                                >
                                    {item.title}
                                    <span className="ml-2">{activeIndex === index ? "−" : "+"}</span>
                                </button>

                                {/* Section Content */}
                                {activeIndex === index && (
                                    <p className="text-gray-700 mt-4">{item.content}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

