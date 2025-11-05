import {  Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { personalData } from "../utils/data/personal-data";
import HeroSection from "../components/homepage/hero-section/HeroSection";
import AboutSection from "../components/homepage/about/AboutSection";
import Experience from "../components/homepage/experience/Experience";
import Projects from "../components/homepage/projects/Projects";
import Education from "../components/homepage/education/Education";

import ContactSection from "../components/homepage/contact/ContactSection";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/helper/scroll-to-top";
import GlowCard from "../components/helper/glow-card";
import Footer from "../components/footer";
import Proj from "../components/homepage/projects/Proj";
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
      <Proj/>
    </div>
    <Footer/>
   </>
  );
}

export default Home;
