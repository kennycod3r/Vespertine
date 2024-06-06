// src/components/Navbar.jsx
import React, { useTransition } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
 
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      console.log("200")
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
    <nav className="flexCenter outer-div" id="Navbar" style={ {overflow:"hidden", backgroundColor: isVisible ? "white" : "inherit",color : "black", backdropFilter: "blur(0.5em)", transition: "all 0.4s cubic-bezier(0.3, 0, 0.3, 1)" ,}}>
      <div className="inner-div">
        <div className="div-one" id="sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Dinning">Dinning</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
          </ul>
        </div>
        <div className="div-one div-two headtext-small">
        VESPERTINE
        </div>
        <div className="div-one div-three">
          <button>Book your stay</button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
