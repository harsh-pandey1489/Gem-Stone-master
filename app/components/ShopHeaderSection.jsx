"use client";
import React, { useState } from 'react';
import { FiChevronDown, FiSearch, FiSliders } from 'react-icons/fi';

const ShopHeaderSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Gems');
    const [certifiedOnly, setCertifiedOnly] = useState(false);

    const categories = ['All Gems', 'Purpose', 'Planet', 'Gemstone'];

    return (
        <section className="relative w-full pt-16 pb-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-100 blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-yellow-50 blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-[500] text-[#2D2D2D] mb-4 tracking-[-0.03em] leading-[1.1]">
                    Find the Right Gemstone <br />
                    for Your <span className="text-[#E57661] tracking-[-0.02em] font-[400]">Energy</span>
                </h1>
                
                <p className="max-w-2xl mx-auto text-[#303030] text-base md:text-lg leading-relaxed mb-20 opacity-90">
                    Ethically sourced, Vastu-certified gemstones meticulously curated to align with 
                    your planetary positions and spiritual intentions.
                </p>

                {/* Filter Bar */}
                
                <div className="max-w-5xl mx-auto bg-white rounded-lg  border border-gray-200 p-1 flex flex-wrap items-center justify-between gap-3">
  
  {/* LEFT SIDE */}
  <div className="flex flex-wrap items-center gap-2">

    {/* All Gems Button */}
    <div className="flex bg-[#F5F5F5] p-0.5 rounded-2xl">
      <button
        onClick={() => setSelectedCategory('All Gems')}
        className={`px-6 py-1.5 rounded-xl text-base font-[400] flex items-center gap-2 ${
          selectedCategory === 'All Gems'
            ? 'bg-[#E57661] text-white'
            : 'text-[#666666]'
        }`}
      >
        <img
          src="https://res.cloudinary.com/daup99ghe/image/upload/v1776752611/AI_ijjadb.png"
          alt="AI"
          className="w-5 h-3 object-contain"
        />
        <span>All Gems</span>
      </button>
    </div>

    {/* Filters */}
    {['Purpose', 'Planet', 'Gemstone'].map((filter) => (
      <button
        key={filter}
        className="flex items-center gap-2 px-5 py-1 rounded-lg border border-gray-200 bg-white text-[#444444] text-base font-[400]"
      >
        <span>{filter}</span>
        <FiChevronDown className="text-gray-400" />
      </button>
    ))}
  </div>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-6 ml-auto pr-2">

    {/* Checkbox instead of toggle */}
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={certifiedOnly}
        onChange={() => setCertifiedOnly(!certifiedOnly)}
        className="w-4 h-4 accent-[#E57661] border border-gray-300 rounded-sm"
      />
      <span className="text-base font-[400] text-[#444444]">
        Certified Only
      </span>
    </label>

    {/* Divider */}
    <div className="h-5 w-[1px] bg-gray-200 hidden lg:block"></div>

    {/* Sort */}
    <button className="flex items-center gap-2 text-[#E57661] font-[400] text-base">
      <span>Best Selling</span>
      <img
        src="https://res.cloudinary.com/daup99ghe/image/upload/v1776752611/best_selling_cne3ao.png"
        alt="Best Selling"
        className="w-5 h-3 object-contain"
      />
    </button>

  </div>
</div>
            </div>
        </section>
    );
};

export default ShopHeaderSection;
