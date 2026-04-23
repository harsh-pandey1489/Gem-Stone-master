"use client";
import Image from "next/image";

export default function AstralSection() {
    return (
        <section className="bg-[#251F1E] text-white py-16 md:py-10 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold max-w-[500px] leading-tight mb-10">
                        Astral knowledge,  applied to life.
                    </h2>

                    {/* ITEM 1 */}
                    <div className="flex gap-4 mb-10">
                        <div className="w-13 h-13 shrink-0 flex items-center justify-center rounded-full bg-[#E57661]">
                            <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776926632/Self-Awareness_hmfx7f.png"
                                alt="Self Awareness Icon"
                                width={22}
                                height={22}
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Self-Awareness
                            </h3>
                            <p className="text-[#FFFFFF] text-sm max-w-[450px] md:text-base leading-relaxed">
                                Deeply understand your emotional triggers and natural talents
                                through Moon and Mercury analysis.
                            </p>
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex gap-4">
                        <div className="w-13 h-13 shrink-0 flex items-center justify-center rounded-full bg-[#E57661]">
                             <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776926631/Perfect_Timing_faxjks.png"
                                alt="Self Awareness Icon"
                                width={22}
                                height={22}
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Perfect Timing
                            </h3>
                            <p className="text-[#FFFFFF] text-sm max-w-[450px] md:text-base leading-relaxed">
                                Align your major life decisions with the natural ebb and flow
                                of the universe's cycles.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex justify-center items-center">

                    <Image
                        src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776926442/Astralknowledge_applied_to_ife._zchxbv.png"
                        alt="Astrology"
                        width={450}
                        height={450}
                        className=" relative"
                    />

                    <div className="absolute bottom-3 right-20 bg-[#FFFFFF] text-black rounded-4xl px-7 py-8 shadow-lg">
                        <h3 className="text-4xl font-bold text-[#E57661]">98%</h3>
                        <p className="text-sm font-semibold tracking-wide">
                            ACCURACY RATE
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}