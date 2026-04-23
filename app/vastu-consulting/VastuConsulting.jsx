
"use client"
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'
import FaQ from '../components/FaQ'
import Testimonials from '../components/Testimonials'
import VastuEigth from './VastuEigth'
import VastuFourth from './VastuFourth'
import VastuHero from './VastuHero'
import VastuNinth from './VastuNinth'
import VastuSecond from './VastuSecond'
import VastuSeveth from './VastuSeventh'
import VastuSixth from './VastuSixth'
import VastuThird from './VastuThird'

const VastuConsulting = () => {
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
      <VastuHero/>
      <VastuSecond/>
      <VastuThird/>
      <VastuFourth/>
      <VastuSixth/>
      <VastuSeveth/>
      <VastuEigth/>
      <VastuNinth/>
      <Testimonials/>
      <FaQ data={faqData}/>
      <Footer/>
    </>
  )
}

export default VastuConsulting
