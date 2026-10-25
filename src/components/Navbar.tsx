"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const NAV_ITEMS = [
  { id: "about", label: "About Us", href: "#about" },
  { id: "product", label: "Product (Gymatrix)", href: "#product" },
  { id: "faq", label: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("about");

  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(false);

  const chipRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Smoothly move the single active chip using GSAP
  const moveChipTo = (index: number, animate = true) => {
    const targetEl = navItemsRef.current[index];
    const chipEl = chipRef.current;
    if (!targetEl || !chipEl) return;

    const { offsetLeft, offsetWidth } = targetEl;

    gsap.killTweensOf(chipEl);

    if (animate) {
      gsap.to(chipEl, {
        x: offsetLeft,
        width: offsetWidth,
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    } else {
      gsap.set(chipEl, {
        x: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    }
  };

  // Position on mount and animate ONLY when activeId changes
  useEffect(() => {
    const idx = NAV_ITEMS.findIndex((item) => item.id === activeId);
    if (idx !== -1) {
      if (!isMountedRef.current) {
        // Initial mount: wait a tick for DOM to measure accurately, then set without animation
        const timer = setTimeout(() => {
          moveChipTo(idx, false);
          isMountedRef.current = true;
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Normal state transition: one single smooth GSAP glide
        moveChipTo(idx, true);
      }
    }
  }, [activeId]);

  // Reposition chip on window resize
  useEffect(() => {
    const handleResize = () => {
      const idx = NAV_ITEMS.findIndex((item) => item.id === activeId);
      if (idx !== -1) {
        moveChipTo(idx, false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeId]);

  // Scroll listener for sticky styles & scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If user clicked a nav link, don't let intermediate scroll positions trigger extra animations
      if (isClickScrollingRef.current) return;

      // Scroll Spy: identify which section is currently in view
      const scrollPosition = window.scrollY + 220;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const sec = document.getElementById(NAV_ITEMS[i].id);
        if (sec && sec.offsetTop <= scrollPosition) {
          if (activeId !== NAV_ITEMS[i].id) {
            setActiveId(NAV_ITEMS[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  const handleNavClick = (id: string) => {
    // Lock scroll spy while the page smoothly scrolls to the target section
    isClickScrollingRef.current = true;
    setActiveId(id);

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Floating Island Capsule */}
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-lg shadow-slate-900/5 py-2.5 px-4 sm:px-6"
            : "bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-sm py-3 px-5 sm:px-7"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-black border border-slate-300 shadow-xs group-hover:scale-105 transition-all shrink-0">
              <Image
                src="/official-pt-logo.png"
                alt="Panchal Tech Logo"
                fill
                sizes="(max-width: 640px) 40px, 44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                Panchal<span className="font-extrabold text-slate-900">Tech</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation: Single Animated Moving Chip */}
          <nav className="relative hidden md:flex items-center p-1 rounded-full bg-slate-100/80 border border-slate-200/70 shadow-2xs">
            {/* Smooth GSAP Moving Chip Indicator */}
            <div
              ref={chipRef}
              className="absolute top-1 bottom-1 rounded-full bg-white shadow-xs border border-slate-200/80 pointer-events-none opacity-0"
            />

            {/* Nav Option Links without individual chip backgrounds */}
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  ref={(el) => {
                    navItemsRef.current[idx] = el;
                  }}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative z-10 text-xs px-4 py-1.5 rounded-full transition-colors duration-200 select-none ${
                    isActive
                      ? "font-bold text-slate-900"
                      : "font-medium text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://gymatrixx.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-all shadow-2xs hover:shadow-xs hover:scale-[1.01]"
            >
              <span>Explore Gymatrix</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Floating Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 max-w-md mx-auto bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 shadow-2xl space-y-3 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveId(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                  activeId === item.id
                    ? "bg-slate-100 text-slate-950 font-bold"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="https://gymatrixx.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-semibold text-xs shadow-md hover:bg-slate-800 transition-colors"
            >
              <span>Explore Gymatrix</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
