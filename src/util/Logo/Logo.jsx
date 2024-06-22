import React from "react";
import '../../../src/index.css';
import Vlogo from "../../assets/Vwhite.svg";
import VlogoBlack from "../../assets/Vblack.svg";

const Logo = ({hero}) => {
  return (
    <div>
      <img className="logosvg small-text" style={{height: !hero ? "20px" : "inherit" }} src={hero ? Vlogo : VlogoBlack} alt="Vlogo" />
    </div>
  );
};

export default Logo;
