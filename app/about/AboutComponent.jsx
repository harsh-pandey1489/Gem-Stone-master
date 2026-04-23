"use client"

import Footer from "../COMMON/Footer"
import Navbar from "../COMMON/Navbar"
import FaQ from "../components/FaQ"
import AboutEigth from "./about-component/AboutEigth"
import AboutFifth from "./about-component/AboutFifth"
import AboutFourth from "./about-component/AboutFourth"
import AboutHero from "./about-component/AboutHero"
import AboutSecond from "./about-component/AboutSecond"
import AboutSeventh from "./about-component/AboutSeventh"
import AboutSixth from "./about-component/AboutSixth"
import AboutThird from "./about-component/AboutThird"

const AboutComponent = () => {
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
    <>
    <Navbar/>
      <AboutHero/>
      <AboutSecond/>
      <AboutThird/>
      <AboutFourth/>
      <AboutFifth/>
      <AboutSixth/>
      <AboutSeventh/>
      <AboutEigth/>
      <FaQ data={faqData}/>
      <Footer/>
      
    </>
  )
}

export default AboutComponent
