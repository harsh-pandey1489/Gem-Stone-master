"use client";

export default function HomeSixth(){
  return (
    <section className="max-w-[1720px] mx-auto bg-gradient-to-r from-[#FAF4E8] to-[#FCF1DD] py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-[500] text[#303030] leading-snug">
          These issues may be a result of Vastu <br className="hidden sm:block" />
          imbalance in your space.
        </h2>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          

          <button className="px-8 py-4 cursor-pointer rounded-lg bg-[#E57661] text-white font-[400] text-lg transition-all duration-300 hover:bg-white hover:text-[#E57661] border border-[#E57661]">
            Discover the Root Cause
          </button>

          <button className="px-8 py-4 cursor-pointer rounded-lg border bg-white border-[#E57661] text-[#E57661] font-[400] text-lg transition-all duration-300 hover:bg-[#E57661] hover:text-white">
            Get Your Space Analyzed
          </button>

        </div>
      </div>
    </section>
  );
}