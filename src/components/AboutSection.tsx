"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Target, Zap, HeartHandshake, CheckCircle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black border border-slate-300 shadow-xs shrink-0">
                <Image
                  src="/official-pt-logo.png"
                  alt="Panchal Tech Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
                About Panchal Tech
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              We Build Software the Right Way: Clean, Fast, and Maintainable.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              As a dedicated technology engineering company, <strong>Panchal Tech</strong> bridges the gap
              between high-level business goals and rock-solid technical execution. We believe that great software
              doesn’t need to be overly complicated—it needs to be reliable, fast, and engineered with precision.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Whether developing customized business software or scaling our own digital platforms like Gymatrix,
              we apply the same rigorous engineering standards: type-safe architectures, secure cloud infrastructure,
              and intuitive interfaces that deliver tangible business value.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero bloated dependencies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Modern React & Next.js stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct developer communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent development cycles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Commitments & Engineering Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors clean-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Outcome-Driven Engineering</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    We focus on practical business impact rather than hype. Every feature built solves a real workflow problem and speeds up business operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors clean-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">High-Performance Standards</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Fast page speeds, efficient database queries, and clean component structures ensure that systems remain lightning-fast as user volume grows.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors clean-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Long-Term Technical Partnership</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    We don’t abandon you after launch. We provide ongoing support, security updates, and performance tuning to keep systems operating smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers Bar */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs"
        >
          <div className="text-center p-3">
            <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600 tracking-tight font-mono">100%</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">Code Quality Standards</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Strict typing & tests</p>
          </div>

          <div className="text-center p-3">
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">99.9%</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">Target Infrastructure Uptime</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Cloud resilient architecture</p>
          </div>

          <div className="text-center p-3">
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight font-mono">24/7</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">Proactive Monitoring</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Automated alerts & health</p>
          </div>

          <div className="text-center p-3">
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">100%</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">Commitment to Timelines</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Predictable sprint delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
