"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const data = [
  {
    title: "Financial Abundance",
    position: "left-top",
    icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776771285/Financial_Abundance_vw13tx.png",
  },
  {
    title: "Career Velocity",
    position: "left-middle",
    icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776771284/Career_Velocity_dqbhlp.png",
  },
  {
    title: "Intuitive Clarity",
    position: "bottom",
    icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776771283/Intuitive_Clarity_tt7el2.png",
  },
  {
    title: "Deep Restorative Sleep",
    position: "right-top",
    icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776771284/Deep_Restorative_Sleep_ejqiym.png",
  },
  {
    title: "Harmonious Relationships",
    position: "right-middle",
    icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776771284/Harmonious_Relationships_agqfko.png",
  },
];

export default function VastuFourth() {
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
      className="relative w-full py-16 md:pb-40 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776933734/Alchemical_2_k2sbjh.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className={`relative max-w-6xl mx-auto px-4 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Heading */}
        <h4 className="text-white text-2xl md:text-4xl font-[400] mb-10 md:mb-35">
          The <span className="font-bold">Alchemical</span> Outcome
        </h4>

        {/* MOBILE VIEW (STACK) */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          <div className={`w-32 h-32 rounded-full bg-[#e6ddd8] flex items-center justify-center transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
            <div className="w-20 h-20 rounded-full bg-[#d9cfc9] flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776771665/Alchemical_vqmdl0.png"
                alt="center"
                width={30}
                height={30}
              />
            </div>
          </div>

          {/* items */}
          {data.map((item, index) => (
            <div 
                key={index} 
                className="flex items-center gap-3 transition-all duration-700"
                style={{ 
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: `${300 + index * 100}ms`
                }}
            >
              <div className="w-15 h-15">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={300}
                  height={300}
                />
              </div>

              <div className="bg-white w-60 h-9 flex items-center justify-center rounded-full text-sm font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* center circle */}
          <div className={`w-45 h-45 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
            <div className="w-30 h-30 border border-[#E57661]/30 rounded-full bg-[#E576611A] flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776771665/Alchemical_vqmdl0.png"
                alt="center"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* positioned items */}
          {data.map((item, index) => {
            let pos = "";

            switch (item.position) {
              case "left-top":
                pos = "absolute left-0 lg:left-38 xl:left-45 -top-7 -translate-y-10";
                break;
              case "left-middle":
                pos = "absolute left-0 lg:left-20 xl:left-34 top-20   -translate-y-1/2";
                break;
              case "bottom":
                pos = "absolute -bottom-14 lg:left-138 xl:left-154 -translate-x-1/2 translate-y-12";
                break;
              case "right-top":
                pos = "absolute right-0 lg:right-30 xl:right-42 -top-8 -translate-y-10";
                break;
              case "right-middle":
                pos = "absolute -right-5 lg:right-2 xl:right-18 top-20 -translate-y-1/2";
                break;
            }

            return (
              <div 
                key={index} 
                className={`${pos} flex items-center gap-1 transition-all duration-1000 ease-out`}
                style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.8)",
                    transitionDelay: `${500 + index * 150}ms`
                }}
              >
                {(item.position.includes("left")) && (
                  <>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="transform -translate-y-10"
                    />
                    <div className={`bg-white font-[500] border border-[#E57661] lg:text-[20px] text-[#303030] rounded-full ${item.position === "left-top"
                      ? "px-5 py-3"
                      : item.position === "left-middle"
                        ? "px-8 py-3"
                        : "px-10 py-2"
                      }`}>
                      {item.title}
                    </div>
                  </>
                )}

                {(item.position.includes("right")) && (
                  <>
                    <div className="bg-white border border-[#E57661] font-[500] text-[#303030] lg:text-[20px] px-5 py-3 rounded-full">
                      {item.title}
                    </div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="transform -translate-y-15"
                    />
                  </>
                )}

                {item.position === "bottom" && (
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-white border border-[#E57661] text-[#303030] font-[500] lg:text-[20px] px-5 py-3 rounded-full">
                      {item.title}
                    </div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rotate-90 transform -translate-y-10"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
