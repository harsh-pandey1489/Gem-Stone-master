'use client'
import Image from "next/image";

const VastuThird = () => {
  return (
    <div className="max-w-[1720px] mx-auto bg-[#F3F3F3] py-6 xl:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl md:mx-10 xl:mx-auto">

        <div className="relative w-full h-[400px] sm:h-[400px] md:h-[750px] ">
          <Image
            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776770284/Chaos_p9mrrj.png"
            alt="Left Chaos"
            fill
            className="object-contain xl:object-cover"
            priority
          />
        </div>

        <div className="relative w-full h-[400px] sm:h-[400px] md:h-[750px]">
          <Image
            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776770284/Balance_v1hpza.png"
            alt="Right Balance_v1hpza"
            fill
            className="object-contain xl:object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default VastuThird