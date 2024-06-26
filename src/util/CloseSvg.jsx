import React, { useState } from 'react'
import '../components/Hamburger/Hamburger.css';


const CloseSvg = ({isOpen}) => {

  return (
    <div>
      <button
        className={
          isOpen
          ? "hamburger hamburger--3dx is-active" 
            : "hamburger hamburger--3dx"
        }
      >
        <span className="hamburger-box">
          <span className="hamburger-inner hamburger-inner-dinner"></span>
        </span>
      </button>
    </div>
  )
}

export default CloseSvg