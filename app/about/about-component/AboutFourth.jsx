"use client";

import Image from "next/image";

export default function AboutFourth() {
  return (
    <section className=" max-w-[1720px] mx-auto px-4 md:px-10 lg:px-20 py-10 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[70%_30%] gap-6">

        {/* LEFT CARD */}
        <div className="bg-[#E57661] text-white rounded-2xl p-6 md:p-15 flex flex-col justify-between min-h-[300px]">

          <div className="mb-6">
            <Image
              src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776501098/Deep_Personal_Reading_xd3s9a.png" 
              alt="icon"
              width={40}
              height={40}
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-[500] mb-4">
              Deep Personal Reading
            </h3>

            <p className="text-sm md:text-base text-white leading-relaxed max-w-[400px]">
              Our architects don't just read charts; they interpret life paths.
              Book a 1:1 session for a comprehensive analysis of your natal alignment.
            </p>
          </div>

          <div className="mt-8">
            <button className="flex group items-center cursor-pointer gap-2 text-[16px] font-semibold tracking-wide">
              EXPLORE SERVICES   <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#FFFFFF] rounded-2xl p-6 xl:p-10 flex flex-col items-center justify-center text-center min-h-[300px]">

          <div className="mb-4">
            <Image
              src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776501098/Transit_Updates_mawp64.png" 
              alt="icon"
              width={40}
              height={40}
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-[500] mb-3">
            Transit Updates
          </h3>

          <p className="text-[16px] text-gray-600 max-w-xs mb-6">
            Receive weekly notifications about how current planetary movements affect your chart.
          </p>

          <button className="bg-[#E57661] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:border hover:border-[#E57661] border hover:text-[#E57661] cursor-pointer border-[#E57661]  transition">
            Subscribe Now
          </button>
        </div>

      </div>
    </section>
  );
}