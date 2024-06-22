import React from "react";
import Logo from "../util/Logo/Logo";

const WhiteSection = ({ imageUrl, className, text }) => {
  return (
    <div className={`white-cutaway ${className}`}>
      <Logo/>
      <p className="boldp">{text}</p>
      <div
        className="wci"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
};

export default WhiteSection;
