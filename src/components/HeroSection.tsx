"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight, Layers, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ROTATING_WORDS = [
  {
    phrase: "High-Performance Web Apps",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
  },
  {
    phrase: "Scalable Cloud Architectures",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
  },
  {
    phrase: "Modern Digital Systems",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
  },
  {
    phrase: "Production-Ready Software",
    gradient: "from-amber-600 via-orange-600 to-rose-600",
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textHolderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCapability, setActiveCapability] = useState<number | null>(null);

  // Smooth kinetic rolling text cycler
  useEffect(() => {
    const timer = setInterval(() => {
      if (!textHolderRef.current) return;

      const currentEl = textHolderRef.current;

      // Kinetic slide out with blur and fade
      gsap.to(currentEl, {
        y: -32,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
          // Position below for the incoming slide
          gsap.set(currentEl, { y: 32, opacity: 0, filter: "blur(6px)" });
          // Kinetic slide in with bounce/overshoot
          gsap.to(currentEl, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.55,
            ease: "back.out(1.15)",
          });
        },
      });
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  // Initial Entrance Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".studio-headline-main",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.75 }
      )
        .fromTo(
          ".studio-kinetic-line",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.35"
        )
        .fromTo(
          ".studio-subheadline",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".studio-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.25"
        )
        .fromTo(
          ".studio-cta-hub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          ".studio-dock-card",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  const currentWord = ROTATING_WORDS[currentIndex];

  return (
    <section
      ref={containerRef}
      className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-white border-b border-slate-200"
    >
      {/* Studio Radial Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-b from-indigo-50/80 via-slate-50/30 to-transparent blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Main Headline Stack: Clean Centered Typography */}
          <div className="max-w-4xl mx-auto space-y-3">
            <h1 className="studio-headline-main text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
              We Architect & Engineer
            </h1>

            {/* Kinetic Rolling Text: Pure Typography with Vibrant Gradient Accents */}
            <div className="studio-kinetic-line h-14 sm:h-20 md:h-24 flex items-center justify-center overflow-hidden">
              <div ref={textHolderRef} className="flex items-center justify-center">
                <span
                  className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r ${currentWord.gradient} bg-clip-text text-transparent`}
                >
                  {currentWord.phrase}
                </span>
              </div>
            </div>

            <p className="studio-subheadline text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              Precision-Crafted for Speed, Reliability & Real-World Scale.
            </p>
          </div>

          {/* Concise Narrative */}
          <p className="studio-desc mt-6 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
            Panchal Tech transforms architectural complexity into fast, dependable digital products.
            From modern web applications to our commercial gym management software <strong>Gymatrix</strong>, we build systems that endure.
          </p>

          {/* Dual Action Buttons - Clean Light Balance */}
          <div className="studio-cta-hub mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:scale-[1.01]"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Explore Product (Gymatrix)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 hover:bg-slate-200/70 hover:border-slate-300 transition-all shadow-2xs"
            >
              <span>About Panchal Tech</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Centered Studio Capabilities Dock */}
          <div className="mt-16 w-full max-w-5xl">
            <div className="p-3 rounded-3xl bg-slate-50/90 border border-slate-200 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Capability 1: Engineering Quality */}
                <div
                  onMouseEnter={() => setActiveCapability(0)}
                  onMouseLeave={() => setActiveCapability(null)}
                  className={`studio-dock-card text-left p-5 rounded-2xl bg-white border transition-all duration-200 cursor-default ${activeCapability === 0
                      ? "border-indigo-400 shadow-md ring-2 ring-indigo-100"
                      : "border-slate-200/80 shadow-2xs hover:border-slate-300"
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                      Engineering Quality
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Clean Architecture</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    Strict typing, zero bloat, and maintainable modular code built to endure.
                  </p>
                </div>

                {/* Capability 2: Production Reliability */}
                <div
                  onMouseEnter={() => setActiveCapability(1)}
                  onMouseLeave={() => setActiveCapability(null)}
                  className={`studio-dock-card text-left p-5 rounded-2xl bg-white border transition-all duration-200 cursor-default ${activeCapability === 1
                      ? "border-emerald-400 shadow-md ring-2 ring-emerald-100"
                      : "border-slate-200/80 shadow-2xs hover:border-slate-300"
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                      Reliability
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Production Reliability</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    Fault-tolerant cloud setups, resilient APIs, and continuous uptime monitoring.
                  </p>
                </div>

                {/* Capability 3: Fast Execution */}
                <div
                  onMouseEnter={() => setActiveCapability(2)}
                  onMouseLeave={() => setActiveCapability(null)}
                  className={`studio-dock-card text-left p-5 rounded-2xl bg-white border transition-all duration-200 cursor-default ${activeCapability === 2
                      ? "border-purple-400 shadow-md ring-2 ring-purple-100"
                      : "border-slate-200/80 shadow-2xs hover:border-slate-300"
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">
                      Fast Execution
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">High Speed & Velocity</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    Sub-second response times, rapid development cycles, and predictable delivery.
                  </p>
                </div>

                {/* Capability 4: Flagship SaaS */}
                <div
                  onMouseEnter={() => setActiveCapability(3)}
                  onMouseLeave={() => setActiveCapability(null)}
                  className={`studio-dock-card text-left p-5 rounded-2xl bg-white border transition-all duration-200 cursor-default ${activeCapability === 3
                      ? "border-blue-400 shadow-md ring-2 ring-blue-100"
                      : "border-slate-200/80 shadow-2xs hover:border-slate-300"
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="relative w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1.5 flex items-center justify-center overflow-hidden shrink-0">
                      <Image
                        src="/gymatrix-logo.png"
                        alt="Gymatrix Logo"
                        fill
                        sizes="40px"
                        className="object-contain p-0.5"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      Flagship SaaS
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Proven SaaS Products</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    Real-world commercial platforms like Gymatrix powering active businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
