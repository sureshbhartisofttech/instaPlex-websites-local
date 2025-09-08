"use client";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export default function ProductivityLanding() {
  const container1 = useRef(null); // Lottie 1 (left section)
  const container2 = useRef(null); // Lottie 2 (right video overlay)
  const [animationData1, setAnimationData1] = useState(null);
  const [animationData2, setAnimationData2] = useState(null);

  // Video path
  const video2 = "/Assests/Video/vedio2.mp4";

  // Fetch Lottie JSONs
  useEffect(() => {
    fetch("/Assests/LottyAnimation/Coding.json")
      .then((res) => res.json())
      .then((data) => setAnimationData1(data));

    fetch("/Assests/LottyAnimation/lotty-2.json")
      .then((res) => res.json())
      .then((data) => setAnimationData2(data));
  }, []);

  // Load Lottie 1 (left section)
  useEffect(() => {
    if (animationData1 && container1.current) {
      const anim = lottie.loadAnimation({
        container: container1.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData1,
      });
      return () => anim.destroy();
    }
  }, [animationData1]);

  // Load Lottie 2 (overlay on video)
  useEffect(() => {
    if (animationData2 && container2.current) {
      const anim = lottie.loadAnimation({
        container: container2.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData2,
      });
      return () => anim.destroy();
    }
  }, [animationData2]);

  return (
    <section className="w-full px-4 py-16 md:py-24 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Work is broken */}
        <div className="bg-gray-50 rounded-2xl p-12 shadow-md flex flex-col items-start justify-around h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work is broken.</h2>
          <p className="text-gray-600 mb-6">
            App-switching fragments work, steals time, and kills productivity.
          </p>

          {/* Lottie animation container */}
          <div
            ref={container1}
            className="w-full rounded-xl overflow-hidden scale-110 flex justify-center items-center h-96"
          />
        </div>

        {/* Right Section - Let's fix it */}
        <div className="relative bg-black text-white rounded-2xl p-8 shadow-lg flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let`s fix it.</h2>
          <p className="text-gray-300 mb-6 max-w-md">
            With all your projects, knowledge, and conversations in one app,
            everything just clicks.
          </p>

          <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition mb-8">
            Get started →
          </button>

          {/* Video container with Lottie overlay */}
          <div className="w-full rounded-xl overflow-hidden shadow-black shadow-inner relative h-96">
            <video
              src={video2}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Lottie overlay */}
            <div
              ref={container2}
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
