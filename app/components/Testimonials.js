"use client";
import Image from "next/image";

const testimonials = Array(8).fill({
    name: "Joshua Sijo",
    username: "Joshua Sijo",
    text: "Being new to the App world, the process of developing an App seemed overwhelming to my company.",
    avatar:
        "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
});

export default function Testimonials() {
    return (
        <section
            className="py-10 overflow-hidden max-w-[1720px] mx-auto"
            style={{
                background:
                    "linear-gradient(180deg, rgba(229, 118, 97, 0.5) 0%, rgba(229, 118, 97, 0.2) 20%, rgba(229, 118, 97, 0.2) 20%, rgba(229, 118, 97, 0.2) 93.96%)",
            }}
        >
            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-semibold text-[#0B2545]">
                    What Our Happy Customers Say
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    Hear from those who chose right with Gemstones
                </p>
            </div>

            {/* TOP SLIDER (LEFT → RIGHT) */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-6 w-max animate-scroll-ltr">
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <TestimonialCard key={`top-${i}`} data={item} />
                    ))}
                </div>
            </div>

            {/* GAP */}
            <div className="h-10" />

            {/* BOTTOM SLIDER (RIGHT → LEFT) */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-6 w-max animate-scroll-rtl">
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <TestimonialCard key={`bottom-${i}`} data={item} />
                    ))}
                </div>
            </div>

            {/* ANIMATIONS */}
            <style jsx>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-rtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-ltr {
          animation: scroll-ltr 50s linear infinite;
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 50s linear infinite;
        }
      `}</style>
        </section>
    );
}

/* CARD COMPONENT */
function TestimonialCard({ data }) {
    return (
        <div className="min-w-[320px] max-w-[320px] bg-white rounded-xl p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Image
                    src={data.avatar}
                    alt="avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                />
                <div>
                    <div className="flex items-center gap-1">
                        <p className="text-sm font-semibold text-[#0B2545]">
                            {data.name}
                        </p>
                        <span className="text-blue-500 text-xs"><img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073615/Vertical_container_1_giyzdn.png" alt="verified" width={15} height={15} /></span>
                    </div>
                    <p className="text-xs text-gray-500">{data.username}</p>
                </div>
            </div>

            {/* Content */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {data.text}
            </p>
        </div>
    );
}
