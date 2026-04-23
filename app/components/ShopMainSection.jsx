"use client";
import React, { useState } from "react";
import ShopProductCard from "./ShopProductCard";
import ShopPagination from "./ShopPagination";
import MobileSlider from "./MobileSlider";
import { FiArrowRight } from "react-icons/fi";

const BASE_GEMSTONES = [
  {
    id: 1,
    name: "Ruby / Manik",
    isCertified: true,
    tags: ["Wealth", "Success"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776751680/Ruby_Manik_xhvk84.png",
    description: "Align with the Sun's vigor to command authority and professional prosperity.",
    price: 1250,
    imageBg: "bg-[#F6F1EA]",
  },
  {
    id: 2,
    name: "Blue Sapphire / Neelam",
    isCertified: false,
    tags: ["Discipline"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776751679/Blue_Sapphire_Neelam_ovbhn5.png",
    description: "The gem of Saturn, bringing focus and rapid karmic alignment for serious spiritual seekers.",
    price: 890,
    imageBg: "bg-black",
  },
  {
    id: 3,
    name: "Emerald / Panna",
    isCertified: true,
    tags: ["Wisdom"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776753945/Emerald_Panna_oqa6uw.png",
    description: "Harness Mercury's sharp intellect and communication power for business success.",
    price: 1020,
    imageBg: "bg-[#E8F3F1]",
  },
  {
    id: 4,
    name: "Yellow Sapphire / Pukhraj",
    isCertified: true,
    tags: ["Prosperity"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776753944/Yellow_Sapphire_Pukhraj_ddkt9o.png",
    description: "Jupiter's stone for fortune, abundance, and marital bliss. A symbol of royal grace.",
    price: 1550,
    imageBg: "bg-[#FDF7E7]",
  },
  {
    id: 5,
    name: "Pearl / Moti",
    isCertified: false,
    tags: ["Peace"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776753943/Pearl_Moti_zeplzm.png",
    description: "Moon's calm energy for emotional balance and mental clarity in stressful times.",
    price: 450,
    imageBg: "bg-[#F7F8FA]",
  },
];

// Generating 36 dummy items for multi-page demo
const ALL_GEMSTONES = Array.from({ length: 36 }).map((_, index) => {
  const base = BASE_GEMSTONES[index % BASE_GEMSTONES.length];
  return {
    ...base,
    id: index + 1,
    isCertified: false, // Certified tag only for featured items
    name: base.name,
  };
});

const ITEMS_PER_PAGE = 6;

const ShopMainSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalPages = Math.ceil(ALL_GEMSTONES.length / ITEMS_PER_PAGE);

  // Get current page items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = ALL_GEMSTONES.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Removed scrollTo to prevent the "jump" to top
  };

  return (
    <section
      className="pb-28 pt-10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-30">

        {/* 🔥 Top Featured Grid - 70/30 split to match SS18 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 mb-7 items-start">
          <div className="md:-mt-4">
            <ShopProductCard product={BASE_GEMSTONES[0]} showArrow={true} />
          </div>
          <div className="md:mt-19">
            <ShopProductCard product={BASE_GEMSTONES[1]} />
          </div>
        </div>

        {/* 💎 CTA SECTION - Not sure which gemstone... */}
        <div className="relative overflow-hidden rounded-[30px] bg-[#B05B48] px-5 py-6 md:px-20 md:py-10  mb-14  flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://res.cloudinary.com/daup99ghe/image/upload/v1776752917/Not_sure_which_gemstone_is_right_for_you_lj1lqz.png"
              alt="glow"
              className="w-full h-full object-cover opacity-160"
            />
          </div>
          <div className="absolute inset-0 bg-[#B05B48]/90 z-0" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-[600] text-white mb-5 leading-tight">
              Not sure which gemstone is right for you?
            </h2>
            <p className="text-white/80 text-md md:text-lg mb-8 leading-relaxed">
              Consult with our Vedic experts to analyze your birth chart and find
              the perfect stone to balance your energy.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#B05B48] rounded-xl font-semibold text-sm md:text-base ">
              Get Expert Recommendation
              <span> <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1776765056/Get_Expert_Recommendation_dbbu4y.png" alt="arrow" className="w-4 h-4 object-contain" />



              </span>
            </button>
          </div>
        </div>

        {/* 🛍️ Bottom Catalog Grid */}
        <div className="max-w-[1400px] mx-auto  pb-20">
          {isMobile ? (
            <div className="md:hidden">
              <MobileSlider items={ALL_GEMSTONES} />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start min-h-[800px]">
                {currentItems.map((item, index) => {
                  const isMiddle = index % 3 === 1;
                  return (
                    <div
                      key={item.id}
                      className={`transition-all duration-700 ${isMiddle ? 'lg:mt-14' : 'mt-0'}`}
                    >
                      <ShopProductCard product={item} />
                    </div>
                  );
                })}
              </div>

              <ShopPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default ShopMainSection;