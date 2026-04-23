"use client";
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
    return (
        <section
            className="py-20 px-4 md:px-10 lg:px-20"
            style={{
                background: `
        radial-gradient(113.61% 98.59% at 20% 70%, #D6E3FF 0%, rgba(214,227,255,0) 40%),
        radial-gradient(106.8% 92.68% at 70% 30%, #FFDEA5 0%, rgba(255,222,165,0) 40%)
      `,
            }}
        >
            {/* HEADER */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-[36px] font-[500] text-[#2D2D2D]">
                    Is your home working{" "}
                    <span className="text-[#E57661]">against</span> you?
                </h2>

                <p className="mt-4 text-[16px] md:text-[22px] text-[#303030] max-w-2xl mx-auto">
                    Unseen blockages in your space manifest as tangible obstacles in your life.
                </p>
            </div>

            <div className="max-w-6xl mx-auto relative">

                <div className="hidden md:block absolute left-1/2 top-0  w-[2px] h-full bg-[#E57661]/40" />

                <div className="flex flex-col gap-20">
                    {data.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6"
                            >
                                {/* LEFT */}
                                <div className={`hidden md:block ${isLeft ? "text-right" : ""}`}>
                                    {isLeft && <Content item={item} align="right" />}
                                </div>

                                {/* CENTER ICON */}
                                <div className="flex justify-center relative">
                                    <div className="bg-white border border-[#E57661] w-16 h-16 rounded-full flex items-center justify-center shadow-md z-10">
                                        <Image src={item.icon} alt="" width={24} height={24} />
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className={`hidden md:block ${!isLeft ? "text-left" : ""}`}>
                                    {!isLeft && <Content item={item} align="left" />}
                                </div>

                                {/* MOBILE */}
                                <div className="md:hidden text-center">
                                    <Content item={item} align="center" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Content({ item, align }) {
    return (
        <div
            className={`flex flex-col gap-4 max-w-[420px]
        ${align === "right" ? " xl:ml-auto items-end text-left" : ""}
        ${align === "left" ? " xl:ml-36 items-start text-left" : ""}
        ${align === "center" ? "mx-auto items-center text-center" : ""}
      `}
        >
            <h3 className="text-2xl md:text-3xl md:text-left w-full font-[500] text-[#333]">
                {item.title}
            </h3>

            <div className="w-full">
                <p className="text-[#101010] text-[16px] md:text-[23px] max-w-[340px] leading-relaxed">
                    {item.desc}
                </p>
            </div>
        </div>
    );
}