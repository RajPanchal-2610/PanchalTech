"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function BigAnimatedLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Continuous subtle levitation & pulse
  useGSAP(
    () => {
      // Gentle floating animation
      gsap.to(cardRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Subtle shadow pulse on floor
      gsap.to(shadowRef.current, {
        scale: 0.9,
        opacity: 0.4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef }
  );

  // Mouse move 3D tilt interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center my-8 select-none"
    >
      {/* Floor soft shadow for depth */}
      <div
        ref={shadowRef}
        className="absolute bottom-4 w-52 sm:w-64 h-8 bg-black/10 rounded-full blur-xl pointer-events-none transition-all"
      />

      {/* Interactive 3D Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative group cursor-pointer p-3 sm:p-3.5 rounded-3xl bg-white border border-zinc-200 shadow-xl hover:shadow-2xl hover:border-black transition-all duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Decorative corner architectural tech markers */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-900 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-900 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-900 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-900 rounded-br-sm pointer-events-none" />

        {/* The Big Logo Image */}
        <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-md">
          <Image
            src="/official-pt-logo.png"
            alt="Panchal Tech Official Logo"
            fill
            sizes="(max-width: 768px) 240px, 320px"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>

        {/* Floating Minimalist Status Badge */}
        <div className="mt-3 py-1.5 px-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="font-mono font-bold text-zinc-900">PANCHAL TECH</span>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase font-semibold">
            {isHovered ? "3D Interactive" : "Hover to Tilt"}
          </span>
        </div>
      </div>
    </div>
  );
}
