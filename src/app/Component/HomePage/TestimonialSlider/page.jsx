'use client'

import React, { useEffect, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        image: "/Assests/Testimonial/Sanjeev M Sir.png",
        name: "Sanjeev Mahajan",
        position: "Cheif Executive Officer - Bharti Group",
        quote: "As a CEO, having a clear overview of our business operations is crucial. InstaCRM provides real-time insights and comprehensive analytics, empowering us to make informed strategic decisions.",
        bgColor: "bg-amber-400"
    },
    {
        id: 2,
        image: "/Assests/Testimonial/Dhanshree G Mam.png",
        name: "Dhanshree Giri",
        position: "Head Of Department - Bharti Share Market",
        quote: "Managing multiple departments requires efficient coordination. InstaCRM  has centralized our customer data, facilitating better communication and collaboration across teams. The customizable dashboards allow each department to tailor the interface to their specific needs, enhancing overall productivity.",
        bgColor: "bg-emerald-500"
    },
    {
        id: 3,
        image: "/Assests/Testimonial/Pravin G Sir.png",
        name: "Pravin Gaikwad",
        position: "Head Of Department - Bharti Business Cunsultancy",
        quote: "Implementing InstaCRM has transformed our sales operations. The intuitive features and seamless integration have streamlined our processes, resulting in a 25% increase in client engagement. The real-time analytics provide invaluable insights, enabling us to make data-driven decisions swiftly.",
        bgColor: "bg-blue-500"
    },
    {
        id: 4,
        image: "/Assests/Testimonial/Harshad P Sir.png",
        name: "Harshad Pandit",
        position: "Head Of Department - Bharti Resort",
        quote: "The adoption of InstaCRM has significantly improved our lead management process. Its user-friendly interface and robust features have led to a 20% increase in sales productivity. The automation of routine tasks has freed our team to focus on building stronger client relationships.",
        bgColor: "bg-purple-500"
    },
    // {
    //     id: 5,
    //     image: "/Assests/Testimonial/CEO.png",
    //     name: "Alexandra Smith",
    //     position: "Chief Executive Officer",
    //     quote: "As a CEO, having a clear overview of our business operations is crucial. InstaCRM provides real-time insights and comprehensive analytics, empowering us to make informed strategic decisions. The scalability of the system ensures it grows alongside our expanding enterprise.",
    //     bgColor: "bg-red-500"
    // }
];

export default function ParabolaTestimonialCarousel() {
    const autoplayOptions = {
        delay: 5000,
        stopOnInteraction: false,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            slidesToScroll: 1,
        },
        [Autoplay(autoplayOptions)]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    return (
        <div className="w-full py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-800">Client Testimonials</h2>
                    <p className="text-gray-600 mt-1">Your Success, Our Commitment – See What They Say!</p>
                </div>

                {/* Main Carousel */}
                <div className="relative max-w-5xl mx-auto overflow-hidden">
                    <div className="overflow-visible" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 min-w-0 w-full px-4 transition-opacity duration-300"
                                    style={{
                                        opacity: index === selectedIndex ? 1 : 0.6
                                    }}
                                >
                                    <div className="flex overflow-hidden rounded-lg shadow-md h-full md:h-56">
                                        <div className={`relative w-[40%] ${testimonial.bgColor} overflow-hidden bg-white`}>
                                            {/* Clip path container */}
                                            <div className="absolute inset-0"
                                                >
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full md:object-contain object-cover bg-yellow-300 rounded-br-full"
                                                    fill
                                                    sizes="50vw"
                                                    priority={index === selectedIndex}
                                                />
                                            </div>
                                        </div>

                                        {/* Right side with testimonial content */}
                                        <div className="w-[60%] p-4 md:p-6 bg-white flex flex-col justify-center">
                                            <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                                            <p className="text-xs text-gray-500 mb-2">{testimonial.position}</p>
                                            <p className="text-xs md:text-base text-gray-700 italic">{testimonial.quote}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg z-10 ml-2"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg z-10 mr-2"
                        aria-label="Next"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`transition-all duration-300 w-2 h-2 rounded-full ${index === selectedIndex ? 'bg-amber-500 scale-125' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}