"use client";

import React, { useEffect, useRef, useState } from "react";

const videoUrls = [
  "/Assests/Video/video5.mp4",
  "/Assests/Video/video3.mp4",
  "/Assests/Video/video4.mp4",
  
];

const labels = [
  "Launch sales campaigns",
  "Manage partner relationships", 
  "Monitor business operations",
];

const Descriptions = [
  "From lead generation to deal closure, effortlessly plan, organize, and track sales campaigns that boost engagement and drive revenue growth.",
  "Quickly onboard, collaborate with, and track performance of distributors, resellers, and affiliates to optimize your partner ecosystem.",
  "Get real-time insights into business processes, employee activities, and system performance to maintain smooth operations.",
];

const WorkspaceDemo = () => {
  const [activeIndex, setActiveIndex] = useState(0); // which accordion is open (null => all collapsed)
  const videoRefs = useRef([]);

  const pauseAndReset = (idx) => {
    const v = videoRefs.current[idx];
    if (!v) return;
    v.pause();
    try { v.currentTime = 0; } catch {}
  };

  const playOnly = (idx) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === idx) v.play().catch(() => {});
      else {
        v.pause();
        try { v.currentTime = 0; } catch {}
      }
    });
  };

  useEffect(() => {
    const t = setTimeout(() => playOnly(activeIndex), 0);
    return () => clearTimeout(t);
  }, []);

  const onAccordionToggle = (idx) => {
    setActiveIndex((prev) => {
      if (prev === idx) {
        pauseAndReset(idx);
        return null; // collapse all
      } else {
        if (prev !== null && prev !== undefined) pauseAndReset(prev);
        queueMicrotask(() => playOnly(idx));
        return idx;
      }
    });
  };

  return (
    <div className="px-4 sm:px-8">
      {/* Header */}
      <div className="text-center mx-auto px-4 py-10">
        <p className="text-sm text-purple-600 font-medium">
          The <span className="italic">all-in-one</span> workspace
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Do your most important work, faster
        </h2>
        <p className="text-black mt-3 text-base sm:text-lg font-semibold">
          From campaigns to operations and more, this is just the tip of the iceberg.
        </p>
        <button className="mt-6 px-5 py-2 bg-black text-white rounded-lg text-sm sm:text-md font-semibold hover:bg-gray-800 transition-all">
          See all use cases →
        </button>
      </div>

      <section className="flex flex-col items-center justify-center px-4 sm:px-10 py-8 bg-white">
        {/* Mobile: Accordion */}
        <div className="md:hidden w-full space-y-3">
          {labels.map((label, i) => {
            const open = activeIndex === i;
            return (
              <div
                key={label + i}
                className={`rounded-2xl border overflow-hidden transition-all duration-200
                  ${open ? "border-purple-200 ring-1 ring-purple-200 bg-white" : "border-gray-200 bg-white"}`}
              >
                {/* Header */}
                <button
                  onClick={() => onAccordionToggle(i)}
                  className="relative w-full text-left p-4 flex items-start gap-3"
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-1 transition-opacity ${
                      open ? "bg-purple-600 opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="pl-3 flex-1">
                    <h3 className={`text-base font-semibold ${open ? "text-purple-700" : "text-gray-900"}`}>
                      {label}
                    </h3>
                    <p className={`mt-1 text-sm ${open ? "text-gray-600" : "text-gray-500"}`}>
                      {Descriptions[i]}
                    </p>
                  </div>
                  <span className={`shrink-0 mt-1 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {/* Collapsible body */}
                <div
                  className={`transition-[max-height,opacity,transform] duration-300 ease-out
                    ${open ? "max-h-[1000px] opacity-100 scale-[1.00]" : "max-h-0 opacity-0 scale-[0.995]"}
                  `}
                  aria-hidden={!open}
                >
                  <div className="px-3 pb-4">
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
                      <video
                        ref={(el) => (videoRefs.current[i] = el)}
                        src={videoUrls[i]}
                        loop
                        muted
                        playsInline
                        className="w-full h-[42vh] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: side-by-side preview */}
        <div className="hidden md:flex md:flex-row items-start justify-center w-full mt-6">
          {/* Left - Buttons */}
          <div className="flex flex-col space-y-6 self-start w-1/3 px-8">
            {labels.map((label, index) => (
              <button
                key={label}
                onClick={() => {
                  if (activeIndex !== null && activeIndex !== undefined) pauseAndReset(activeIndex);
                  setActiveIndex(index);
                  queueMicrotask(() => playOnly(index));
                }}
                className={`text-left transition-all ${
                  activeIndex === index
                    ? "text-purple-700 font-semibold border-l-2 border-purple-700 pl-3"
                    : "text-gray-400 hover:text-black pl-3"
                }`}
              >
                <h3 className="text-xl">{label}</h3>
                {activeIndex === index && (
                  <p className="text-xs text-gray-500 mt-1">{Descriptions[index]}</p>
                )}
              </button>
            ))}
          </div>

          {/* Right - Video */}
          <div className="w-2/3 rounded-2xl overflow-hidden bg-transparent self-start">
            <video
              src={videoUrls[activeIndex ?? 0]}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[75vh] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkspaceDemo;
