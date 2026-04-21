import Image from "next/image";
import "./SemiPreciousSlider.css";

const gems = [
    {
        name: "Opal",
        bg: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767012052/Group_43_d0aeun.png",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767010883/Group_91_ads4jw.png",
        overlay:
            "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767012858/82885bb74f3358312046ad3debc6cdc69b701e3b_1_luzwh5.png",

        // 🔹 HEADING POSITION (CONTROL HERE)
        headingClass: "bottom-[130] left-1/2 -translate-x-1/2",

        // 🔹 POINT POSITIONS (CONTROL HERE)
        points: [
            { text: "Prosperity", class: "-top-2 left-[68%] -translate-x-1/2" },
            { text: "Harmony", class: "left-2 top-[30%] -translate-y-1/2" },
            { text: "Intuition", class: "right-6 top-1/2 -translate-y-1/2" },
        ],
    },

    {
        name: "Red Garnet",
        bg: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767012147/Group_44_ek9zkf.png",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767010883/Group_91_ads4jw.png",
        overlay:
            "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767012858/14e28d91e96e796372e22d90ac90ed5d6b070973_m2espy.png",

        headingClass: "bottom-[130] left-40",

        points: [
            { text: "Energy Flow", class: "-top-2 left-[70%] -translate-x-1/2" },
            { text: "Spiritual Balance", class: "left-[-3] top-[32%] -translate-y-1/2" },
            { text: "Strength", class: "right-6 top-[55%] -translate-y-1/2" },
        ],
    },

    {
        name: "Opal",
        bg: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767012052/Group_43_d0aeun.png",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767010883/Group_91_ads4jw.png",
        overlay:
            "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767012858/82885bb74f3358312046ad3debc6cdc69b701e3b_1_luzwh5.png",

        // 🔹 HEADING POSITION (CONTROL HERE)
        headingClass: "bottom-[130] left-1/2 -translate-x-1/2",

        // 🔹 POINT POSITIONS (CONTROL HERE)
        points: [
            { text: "Prosperity", class: "-top-2 left-[68%] -translate-x-1/2" },
            { text: "Harmony", class: "left-2 top-[30%] -translate-y-1/2" },
            { text: "Intuition", class: "right-6 top-1/2 -translate-y-1/2" },
        ],
    },

    {
        name: "Blue Sapphire",
        bg: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767012147/Group_44_ek9zkf.png",
        img: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767010883/Group_91_ads4jw.png",
        overlay:
            "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767012857/6d42029bd910c36a93403ba195eb99728630f7ac_ctnk7v.png",

        headingClass: "bottom-[130] right-36",

        points: [
            { text: "Wisdom", class: "-top-3 left-[60%]" },
            { text: "Focus", class: "left-4 top-[30%]" },
            { text: "Protection", class: "right-4 top-[45%]" },
        ],
    },
];

export default function SemiPreciousSlider() {
    return (
        <section className="bg-[#FFF9F2] py-16 overflow-hidden max-w-[1720px] mx-auto px-4">
            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-[2rem] font-semibold">Semi-Precious Gemstones</h2>
                <p className="mt-2 text-[1rem] text-gray-600">
                    Buy 100% Authentic, Certified Gemstones Online Quality & Trust Guaranteed
                </p>
            </div>

            {/* AUTO SLIDER */}
            <div className="relative mt-12 overflow-hidden">
                <div className="flex w-max animate-marquee gap-6 px-6">
                    {[...gems, ...gems].map((gem, i) => (
                        <div
                            key={i}
                            className="relative min-w-[410px] h-[380px] rounded-2xl p-6 text-white bg-cover bg-center"
                            style={{ backgroundImage: `url(${gem.bg})` }}
                        >
                            {/* CENTER IMAGE */}
                            <div className="relative flex justify-center items-center mt-10">
                                <div className="relative z-10 flex items-center justify-center">
                                    <Image
                                        src={gem.img}
                                        alt={gem.name}
                                        width={300}
                                        height={300}
                                        className="object-contain z-10"
                                    />

                                    {/* OVERLAY */}
                                    <Image
                                        src={gem.overlay}
                                        alt="overlay"
                                        width={110}
                                        height={110}
                                        className="absolute top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2 
                      z-20 pointer-events-none"
                                    />
                                </div>

                                {/* POINT TEXTS */}
                                {gem.points.map((point, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute text-[17px] font-medium ${point.class}`}
                                    >
                                        {point.text}
                                    </div>
                                ))}
                            </div>

                            {/* HEADING */}
                            <h3
                                className={`absolute text-lg z-20 text-black font-semibold ${gem.headingClass}`}
                            >
                                {gem.name}
                            </h3>

                            {/* BUTTONS */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
                                <button className="bg-[#F57C5A] px-5 py-2 rounded-md text-sm font-medium">
                                    Shop Now
                                </button>
                                <button className="border border-white px-5 py-2 rounded-md text-sm font-medium">
                                    Know More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
