import React, { useEffect, useRef, useState } from "react";
import Plant from "../../assets/plant.svg";
import "./Hero.css";
import ArrowLink from "../ArrowLink";
import Button from "../../util/Button/Buttons";

const Hero = ({ noStaticNav, heroImgUrl }) => {
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
    <section className="main-hero">
      {!noStaticNav && (
        <div className="static-nav">
          <p className="logo-text">VESPERTINE</p>
          <Button className={"static-nav-btn"}>BOOK YOUR STAY</Button>
        </div>
      )}
      <div
        ref={heroRef}
        className="hero"
        style={{
          backgroundImage: isImageLoaded
            ? `url(${heroImgUrl || 'https://images.unsplash.com/photo-1527142879-95b61a0b8226?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`
            : "none",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-text-main">
          <div>
            <img className="svg small-text" src={Plant} alt="Plant" />
          </div>
          <p className="small-text">HOTEL RESORT — LOVINA, BALI</p>
        </div>
      </div>
      <div className="view-hero-header">
        <div className="explore-text">
          <p className="small-text"> ↓ EXPLORE </p>
        </div>
        <div className="view-hero-header-details">
          <div className="flexCenter">
            <ArrowLink black />
            <p>
              CALL
              <span className="small-hide">
                <br /> FOR AIRPORT PICKUP
              </span>
            </p>
          </div>
          <div className="flexCenter">
            <ArrowLink black />
            <p>
              BUSINESS
              <span className="small-hide">
                <br />
                OR EVENT PLANNING
              </span>
            </p>
          </div>
          <div className="flexCenter">
            <ArrowLink black />
            <p>
              CONCIERGE{" "}
              <span className="small-hide">
                <br />
                SERVICES
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
