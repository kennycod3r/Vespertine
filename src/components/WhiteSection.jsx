import React from "react";

const WhiteSection = ({ imageUrl, className, text }) => {
  return (
    <div className={`white-cutaway ${className}`}>
      <p className="boldp">{text}</p>
      <div
        className="wci"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
};

export default WhiteSection;
