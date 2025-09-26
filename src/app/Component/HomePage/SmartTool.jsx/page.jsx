"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import LeadFormModal from "../../Common/LeadFormModal";

const products = [
  {
    id: "instacrm",
    title: "InstaCRM",
    subtitle: "Smart Customer Relationship Management Software",
    description:
      "Boost sales and engagement with InstaCRM — a smart CRM software for lead management, sales automation, customer tracking, and reporting.",
    image: "/Assests/Image/Newcrm.png",
    reverse: false,
    buttons: [
      { label: "Try InstaCRM", type: "try" },
      { label: "Learn more", href: "https://www.instaconnectcrm.com/", type: "learn" },
    ],
  },
  {
    id: "instamonitor",
    title: "InstaMonitor",
    subtitle: "Real-Time Monitoring Solutions",
    description:
      "Track business processes, employee activity monitoring, and system performance with real-time dashboards and alerts.",
    image: "/Assests/Image/Newmonitor.png",
    reverse: true,
    buttons: [
      { label: "Try InstaMonitor", type: "try" },
      { label: "Learn more", href: "https://example.com/monitoring", type: "learn" },
    ],
  },
  {
    id: "instabooking",
    title: "InstaBooking",
    subtitle: "Online Booking & Scheduling Software",
    description:
      "Automate appointments, reservations, and scheduling with reminders and calendar integrations.",
    image: "/Assests/Image/Newbooking.png",
    reverse: false,
    buttons: [
      { label: "Try InstaBooking", type: "try" },
      { label: "Learn more", href: "https://example.com/booking", type: "learn" },
    ],
  },
  {
    id: "instalearn",
    title: "InstaLearn",
    subtitle: "Learning & Training Management Platform",
    description:
      "Deliver interactive online learning, corporate training, and assessments with InstaLearn – a modern LMS platform.",
    image: "/Assests/Image/lms.png",
    reverse: true,
    buttons: [
      { label: "Try InstaLearn", type: "try" },
      { label: "Learn more", href: "https://example.com/learn", type: "learn" },
    ],
  },
  {
    id: "instapartner",
    title: "InstaPartner",
    subtitle: "Partner Ecosystem Management Software",
    description:
      "Simplify onboarding and collaboration with InstaPartner — a complete solution for distributor, reseller, and affiliate management.",
    image: "/Assests/Image/Insta-Partner.png",
    reverse: false,
    buttons: [
      { label: "Try InstaPartner", type: "try" },
      { label: "Learn more", href: "https://example.com/partner", type: "learn" },
    ],
  },
  {
    id: "instashop",
    title: "InstaShop",
    subtitle: "Scalable E-Commerce Solutions",
    description:
      "Launch and grow your online business with InstaShop, offering custom storefronts, secure payments, inventory management, and marketing tools.",
    image: "/Assests/Image/Insta-Shop.png",
    reverse: true,
    buttons: [{ label: "Try InstaShop", type: "try" }],
  },
  {
    id: "instacall",
    title: "InstaCalling",
    subtitle: "Business Communication & Calling Tools",
    description:
      "Enhance communication with VoIP calling, integrated messaging, and call tracking features for teams and customer support.",
    image: "/Assests/Image/Insta-Calling.png",
    reverse: false,
    buttons: [
      { label: "Try InstaCalling", type: "try" },
      { label: "Learn more", href: "https://example.com/calling", type: "learn" },
    ],
  },
];

function ButtonGroup({ buttons, onTryClick }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
      {buttons.map((btn, i) =>
        btn.type === "learn" ? (
          <Link
            key={i}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 font-semibold text-md rounded-lg transition bg-black text-white hover:bg-gray-900"
          >
            {btn.label}
          </Link>
        ) : (
          <button
            key={i}
            onClick={() => onTryClick(btn.label)}
            className="px-4 py-2 font-semibold text-md rounded-lg transition bg-[#0040df] text-white hover:opacity-90"
          >
            {btn.label}
          </button>
        )
      )}
    </div>
  );
}

function ProductSection({ id, title, subtitle, description, image, reverse, buttons, onTryClick }) {
  return (
    <section
      className={`w-full px-6 md:px-32 py-12 flex flex-col md:flex-row items-center gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">
        <Image src={image} alt={title} width={450} height={400} className="rounded-xl" />
      </div>
      <div className="flex-1 text-center md:text-left">
        <p className="text-4xl font-medium text-[#0040df] mb-3 italic">{title}</p>
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {subtitle}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">{description}</p>
        <ButtonGroup buttons={buttons} onTryClick={(label) => onTryClick(id, title)} />
      </div>
    </section>
  );
}

export default function SmartToolsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleTryClick = (id, title) => {
    setSelectedProduct(title);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Top Header */}
      <div className="text-center mx-auto px-4 py-0 lg:py-10">
        <p className="text-sm text-[#0040df] font-medium">
          The <span className="italic">10x your work with smarter tools </span> workspace
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Smart products for smarter workflows
        </h2>
        <p className="text-black mt-3 text-lg font-semibold">Work smarter in every way.</p>
        <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg text-md font-semibold hover:bg-gray-800 transition-all">
          See all use cases →
        </button>
      </div>

      {/* Render all product sections */}
      {products.map((product) => (
        <ProductSection key={product.id} {...product} onTryClick={handleTryClick} />
      ))}

      {/* Common Lead Form Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProduct={selectedProduct}
        productOptions={products.map((p) => p.title)}
      />
    </div>
  );
}
