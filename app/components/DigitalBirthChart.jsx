'use client';

import React from 'react';

const DigitalBirthChart = () => {
    return (
        <section className="relative w-full py-12 px-[5%] overflow-hidden bg-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="https://res.cloudinary.com/daup99ghe/image/upload/v1776926160/Gradient_BlurTHE_ENGINE_njp1ok.png"
                    alt="Background Gradient"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-16 opacity-0 animate-fade-in-up">
                    <p className="text-[#E57661] text-lg font-[500] tracking-widest uppercase mb-4">THE ENGINE</p>
                    <h2 className="text-3xl md:text-5xl lg:text-5xl text-[#303030] font-[600] tracking-tight">
                        Your Digital Birth Chart
                    </h2>
                </div>

                {/* Main Content Area */}
                <div className="relative w-full max-w-[1200px] flex flex-col-reverse sm:flex-row sm:h-[450px] lg:h-[550px] items-center justify-center gap-10 sm:gap-0">

                    {/* Side Cards for Mobile (Below 640px) */}
                    <div className="sm:hidden flex flex-col gap-6 w-full px-6 z-30">
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 text-center opacity-0 animate-fade-in-up delay-100">
                            <p className="text-[#E57661] text-xl font-[600] mb-1">Midheaven</p>
                            <p className="text-[#4A4A4A] text-lg">Virgo in the 10th House</p>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 text-center opacity-0 animate-fade-in-up delay-300">
                            <p className="text-[#E57661] text-xl font-[600] mb-1">Ascendant</p>
                            <p className="text-[#4A4A4A] text-lg">Sagittarius in the 1st House</p>
                        </div>
                    </div>

                    {/* Central Chart Image Wrapper */}
                    <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] z-10 transition-all duration-300 opacity-0 animate-zoom-in delay-200 flex items-center justify-center">

                        {/* Rotating Wheel (Clipped to hide original icons) */}
                        <div className="relative w-full h-full flex items-center justify-center animate-spin-slow overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1777008975/Border_n7ojgm.png"
                                alt="Digital Birth Chart Wheel"
                                className="w-full h-auto object-contain relative z-10"
                                style={{ clipPath: 'circle(36% at 50% 50%)', transform: 'scale(1.20)' }}
                            />
                        </div>

                        {/* Static Icons Wheel (New Image) */}
                        <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1777011061/Central_Chart_2_tzr3ka.png"
                                alt="Icons Wheel"
                                className="w-full h-auto object-contain"
                                style={{ transform: 'scale(1.12)' }}
                            />
                        </div>

                        {/* Horizontal Divider (Visible only above 1000px) */}
                        <div className="absolute top-1/2 left-[29%] -translate-x-1/2 -translate-y-1/2 w-[120%] hidden min-[1001px]:block pointer-events-none z-10">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1776928415/Horizontal_Divider_rsjvju.png"
                                alt="Divider"
                                className="w-full h-auto opacity-50"
                            />
                        </div>
                    </div>

                    {/* Midheaven Card (Desktop/Tablet - Above 640px) */}
                    <div className="hidden sm:block absolute left-[-10px] lg:left-0 top-[65%] sm:top-[70%] -translate-y-1/2 z-30 group opacity-0 animate-fade-in-left delay-400">
                        <div className="bg-white/80 backdrop-blur-md border border-white p-4 lg:p-6 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-[180px] lg:w-[240px] transition-all duration-300 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                            <p className="text-[#E57661] text-lg lg:text-2xl font-[500] mb-1 lg:mb-2">Midheaven</p>
                            <p className="text-[#4A4A4A] text-sm lg:text-lg flex flex-col leading-snug">Virgo in the 10th House</p>
                        </div>
                    </div>

                    {/* Ascendant Card (Desktop/Tablet - Above 640px) */}
                    <div className="hidden sm:block absolute right-[-10px] lg:right-0 top-[30%] sm:top-[25%] -translate-y-1/2 z-30 group opacity-0 animate-fade-in-right delay-400">
                        <div className="bg-white/80 backdrop-blur-md border border-white p-4 lg:p-6 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-[180px] lg:w-[240px] transition-all duration-300 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                            <p className="text-[#E57661] text-lg lg:text-2xl font-[500] mb-1 lg:mb-2">Ascendant</p>
                            <p className="text-[#4A4A4A] text-sm lg:text-lg leading-snug">Sagittarius in the 1st House</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalBirthChart;