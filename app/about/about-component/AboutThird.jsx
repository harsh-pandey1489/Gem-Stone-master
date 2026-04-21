"use client";

import Image from "next/image";

export default function AboutThird() {
  const data = [
    {
      title: "Mission",
      desc: "To engineer high-integrity data environments that enable organizations to scale without friction and innovate without limits.",
      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776500045/Mission_nldevz.png",
      bg: "bg-[#FFFFFF]",
      text: "text-[#303030]",
      linkColor: "text-[#E57661]",
    },
    {
      title: "Vision",
      desc: "Becoming the definitive foundation for the autonomous enterprise, where data flows as an invisible, intelligent utility.",
      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776500045/Vision_bqc7zo.png",
      bg: "bg-[#E57661]",
      text: "text-white",
      linkColor: "text-white",
    },
  ];

  return (
    <section className="max-w-[1720px] mx-auto px-4 md:px-10 lg:px-20 py-10 md:py-16 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} ${item.text} rounded-2xl p-6 md:p-14 flex flex-col justify-between `}
          >
            {/* Top Content */}
            <div>
              {/* Icon */}
              <div className="mb-10">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-[500] mb-10">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-[18px] md:text-[20px] leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>

            {/* Bottom Link */}
            <div className="mt-10">
              <button
                className={`flex items-center gap-2 text-sm md:text-base font-medium ${item.linkColor} group`}
              >
                View Strategic Roadmap
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}