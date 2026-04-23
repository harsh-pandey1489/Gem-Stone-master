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
    return (
        <section className="bg-[#f8f6f3] max-w-[1720px] mx-auto bg-[radial-gradient(206.31%_103.07%_at_50%_0%,_#FFFBF2_0%,_#FFFFFF_100%)] py-20 px-4 md:px-10 lg:px-20">
            <div className="text-center mb-16">

                <p className="text-[#E57661] tracking-[0.3em] text-sm md:text-base font-bold uppercase mb-4">
                    FOUNDATIONS OF BEING
                </p>

                <h5 className="text-3xl md:text-5xl font-medium text-[#1f2937]">
                    Our Values
                </h5>

                <div className="w-16 h-[2px] bg-[#E57661] mx-auto mt-4 rounded-full"></div>

            </div>

            <div className="max-w-6xl mx-auto relative">

                {/* CENTER LINE */}
                <div className=" hidden md:block md:absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-[#E57661]/40" />

                <div className="flex flex-col gap-20">
                    {timelineData.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6"
                            >

                                <div className={`hidden md:block ${isLeft ? "text-right" : ""}`}>
                                    {isLeft && <Content item={item} align="right" />}
                                </div>

                                <div className=" hidden md:flex justify-center relative">
                                    <div className="w-3 h-3 bg-[#E57661] shadow-[0_0_20px_6px_rgba(229,118,97,0.3)] rounded-full z-10" />
                                </div>

                                <div className={`hidden md:block ${!isLeft ? "text-left" : ""}`}>
                                    {!isLeft && <Content item={item} align="left" />}
                                </div>

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
      ${align === "right" ? "ml-auto items-end text-right md:mr-30" : ""}
      ${align === "left" ? "mr-auto items-start text-left md:ml-30" : ""}
      ${align === "center" ? "mx-auto items-center text-center " : ""}
      `}
        >
            {/* ICON */}
            <div className="bg-white px-7 py-6 rounded-[10px] shadow-[0_10px_40px_rgba(229,118,97,0.15)]">
                <Image src={item.icon} alt={item.title} width={17} height={17} />
            </div>

            <h5 className="text-2xl md:text-3xl font-[400] text-[#0F172A]">
                {item.title}
            </h5>

            {/* DESC */}
            <p className="text-[#303030] text-sm md:text-[22px] leading-relaxed">
                {item.desc}
            </p>
        </div>
    );
}