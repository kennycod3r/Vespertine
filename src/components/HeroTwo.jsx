import React, { useState } from 'react';
import palm from "../assets/palm.svg";
import "../App.css";
import Slideshow from './Slideshow/Slideshow';

const HeroTwo = () => {
    const [images, setImages] = useState("https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
  return (
    <section className="main">
    <div
      className="relative hero"
      style={{
        backgroundImage: `url(${images})`,
      }}
    >
   <Slideshow/>
     
    </div>
  </section>
  )
}

export default HeroTwo