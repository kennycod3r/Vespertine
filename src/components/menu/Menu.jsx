import React from "react";
import "./Menu.css";
import Qr from "../../assets/qr.svg";

const Menu = () => {
  const menuItems = {
    starters: ["Japanese Hamachi", "Gillardeau Oyster"],
    mains: [
      "John Dory",
      "Norwegian Lobster",
      "Red Mullet",
      "Lamb",
      "Cheese Chariot",
      "Strawberry",
    ],
    desserts: ["Valrhona Chocolate", "Strawberry", "Cheese Chariot"],
    lunch: [
      "John Dory",
      "Norwegian Lobster",
      "Red Mullet",
      "Lamb",
      "Cheese Chariot",
    ],
  };

  return (
    <div>
      <div className="menu-section">
        <h1>Our Menu</h1>
        <div className="menu-table">
          <div className="menu-cat-one">
            <div className="menu-category">
              <div>
                <i className="num">01</i>
                <h2>STARTERS.</h2>
              </div>
              <ul>
                {menuItems.lunch.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
                <li>COMPLIMENTARY</li>
                <li>Sparkling water</li>
                <li>Bottle of candance</li>
              </ul>
            </div>
            <div className="qr-code">
              <img src={Qr} alt="scan" />
              <p>Scan to reaveal full menu</p>
            </div>
          </div>
          <div className="menu-category">
            <div>
              <i className="num">02</i>
              <h2>MAINS.</h2>
            </div>
            <div className="mc-des-div">
              <ul>
                {menuItems.mains.slice(0, 3).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul>
                {menuItems.mains.slice(3).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="menu-category">
            <div>
              <i className="num">03</i>
              <h2>Desserts</h2>
            </div>
            <div>
              <ul>
                {menuItems.desserts.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul>
                <li>Milkshakes</li>
                <li>ice-cream</li>
                <li>Frozen yoghurt</li>
              </ul>
            </div>
          </div>

          <div className="menu-category">
            <div className="mc-des-div"></div>
            <i className="num">04</i>
            <h2>Lunch</h2>
            <ul>
              {menuItems.lunch.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;