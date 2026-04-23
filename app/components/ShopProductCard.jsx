import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ShopProductCard = ({ product, showArrow = false }) => {
  return (
    <Link href={`/shop/${product.id}`} className="group h-full block">

      <div
        className="
          rounded-[24px] 2xl:rounded-[40px]
          overflow-hidden bg-white
          flex flex-col h-full
          transition-all duration-500
          w-full

          h-[420px]         
          md:h-[500px]      
          lg:h-[620px]      
          xl:h-[760px]      
          2xl:h-[860px]
        "
      >

        {/* IMAGE */}
        <div
          className={`
            relative w-full overflow-hidden
            flex items-center justify-center
            ${product.imageBg}

            h-[220px]        
            md:h-[300px]     
            lg:h-[380px]     

            ${
              showArrow
                ? "xl:h-[440px] 2xl:h-[520px]"
                : "xl:h-[480px] 2xl:h-[560px]"
            }
          `}
        >

          {/* Certified Tag */}
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
        <div
          className={`
            px-5 py-5
            md:px-7 md:py-7
            xl:px-10 xl:py-10

            flex flex-col flex-grow

            ${
              showArrow
                ? "gap-3 md:gap-4 xl:gap-5"
                : "gap-2 md:gap-3 xl:gap-4"
            }
          `}
        >

          {/* TAGS */}
          <div className="flex gap-2 flex-wrap">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] md:text-[11px] px-3 py-1.5 rounded-md bg-[#F3E1D7] text-[#B05B48] font-bold uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* TITLE */}
          <h3
            className={`
              font-bold text-[#1F2937] leading-tight

              ${
                showArrow
                  ? "text-[18px] md:text-[22px] xl:text-[32px]"
                  : "text-[17px] md:text-[20px] xl:text-[24px]"
              }
            `}
          >
            {product.name}
          </h3>

          {/* DESC */}
          <p
            className={`
              text-[#44474D]
              leading-relaxed
              line-clamp-2

              ${
                showArrow
                  ? "text-[13px] md:text-[15px] xl:text-[18px]"
                  : "text-[12px] md:text-[14px] xl:text-[15px]"
              }
            `}
          >
            {product.description}
          </p>

          {/* BOTTOM */}
          <div className="flex items-center justify-between mt-auto">

            <p
              className={`
                font-[500] text-[#1F2937]

                ${
                  showArrow
                    ? "text-[18px] md:text-[20px] xl:text-[24px]"
                    : "text-[16px] md:text-[18px] xl:text-[20px]"
                }
              `}
            >
              {product.id === 1
                ? `From $${product.price.toLocaleString()}`
                : `$${product.price.toLocaleString()}`}
            </p>

            {/* CTA */}
            {showArrow ? (
              <div className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#E57661] text-white flex items-center justify-center shadow-lg shadow-orange-100 transition-all group-hover:bg-[#d46a56] group-active:scale-95">
                <FiArrowRight className="text-xl xl:text-2xl" />
              </div>
            ) : (
              <span className="text-[#EF7E6A] text-[13px] md:text-[14px] xl:text-[15px] font-bold underline">
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