"use client";
import Image from "next/image";

export default function VastuSeveth() {
    return (
        <section className="bg-[radial-gradient(113.61%_98.59%_at_20%_70%,#D6E3FF_0%,rgba(214,227,255,0)_40%),radial-gradient(106.8%_92.68%_at_70%_30%,#FFDEA5_0%,rgba(255,222,165,0)_40%)] py-12 md:py-20 px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl relative mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h5 className="text-4xl md:text-[26px] max-w-[400px] lg:text-5xl font-[500] text-[#222] ">
                        Ancient Rigor.

                        Modern <span className="text-[#E57661]">Soul.</span>
                    </h5>

                    <p className="mt-6 text-[#303030] text-lg md:text-[20px] leading-relaxed max-w-[500px]">
                        We don't just move furniture; we recalibrate destiny.
                        Our methodology blends traditional Vedic texts with
                        modern architectural principles.
                    </p>

                    {/* POINTS */}
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#e07a5f] flex items-center justify-center">

                                <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776842224/15_Years_of_Proven_Spatial_Alchemy_kh84hf.png" width={30} height={30} alt="" />

                            </div>
                            <p className="text-[#303030] font-[400]">
                                15+ Years of Proven Spatial Alchemy
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#e07a5f] flex items-center justify-center">
                                <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776842224/15_Years_of_Proven_Spatial_Alchemy_kh84hf.png" width={30} height={30} alt="" />
                            </div>
                            <p className="text-[#303030] font-[400]">
                                2,500+ Spaces Harmonized Globally
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARDS */}
                {/* RIGHT CARDS */}
                <div className="relative flex justify-center flex-col md:pb-25 items-center gap-10 md:transform md:-translate-y-10 md:translate-x-9 lg:justify-end ">

                    {/* TOP CARD */}
                    <div className="relative z-10 md:h-[380px] bg-white rounded-3xl p-6 md:p-10 w-[280px] sm:w-[320px] md:w-[480px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

                           <div className="mb-4 text-[#e07a5f] text-2xl">
                            <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776842225/Scientific_Precision_taxxwp.png" width={20} height={20} alt="Scientific_Precision_" />
                        </div>

                        <h5 className="text-xl md:text-2xl font-[500] text-[#222]">
                            Scientific Precision
                        </h5>

                        <p className="mt-3 text-[#303030] leading-relaxed">
                            Using digital compass mapping and energy flow
                            modeling software to ensure zero-margin error.
                        </p>
                    </div>

                    {/* BOTTOM DARK CARD */}
                    <div className="md:absolute z-20 
                        top-50 left-10 sm:left-16 md:-left-10
                      bg-[#1f1a17] text-white 
                        rounded-3xl p-9 md:p-8 
                         w-[300px] sm:w-[340px] md:w-[460px] md:h-[340px]
                          shadow-2xl">

                        <div className="mb-4 text-[#e07a5f] text-2xl">
                            <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776842224/Deep_Spiritual_Rooting_ao3zw8.png" width={40} height={40} alt="" />
                        </div>

                        <h5 className="text-xl md:text-2xl font-[500]">
                            Deep Spiritual Rooting
                        </h5>

                        <p className="mt-3 text-[#FFFFFF]/90 max-w-[360px] leading-relaxed">
                            Every recommendation is cross-referenced with
                            the original Vastu Shastra scriptures for
                            absolute authenticity.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}