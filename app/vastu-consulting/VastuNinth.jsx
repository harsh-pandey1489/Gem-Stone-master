"use client";

export default function VastuNinth() {
  return (
    <section className="w-full pb-10 ">
      <div className="max-w-[1300px] mx-auto bg-[#F9F9F9] py-16 md:py-40 px-4 mx-auto text-center">
        
        {/* Heading */}
       <div className="w-full flex items-center justify-center">
         <h5 className="font-[520] max-w-[1000px]   text-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          Even{" "}
          <span className="text-[#7a5b1f]">small</span>{" "}
          changes can shift 
          the tides of your universe.
        </h5>
       </div>

        {/* Button */}
        <div className="mt-10 md:mt-12">
          <button className="bg-black hover:bg-white hover:text-black border hover:border cursor-pointer text-white/90 px-12 py-4 rounded-full text-sm sm:text-base md:text-[22px] font-medium shadow-lg ">
            Book Your Session
          </button>
        </div>

      </div>
    </section>
  );
}