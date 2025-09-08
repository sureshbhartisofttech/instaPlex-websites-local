"use client";
import React, { useRef } from "react";
const v1 = "/Assests/Video/testimonial-1.mp4";
const v3 = "/Assests/Video/testimonial-2.mp4";
const v2 = "/Assests/Video/FINASTRA.mp4";

const testimonials = [
    {
        name: "R-Bharti Groups",
        quote: "InstaPlex Solutions is serving us so we can serve our pet guardians.",
        person: "Sanjeev Mahajan",
        title: "Chief Executive Officer",
        video: v1,
    },
    {
        name: "RE:GEN:TA Bharti Resorts",
        quote: "It's a low-code platform that helps us automate processes.",
        person: "Harsad Pandit",
        title: "Head of Sales Department",
        video: v2,
    },
    {
        name: "R-Bharti Media & Marketing",
        quote: "InstaPlex Solutions is a game-changer for our business.",
        person: "Pravin Gaikwad",
        title: "Managing Director",
        video: v3,
    },
];

export default function Testimonials() {
    const videoRefs = useRef([]);

    const handleMouseEnter = (index) => {
        videoRefs.current[index].play();
    };

    const handleMouseLeave = (index) => {
        videoRefs.current[index].pause();
        videoRefs.current[index].currentTime = 0;
    };

    return (
        <div className="px-4 py-10">
            {/* Header */}
            <div className="text-center mb-10">
                <p className="text-sm text-purple-600 font-medium italic">
                    Testimonials
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
                    Don’t just take it from us
                </h2>
                <p className="text-black mt-3 text-lg font-semibold">
                    Loved by teams. Backed by awards. Trusted worldwide.
                </p>
            </div>

            {/* Video Cards */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-[90%] md:w-[300px] h-[500px] rounded-2xl overflow-hidden shadow-lg group"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={item.video}
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white p-5 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="text-sm mt-1">{item.quote}</p>
                            <div className="text-xs mt-3">
                                <p className="font-semibold">{item.person}</p>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}