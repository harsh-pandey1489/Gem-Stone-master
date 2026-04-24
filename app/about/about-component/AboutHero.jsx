"use client";

import React from "react";

export default function AboutHero() {
  return (
    <section className="relative max-w-[1720px] mx-auto py-30 flex items-center justify-center text-center px-4 overflow-hidden min-h-[500px]">
      
      {/* Background Video Section */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          // Purani image ko poster ki tarah use kar rahe hain load time ke liye
          poster="https://res.cloudinary.com/dumjuhrob/image/upload/v1776933909/starss_fpqv8f.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/daup99ghe/video/upload/v1777015919/229467_klpvvp.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay (Aapki original theme) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b45c54]/60 to-[#b96a7a]/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-3xl sm:text-4xl md:text-[37px] font-[500] leading-tight mb-6">
          Real Guidance <br /> Real Experts
        </h1>

        <p className="text-sm sm:text-base md:text-[24px] max-w-[600px] mx-auto leading-8 text-white">
          Answers to your questions. Insights that help you find your way.
          Take charge of your journey with horoscopes, psychic readings,
          and more.
        </p>
      </div>
    </section>
  );
}