// src/components/Navbar.jsx
import React, { useTransition } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 260) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
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
    backgroundColor: isVisible ? "#f2f2ec" : "inherit",
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
          <div className="div-one div-two headtext-small">VESPERTINE</div>
          <div className="div-one div-three">
            <button>Book your stay</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
