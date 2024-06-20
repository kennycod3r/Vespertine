import React from "react";
import "./Button.css";

const Button = ({ children, className }) => {
  return <button className={`info button-font ${className}`}>{children}</button>;
};

export default Button;
