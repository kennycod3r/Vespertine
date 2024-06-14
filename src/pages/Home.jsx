// src/pages/Home.jsx
import React from "react";
import StaffSection from "../components/staff/StaffSection";
import Main from "../components/Main";
import Hero from "../components/hero/Hero";
import HeroTwo from "../components/HeroTwo";
import View from "../components/onview/View";
import SmallSection from "../components/smallsection/SmallSection";
import Slideshow from "../components/Slideshow/Slideshow";
import TinySection from "../components/Tinysection/TinySection";
import BlackSection from "../components/blacksection/BlackSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <main>
       
        <Main />
        <StaffSection/>
        <div className="overflow-divs">
        <TinySection />
        <Slideshow />
        <SmallSection />
        </div>
      </main>{" "}
      <View/>
      <BlackSection />
    </div>
  );
};

export default Home;
