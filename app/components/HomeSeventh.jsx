"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HomeSeventh() {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // PRECISE TIMING ADJUSTMENT:
            // Adjusting start/end to make the reveal feel more natural.
            // Reveal starts when section enters (start) and finishes when it's mostly scrolled (end).
            const start = viewportHeight * 0.85; 
            const end = viewportHeight * 0.15;
            
            // Calculate progress based on how much of the section has passed through the target window
            let progress = (start - rect.top) / (rect.height + (start - end));
            
            // Apply a slight ease-in-out for a smoother feel
            progress = Math.max(0, Math.min(1, progress));
            const easedProgress = progress < 0.5 
                ? 2 * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            setScrollProgress(progress); // Keeping raw progress for linear image reveal
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const steps = [
        {
            id: "01",
            title: "Consultation & Analysis",
            desc: "We understand your space, challenges, and goals through a detailed consultation and energy analysis. Our experts map the cosmic blueprint of your surroundings.",
            align: "left",
            icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776427280/Consultation_Analysis_gj4g6p.png",
            buttonText: "ALIGNING INTENTIONS"
        },
        {
            id: "02",
            title: "Detailed Report & Guidance",
            desc: "You receive clear, actionable recommendations with practical solutions tailored to your needs. We provide a bespoke architectural guide for spiritual harmony.",
            align: "right",
            icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776427280/DetailedReport_ysutuh.png",
            buttonText: "COSMIC BLUEPRINT"
        },
        {
            id: "03",
            title: "Implementation & Support",
            desc: "Apply the suggested changes and experience positive transformation, balance, and growth. Watch as your environment begins to resonate with cosmic frequencies.",
            align: "left",
            icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776427280/Implementatn_Results_zypupl.png",
            buttonText: "ENERGY TRANSFORMATION"
        },
    ];

    return (
        <section 
            ref={sectionRef}
            className="max-w-[1720px] mx-auto py-16 px-4 md:px-10 bg-[#FAF4E8] overflow-hidden"
        >
            <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="text-[22px] tracking-wide text-[#303030] font-[500] uppercase mb-3">
                    HOW IT WORKS
                </p>

                <h2 className="text-3xl md:text-4xl font-[500] text-gray-800 leading-tight">
                    A Simple 3-Step Process to
                    <span className="block text-[#E57661] mt-2">
                        Transform Your Space
                    </span>
                </h2>

                <p className="mt-6 text-[#303030] gray-600 text-base md:text-[24px]">
                    Our approach is designed to be clear, practical, and result-oriented
                    guiding you step by step.
                </p>
            </div>

            <div className="relative xl:px-26 md:pb-15">
                {/* ANIMATED DOTTED LINE */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full pointer-events-none">
                    <div className="relative">
                        {/* 1. Static Faint Guide */}
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776425410/Vector_2_-line_pqylxs.png"
                            alt="timeline guide"
                            width={200}
                            height={900}
                            className="object-contain opacity-10"
                        />
                        
                        {/* 2. Revealed Curve (Grows on scroll) */}
                        <div 
                            className="absolute inset-0 transition-all duration-300 ease-out"
                            style={{ 
                                clipPath: `inset(0 0 ${100 - (scrollProgress * 100)}% 0)`,
                                opacity: scrollProgress > 0 ? 1 : 0
                            }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776425410/Vector_2_-line_pqylxs.png"
                                alt="timeline reveal"
                                width={200}
                                height={900}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-20 relative z-10 w-full">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${step.align === "right" ? "md:flex-row-reverse" : ""}`}
                        >
                            <div className="w-full md:w-1/2 relative px-4 max-w-[450px] md:px-0">
                                <span
                                    className={`absolute top-[-40px] md:top-[-130px] left-0 text-[80px] md:text-[150px] font-[500] z-100 text-[#E5766133]/40 ${step.align === "right"
                                        ? "right-0 text-right"
                                        : "left-0 text-left"
                                        }`}
                                >
                                    {step.id}
                                </span>

                                <div
                                    className={`bg-white rounded-[20px] p-6 md:p-8 shadow-sm ${step.align === "right"
                                            ? "md:text-right"
                                            : "md:mr-auto md:ml-0 text-left"
                                        }`}
                                >
                                    <div className={`flex gap-6 items-center ${step.align === "right" ? "flex-row-reverse flex-end" : ""} `}>
                                        <div
                                            className={`w-12 h-12 bg-[#E57661] rounded-xl flex items-center justify-center mb-4 ${step.align === "right" ? "ml-auto" : ""}`}
                                        >
                                            <Image
                                                src={step.icon}
                                                alt={step.title}
                                                width={20}
                                                height={20}
                                                className="object-contain"
                                            />
                                        </div>

                                        <h3 className={`text-xl md:text-2xl font-[500] ${index == 1 ? "xl:max-w-[200px] xl:ml-24" : ""} text-gray-800 mb-3`}>
                                            {step.title}
                                        </h3>
                                    </div>

                                    <p className={`text-[#303030]
  ${index===1 
    ? "xl:text-right xl:max-w-[350px] xl:ml-10" 
    : index===2 
      ? "max-w-[350px]" 
      : "max-w-[360px]"
  }
  text-sm md:text-[18px] leading-relaxed`}>
                                        {step.desc}
                                    </p>

                                    <p
                                        className={`mt-4 text-[#E57661] text-[17px] ${index == 0 ? "font-[500]" : "font-semibold"} flex items-center gap-2 ${step.align === "right" ? "justify-end" : ""}`}
                                    >
                                        {step.align !== "right" && (
                                            <span className="w-8 h-[1px] bg-[#E57661]"></span>
                                        )}
                                        {step.buttonText}
                                        {step.align === "right" && (
                                            <span className="w-8 h-[1px] bg-[#E57661]"></span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}