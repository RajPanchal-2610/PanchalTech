"use client";

import React, { useRef } from "react";
import { MessageSquareCode, Rocket, Shield, Clock } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyChooseUsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const reasons = [
    {
      icon: <MessageSquareCode className="w-5 h-5 text-indigo-600" />,
      title: "Direct Engineering Access",
      desc: "Work directly with the software engineers writing your code. No confusing non-technical middlemen or lost requirements.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-emerald-600" />,
      title: "Proven Product Experience",
      desc: "We build and operate real-world commercial platforms like Gymatrix. We know the reality of production uptime, user scale, and reliability.",
    },
    {
      icon: <Shield className="w-5 h-5 text-purple-600" />,
      title: "Clean, Modern Tech Stack",
      desc: "Built exclusively with top-tier modern technologies (Next.js, TypeScript, React, Cloud APIs). No outdated frameworks or brittle templates.",
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      title: "Transparent & On-Time Delivery",
      desc: "Clear sprint milestones, structured demo days, and predictable delivery dates. You always know the status of your software.",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="why-us"
      className="py-24 bg-slate-50/60 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            Why Panchal Tech
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Technology Partner Built for Growth.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We focus on what actually matters: solid architecture, rapid execution, and software that creates measurable value.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 clean-card flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Panchal Tech Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
