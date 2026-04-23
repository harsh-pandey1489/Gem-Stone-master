
"use client";

export default function HomeNinth() {
  return (
    <section className="max-w-[1720px] mx-auto flex justify-center px-4 py-10 bg-white">
      <div className=" bg-[#5A3E43] xl:px-60 md:py-24   text-white rounded-3xl px-6 md:px-12 py-10 md:py-14 text-center shadow-lg">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-6xl font-[500]  mb-6">
          Ready to Align Your Universe?
        </h2>

        {/* Description */}
        <p className="text-sm md:text-2xl text-white max-w-[800px] mx-auto mb-9 leading-relaxed">
          Join <span className="font-semibold text-white">500+</span> professionals and families who have unlocked their space's true potential through Celestial Vastu.
        </p>

        {/* Button */}
        <button className="bg-[#E57661] hover:bg-[#d86551] text-[16px] md:text-[18px] text-white px-6 md:px-10 md:py-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-[#d86551] cursor-pointer  active:scale-95">
          Start Your Transformation
        </button>
      </div>
    </section>
  );
}