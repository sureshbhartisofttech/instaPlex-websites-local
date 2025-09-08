// Footer.jsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaFacebookF, FaDribbble, FaXTwitter, FaEnvelope, FaPhone, FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Footer = () => {
    const [expandedSections, setExpandedSections] = useState({});
    const [isMobile, setIsMobile] = useState(false);

    // Check if screen is mobile and set default expanded section
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 768; // md breakpoint
            setIsMobile(mobile);
            
            // Set Product section as default expanded on mobile
            if (mobile && Object.keys(expandedSections).length === 0) {
                setExpandedSections({ product: true });
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const footerSections = [
        {
            title: "Product",
            key: "product",
            links: [
                { text: "Insta CRM", href: "https://www.instaconnectcrm.com/" },
                { text: "Insta Monitor", href: "#" },
                { text: "Insta Partner", href: "#" },
                { text: "Insta Booking", href: "#" },
                { text: "Insta LMS", href: "#" }
            ]
        },
        {
            title: "Services",
            key: "services",
            subsections: [
                {
                    links: [
                        { text: "Websites Development", href: "#" },
                        { text: "Software Development", href: "#" },
                        { text: "Mobile App Development", href: "#" },
                        { text: "Data Analytics", href: "#" }
                    ]
                },
            ]
        },
        {
            title: "Company",
            key: "company",
            links: [
                { text: "About us", href: "/AboutUs" },
                { text: "Career", href: "#" }
            ]
        },
        {
            title: "Contact Us",
            key: "contact",
            links: [
                { text: "instaplexsolutions@gmail.com", href: "mailto:instaplexsolutions@gmail.com" },
                { text: "+91 9368303030", href: "tel:+919368303030" }
            ]
        },
        {
            title: "Address",
            key: "resources",
            links: [
                { text: "InstaPlex Solutions Pvt. Ltd. Office No 4010, 4th Floor, Marvel Fuego, Near Amanora Mall, opp WeWork/Seasons Mall, 28, Magarpatta, Pune, Maharashtra 411028", href: "#" }
            ],
            highlights: { "Report": "New" }
        },
    ];

    return (
        <div className="relative">
            {/* Main Footer */}
            <footer className="bg-gray-50 text-gray-800 pt-20 pb-12 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Main footer content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Social links */}
                        <div className="lg:col-span-1">
                            <div className="flex space-x-4 mb-6">
                                <Link href="#" className="p-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
                                    <FaLinkedinIn className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="p-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
                                    <FaFacebookF className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="p-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
                                    <FaDribbble className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="p-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
                                    <FaXTwitter className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Dynamic Footer Sections */}
                        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {footerSections.map((section) => (
                                <div key={section.key} className="lg:col-span-1">
                                    <div
                                        className="flex justify-between items-center mb-4 cursor-pointer md:cursor-default"
                                        onClick={() => isMobile && toggleSection(section.key)}
                                    >
                                        <h2 className="text-gray-900 font-semibold text-base">{section.title}</h2>
                                        {/* Show chevron only on mobile */}
                                        {isMobile && (
                                            <div className="md:hidden">
                                                {expandedSections[section.key] ? 
                                                    <FaChevronUp className="w-4 h-4 text-gray-600" /> : 
                                                    <FaChevronDown className="w-4 h-4 text-gray-600" />
                                                }
                                            </div>
                                        )}
                                    </div>

                                    <div className={`${expandedSections[section.key] ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
                                        {section.subsections ? (
                                            section.subsections.map((subsection, idx) => (
                                                <div key={idx} className="mb-8">
                                                    <ul className="space-y-3">
                                                        {subsection.links.map((link, linkIdx) => (
                                                            <li key={linkIdx}>
                                                                <Link href={link.href} className="hover:text-gray-600 transition">
                                                                    {link.text}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))
                                        ) : (
                                            <ul className="space-y-3">
                                                {section.links.map((link, idx) => (
                                                    <li key={idx} className="break-words">
                                                        <div className="flex items-start space-x-2">
                                                            {link.href && link.href.startsWith("mailto:") && <FaEnvelope className="w-8 h-8 text-gray-700 mt-1" />}
                                                            {link.href && link.href.startsWith("tel:") && <FaPhone className="w-4 h-4 text-gray-700 mt-1" />}
                                                            <Link
                                                                href={link.href ? link.href : "#"}
                                                                className="hover:text-gray-600 transition"
                                                            >
                                                                <span className="break-all">{link.text ? link.text : link}</span>
                                                                {section.highlights && section.highlights[link.text] && (
                                                                    <span className="ml-2 px-2 py-0.5 text-gray-900 text-xs font-medium rounded">
                                                                        {section.highlights[link.text]}
                                                                    </span>
                                                                )}
                                                            </Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-4 md:space-y-0">
                            <div className="flex flex-col sm:flex-row gap-4">
                                {['Terms of Service', 'Privacy', 'Sitemap'].map((link) => (
                                    <Link key={link} href="#" className="text-sm text-gray-600 hover:text-gray-900 transition">{link}</Link>
                                ))}
                            </div>
                            <div className="text-sm text-gray-600">
                                © 2025 InstaPlex Solutions Pvt. Ltd. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
