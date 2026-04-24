"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AstralSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="bg-[#251F1E] text-white py-20 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
                    <h2 className="text-4xl md:text-5xl font-bold max-w-[500px] leading-tight mb-12">
                        Astral knowledge, applied to life.
                    </h2>

                    {/* ITEM 1 */}
                    <div className="flex gap-6 mb-12 group">
                        <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-full bg-[#E57661] transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776926632/Self-Awareness_hmfx7f.png"
                                alt="Self Awareness Icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">
                                Self-Awareness
                            </h3>
                            <p className="text-[#FFFFFF]/90 text-lg max-w-[450px] leading-relaxed">
                                Deeply understand your emotional triggers and natural talents
                                through Moon and Mercury analysis.
                            </p>
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex gap-6 group">
                        <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-full bg-[#E57661] transition-transform duration-300 group-hover:scale-110">
                             <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776926631/Perfect_Timing_faxjks.png"
                                alt="Perfect Timing Icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">
                                Perfect Timing
                            </h3>
                            <p className="text-[#FFFFFF]/90 text-lg max-w-[450px] leading-relaxed">
                                Align your major life decisions with the natural ebb and flow
                                of the universe's cycles.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (Rotating Wheel with Static Icons) */}
                <div className={`relative flex justify-center items-center transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
                    
                    {/* Wheel Container */}
                    <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
                        
                        {/* Rotating Wheel Asset */}
                        <div className="relative w-full h-full flex items-center justify-center animate-spin-slow overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1777011140/Border_1_ssr70s.png"
                                alt="Astrology Wheel"
                                className="w-full h-auto object-contain relative z-10"
                                style={{ clipPath: 'circle(36% at 50% 50%)', transform: 'scale(1.38)' }}
                            />
                        </div>

                        {/* Static Icons Wheel (New Image) */}
                        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1777011061/Central_Chart_2_tzr3ka.png"
                                alt="Icons Wheel"
                                className="w-full h-auto object-contain"
                                style={{ transform: 'scale(1.14)' }}
                            />
                        </div>

                        {/* Accuracy Rate Box */}
                        <div className="absolute bottom-1 right-0 md:right-10 bg-white text-black rounded-[32px] px-8 py-10 shadow-2xl z-30 transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-5xl font-bold text-[#E57661] mb-2">98%</h3>
                            <p className="text-sm font-bold tracking-[0.2em] text-gray-800">
                                ACCURACY RATE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}