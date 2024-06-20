import React from "react";
import "./Menu.css";
import dessert from "../../img/dessert.webp";
import WhiteSection from "../WhiteSection";
import chef from "../../img/chef.webp";
import Pretty from "../../img/pretty.jpg";
import Qr from '../../assets/qr.svg';

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
              <div className="inner-menu-cat">   
                <div className="mc-des-div ">
                <div>
                  <i className="num">01</i>
                  <h2>STARTERS.</h2>
                </div>
                  <ul>
                    {menuItems.starters.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    <br/>
                    <li>COMPLIMENTARY</li>
                    <li>Sparkling water</li>
                    <li>Bottle of candance</li>
                  </ul>
                </div>
              </div>

              <div className="mc-img">
                <img
                  src={Pretty}
                  // src="https://images.unsplash.com/photo-1715249792892-ec2689ab016e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG95c3RlcnRzfGVufDB8fDB8fDA%3D"
                  alt="fish"
                />
              </div>
            </div>
            <div className="qr-code">
             <img src={Qr} alt="scan"/>
             <h3>Scan to reaveal full menu</h3>
            </div>
          </div>
          <div className="menu-category">
            <div className="inner-menu-cat">
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
            <div className="mc-img">
            <img
            src="https://www.chateauwittem.com/wp-content/uploads/2022/05/ChateauWittem_04-22_Food_72dpi_009.webp"
            alt="Delicious Food"
          />
              </div>
          </div>

          <div className="menu-category">
            <div className="inner-menu-cat">
              <div>
              <i className="num">03</i>
                <h2>Desserts</h2>
                <ul>
                  {menuItems.desserts.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mc-des-div">
                <WhiteSection
                  text={"STAR-DISH"}
                  className={"no-absolute"}
                  imageUrl={dessert}
                />
                <div>
                  <ul>
                    <h3 className="greyp">complimentary</h3>
                    <li>Milkshakes</li>
                    <li>ice-cream</li>
                    <li>Frozen yoghurt</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mc-img desserts"></div>
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

//https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEx1bmNofGVufDB8fDB8fHww
