import React from "react";

const TrustedBrands = () => {
    return (
        <div className="bg-gradient-to-r bg-[#341e7d] to-bg-[#341e7d] py-8">
            <div className="container mx-auto px-4">
                {/* Trusted Heading */}
                <div className="flex flex-col md:flex-row items-center justify-between text-white mb-6">
                    <h2 className="text-lg md:text-2xl font-semibold">
                        Trusted by 1100+ global brands
                    </h2>
                    <div className="hidden md:block w-px bg-white h-6 md:ml-6"></div>
                </div>

                {/* Logos Section */}
                <marquee>
                    <div className="flex items-center justify-between overflow-x-auto space-x-6">

                        <img
                            src="/Assests/mirchi.jpg"
                            alt="Pepsi Logo"
                            className="h-12 md:h-16 object-contain"
                        />
                        <img
                            src="/Assests/pudhari.jpg"
                            alt="Ferrellgas Logo"
                            className="h-12 md:h-16 object-contain"
                        />
                        <img
                            src="/Assests/saam.jpg"
                            alt="Amazon Logo"
                            className="h-12 md:h-16 object-contain"
                        />
                        <img
                            src="/Assests/sakal.jpg"
                            alt="Bayer Logo"
                            className="h-12 md:h-16 object-contain"
                        />
                        <img
                            src="/Assests/bigfm.jpg"
                            alt="PapaJohn's Logo"
                            className="h-12 md:h-16 object-contain"
                        />
                        <img
                            src="/Assests/bigfm.jpg"
                            alt="PapaJohn's Logo"
                            className="h-12 md:h-16 object-contain"
                        />
                        <img
                            src="/Assests/sakal.jpg"
                            alt="Bayer Logo"
                            className="h-12 md:h-16 object-contain"
                        />

                    </div>
                </marquee>
            </div>
        </div>
    );
};

export default TrustedBrands;
