import React from 'react'
import Image from 'next/image'

const HomeSecond = () => {
    return (
        <section className="max-w-[1720px] mx-auto px-4 md:px-12 py-10 bg-[#f7f7f7]">
            <div className="max-w-[1230px] mx-auto space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-[54%_44%]  gap-6">

                    {/* LEFT CARD */}
                    <div className="bg-white p-6 md:p-10  relative overflow-hidden flex flex-col justify-between ">

                        {/* Top Icon */}
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776411829/Vastu_Consulting-icon_k3oxm9.png"
                            alt="icon"
                            width={30}
                            height={30}
                        />

                        {/* Content */}
                        <div className="lg:max-w-[70%] mt-20 xl:mt-46">
                            <h2 className="text-3xl font-[400] mb-3">
                                Vastu Consulting
                            </h2>

                            <p className="text-[#44474D] mb-6 leading-relaxed">
                                Align your built environment with the five fundamental elements to optimize energy flow and catalyze success.
                            </p>

                            <button className="text-[#E57661] text-[19px] flex items-center justify-center gap-2 hover:gap-3 transition-all">
                                Discover Harmony →
                            </button>
                        </div>

                        {/* Right Bottom Image */}
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776411820/Vastu_Consulting_daaqvl.png"
                            alt="vastu"
                            width={160}
                            height={160}
                            className=" absolute bottom-16 right-7 object-contain"
                        />



                    </div>

                    {/* RIGHT CARD */}
                    <div
                        className="relative overflow-hidden flex flex-col justify-between p-6 md:p-10 min-h-[300px] text-white"
                        style={{
                            backgroundImage:
                                "url('https://res.cloudinary.com/dumjuhrob/image/upload/v1776411609/Astrology_Services_pekzoy.png')",
                            backgroundSize: "contain ",
                            backgroundPosition: "center",
                        }}
                    >

                        <div className="absolute inset-0 bg-[#E57661]/70 mix-blend-multiply"></div>

                        <div className="relative z-10">
                            <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776412844/Astrology_Services-icon_sf9g5z.png"
                                alt="icon"
                                width={35}
                                height={35}
                            />
                        </div>

                        {/* CONTENT (BOTTOM LEFT) */}
                        <div className="relative z-10 ">
                            <h2 className="text-3xl font-[400] mb-3">
                                Astrology Services
                            </h2>

                            <p className="text-white mb-6 max-w-[400px] leading-relaxed">
                                Decoding your celestial blueprint to navigate life's
                                cycles with precision and foresight.
                            </p>

                            <button className="flex items-center gap-2 hover:gap-3 transition-all text-[18px]">
                                View Readings ↗
                            </button>
                        </div>
                    </div>

                </div>


                {/* 🔶 BOTTOM BIG CARD */}
                <div className="grid grid-cols-1 md:grid-cols-2  bg-white ">

                    {/* LEFT TEXT */}
                    <div className="p-6 md:p-15 flex flex-col justify-center">
                        <div className='flex items-center mb-4 gap-2'>
                            <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776413765/Gemstone_Spiritual_Shop-icon_mfsfba.png"
                                alt="icon"
                                width={20}
                                height={20}
                                className='object-contain'
                            />
                            <p className="text-[#775A19]  font-medium">
                                Aura Enhancement
                            </p>
                        </div>

                        <h2 className="text-[18px] md:text-[33px] font-[500] mb-6">
                            Gemstone & Spiritual Shop
                        </h2>

                        <p className="text-[#44474D] max-w-[450px] md:text-[19px] mb-6">
                            Curated alchemical tools, from high-frequency
                            gemstones to precision-crafted brass pyramids,
                            designed to amplify your energy alignment.
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <button className="bg-[#E57661] rounded-[6px] text-white px-5 py-2 ">
                                Shop Collection
                            </button>

                            <button className="border border-[#E57661] text-[#E57661] px-10 py-5">
                                Authenticity Guide
                            </button>
                        </div>
                    </div>

                    <div className='relative w-full'>
                        {/* RIGHT IMAGE */}
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776413611/Gemstone_Spiritual_Shop_2_smqkkq.png"
                            alt='Gemstone_Spiritual_Shop_2_smqkkq'
                            fill
                            className='object-cover'
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HomeSecond
