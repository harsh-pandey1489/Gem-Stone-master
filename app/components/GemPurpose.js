import Image from "next/image";

export default function GemstonePurpose() {
  return (
    <section className="bg-[#FAF7F2] py-16">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-black">
            Gemstones for Every Purpose
          </h2>
          <p className="text-[#1d1a1a] text-[17px] mt-2">
            Gemstones Made To Support Your Growth, Balance & Success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* LEFT SIDE */}
          <div className="grid grid-rows-2 gap-6">

            {/* Health */}
            <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767081008/Group_98_urkhe0.png"
                alt="Health"
                fill
                className="object-right-bottom opacity-90"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 z-10 text-white max-w-[220px]">
                <h3 className="text-2xl font-semibold">Health</h3>
                <p className="mt-1">Healing Energy</p>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded-md text-sm">
                  View Collection
                </button>
              </div>
            </div>

            {/* Career */}
            <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767081008/Group_97_y9lhqw.png"
                alt="Career"
                fill
                className=" object-right-bottom opacity-90"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 z-10 text-white max-w-[220px]">
                <h3 className="text-2xl font-semibold">Career</h3>
                <p className="mt-1">Empower Ambition</p>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded-md text-sm">
                  View Collection
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-rows-3 gap-6">

            {/* Relationship */}
            <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767081006/Group_92_xxnw5l.png"
                alt="Relationship"
                fill
                className="object-right opacity-90"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 z-10 text-white max-w-[220px]">
                <h3 className="text-2xl font-semibold">Relationship</h3>
                <p className="mt-1">Love And Harmony</p>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded-md text-sm">
                  View Collection
                </button>
              </div>
            </div>

            {/* Business */}
            <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767081210/Group_93_ovnhoh.png"
                alt="Business"
                fill
                className=" object-right opacity-90"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 z-10 text-white max-w-[220px]">
                <h3 className="text-2xl font-semibold">Business</h3>
                <p className="mt-1">Smart Decisions</p>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded-md text-sm">
                  View Collection
                </button>
              </div>
            </div>

            {/* Education */}
            <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767081013/Group_94_ttdeea.png"
                alt="Education"
                fill
                className="object-right opacity-90"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 z-10 text-white max-w-[220px]">
                <h3 className="text-2xl font-semibold">Education</h3>
                <p className="mt-1">Power your path</p>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded-md text-sm">
                  View Collection
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
