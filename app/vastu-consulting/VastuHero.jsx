"use client"
import Image from "next/image";

export default function VastuHero() {
    return (
        <section className="bg-[#F7F7F7] py-10 md:pt-10 md:pb-4 px-4 md:px-10 xl:px-20">
            <div className="max-w-7xl mx-auto grid xl:grid-cols-[40%_50%] gap-20 xl:gap-40 items-center">

                <div className=" lg:text-left xl:mb-7 ">
                    <p className="text-[#E57661] text-xs md:text-[16px] font-[500] mb-3">
                        ANCIENT WISDOM, MODERN LIVING
                    </p>

                    <h1 className="text-3xl md:text-6xl font-[500] tracking-tight md:leading-17  text-[#333]">
                        Transform Your 
                        <span className="text-[#E57661]"> Space,</span> Transcend 
                        Your Life.
                    </h1>

                    <p className="mt-5 text-[#303030] text-lg md:text-[24px] max-w-md  lg:mx-0">
                        We architect organized peace by aligning your environment with the cosmic flow of Vastu Shastra.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6  lg:justify-start">
                        <button className="bg-[#E57661] cursor-pointer w-fit text-white px-6 py-5 rounded-full font-medium shadow-md hover:bg-white border border-[#E57661] hover:border-[#E57661] hover:text-[#333] transition">
                            Start Your Alignment
                        </button>

                        <button className="border cursor-pointer border-[#E57661] w-fit bg-white text-[#333] px-15 py-5 rounded-full font-medium hover:bg-[#E57661] hover:text-white transition">
                            Whatsapp
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                 <div className="relative w-full  rounded-[24px]
    h-[250px] 
    sm:h-[300px] 
    md:h-[400px] 
    lg:h-[700px] 
    xl:h-[600px]">
                        <Image
    src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776759154/TransformYourSpace_TranscendYourLife._s6ytmh.png"
    alt="Interior"
    fill
    className="object-contain "
/>
                    </div>

                    {/* TOP ICON */}
                    <div className="hidden md:flex absolute -top-1 left-30 xl:left-3 bg-white shadow-lg rounded-[25px] w-20 h-20 items-center justify-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <Image
                                src='https://res.cloudinary.com/dumjuhrob/image/upload/v1776763689/ANCIENT_WISDOM_MODERN_LIVING_v86qn5.png'
                                alt="ANCIENT_WISDOM_MODERN_LIVING_"
                                width={30}
                                height={30}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-15 right-4 bg-white rounded-xl shadow-lg px-4 py-3 w-[170px]">
                        <p className=" text-lg md:text-[22px] font-medium text-[#303030] mb-2">
                            Energy Flow
                        </p>

                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-[80%] h-full bg-[#E57661]"></div>
                        </div>

                        <p className=" text-[15px] text-[#E57661] mt-1 font-medium">
                            92% Harmonized
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}