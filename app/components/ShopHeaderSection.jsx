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
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-[500] text-[#2D2D2D] mb-4 tracking-[-0.03em] leading-[1.1]">
                    Find the Right Gemstone <br />
                    for Your <span className="text-[#E57661] tracking-[-0.02em] font-[400]">Energy</span>
                </h1>
                
                <p className="max-w-2xl mx-auto text-[#303030] text-sm sm:text-base md:text-lg leading-relaxed mb-10 md:mb-20 opacity-90">
                    Ethically sourced, Vastu-certified gemstones meticulously curated to align with 
                    your planetary positions and spiritual intentions.
                </p>

                {/* Filter Bar */}
                
                <div className="max-w-5xl mx-auto bg-white rounded-lg border border-gray-200 p-1 flex flex-wrap lg:flex-nowrap items-center justify-between gap-3">
  
                    {/* LEFT SIDE - Scrollable on Mobile */}
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-1 lg:pb-0">
                        {/* All Gems Button */}
                        <div className="flex-shrink-0 flex bg-[#F5F5F5] p-0.5 rounded-2xl">
                        <button
                            onClick={() => setSelectedCategory('All Gems')}
                            className={`px-4 md:px-6 py-1.5 rounded-xl text-sm md:text-base font-[400] flex items-center gap-2 ${
                            selectedCategory === 'All Gems'
                                ? 'bg-[#E57661] text-white'
                                : 'text-[#666666]'
                            }`}
                        >
                            <img
                            src="https://res.cloudinary.com/daup99ghe/image/upload/v1776752611/AI_ijjadb.png"
                            alt="AI"
                            className="w-4 h-3 md:w-5 md:h-3 object-contain"
                            />
                            <span className="whitespace-nowrap">All Gems</span>
                        </button>
                        </div>

                        {/* Filters */}
                        {['Purpose', 'Planet', 'Gemstone'].map((filter) => (
                        <button
                            key={filter}
                            className="flex-shrink-0 flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-1 rounded-lg border border-gray-200 bg-white text-[#444444] text-sm md:text-base font-[400]"
                        >
                            <span className="whitespace-nowrap">{filter}</span>
                            <FiChevronDown className="text-gray-400" />
                        </button>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center justify-between lg:justify-end gap-4 md:gap-6 w-full lg:w-auto pr-2 py-1 lg:py-0 border-t lg:border-t-0 border-gray-100 lg:border-none mt-1 lg:mt-0 pt-3 lg:pt-0">

                        {/* Checkbox */}
                        <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={certifiedOnly}
                            onChange={() => setCertifiedOnly(!certifiedOnly)}
                            className="w-4 h-4 accent-[#E57661] border border-gray-300 rounded-sm"
                        />
                        <span className="text-sm md:text-base font-[400] text-[#444444]">
                            Certified Only
                        </span>
                        </label>

                        {/* Divider */}
                        <div className="h-5 w-[1px] bg-gray-200 hidden lg:block"></div>

                        {/* Sort */}
                        <button className="flex items-center gap-2 text-[#E57661] font-[400] text-sm md:text-base">
                        <span className="whitespace-nowrap">Best Selling</span>
                        <img
                            src="https://res.cloudinary.com/daup99ghe/image/upload/v1776752611/best_selling_cne3ao.png"
                            alt="Best Selling"
                            className="w-4 h-3 md:w-5 md:h-3 object-contain"
                        />
                        </button>

                    </div>
                </div>
            </div>
        </section>


    );
};

export default ShopHeaderSection;