// src/components/Navbar.jsx
import React, { useTransition } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 160) {
      setIsVisible(true);
    }
    else{
      setIsVisible(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const styles = {
    opacity: isVisible ? 1 : 0,
    overflow: "hidden",
    borderBottom: isVisible ? "1px solid #D2D2D2": "inherit",
    backgroundColor: isVisible ? "#fff" : "inherit",
    backdropFilter:isVisible ? "blur(0.5em)" : "inherit",
    color: isVisible ? "black" : "inherit",
    transition: "all 0.4s cubic-bezier(0.3, 0, 0.3, 1)",
  }
  return (
    <>
      <nav
        className="flexCenter outer-div"
        id="Navbar"
        style={styles}
      >
        <div className="inner-div">
          <div className="div-one" id="sidebar">
            <ul>
              <li>
                <Link to="/"><p className="boldp">HOME</p></Link>
              </li>
              <li>
                <Link to="/Dinning"> <p className="boldp">DINNING</p></Link>
              </li>
              <li>
                <Link to="/rooms"><p className="boldp">ROOMS</p></Link>
              </li>
              <li>
                <Link to="/booking"><p className="boldp">BOOKING</p></Link>
              </li>
            </ul>
          </div>
          
          <div className="div-one div-two headtext-small">VESPERTINE</div>
          <div className="div-one nav-3">
            <button  className="btn-reg">Book
            <div class="button-bg is--light"></div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
