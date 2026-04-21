"use client"

import Navbar from "../COMMON/Navbar"
import AboutFifth from "./about-component/AboutFifth"
import AboutFourth from "./about-component/AboutFourth"
import AboutHero from "./about-component/AboutHero"
import AboutSecond from "./about-component/AboutSecond"
import AboutSixth from "./about-component/AboutSixth"
import AboutThird from "./about-component/AboutThird"

const AboutComponent = () => {
  return (
    <>
    <Navbar/>
      <AboutHero/>
      <AboutSecond/>
      <AboutThird/>
      <AboutFourth/>
      <AboutFifth/>
      {/* <AboutSixth/> */}
      
    </>
  )
}

export default AboutComponent
