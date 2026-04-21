"use client";

import { Percent } from "lucide-react";
import Image from "next/image";

export default function HomeEigth() {
    const cards = [
        {
            id: 1,
            beforeImg:
            "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430366/Low_Growth_Poor_Energy_Flow_nfaknr.png"
                ,
            afterImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430368/Balanced_Space_Positive_Energy_zdur5k.png",

             Percent:"+40%",

            result: " Revenue Growth",
            desc: "Achieved within 6 months of structural realignment and executive desk repositioning.",
        },

        {
            id: 2,
            beforeImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430367/Frequent_Stress_Dark_Tones_nu6bf1.png",
            afterImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430367/Improved_Harmony_Aligned_Flow_qglrri.png",

            result: "Total Domestic Peace",
            desc: "Conflict reduced by 80% through South-West master bedroom correction and North-East clearing.",
        },
          {
            id: 3,
            beforeImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430366/Confusion_Instability_c6kb9n.png",
            afterImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430365/Clarity_Opportunities_akbuyl.png",

            result: "Promoted in 90 Days",
            desc: "Enhanced career prospects by activating the North zone for career and wealth flow.",
        },
    ];

    return (
        <section className="max-w-[1720px] mx-auto py-16 px-4 bg-[#F8F9FA]">
            {/* HEADER */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="text-[#E57661] font-medium tracking-wide text-sm">
                    THE POWER OF VASTU
                </p>

                <h2 className="text-2xl md:text-4xl font-semibold mt-3 text-gray-800">
                    See the Difference the Right Direction Can Make
                </h2>

                <p className="text-gray-500 mt-4 text-sm md:text-base">
                    Real spaces. Real problems. Real results. Witness the alchemical shift
                    from stagnation to prosperity through architectural alignment.
                </p>
            </div>

            {/* CARDS */}
            <div className="space-y-12 flex flex-col">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="relative rounded-[40px] md:mx-30  overflow-hidden"
                    >
                        {/* IMAGE GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          
                            <div className="relative h-[300px] md:h-[600px] max-w-[900px]">
                                <Image
                                    src={card.beforeImg}
                                    alt="before"
                                    fill
                                    className="md:object-cover object-contain"
                                />

                         
                                
                            </div>

                            <div className="relative h-[300px] md:h-[600px]">
                                <Image
                                    src={card.afterImg}
                                    alt="after"
                                    fill
                                    className="md:object-cover object-contain"
                                />

                               
                            </div>
                        </div>

                        {/* CENTER FLOATING CARD */}
                        <div className="md:absolute mt-10 inset-0 md:mt-40 flex items-center justify-center px-4">
                            <div className=" bg-white md:bg-white/92 md:backdrop-blur-[1px]  rounded-[30px]  p-6 md:p-10 flex flex-col items-center justify-center text-center  ">
                                <p className="text-[#E57661] text-[17px] font-[300] mb-2">
                                    THE TRANSFORMATION
                                </p>

                                <h3 className={`text-2xl xl:text-[40px]  max-w-[350px] ${card.id==1?"font-[500]":"font-[700]"} leading-11 text-[#000000]` }>
                                    {card.Percent&&<span className="font-bold">{card.Percent}</span>} {card.result}
                                </h3>

                                <p className="text-[#44474D] max-w-[400px] text-[16px] xl:text-[17px] mt-5">
                                   {card.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}