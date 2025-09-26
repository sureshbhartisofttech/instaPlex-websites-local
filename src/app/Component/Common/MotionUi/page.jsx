'use client'
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const rotatingHeadings = [
    "Smart & Scalable Business Software",
    "Smart Websites & Digital Landings Pages",
    "Mobile Apps for Business Growth",
];

const rotatingTaglines = [
    "Businesses work smarter and scale faster",
    "Accelerating your digital growth",
    "Empowering innovation with technology",
    "Simplifying business with smart tools",
];

const HeroAnimatedText = () => {
    const [headingIndex, setHeadingIndex] = useState(0);
    const [taglineIndex, setTaglineIndex] = useState(0);

    // Heading change off (sirf refresh par ek baar aaye)
    // Agar tumhe chahiye ki wo bhi rotate ho, ye effect hata dena
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setHeadingIndex((prev) => (prev + 1) % rotatingHeadings.length);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

    // Taglines rotate hongi har 4 second me
    useEffect(() => {
        const interval = setInterval(() => {
            setTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative text-center mb-12 lg:mb-10 sm:mt-5 lg:mt-10">
            {/* InstaPlex Solutions */}
            <motion.h1
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2"
            >
                InstaPlex Solutions
            </motion.h1>

            {/* Heading */}
            <motion.h2
                key={headingIndex[0]}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-2xl sm:text-3xl lg:text-6xl font-bold text-[#0040df] mb-2"
            >
                {rotatingHeadings[headingIndex]}
            </motion.h2>

            {/* Static description */}
            <p className="text-lg sm:text-xl text-gray-600 font-medium opacity-80 mt-8">
                At InstaPlex Solutions, we deliver innovative business software solutions designed to
                accelerate growth.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 font-medium opacity-80">
                From CRM software and partner management systems to ecommerce platforms and real-time monitoring tools, our products help
            </p>

            {/* Rotating tagline with blue color */}
            <motion.p
                key={taglineIndex}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg sm:text-xl font-medium text-[#0040df] mt-1"
            >
                {rotatingTaglines[taglineIndex]}
            </motion.p>
        </div>
    );
};

export default HeroAnimatedText;
