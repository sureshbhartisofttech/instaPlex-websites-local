import Image from "next/image";
import Link from "next/link";
import React from "react";
const CRMImage = "/Assests/Image/CRM.png";
const InstaShield = "/Assests/Image/Insta-shield-2.png";
const InstaBooking = "/Assests/Image/Insta-Booking.png";
const InstaPartner = "/Assests/Image/Insta-Partner.png";
const InstaCall = "/Assests/Image/Insta-Calling.png";
const rightImage = "/Assests/Image/Lms.png";
const InstaShop = "/Assests/Image/Insta-Shop.png";

export default function SmartToolsSection() {
    return (
        <div >
            {/* Top Header */}
            <div className="text-center mx-auto px-4 py-10 ">
                <p className="text-sm text-purple-600 font-medium">
                    The <span className="italic">10x your work with smarter tools </span> workspace
                </p>
                <h2 className="text-5xl font-bold text-gray-900 mt-2">
                    Smart products for smarter workflows
                </h2>
                <p className="text-black mt-3 text-lg font-semibold">
                    Work smarter in every way.
                </p>
                <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg text-md font-semibold hover:bg-gray-800 transition-all">
                    See all use cases →
                </button>
            </div>

            {/* Main Section */}
            {/* InstaCRM */}
            <section className="w-full px-6 md:px-32 py-12 flex flex-col md:flex-row items-center">
                {/* Left Side - Image */}
                <div className="flex-1">
                    <Image
                        title="Insta CRM"
                        src={CRMImage}
                        alt="Insta CRM"
                        width={450}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-medium text-purple-600 mb-3 italic">InstaCRM</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Smart Customer Relationship Management Software
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        <span className="font-bold">Boost sales and engagement with InstaCRM</span>  a smart CRM software for lead
                        management, sales automation, customer tracking, and reporting.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <Link type="button" href="https://www.instaconnectcrm.com/"  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold text-md rounded-lg hover:opacity-90 transition">
                            Try InstaCRM
                        </Link>
                        <Link type="button" href="https://www.instaconnectcrm.com/" className="px-4 py-2 bg-black text-white font-semibold text-md rounded-lg hover:bg-gray-900 transition">
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>
            {/* InstaMonitor */}
            <section className="w-full px-6 md:px-32 py-12 flex flex-col md:flex-row items-center gap-10">
                {/* Left Side - Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-medium text-purple-600 mb-3 italic">InstaMonitor</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Real-Time Monitoring Solutions
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        <span className="font-bold">Track business processes, employee activity monitoring,</span> and system performance with
                        real-time dashboards and alerts
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button className="px-10 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold text-md rounded-lg hover:opacity-90 transition">
                            Try InstaMonitoring
                        </button>
                        {/* <button className="px-6 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-900 transition">
                            Learn more
                        </button> */}
                    </div>

                </div>
                {/* Right Side - Image */}
                <div className="flex-1">
                    <Image
                        title="InstaMonitoring"
                        src={InstaShield}
                        alt="InstaMonitoring"
                        width={450}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </section>
            {/* InstaBooking */}
            <section className="w-full px-6 md:px-36 py-12 flex flex-col md:flex-row items-center gap-10">
                {/* Left Side - Image */}
                <div className="flex-1">
                    <Image
                        src={InstaBooking}
                        alt="AI Tools"
                        width={450}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-medium text-purple-600 mb-3 italic">InstaBooking</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Online Booking & Scheduling Software
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        <span className="font-bold">Automate appointments, reservations, and scheduling</span> with reminders and calendar integrations.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold text-md rounded-lg hover:opacity-90 transition">
                            Try InstaBooking
                        </button>
                        <button className="px-4 py-2 bg-black text-white font-semibold text-md rounded-lg hover:bg-gray-900 transition">
                            Learn more
                        </button>
                    </div>
                </div>
            </section>
            {/* InstaLearn */}
            <section className="w-full px-6 md:px-36 py-12 flex flex-col md:flex-row items-center gap-10">
                {/* Left Side - Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-medium text-purple-600 mb-3 italic">InstaLearn</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Learning & Training Management Platform
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        <span className="font-bold">Deliver interactive online learning, corporate training, </span>   , and assessments with InstaLearn
                        – a modern LMS platform.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button className="px-10 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold text-md rounded-lg hover:opacity-90 transition">
                            Try InstaLearn
                        </button>
                        {/* <button className="px-6 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-900 transition">
                            Learn more
                        </button> */}
                    </div>
                </div>
                {/* Right Side - Image */}
                <div className="flex-1">
                    <Image
                        src={rightImage}
                        alt="AI Tools"
                        width={450}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </section>
            {/* InstaPartner */}
            <section className="w-full px-6 md:px-32 py-12 flex flex-col md:flex-row items-center">
                {/* Left Side - Image */}
                <div className="flex-1">
                    <Image
                        title="InstaPartner"
                        src={InstaPartner}
                        alt="InstaPartner"
                        width={450}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-medium text-purple-600 mb-3 italic">InstaPartner</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Partner Ecosystem Management Software

                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        <span className="font-bold">Simplify onboarding and collaboration with InstaPartner,</span>  a complete solution for
                        distributor, reseller, and affiliate management.

                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold text-md rounded-lg hover:opacity-90 transition">
                            Try InstaPartner
                        </button>
                        <button className="px-4 py-2 bg-black text-white font-semibold text-md rounded-lg hover:bg-gray-900 transition">
                            Learn more
                        </button>
                    </div>
                </div>
            </section>
            {/* InstaShop */}
            <section className="w-full px-6 md:px-32 py-12 flex flex-col md:flex-row items-center gap-10">
                {/* Left Side - Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-medium text-purple-600 mb-3 italic">InstaShop</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Scalable E-Commerce Solutions
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        <span className="font-bold">Launch and grow your online business with InstaShop,</span> offering custom storefronts,
                        secure payments, inventory management, and marketing tools.
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button className="px-10 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold text-md rounded-lg hover:opacity-90 transition">
                            Try InstaShop
                        </button>
                        {/* <button className="px-6 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-900 transition">
                            Learn more
                        </button> */}
                    </div>

                </div>
                {/* Right Side - Image */}
                <div className="flex-1">
                    <Image
                        title="InstaShop"
                        src={InstaShop}
                        alt="InstaShop"
                        width={450}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </section>
            {/* InstaCalling */}
            <section className="w-full px-6 md:px-32 py-12 flex flex-col md:flex-row items-center">
                {/* Left Side - Image */}
                <div className="flex-1">
                    <Image
                        title="InstaCalling"
                        src={InstaCall}
                        alt="InstaCalling"
                        width={450}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-medium text-purple-600 mb-3 italic">InstaCalling</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Business Communication & Calling Tools
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        <span className="font-bold">Enhance communication with VoIP calling, integrated messaging, and call tracking</span> features for teams and customer support.

                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold text-md rounded-lg hover:opacity-90 transition">
                            Try InstaCalling
                        </button>
                        <button className="px-4 py-2 bg-black text-white font-semibold text-md rounded-lg hover:bg-gray-900 transition">
                            Learn more
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
