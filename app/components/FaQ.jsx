"use client";

import { useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

export default function FaQ({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1720px] mx-auto bg-[#FFFFFF] py-12 px-9 md:px-20 lg:px-30">
      
      {/* Heading */}
      <div className="mb-10">
        <p className="text-2xl text-[#7A1F3D] font-semibold tracking-wide uppercase">
          FAQ
        </p>
        <h2 className="text-3xl md:text-5xl font-[500] text-[#0A243F] mt-4">
          Most asked questions
        </h2>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="border-b border-gray-300 pb-10"
            >
            
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg md:text-[22px] cursor-pointer font-medium text-[#0A243F]">
                  {item.question}
                </h3>

                <span className="text-xl text-[#1c2b39] cursor-pointer">
                   {isOpen ? <FiArrowUp /> : <FiArrowDown />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 mt-6" : "max-h-0"
                }`}
              >
                <p className="text-sm md:text-base text-[#0A243F]/80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}