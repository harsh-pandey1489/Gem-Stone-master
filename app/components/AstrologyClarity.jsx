'use client';

import React from 'react';

const AstrologyClarity = () => {
    const cards = [
        {
            title: "Stuck in Career?",
            content: "Stop guessing your professional path. Align your daily actions with planetary shifts to unlock your true earning potential.",
            icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1776922588/Stuck_in_Career_iorplc.png",
        },
        {
            title: "Confused in Love?",
            content: "Venus transits dictate the heart's rhythm. Understand your compatibility beyond the surface level with deep synastry charts.",
            icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1776922587/Confused_in_Love_rz3iqn.png",
        },
        {
            title: "Financial Doubt?",
            content: "Jupiter's position reveals opportunities for abundance. Learn when to invest and when to hold back based on your celestial cycle.",
            icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1776922587/Financial_Doubt_j35dse.png",
        }
    ];

    return (
        <section className="w-full py-15 px-[9%] bg-[#F3F3F3]">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-4xl md:text-4xl lg:text-5xl text-[#2D2D2D] font-[400] text-center mb-15 leading-tight">
                    The clarity you've been <br className="hidden md:block" /> searching for.
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-[32px] p-10 flex flex-col items-start transition-transform "
                        >
                            <div className="mb-8 w-7 h-7">
                                <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-[500] text-[#2D2D2D] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-md text-[#4A4A4A] leading-normal mb-5">
                                {card.content}
                            </p>
                            <div className="w-16 h-1 bg-[#E57661] rounded-full mt-auto"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AstrologyClarity;
