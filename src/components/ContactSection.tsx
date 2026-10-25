"use client";

import React, { useState, useRef } from "react";
import { Mail, Clock, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Custom Web Application",
    message: "",
  });

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current.querySelector(".contact-wrapper"),
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contact-wrapper bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Let’s Build Something Great Together.
                </h3>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  Have an upcoming project, need to scale an existing system, or interested in deploying 
                  Gymatrix for your fitness business? Reach out and we’ll get back to you promptly.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                      <Mail className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Direct Inquiries</p>
                      <a
                        href="mailto:contact@panchaltech.com"
                        className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                      >
                        contact@panchaltech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                      <Clock className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Typical Response Time</p>
                      <p className="text-sm font-semibold text-white">Within 24 business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                      <MapPin className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Headquarters & Availability</p>
                      <p className="text-sm font-semibold text-white">India • Serving Global Clients</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 font-mono">
                <p className="font-semibold text-slate-200">PANCHAL TECH SYSTEMS</p>
                <p className="mt-0.5">Reliable custom software & digital infrastructure.</p>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-slate-50/50">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Message Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md">
                    Thank you for reaching out to Panchal Tech. Our engineering lead will review your message 
                    and get back to you shortly at <strong className="text-slate-900">{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "Custom Web Application",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">Send an Inquiry</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out this quick form and we’ll schedule a technical consultation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service / Inquiry Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all"
                    >
                      <option value="Custom Web Application">Custom Web Application Development</option>
                      <option value="Mobile App">Mobile App Development (iOS/Android)</option>
                      <option value="Gymatrix Platform">Gymatrix Platform Inquiry / Demo</option>
                      <option value="Cloud & DevOps">Cloud Infrastructure & DevOps</option>
                      <option value="Software Modernization">Legacy Modernization & Code Audit</option>
                      <option value="General Consultation">General Technical Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to build or your timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Your information is protected. We respect your privacy and never spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
