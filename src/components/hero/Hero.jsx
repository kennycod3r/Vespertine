import React from "react";
import Plant from "../../assets/plant.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="main main-hero">
      <div
        className="relative hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1527142879-95b61a0b8226?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="static-nav">
          <div>
            <p className="logo-text">VESPERTINE</p>
          </div>

          <div className="static-nav-inner">
            <p className="small-text">HOTCALL</p>
            <p className="small-text">RESERVE</p>
          </div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-text-main">
          <div>
            <img className="svg small-text" src={Plant} alt="Plant" />
          </div>
          <p className="small-text">HOTEL RESORT — LOVINA, BALI</p>
         <div className="explore-div"> <div className="explore-btn">EXPLORE</div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
