import {  Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/homepage/hero-section/HeroSection";
import AboutSection from "../components/homepage/about/AboutSection";
import Experience from "../components/homepage/experience/Experience";
import Projects from "../components/homepage/projects/Projects";
import Education from "../components/homepage/education/Education";
import ContactSection from "../components/homepage/contact/ContactSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/helper/scroll-to-top";
import LogoLoop from "../components/helper/LogoLoop";
import Skills from "../components/homepage/skills/Skills";

function Home() {

  return (
      
   <>
  
    <Navbar/>
    <ScrollToTop/>
   
         <div className="px-2">
      <HeroSection />
      <AboutSection />
      <Experience />
      
         <Skills/>  
      <Projects />
      <Education />
      <ContactSection />
     
    </div>
    <Footer/>
   </>
  );
}

export default Home;
