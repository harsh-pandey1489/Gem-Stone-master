"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const data = {
    residential: {
        title: "Residential Alignment",
        desc: "Transform your home into a sanctuary that attracts health, wealth, and profound peace for the entire family.",
        img: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776837109/Residential_Alignment_vvyo7x.png",
    },
    commercial: {
        title: "Commercial Prosperity",
        desc: "Optimize your workplace to boost employee productivity, creative output, and bottom-line revenue.",
        icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776837106/Commercial_Prosperity_vcfsfv.png",
    },
    plot: {
        title: "Plot & Soil Analysis",
        desc: "Choose the right foundation. We analyze energy patterns, soil quality, and directional slopes before you build.",
        icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776837106/Plot_Soil_Analysis_yy7vwk.png",
    },
    industrial: {
        title: "Industrial Flow",
        desc: "Large scale factory layouts to minimize machine downtime and ensure safety protocols align with elemental forces.",
        img: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776837108/Industrial_Flow_gxwnlo.png",
    },
};

export default function VastuSixth() {
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

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="bg-[radial-gradient(140.3%_104.29%_at_10%_20%,rgba(254,212,136,0.15)_0%,#F8F9FA_90%)] py-10 px-4 md:px-10 lg:px-20 overflow-hidden"
        >
            <div className="max-w-[1250px] mx-auto flex flex-col gap-6">
                <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <h4 className="text-[28px] md:text-[40px] font-[500] text-[#1E1E1E]">
                        Rituals of{" "}
                        <span className="text-[#7A5A1A]">Space</span>
                    </h4>

                    {/* Subtext */}
                    <p className="text-[16px] md:text-[25px] text-[#303030]">
                        Precision analysis for every environment.
                    </p>
                </div>

                {/* TOP SECTION */}
                <div className="grid lg:grid-cols-[57%_43%] justify-center items-center gap-2">

                    {/* BIG CARD */}
                    <div className={`bg-[#FFFFFF] p-4 md:p-6 rounded-3xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src={data.residential.img}
                                alt="residential"
                                width={800}
                                height={500}
                                className="w-full object-contain rounded-2xl"
                            />
                        </div>

                        <h4 className="text-2xl md:text-[30px] font-[500] mt-4 text-[#303030]">
                            {data.residential.title}
                        </h4>
                        <p className="text-lg md:text-[20px] max-w-[550px] text-[#303030] mt-2">
                            {data.residential.desc}
                        </p>
                    </div>

                    {/* SMALL CARD */}
                    <div className={`bg-[#D9735B] h-[350px] text-white p-11 lg:p-8 xl:p-11 rounded-3xl flex flex-col justify-between transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div>
                            <Image
                                src={data.commercial.icon}
                                alt="icon"
                                width={40}
                                height={40}
                            />
                            <h4 className="text-2xl md:text-[30px] font-[500] mt-4">
                                {data.commercial.title}
                            </h4>
                            <p className=" text-[#FFFFFF] max-w-[400px] text-lg md:text-[20px] mt-2 opacity-100">
                                {data.commercial.desc}
                            </p>
                        </div>
                        <button className="mt-6 cursor-pointer text-[19px] flex items-center">
                            <span className="border-b border-white pb-[2px]">
                                Explore Strategy
                            </span>
                            <FiArrowUpRight size={35} className="text-2xl" />
                        </button>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="grid lg:grid-cols-[40%_60%] gap-2">

                    {/* LEFT CARD */}
                    <div className={`bg-[#775A19] text-white p-12 rounded-3xl flex flex-col justify-between transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div>
                            <Image
                                src={data.plot.icon}
                                alt="icon"
                                width={80}
                                height={80}
                            />
                            <h5 className="lg:text-[30px] text-[25px] font-[500] mt-4">
                                {data.plot.title}
                            </h5>
                            <p className="lg:text-[19px] text-[16px] mt-2 opacity-96">
                                {data.plot.desc}
                            </p>
                        </div>

                        <button className="mt-6 cursor-pointer text-[19px] flex items-center">
                            <span className="border-b border-white pb-[2px]">
                                Explore Strategy
                            </span>
                            <FiArrowUpRight size={30} />
                        </button>
                    </div>

                    {/* RIGHT CARD */}
                    <div className={`bg-[#FFFFFF] px-12 xl:py-0 py-6 rounded-[40px] flex lg:flex-row flex-col gap-9 items-center transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="lg:w-[200px] lg:h-[200px] rounded-xl overflow-hidden shrink-0">
                            <Image
                                src={data.industrial.img}
                                alt="industrial"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <h5 className="text-2xl md:text-[30px] font-[500] text-[#303030]">
                                {data.industrial.title}
                            </h5>
                            <p className="text-lg md:text-[20px] text-[#303030] mt-2">
                                {data.industrial.desc}
                            </p>
                            <button className="mt-3 cursor-pointer text-[16px] text-[#D9735B] flex items-center">
                                <span className="border-b border-white pb-[2px]">
                                    Learn More
                                </span>
                                <FiArrowUpRight size={30} className="text-2xl" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}