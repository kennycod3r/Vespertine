import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamburgerMenu from "../Hamburger/HamburgerMenu";

const Navbar = ({ handleSidebar, openSidebar }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 160) {
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
    borderBottom: isVisible ? "1px solid #D2D2D2" : "inherit",
    backgroundColor: isVisible ? "#fff" : "inherit",
    backdropFilter: isVisible ? "blur(10px)" : "inherit",
    transition: "all 200ms ease",
  };

  return (
    <nav id="Navbar" style={styles}>
      <div className="inner-div">
        <div className="div-one" id="sidebar">
          <ul className="main-nav-bar">
            <li>
              <HamburgerMenu handleSidebar={handleSidebar} openSidebar={openSidebar} />
            </li>
            <li className="show-big animateLink">
              <Link to="/">
                <div className="nav-link-click">
                  <p className="boldp" data-hover="HOME">HOME</p>
                </div>
              </Link>
            </li>
            <li className="show-big din-li animateLink">
              <Link to="/dinning" id="animateNav">
                <div className="nav-link-click">
                  <p className="boldp" data-hover="DINING">DINING</p>
                </div>
              </Link>
            </li>
            <li className="show-big animateLink">
              <Link to="/rooms">
                <div className="nav-link-click">
                  <p className="boldp" data-hover="ROOMS">ROOMS</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="div-one div-two">VESPERTINE</div>
        <div className="div-one nav-3">
          <ul>
            <li className="show-big animateLink">
              <Link to="/services">
                <div className="nav-link-click">
                  <p className="boldp" data-hover="SERVICES">SERVICES</p>
                </div>
              </Link>
            </li>
            <li className="boldp show-big">
              <div className="nav-link-click">
                <p className="boldp" data-hover="BOOKING">BOOKING</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

