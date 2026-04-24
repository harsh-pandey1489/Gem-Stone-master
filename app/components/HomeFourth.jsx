"use client";

import Image from "next/image";

export default function HomeFourth() {
    return (
        <section className="bg-[#f7f7f7] max-w-[1720px] mx-auto py-16 px-4 md:px-10 xl:px-35">

            <div className="text-center flex flex-col items-center">
                <p className="text-[#E57661] text-sm tracking-widest font-medium">
                    ARCHITECTURAL WISDOM
                </p>

                <h2 className="text-2xl md:text-4xl font-[500] mt-3">
                    Why Vastu is Important for <br className="hidden md:block" />
                    Your Success
                </h2>

                <p className="text-[#303030] max-w-[740px] mt-4 text-[14px] md:text-[19px] font-[400]">
                    Aligning your physical space with the energetic flow of the universe is the catalyst for
                    professional and personal transcendence.
                </p>
            </div>

            {/* GRID */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* CARD 1 */}
                <div className="bg-white p-5 md:p-10 rounded-[40px]  flex flex-col justify-between">
                    <div>
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-8">
                            <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418837/Business_Growth-icon_kxwmjp.png" alt="" width={22} height={22} />
                        </div>

                        <h3 className="font-[500] text-[#191C1D] text-2xl">Business Growth</h3>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 max-w-[290px]  leading-7 font-[400]">
                            Strategic placement of executive suites
                            to harness the energy of leadership and
                            expansive scaling.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418837/Business_Growth_z7r999.png"
                            alt=""
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full h-[120px]"
                        />
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white p-5 md:p-9 rounded-[40px] flex flex-col justify-between">
                    <div>
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-8">
                            <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418837/Positive_Energy-icon_vraljq.png" alt="" width={22} height={22} />
                        </div>

                        <h3 className="font-[500] text-[#191C1D] text-2xl">Positive Energy</h3>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 max-w-[290px] leading-7 font-[400]">
                            Designing entryways that invite 'Prana',
                            ensuring your environment breathes
                            with vitality and creative spark.
                        </p>
                    </div>

                    <div className="mt-6">
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418837/Positive_Energy_qfpnjv.png"
                            alt=""
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full h-[120px]"
                        />
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white p-5 md:p-9 rounded-[40px]  flex flex-col justify-between">
                    <div>
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-8">
                            <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418836/Removing_Obstacles-icon_dykunx.png" alt="" width={22} height={22} />
                        </div>
                        <h3 className="font-[500] text-[#191C1D] text-2xl">Removing Obstacles</h3>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 max-w-[300px] leading-7 font-[400]">
                            Neutralizing directional defects to clear
                            the path for decision-making and
                            seamless project execution.
                        </p>
                    </div>

                    <div className="mt-6">
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418836/Removing_Obstacles_wfc5s7.png"
                            alt=""
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full h-[120px]"
                        />
                    </div>
                </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* CARD 4 (LEFT - BIG IMAGE) */}
                <div className="bg-white p-8 rounded-[40px] shadow-sm flex flex-col md:flex-row items-center gap-6">

                    <div className="flex-1 ">
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-4">
                            <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418835/financial-icon_eeepqa.png" alt="" width={22} height={22} />
                        </div>
                        <h3 className="font-[500] text-[#191C1D] text-2xl md:text-3xl md:max-w-[100px]">Financial Stability</h3>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 md:max-w-[200px] leading-7 font-[400]">
                            South-West orientation
                            mastery to anchor your
                            wealth and prevent
                            energetic 'leaks' in your
                            revenue stream.
                        </p>
                    </div>

                    <div className="flex-1">
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418837/FinancialStability_zsl2e5.png"
                            alt=""
                            width={300}
                            height={200}
                            className="rounded-xl object-cover w-full h-[240px]"
                        />
                    </div>
                </div>

                {/* CARD 5 */}
                <div className="bg-white p-8 rounded-[40px] shadow-sm flex flex-col md:flex-row items-center gap-6">

                    <div className="flex-1 order-2 md:order-1">
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418839/PeacefulEnvironment_xku2v3.png"
                            alt=""
                            width={300}
                            height={200}
                            className="rounded-xl object-cover w-full h-[240px]"
                        />
                    </div>

                    <div className="flex-1 order-1 md:order-2">
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-4">
                            <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776418834/Peaceful-icon_mmamrq.png" alt="" width={22} height={22} />
                        </div>

                        <h3 className="font-[500] text-[#191C1D] text-2xl md:text-3xl md:max-w-[100px]">Peaceful Environment</h3>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 md:max-w-[200px] leading-7 font-[400]">
                            Infusing air, water, and
                            earth elements into your
                            workspace to reduce
                            cortisol and enhance deep-
                            focus states.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}