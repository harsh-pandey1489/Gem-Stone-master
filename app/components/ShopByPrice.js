import Image from "next/image";

const priceCards = [
  {
    title: "Economy",
    price: "Under ₹20k",
    icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767071842/Mask_group_gxege7.png",
    ring: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767071621/Group_89_kugtjo.png",
  },
  {
    title: "Premium",
    price: "Under ₹75k",
    icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767071842/Mask_group_1_jmejrt.png",
        ring: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767071621/Group_89_kugtjo.png",
  },
  {
    title: "Luxe",
    price: "Above ₹75k",
    icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767071842/Mask_group_2_dnjmzs.png",
        ring: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767071621/Group_89_kugtjo.png",
  },
];

export default function ShopByPrice() {
  return (
    <section className="relative w-full min-h-[520px] py-16 px-4 overflow-hidden max-w-[1720px] mx-auto">
      {/* BACKGROUND IMAGE */}
      <Image
        src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767071622/Group_90_qlow1p.png"
        alt="background"
        fill
        className="object-cover"
        priority
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Shop Gemstone by Price
        </h2>
        <p className="mt-2 text-sm md:text-base opacity-90">
          Buy Curated Gemstones Online Across Economy, Premium & Luxe Ranges
        </p>

        {/* CARDS */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">
          {priceCards.map((item, i) => (
            <div key={i} className="relative w-[340px] h-[340px]">
              {/* OUTER RING */}
              <Image
                src={item.ring}
                alt="ring"
                fill
                className="object-contain"
              />

              {/* INNER WHITE CIRCLE */}
              <div className="absolute inset-[18px]  rounded-full flex flex-col items-center justify-center text-center px-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={35}
                  height={35}
                />
                <h3 className="mt-3 text-[23px] font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-orange-500">
                  {item.price}
                </p>
              </div>

              {/* STONES IMAGE
              <Image
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767013995/stones_xxx.png"
                alt="stones"
                width={120}
                height={40}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
