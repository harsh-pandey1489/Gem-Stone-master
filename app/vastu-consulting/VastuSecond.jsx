"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const data = [
    {
        title: "Financial Stagnation",
        desc: "Blocked North-East sectors lead to missed opportunities and wealth leakage.",
        icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776765195/Financial_Stagnation_y4rxrm.png",
    },
    {
        title: "Mental Fog",
        desc: "Improper spatial orientation causes restless sleep and lack of focus",
        icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776765195/Mental_Fog_fcoph6.png",
    },
    {
        title: "Fading Health",
        desc: "Poor kitchen placement disrupts the fire element, affecting vitality.",
        icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776765172/Fading_Health_sfqqoy.png",
    },
];

export default function VastuSecond() {
    const sectionRef = useRef(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            const totalHeight = rect.height;
            const offset = viewportHeight * 0.7; // Trigger point
            
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
            className="py-20 px-4 md:px-10 lg:px-20 overflow-hidden"
            style={{
                background: `
        radial-gradient(113.61% 98.59% at 20% 70%, #D6E3FF 0%, rgba(214,227,255,0) 40%),
        radial-gradient(106.8% 92.68% at 70% 30%, #FFDEA5 0%, rgba(255,222,165,0) 40%)
      `,
            }}
        >
            {/* HEADER */}
            <div className={`text-center mb-16 transition-all duration-1000 ${scrollPercentage > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <h2 className="text-3xl md:text-[36px] font-[500] text-[#2D2D2D]">
                    Is your home working{" "}
                    <span className="text-[#E57661]">against</span> you?
                </h2>

                <p className="mt-4 text-[16px] md:text-[22px] text-[#303030] max-w-2xl mx-auto">
                    Unseen blockages in your space manifest as tangible obstacles in your life.
                </p>
            </div>

            <div className="max-w-6xl mx-auto relative">
                {/* CENTER LINE (Background) */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-[#E57661]/15" />
                
                {/* CENTER LINE (Progress) */}
                <div 
                    className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-[#E57661] transition-all duration-300 ease-out"
                    style={{ height: `${scrollPercentage * 100}%` }}
                />

                <div className="flex flex-col gap-10 md:gap-20">
                    {data.map((item, index) => {
                        const itemThreshold = (index / data.length) + 0.05;
                        const isActive = scrollPercentage >= itemThreshold;

                        return (
                            <VastuRow 
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

function VastuRow({ item, index, isActive }) {
    const isLeft = index % 2 === 0;

    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 xl:gap-6">
            {/* LEFT */}
            <div className={`hidden md:block ${isLeft ? "md:text-right" : ""} transition-all duration-1000 ease-out ${isActive ? (isLeft ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10") : (isLeft ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10")}`}>
                {isLeft && <Content item={item} align="right" />}
            </div>

            {/* CENTER ICON */}
            <div className={`flex justify-center relative transition-all duration-500 ${isActive ? "opacity-100 scale-110" : "opacity-40 scale-90"}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md z-10 transition-all duration-500 bg-white border ${isActive ? "border-[#E57661] shadow-[0_0_20px_5px_rgba(229,118,97,0.4)]" : "border-gray-200"}`}>
                    <Image src={item.icon} alt="" width={24} height={24} />
                </div>
            </div>

            {/* RIGHT */}
            <div className={`hidden md:block ${!isLeft ? "md:text-left" : ""} transition-all duration-1000 ease-out ${isActive ? (!isLeft ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10") : (!isLeft ? "opacity-0 translate-x-10" : "opacity-0 -translate-x-10")}`}>
                {!isLeft && <Content item={item} align="left" />}
            </div>

            {/* MOBILE */}
            <div className={`md:hidden text-center transition-all duration-1000 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <Content item={item} align="center" />
            </div>
        </div>
    );
}

function Content({ item, align }) {
    return (
        <div
            className={`flex flex-col gap-4 max-w-[420px]
        ${align === "right" ? " xl:ml-auto items-end md:text-left" : ""}
        ${align === "left" ? " xl:ml-36 items-start md:text-left" : ""}
        ${align === "center" ? "mx-auto items-center md:text-center" : ""}
      `}
        >
            <h3 className="text-2xl md:text-3xl md:text-left  w-full font-[500] text-[#333]">
                {item.title}
            </h3>

            <div className="w-full">
                <p className="text-[#101010] text-[16px] md:text-[23px] md:max-w-[340px] md:px-0 px-10 leading-relaxed">
                    {item.desc}
                </p>
            </div>
        </div>
    );
}