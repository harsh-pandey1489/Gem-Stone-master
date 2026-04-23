"use client"
import React from 'react'
import AstrologySteps from './AstrologySteps'
import AstralSection from './AstralSection'
import Testimonials from '../components/Testimonials'
import FaQ from '../components/FaQ'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import AstrologyServicesHero from '../components/AstrologyServicesHero'
import AstrologyClarity from '../components/AstrologyClarity'
import DigitalBirthChart from '../components/DigitalBirthChart'

const ServicesComponent = () => {
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
            <Navbar />
            <AstrologyServicesHero/>
            <AstrologyClarity/>
            <DigitalBirthChart/>
            <AstrologySteps />
            <AstralSection />
            <Testimonials />

            <FaQ data={faqData}/>
            <Footer/>

        </div>
    )
}

export default ServicesComponent
