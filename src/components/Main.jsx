import React from "react";
import "../App.css";
import "./main.css";
import { Link } from "react-router-dom";
import ArrowLink from "./ArrowLink";
import Button from "../util/Button/Buttons";

export default function Main() {
  return (
    <section className="main main-text-area">
      <div className="main-content">
        <div className="img-div img-div-one">
          <img
            src="https://images.unsplash.com/photo-1561065270-5c2af775b542?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlubmVyJTIwcGFydHl8ZW58MHx8MHx8fDA%3D"
            alt="Dinner Party"
          />
        </div>
        <div className="header-text">
          <h3>
            HOTEL. RESTAURANT<i className="num"> &</i> BAR. EVENTS
          </h3>
          <h2>Better Experiences</h2>
          <h2>
            Since <i className="num">“17”.</i>
          </h2>
        </div>
        <p className="sub-text">
          Discover the elegance of our exquisite hotel rooms and luxurious
          suites. Relish an intimate dinner at our two Michelin star restaurant
          or enjoy a stylish drink at our exclusive bar. A classic destination
          designed for modern-day luxury.
        </p>
        <div className="button-container">
          <Link to="/rooms">
            <Button>
              <ArrowLink />
              <span>BOOK A ROOM</span>
            </Button>
          </Link>
        </div>
        <div className="img-div img-div-two">
          <img
            src="https://www.chateauwittem.com/wp-content/uploads/2022/05/ChateauWittem_04-22_Food_72dpi_009.webp"
            alt="Delicious Food"
          />
        </div>
      </div>
    </section>
  );
}
