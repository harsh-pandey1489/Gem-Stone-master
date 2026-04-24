"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const cards = [
    {
        title: "Vastu Consulting",
        subtitle: "Home, Office, Commercial",
        desc: "Designing entryways that invite 'Prana', ensuring your environment breathes with vitality and creative spark.",
        img: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776502026/Vastu_Consulting_mqvg6c.png",
    },
    {
        title: "Astrology Services",
        subtitle: "Kundli, Career, Marriage",
        desc: "Designing entryways that invite 'Prana', ensuring your environment breathes with vitality and creative spark.",
        img: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776502027/Astrology_Services_gjnnhj.png",
    },
    {
        title: "Personalized Remedies",
        subtitle: "",
        desc: "Designing entryways that invite 'Prana', ensuring your environment breathes with vitality and creative spark.",
        img: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776502027/Personalized_Remedies_zwahiu.png",
    },
];

export default function AboutFifth() {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;
        const scrollSpeed = 0.8; // Adjust for speed

        const scroll = () => {
            if (!isPaused) {
                scrollContainer.scrollLeft += scrollSpeed;
                
                // Infinite loop: reset to start when reaching halfway
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <section className="py-16 bg-[#f6f6f6] overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-10 px-4">
                <h3 className="text-3xl md:text-[39px] font-[500] text-[#303030]">
                    What We Do
                </h3>
                <p className="text-[#303030] mt-5 max-w-[650px] text-[21px] mx-auto">
                    We focus on identifying problems and providing practical solutions
                    without unnecessary changes.
                </p>
            </div>

            {/* Slider Container */}
            <div 
                ref={scrollRef}
                className="relative group overflow-x-auto no-scrollbar"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="flex w-max gap-6 py-4 px-6">
                    {/* Triple the cards to ensure seamless infinite scroll on larger screens */}
                    {[...cards, ...cards, ...cards].map((card, i) => (
                        <div
                            key={i}
                            className="w-[280px] md:w-[360px] bg-white rounded-[40px]  p-6 mx-4 flex-shrink-0"
                        >

                                <Image
                                    src={card.img}
                                    alt={card.title}
                                width={300}
                                height={300}
                                className="object-contain w-full"
                                />


                            <h4 className="text-[24px] font-[500] mt-4 text-[#191C1D]">
                                {card.title}
                            </h4>

                            {card.subtitle && (
                                <p className="text-[15px] text-[#303030] mt-1">
                                {card.subtitle}
                            </p>
                            )}

                            <p className="text-[19px] text-[#303030] mt-4 leading-relaxed">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}