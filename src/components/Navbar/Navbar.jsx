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
    backdropFilter: isVisible ? "blur" : "inherit",
    transition:  isVisible ? "all 200ms ease": "all 0.4s cubic-bezier(0.3, 0, 0.3, 1)",
  };

  return (
    <nav id="Navbar" style={styles}>
      <div className="inner-div">
        <div className="div-one" id="sidebar">
          <ul>
            <li>
              <HamburgerMenu handleSidebar={handleSidebar} openSidebar={openSidebar}/>
            </li>
            <li className="show-big animateLink">
              <Link to="/">
                <p className="boldp">HOME</p>
              </Link>
            </li>
            <li className="show-big animateLink">
              <Link to="/dinning">
                <p className="boldp">DINNING</p>
              </Link>
            </li>
            <li className="show-big animateLink">
              <Link to="/rooms">
                <p className="boldp">ROOMS</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="div-one div-two headtext-small">VESPERTINE</div>
        <div className="div-one nav-3">
          <ul>
            <li className="boldp show-big"><p className="boldp">SERVICES</p></li>
            <li className="boldp show-big"><p className="boldp">SERVICES</p></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

