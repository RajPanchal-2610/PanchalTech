"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { 
  Dumbbell, 
  ExternalLink, 
  Users, 
  CreditCard, 
  BarChart3, 
  Package, 
  Sparkles, 
  ShieldCheck,
  CheckCircle,
  Smartphone,
  Zap,
  Clock
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GymatrixSpotlight() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (detailsRef.current) {
        gsap.fromTo(
          detailsRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: detailsRef.current,
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
      id="product"
      className="py-24 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Featured Product</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gymatrix — Smart Gym Management Software
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A comprehensive, all-in-one digital operations platform designed and engineered by Panchal Tech for modern fitness businesses.
          </p>
        </div>

        {/* Product Spotlight Card */}
        <div
          ref={cardRef}
          className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10 lg:p-12 shadow-xs hover:border-slate-300 transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Product Info & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 p-2 shadow-xs shrink-0 flex items-center justify-center">
                  <Image
                    src="/gymatrix-logo.png"
                    alt="Gymatrix Official Logo"
                    fill
                    sizes="(max-width: 640px) 56px, 64px"
                    className="object-contain p-1.5"
                    priority
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Gymatrix
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">Smart Gym Management Software</p>
                </div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Gymatrix is the smarter way to manage your gym. Track members, automated payments, equipment inventory, 
                and grow your fitness business — all in one unified, high-speed web dashboard built for speed and simplicity.
              </p>

              {/* 4 Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <Users className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Member Onboarding & Attendance</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Quick digital registration, member records, and instant check-in logs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <CreditCard className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Automated Fees & Invoicing</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Automated membership due alerts, billing receipts, and payment histories.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <Package className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Inventory & Supplement Tracking</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Real-time stock monitoring of gym supplements, merchandise, and gear.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <BarChart3 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Revenue & Business Analytics</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Track recurring revenue, member renewals, and gym growth trends.</p>
                  </div>
                </div>
              </div>

              {/* Launch Action */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://gymatrixx.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Hosted & Active at gymatrixx.netlify.app</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Light Mockup Window */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 text-slate-800">
                {/* Browser window top bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-100/80 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-600 truncate max-w-[200px]">
                    gymatrixx.netlify.app
                  </div>
                  <div className="w-4" />
                </div>

                {/* Dashboard Mock UI - Clean Light Theme */}
                <div className="p-5 space-y-4 font-sans bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-slate-50 border border-slate-200 p-1 flex items-center justify-center">
                        <Image
                          src="/gymatrix-logo.png"
                          alt="Gymatrix Logo"
                          fill
                          sizes="32px"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 leading-tight">Gymatrix Dashboard</h5>
                        <p className="text-[11px] text-slate-500 font-medium">Fitness Center Overview</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold">
                      Live
                    </span>
                  </div>

                  {/* Stat widgets */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                      <p className="text-[11px] font-medium text-slate-500">Active Members</p>
                      <p className="text-xl font-bold text-slate-900 mt-0.5">428</p>
                      <p className="text-[10px] font-medium text-emerald-600 mt-1">↑ +14% this month</p>
                    </div>

                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                      <p className="text-[11px] font-medium text-slate-500">Monthly Revenue</p>
                      <p className="text-xl font-bold text-slate-900 mt-0.5">$18,450</p>
                      <p className="text-[10px] font-medium text-emerald-600 mt-1">↑ 98% collected</p>
                    </div>
                  </div>

                  {/* Recent check-in row preview */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80 space-y-2">
                    <p className="text-xs font-semibold text-slate-800">Live Attendance Feed</p>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between items-center text-slate-700 pb-1.5 border-b border-slate-200/60">
                        <span>John D. (Annual Plan)</span>
                        <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-mono text-[10px]">Checked In</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700 pb-1.5 border-b border-slate-200/60">
                        <span>Sarah M. (Monthly Pro)</span>
                        <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-mono text-[10px]">Checked In</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-700">
                        <span>Alex R. (Personal Training)</span>
                        <span className="text-slate-600 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded font-mono text-[10px]">Booked</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://gymatrixx.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shadow-2xs"
                  >
                    View Real Platform Demo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Product Specifications */}
        <div ref={detailsRef} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Fully Mobile Responsive</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Designed to work smoothly on mobile phones, tablets, and front-desk computers. Check in members on the go.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Instant Real-Time Sync</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Cloud-backed database architecture ensures member payments and attendance sync across multiple staff members in real time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Zero Setup Hassle</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              No heavy software installation needed. Open the browser, log in, and manage your gym operations in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
