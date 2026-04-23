"use client";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ShopPagination = ({
  currentPage = 1,
  totalPages = 12,
  onPageChange,
}) => {

  const getPages = () => {
    const visiblePages = 3;

    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);

    // Edge adjustments
    if (currentPage === 1) {
      end = 3;
    }
    if (currentPage === totalPages) {
      start = totalPages - 2;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-between mt-20 w-full px-4 text-sm font-medium">

      {/* Previous */}
      <div className="flex-1">
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 transition-colors font-semibold ${currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-800 hover:text-[#EF7E6A]"
            }`}
        >
          <FiChevronLeft className="text-xl" />
          <span>Previous</span>
        </button>
      </div>

      {/* Center Pages */}
      <div className="flex items-center justify-center gap-4 text-gray-500">

        {/* Show first page + dots */}
        {pages[0] > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-400"
            >
              1
            </button>
            {pages[0] > 2 && (
              <span className="px-1 tracking-widest text-gray-400">...</span>
            )}
          </>
        )}

        {/* Dynamic pages */}
        {pages.map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentPage === num
                ? "bg-[#EF7E6A] text-white shadow-md scale-110"
                : "hover:bg-gray-100 text-gray-400"
              }`}
          >
            {num}
          </button>
        ))}

        {/* Show last page + dots */}
        {pages[pages.length - 1] < totalPages && (
          <>
            {pages[pages.length - 1] < totalPages - 1 && (
              <span className="px-1 tracking-widest text-gray-400">...</span>
            )}
            <button
              onClick={() => onPageChange(totalPages)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentPage === totalPages
                  ? "bg-[#EF7E6A] text-white shadow-md scale-110"
                  : "hover:bg-gray-100 text-gray-400"
                }`}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      {/* Next */}
      <div className="flex-1 flex justify-end">
        <button
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 transition-colors font-semibold ${currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-800 hover:text-[#EF7E6A]"
            }`}
        >
          <span>Next</span>
          <FiChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ShopPagination;