import {  Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/homepage/hero-section/HeroSection";
import AboutSection from "../components/homepage/about/AboutSection";
import Experience from "../components/homepage/experience/Experience";
import Projects from "../components/homepage/projects/Projects";
import Education from "../components/homepage/education/Education";
import ContactSection from "../components/homepage/contact/ContactSection";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/helper/scroll-to-top";

function Home() {
  return (
      
   <>
  
    <Navbar/>
    <ScrollToTop/>
   
         <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Projects />
      <Education />
      <ContactSection />
     
    </div>
    <Footer/>
   </>
  );
}

export default Home;
