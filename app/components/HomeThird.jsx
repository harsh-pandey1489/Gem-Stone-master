"use client"
export default function HomeThird() {
  return (
    <section className="max-w-[1720px] mx-auto bg-white py-16 px-4 flex items-center justify-center">
      
      <div className=" flex flex-col items-center text-center ">
   
        <h1 className="text-3xl md:text-[40px] font-medium text-gray-800 leading-tight">
          Modern Solutions Rooted in Ancient Wisdom
        </h1>

        <p className="mt-6 text-[#303030] text-base md:text-[20px] max-w-[680px] leading-relaxed font-[400]">
          We combine the principles of Vastu Shastra and Astrology with a practical,
          modern approach to help individuals and businesses achieve balance,
          growth, and success.
        </p>

        <div className="mt-8">
          <button className="bg-[#E57661] cursor-pointer text-white px-6 py-3 rounded-lg text-base md:text-[16px] font-medium transition-all duration-300 hover:bg-white hover:text-[#E57661] border border-[#E57661]">
            Learn More About Us
          </button>
        </div>

      </div>
    </section>
  );
}