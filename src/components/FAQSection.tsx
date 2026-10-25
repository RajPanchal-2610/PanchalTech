"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FAQSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current.querySelector(".faq-header"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          containerRef.current.querySelectorAll(".faq-item"),
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current.querySelector(".faq-list"),
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const faqs = [
    {
      question: "What is Panchal Tech?",
      answer:
        "Panchal Tech is a technology company specializing in software engineering, digital product development, and cloud-based business solutions. We build reliable, scalable digital platforms with a strong focus on practical performance and clean architecture.",
    },
    {
      question: "What is Gymatrix and who is it designed for?",
      answer:
        "Gymatrix is our flagship commercial product—a smart gym management platform engineered for gym owners, fitness studio operators, and club managers. It replaces manual paperwork and scattered spreadsheets with an intuitive system for member tracking, automatic billing, and inventory management.",
    },
    {
      question: "Can I try Gymatrix or see a live demo?",
      answer:
        "Yes! Gymatrix is an active, fully functional platform. You can explore it directly by visiting gymatrixx.netlify.app to see the dashboard interface, attendance flow, and fee tracking capabilities.",
    },
    {
      question: "Is Gymatrix accessible on mobile devices and tablets?",
      answer:
        "Yes. Gymatrix is built using modern responsive web technologies, meaning gym staff and owners can access the full dashboard seamlessly on desktop computers, tablets, and smartphones without needing complicated hardware.",
    },
    {
      question: "How does Panchal Tech handle data security and system reliability?",
      answer:
        "We build with strict security standards including type-safe TypeScript architectures, encrypted cloud data handling, automated backups, and 99.9% uptime cloud infrastructure to ensure your business data is always safe and accessible.",
    },
    {
      question: "How can I contact the Panchal Tech team for inquiries?",
      answer:
        "You can reach out directly via email at contact@panchaltech.com. Our engineering and product leads respond promptly to all product demos, partnership discussions, and business inquiries within 24 business hours.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="py-24 bg-slate-50/70 border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="faq-header text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about Panchal Tech and our featured product, Gymatrix.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-item bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-slate-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-slate-100" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <p className="text-sm font-semibold text-slate-900">
            Have a different question or need a custom solution?
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Write directly to our engineering team at{" "}
            <a
              href="mailto:contact@panchaltech.com"
              className="text-indigo-600 font-bold hover:underline"
            >
              contact@panchaltech.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
