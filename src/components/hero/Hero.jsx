import React, { useEffect, useRef, useState } from "react";
import Plant from "../../assets/plant.svg";
import "./Hero.css";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="main main-hero">
      <div className="static-nav">
          <p className="logo-text">VESPERTINE</p>
          <button className="btn-reg">BOOK YOUR STAY</button>
        </div>
      <div
        ref={heroRef}
        className="relative hero"
        style={{
          backgroundImage: isImageLoaded
            ? `url(https://images.unsplash.com/photo-1527142879-95b61a0b8226?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
            : "none",
        }}
      >

        <div className="hero-overlay h-overlay-bc"></div>
        <div className="hero-text-main">
          <div>
            <img className="svg small-text" src={Plant} alt="Plant" />
          </div>
          <p className="small-text">HOTEL RESORT — LOVINA, BALI</p>
        </div>
      </div>
      <div className="view-hero-header">
        <div style={{ backgroundColor: "transparent", color: "white" }}>
          <p className="small-text"> ↓ EXPLORE </p>
        </div>
        <div className="view-hero-header-details">
          <p>HOTCALL</p>
          <p>HOTCALL</p>
          <p>HOTCALL</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
