import React, { useState, useCallback } from "react";
import StaffSection from "../components/staff/StaffSection";
import Main from "../components/Main";
import Wedding from "../img/wed.webp";
import Hero from "../components/hero/Hero";
import SmallSection from "../components/smallsection/SmallSection";
import Slideshow from "../components/Slideshow/Slideshow";
import TinySection from "../components/Tinysection/TinySection";
import BlackSection from "../components/blacksection/BlackSection";

const Home = () => {
  const [currentData, setCurrentImg] = useState({
    curImg: Wedding,
    curTitle: "Our Services",
  });

  const handleImages = useCallback((currIdxData) => {
    setCurrentImg(currIdxData);
  }, []);

  return (
    <div>
      <Hero />
      <main>
        <Main />
        <StaffSection />
        <div className="overflow-divs">
          <TinySection currentData={currentData} />
          <div className="services-div">
            <h1>
              <i className="num">“our”</i>Services
            </h1>
          </div>
          <Slideshow handleImages={handleImages} />
          <SmallSection />
        </div>
      </main>
      <BlackSection />
    </div>
  );
};

export default Home;
