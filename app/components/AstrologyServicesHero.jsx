'use client';

import React from 'react';

const AstrologyServicesHero = () => {
    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center bg-white pt-1 pb-4 px-[9%] overflow-hidden">
            <div className=" w-full flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left Content */}
                <div className="flex-1 max-w-[550px] animate-fade-in-left lg:text-left text-center">
                    <p className="text-[22px] text-[#303030] mb-2 font-[350]">Celestial Precision</p>
                    <h1 className="text-3xl max-w-[500px] md:text-4xl lg:text-6xl leading-[1.2] text-[#303030] font-[500] mb-8 tracking-normal">
                        Discover What
                        Your Stars Say 
                        About Your Future
                    </h1>
                    <p className=" text-[20px] md:text-[27px] text-[#303030] leading-[1.4] mb-10 max-w-[550px] mx-auto   lg:mx-0">
                        Aetheris blends ancient wisdom with modern data to provide hyper-personalized 
                        astrological insights that guide your life's journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <button className="bg-[#E57661] text-white px-7 py-3.5 rounded-full text-sm font-[300] cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#E57661] hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(229,118,97,0.2)] hover:shadow-[0_6px_20px_rgba(229,118,97,0.3)]">
                            Start Your Reading
                        </button>
                        <button className="bg-transparent text-[#2D2D2D] border border-[#E57661] px-12 py-3.5 rounded-full text-sm font-[500] cursor-pointer transition-all duration-300 hover:bg-[#E57661] hover:border-[#E57661] hover:text-white hover:-translate-y-0.5">
                            Whatsapp
                        </button>
                    </div>
                </div>

                {/* Right Content / Images */}
                <div className="flex-1 relative flex justify-center lg:justify-end animate-fade-in-right mt-12 lg:mt-0 w-full">
                    <div className="relative w-full max-w-[700px]">
                        <img 
                            src="https://res.cloudinary.com/daup99ghe/image/upload/v1776926750/Celestial_Precisionn_fuzicn.png" 
                            alt="Astrological Insight Cards" 
                            className="w-full h-auto object-contain block z-10"
                        />
                        <div className="absolute bottom-[10%] right-[11%] w-[35%] z-20 animate-float">
                            <img 
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1776922216/Celestial_Precision_l75fhh.png" 
                                alt="Celestial Globe" 
                                className="w-full h-auto opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AstrologyServicesHero;
