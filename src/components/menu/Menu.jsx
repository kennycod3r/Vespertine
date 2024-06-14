import React from "react";
import "./Menu.css";

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
    <div className="menu-page">
      <div className="menu-section">
        <h1 className="ms-h">Our Menu</h1>
        <div className="menu-table">
          <div className="menu-category">
            <div className="inner-menu-cat">
              <div>
                <h2 className="mt1">Starters</h2>
                <ul>
                  {menuItems.starters.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mc-des-div">
                <div>
                  <div>
                    <h3 className="greyp">Starters</h3>
                  </div>
                  <p className="tal">
                    daily changing menu of traditional Balinese dishes based on
                    the best the market has to offer
                  </p>
                </div>
                <div>
                  <ul>
                    <h3 className="greyp">complimentary</h3>
                    <li>Sparkling water</li>
                    <li>Bottle of candance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mc-img">
              <img
                src="https://images.unsplash.com/photo-1715249792892-ec2689ab016e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG95c3RlcnRzfGVufDB8fDB8fDA%3D"
                alt="fish"
              />
            </div>
          </div>
          <div className="menu-category">
            <div className="mc-des-div">
              <h2>Mains</h2>
              <ul>
                {menuItems.mains.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mc-img">
              <img
                src="https://images.unsplash.com/photo-1715249792892-ec2689ab016e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG95c3RlcnRzfGVufDB8fDB8fDA%3D"
                alt="fish"
              />
            </div>
          </div>

          <div className="menu-category">
            <div className="inner-menu-cat">
              <div>
                <h2 className="mt1">Desserts</h2>
                <ul>
                  {menuItems.desserts.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mc-des-div">
                <div>
                  <div>
                    <h3 className="greyp">Starters</h3>
                  </div>
                  <p className="tal">
                    daily changing menu of traditional Balinese dishes based on
                    the best the market has to offer
                  </p>
                </div>
                <div>
                  <ul>
                    <h3 className="greyp">complimentary</h3>
                    <li>Sparkling water</li>
                    <li>Bottle of candance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mc-img desserts"></div>
          </div>

          <div className="menu-category">
            <div className="mc-des-div"></div>
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

//https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEx1bmNofGVufDB8fDB8fHww
