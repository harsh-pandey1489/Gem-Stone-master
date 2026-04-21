


"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      className="relative max-w-[1720px] mx-auto py-30 flex items-center justify-center text-center px-4"

    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="relative w-full md:w-[170%]  h-full">
          <Image
            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776405311/mystical-numerology-scene_2_m39keo.png"
            alt="background"
            fill
            priority
            className="object-cover object-left"
          />
        </div>
      </div>
      {/* Overlay for gradient color */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b45c54]/60 to-[#b96a7a]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-3xl sm:text-4xl md:text-[37px] font-[500] leading-tight mb-6">
          Real Guidance <br /> Real Experts
        </h1>

        <p className="text-sm sm:text-base md:text-[24px] max-w-[600px] leading-8 text-white ">
          Answers to your questions. Insights that help you find your way.
          Take charge of your journey with horoscopes, psychic readings,
          and more.
        </p>
      </div>
    </section>
  );
}