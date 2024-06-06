import React from 'react';
import Logo from "../assets/hotelLogo.svg";
import "../App.css";
//https://images.unsplash.com/photo-1559385301-0187cb6eff46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGx1eHVyeXxlbnwwfHwwfHx8MA%3D%3D boat
const Hero = () => {
  return (
    <section className="main main-hero">
    <div
      className="relative hero"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1470376619031-a6791e534bf0?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      <div className="heroText">
        <div className="main-hero-text">
          
          <p className='small-text'>HOTEL RESORT — LOVINA, BALI</p>
          <h1>
            Find the spirit of Bali <br />
            at the Damai
          </h1>
          <div>
            <img className="svg" src={Logo} alt="palm logo" />
          </div>
        </div>
      </div>
      <p className='span-instruct small-text'> Scroll Down To Discover More</p>
    </div>


  </section>
  )
}

export default Hero