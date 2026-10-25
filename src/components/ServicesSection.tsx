"use client";

import React, { useRef } from "react";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Layers, 
  Workflow, 
  Headset, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const services = [
    {
      icon: <Globe className="w-5 h-5 text-indigo-600" />,
      title: "Custom Web Application Development",
      description:
        "High-performance, secure, and responsive web platforms built using modern technologies like React, Next.js, and TypeScript.",
      highlights: [
        "Single-Page & Multi-Page Apps",
        "SaaS Dashboards & Admin Panels",
        "Fast Page Speed & SEO Optimization",
      ],
      tag: "Web Systems",
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-purple-600" />,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications for iOS and Android that deliver native-grade fluidity, clean interfaces, and offline capabilities.",
      highlights: [
        "iOS & Android Cross-Platform",
        "Smooth Touch Interactions",
        "Push Notifications & Offline Sync",
      ],
      tag: "Mobile",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      icon: <Cloud className="w-5 h-5 text-emerald-600" />,
      title: "Cloud Infrastructure & DevOps",
      description:
        "Robust backend architectures, serverless deployments, automated CI/CD pipelines, and database optimization for 99.9% uptime.",
      highlights: [
        "AWS, Vercel & Netlify Deployments",
        "PostgreSQL & Database Architecture",
        "Automated Backups & Monitoring",
      ],
      tag: "Cloud",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      icon: <Workflow className="w-5 h-5 text-blue-600" />,
      title: "API Engineering & Integrations",
      description:
        "Connecting disparate systems with secure RESTful APIs, payment gateway setups (Stripe, Razorpay), and third-party automated workflows.",
      highlights: [
        "Payment & Billing Integrations",
        "Third-party CRM/ERP Webhooks",
        "High-Throughput Microservices",
      ],
      tag: "Integrations",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      icon: <Layers className="w-5 h-5 text-amber-600" />,
      title: "Software Modernization & UI/UX",
      description:
        "Upgrading slow, legacy systems into sleek, modern, maintainable codebases with intuitive user experiences that teams love using.",
      highlights: [
        "Legacy Code Refactoring",
        "Modern Component Design Systems",
        "Speed & Security Audits",
      ],
      tag: "Modernization",
      tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      icon: <Headset className="w-5 h-5 text-teal-600" />,
      title: "Technical Advisory & Dedicated Support",
      description:
        "Direct access to experienced software engineers for strategic tech decisions, feature roadmapping, and continuous ongoing maintenance.",
      highlights: [
        "Architecture Roadmapping",
        "Code Reviews & Security Standards",
        "Prompt SLA-backed Maintenance",
      ],
      tag: "Advisory",
      tagColor: "bg-teal-50 text-teal-700 border-teal-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-slate-50/60 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            What We Deliver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Software Engineering Services.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We don’t just write code—we design and engineer reliable digital products tailored to your operational workflows and business objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-slate-400 transition-all duration-300 clean-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-2.5 pt-5 border-t border-slate-100">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  <span>Inquire for this service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
