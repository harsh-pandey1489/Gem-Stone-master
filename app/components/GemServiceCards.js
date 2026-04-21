import Image from "next/image";

export default function GemServiceCards() {
    return (
        <section className="bg-[#FFF9F2] py-12 px-4 max-w-[1720px] mx-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                

                {/* Card 1 */}
                <div className="relative h-[260px] md:h-[420px] rounded-2xl overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767002173/c841192fa7d537056572cf1b41eee100d478072e_clwy1b.png"
                        alt="Gemstone Recommendation"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Button */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <span className="bg-white text-gray-900 text-lg font-medium px-5 py-2 rounded-md shadow">
                            Gemstone Recommendation
                        </span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative h-[260px] md:h-[420px] rounded-2xl overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767002173/08b8a3c61dabbc1ca733aa6cf39f18eea89ad8d2_wg84g4.png"
                        alt="Pooja Energization"
                        fill
                        className="object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Button */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <span className="bg-white text-gray-900 text-lg font-medium px-5 py-2 rounded-md shadow">
                            Pooja Energization
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
