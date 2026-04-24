"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const timelineData = [
    {
        title: "Honesty & Transparency",
        desc: "Building trust through crystalline clarity in every celestial alignment.",
        icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776756155/Honesty_Transparency_yfoyk1.png",
    },
    {
        title: "Client-First Approach",
        desc: "Your spiritual alignment is our central mission and guiding star.",
        icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776756155/Client-First_Approach_wmxohb.png",

    },
    {
        title: "Authentic Knowledge",
        desc: "Deeply rooted in lineage-based wisdom passed through generations.",
        icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776756155/Authentic_Knowledge_hcbsnf.png",
    },
    {
        title: "Result-Oriented Work",
        desc: "Measuring our celestial impact by the tangible transformation in your life.",
        icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776756155/Result-Oriented_Work_z8bckm.png",
    },
];

export default function AboutEight() {
    const sectionRef = useRef(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            const totalHeight = rect.height;
            const offset = viewportHeight * 0.7; 
            
            let progress = (offset - rect.top) / totalHeight;
            progress = Math.max(0, Math.min(1, progress));
            setScrollPercentage(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="bg-[#f8f6f3] max-w-[1720px] mx-auto bg-[radial-gradient(206.31%_103.07%_at_50%_0%,_#FFFBF2_0%,_#FFFFFF_100%)] py-20 px-4 md:px-10 lg:px-20 overflow-hidden"
        >
            <div className="text-center mb-16">
                <p className="text-[#E57661] tracking-[0.3em] text-sm md:text-base font-bold uppercase mb-4 animate-fade-in-up">
                    FOUNDATIONS OF BEING
                </p>
                <h5 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1f2937] animate-fade-in-up delay-100">
                    Our Values
                </h5>
                <div className="w-16 h-[2px] bg-[#E57661] mx-auto mt-4 rounded-full animate-zoom-in delay-200"></div>
            </div>

            <div className="max-w-6xl mx-auto relative">
                {/* CENTER LINE (Background) */}
                <div className="hidden md:block md:absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-[#E57661]/15" />
                
                {/* CENTER LINE (Progress) */}
                <div 
                    className="hidden md:block md:absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-[#E57661] transition-all duration-300 ease-out"
                    style={{ height: `${scrollPercentage * 100}%` }}
                />

                <div className="flex flex-col gap-16 md:gap-14 lg:gap-20">
                    {timelineData.map((item, index) => {
                        const itemThreshold = (index / timelineData.length) + 0.05;
                        const isActive = scrollPercentage >= itemThreshold;

                        return (
                            <TimelineRow 
                                key={index} 
                                item={item} 
                                index={index} 
                                isActive={isActive} 
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function TimelineRow({ item, index, isActive }) {
    const isLeft = index % 2 === 0;

    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-8 lg:gap-12">
            {/* Desktop Left */}
            <div className={`hidden md:block ${isLeft ? "text-right" : ""} transition-all duration-1000 ease-out ${isActive ? (isLeft ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10") : (isLeft ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10")}`}>
                {isLeft && <Content item={item} align="right" />}
            </div>

            {/* Center Dot */}
            <div className={`hidden md:flex justify-center relative transition-all duration-500 ${isActive ? "opacity-100 scale-125" : "opacity-40 scale-100"}`}>
                <div className={`w-3.5 h-3.5 rounded-full z-10 transition-all duration-500 ${isActive ? "bg-[#E57661] shadow-[0_0_25px_8px_rgba(229,118,97,0.6)]" : "bg-gray-300"}`} />
            </div>

            {/* Desktop Right */}
            <div className={`hidden md:block ${!isLeft ? "text-left" : ""} transition-all duration-1000 ease-out ${isActive ? (!isLeft ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10") : (!isLeft ? "opacity-0 translate-x-10" : "opacity-0 -translate-x-10")}`}>
                {!isLeft && <Content item={item} align="left" />}
            </div>

            {/* Mobile */}
            <div className={`md:hidden text-center transition-all duration-1000 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <Content item={item} align="center" />
            </div>
        </div>
    );
}

function Content({ item, align }) {
    return (
        <div
            className={`flex flex-col gap-4 max-w-[420px] md:max-w-[320px] lg:max-w-[420px]
      ${align === "right" ? "ml-auto items-end text-right md:mr-10 lg:mr-30" : ""}
      ${align === "left" ? "mr-auto items-start text-left md:ml-10 lg:ml-30" : ""}
      ${align === "center" ? "mx-auto items-center text-center " : ""}
      `}
        >
            {/* ICON */}
            <div className="bg-white px-7 py-6 md:px-5 md:py-4 lg:px-7 lg:py-6 rounded-[10px] shadow-[0_10px_40px_rgba(229,118,97,0.15)] w-max mx-auto md:mx-0">
                <Image src={item.icon} alt={item.title} width={17} height={17} />
            </div>

            <h5 className="text-2xl md:text-xl lg:text-3xl font-[400] text-[#0F172A]">
                {item.title}
            </h5>

            {/* DESC */}
            <p className="text-[#303030] text-sm md:text-base lg:text-[22px] leading-relaxed">
                {item.desc}
            </p>
        </div>
    );
}