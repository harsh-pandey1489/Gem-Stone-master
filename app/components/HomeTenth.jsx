"use client";
import Image from "next/image";

export default function HomeTenth() {
  const cards = [
    {
      title: "Astro Reading",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776431898/Astro_Reading_wybndz.png",
    },
    {
      title: "Compatibility",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776431898/Compatibility_pylzmh.png",
    },
    {
      title: "Horoscope",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776431897/Horoscope_qfgoit.png",
    },
    {
      title: "Personal Gems",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776431897/Personal_Gems_eeho4j.png",
    },
  ];

  return (
    <section className="bg-[#FDFDFD] max-w-[1720px] mx-auto py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid xl:grid-cols-[60%_40%] gap-12 items-center ">

        {/* LEFT SIDE (CARDS) */}
        <div className=" grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-[#E57661] p-9 flex flex-col gap-4 h-full  transition"
            >

              <div className="w-16 h-16 relative">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>


              <h3 className=" text-[22px] md:text-[32px] font-medium text-[#303030]">
                {card.title}
              </h3>

              <p className="text-[#5A5A5A] text-[17px] md:text-[20px] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (IMAGE) */}

        <div className="flex justify-center xl:justify-start mt-10 xl:mt-0">
          <Image
            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776431899/There_are_many_variations_of_passages_of_Lorem_Ipsum_available_but_the_majority_yqmjyr.png"
            alt="astro"
            width={480}
            height={480}
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}


