import React from "react";
import "../App.css";
import "./main.css";

export default function Main() {
  return (
    <section className="main main-text-area">
      <div className="main-content">
        <div className="img-div">
          <img
            src="https://images.unsplash.com/photo-1561065270-5c2af775b542?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlubmVyJTIwcGFydHl8ZW58MHx8MHx8fDA%3D"
            alt="Experience Bali"
          />
        </div>
        <div className="header-text">
          <h2>Better Experiences</h2>
          <h2>
            since <i className="num">"17".</i>
          </h2>
        </div>
        <p className="sub-text">
          Just a few hours from the airport, on a green hill overlooking the
          sea. A small resort with a big view and a great restaurant. Here you
          find the true Bali.
        </p>
        <div className="button-container">
          <button className="btn-reg">Book a Villa</button>
        </div>
        <div className="img-div-two">
          <img
            src="https://www.chateauwittem.com/wp-content/uploads/2022/05/ChateauWittem_04-22_Food_72dpi_009.webp"
            alt="Delicious Food"
          />
        </div>
      </div>
    </section>
  );
}

