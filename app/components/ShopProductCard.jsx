import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ShopProductCard = ({ product, showArrow = false }) => {
  return (
    <Link href={`/shop/${product.id}`} className="group h-full block">
      <div className="rounded-[24px] md:rounded-[40px] overflow-hidden bg-white  flex flex-col h-full transition-all duration-500 ">

        {/* IMAGE */}
        <div className={`relative ${showArrow ? 'h-[480px]' : 'h-[520px]'} w-full ${product.imageBg} flex items-center justify-center overflow-hidden`}>

          {/* Certified Tag - Only if certified */}
          {product.isCertified && (
            <span className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md text-[10px] md:text-[11px] font-bold px-4 py-2 md:px-5 md:py-2 rounded-full shadow-lg z-10 tracking-widest uppercase text-gray-800">
              Certified
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className={`px-6 py-6 md:px-10 md:py-10 flex flex-col flex-grow ${showArrow ? 'gap-4 md:gap-5' : 'gap-3 md:gap-4'}`}>

          {/* TAGS */}
          <div className="flex gap-2">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] px-4 py-1.5 rounded-md bg-[#F3E1D7] text-[#B05B48] font-bold uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* TITLE */}
          <h3 className={`${showArrow ? 'text-[20px] md:text-[32px]' : 'text-[18px] md:text-[24px]'} font-bold text-[#1F2937] leading-tight`}>
            {product.name}
          </h3>

          {/* DESC */}
          <p className={`${showArrow ? 'text-[14px] md:text-[18px]' : 'text-[13px] md:text-[15px]'} text-[#44474D] leading-relaxed max-w-md line-clamp-2`}>
            {product.description}
          </p>

          {/* BOTTOM */}
          <div className="flex items-center justify-between mt-auto ">

            <p className={`${showArrow ? 'text-[20px] md:text-[24px]' : 'text-[18px] md:text-[20px]'} font-[500] text-[#1F2937]`}>
              {product.id === 1 ? `From $${product.price.toLocaleString()}` : `$${product.price.toLocaleString()}`}
            </p>

            {/* CTA */}
            {showArrow ? (
              <div className="w-16 h-16 rounded-2xl bg-[#E57661] text-white flex items-center justify-center shadow-lg shadow-orange-100 transition-all group-hover:bg-[#d46a56] group-active:scale-95">
                <FiArrowRight className="text-2xl" />
              </div>
            ) : (
              <span className="text-[#EF7E6A] text-[15px] font-bold border-b-2 border-transparent transition-all underline">
                View Details
              </span>
            )}

          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopProductCard;