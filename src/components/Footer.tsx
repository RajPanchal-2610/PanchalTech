"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, ArrowUp, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info with Logo */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-black border border-slate-300 shadow-xs group-hover:scale-105 transition-all shrink-0">
                <Image
                  src="/official-pt-logo.png"
                  alt="Panchal Tech Logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Panchal<span className="text-slate-900">Tech</span>
              </span>
            </a>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Panchal Tech is a technology company dedicated to building scalable digital software,
              robust cloud architectures, and modern platforms like Gymatrix.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-slate-900 transition-colors">
                  Product (Gymatrix)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Product & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Featured Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://gymatrixx.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-900 font-semibold hover:text-indigo-600 transition-colors"
                >
                  <span>Gymatrix Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-slate-500 mt-0.5">Smart Gym Management</p>
              </li>
              <li className="pt-2">
                <p className="text-xs font-semibold text-slate-900">Direct Inquiries:</p>
                <a
                  href="mailto:contact@panchaltech.com"
                  className="text-xs text-indigo-600 hover:underline"
                >
                  contact@panchaltech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Panchal Tech. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
