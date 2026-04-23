"use client";
import Image from "next/image";

export default function AstrologySteps() {
  return (
    <section className="relative py-20 bg-[radial-gradient(140.3%_104.29%_at_10%_20%,rgba(254,212,136,0.15)_0%,#F8F9FA_90%)] overflow-hidden">
 




      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-2">
         <h5 className=" text-2xl md:text-4xl md:mb-0 mb-9 text-[#303030]  font-[500]">Three Steps to Alignment</h5>

        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="relative w-[75%] h-full ">
            <Image
              src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776922599/Three_Steps_to_Alignment_wnxvae.png"
              alt="path"
              fill
              className="object-contain opacity-30"
            />
          </div>
        </div>

        {/* STEP 1 */}
        <div className="grid md:grid-cols-[42%_60%] items-center gap-10 text-center md:text-left">

          {/* TEXT */}
          <div className="bg-white border-2 relative  border-[#DCC0BB1A] p-6 md:p-10 rounded-3xl mx-auto md:mx-0">
            <p className="text-5xl md:text-6xl text-[#E5766133] font-bold mb-4">01</p>
            <h3 className="text-xl md:text-2xl text-[#303030] font-[500] mb-3">
              Input Birth Data
            </h3>
            <p className="text-[#303030] leading-7 max-w-[400px] mx-auto md:mx-0">
              Precise GPS coordinates and exact birth time ensure your chart is
              mathematically perfect down to the last degree.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="w-[260px] h-[260px] md:w-[400px] md:h-[390px] relative">
              <Image
                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776922603/Input_Birth_Data_ryrj5t.png"
                alt="step1"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="grid md:grid-cols-[50%_43%] items-center gap-12">
          {/* IMAGE */}
          <div className="flex justify-center md:order-1 order-2">
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[360px]">
              <Image
                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776922605/Planetary_Analysis_nkqjf9.png"
                alt="step2"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="bg-white border-2 border-[#DCC0BB1A]  backdrop-blur-lg p-13 rounded-3xl md:order-2 order-1">
            <p className="text-6xl text-[#E5766133] font-bold mb-4">02</p>
            <h3 className="text-2xl font-[500] mb-3 text-[#303030]">
              Planetary Analysis
            </h3>
            <p className="text-[#303030] leading-7 max-w-[400]">
              Our proprietary engine calculates real-time transits against your
              static natal chart to identify critical life themes.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="grid md:grid-cols-[42%_60%] items-center gap-10 text-center md:text-left">
          {/* TEXT */}
          <div className="bg-white relative border-2 border-[#DCC0BB1A] p-6 md:p-10 rounded-3xl mx-auto md:mx-0">
            <p className="text-5xl md:text-6xl text-[#E5766133] font-bold mb-4">03</p>
            <h3 className="text-xl md:text-2xl text-[#303030] font-[500] mb-3">
              Personalized Remedies
            </h3>
            <p className="text-[#303030] leading-7 max-w-[350px] mx-auto md:mx-0">
              Receive actionable steps—from meditation to career moves—tailored
              to your unique cosmic fingerprint.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[360px]">
              <Image
                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776922604/Personalized_Remedies_rkyik6.png"
                alt="step2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-10">
          <button className="bg-[#E57661] hover:bg-white hover:text-[#E57661] border border-[#E57661] hover:border-[#E57661] cursor-pointer text-white px-10 py-4 rounded-full text-lg shadow-md transition">
            Start Your Chart
          </button>
        </div>
      </div>
    </section>
  );
}