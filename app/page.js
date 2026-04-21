import Image from "next/image";
import Navbar from "./COMMON/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedProducts from "./components/TrustedProducts";
import TrustBadges from "./components/TrustBadges";
import GemBanner from "./components/GemBanner";
import GemPurpose from "./components/GemPurpose";
import BestSelling from "./components/BestSelling";
import GemServiceCards from "./components/GemServiceCards";
import SemiPreciousSlider from "./components/SemiPreciousSlider";
import ShopByPrice from "./components/ShopByPrice";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import HeroNewSection from "./components/HeroNewSection";
import HomeSecond from "./components/HomeSecond";
import HomeThird from "./components/HomeThird";
import HomeFourth from "./components/HomeFourth";
import HomeFifth from "./components/HomeFifth";
import HomeSixth from "./components/HomeSixth";
import HomeSeventh from "./components/HomeSeventh";
import HomeEigth from "./components/HomeEigth";
import HomeNinth from "./components/HomeNinth";
import HomeTenth from "./components/HomeTenth";
import HomeEleventh from "./components/HomeEleventh";
import FaQ from "./components/FaQ";

export default function Home() {
   const faqData = [
  {
    question: "Who is the best business consultant in India?",
    answer:
      "Shubham Gupta Business Consultant is known as one of the best business consultants in India, helping startups and companies grow with simple and effective strategies.",
  },
  {
    question: "How can a business consultant help my business?",
    answer:
      "A business consultant like Shubham Gupta Business Consultant helps you improve your planning, fix problems, and grow your business step by step.",
  },
  {
    question: "Do you provide services in Noida and Delhi NCR?",
    answer:
      "Yes, Shubham Gupta Business Consultant in Noida provides services across Delhi NCR and helps businesses grow with local market understanding.",
  },
  {
    question: "Can I get a free consultation for my business?",
    answer:
      "Yes, you can contact Shubham Gupta Business Consultant to get a free consultation and understand how to improve your business.",
  },
];
  return (
    <div>
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main> */}
      <Navbar />
      <HeroNewSection/>
      <HomeSecond/>
      <HomeThird/>
      <HomeFourth/>
      <HomeFifth/>
      <HomeSixth/>
      <HomeSeventh/>
      <HomeEigth/>
      <HomeNinth/>
      <HomeTenth/>
      <HomeEleventh/>
     
      {/* <GemBanner /> */}
      <TrustedProducts />
      {/* <HeroSection /> */}

      {/* <TrustBadges /> */}

       {/* <GemPurpose />
      <BestSelling />
      <ShopByPrice />
      <GemServiceCards />
      <SemiPreciousSlider /> */}
      <Testimonials /> 
       <FaQ data={faqData}/>
      {/* <FAQSection /> */}
    </div>
  );
}
