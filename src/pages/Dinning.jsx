import React from "react";
import Logo from "../assets/hotelLogo.svg";
import './Card.css';
import CardSection from "../components/CardSection";

const Dinning = () => {
  return (
    <>
    <section className="main main-hero">
      <div
        className="relative hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlubmVyfGVufDB8fDB8fHww)`,
        }}
      >
        <div className="heroText">
          <div className="main-hero-text">
            <p className="small-text">EXPLORE OUR RESTURANT</p>
            <h1>
              MAKE YOUR NEXT MEAL<br />
              UNFORGETTABLE
            </h1>
            <div>
              <img className="svg" src={Logo} alt="palm logo" />
            </div>
          </div>
        </div>
        <p className="span-instruct small-text">
          {" "}
          Scroll Down To Discover More
        </p>
      </div>
    </section>
    <CardSection/>
    </>
  );
};

export default Dinning;
