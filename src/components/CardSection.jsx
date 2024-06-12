import React from "react";
import DarkImg from "../img/darkImg.webp";

const CardSection = () => {
  return (

      <section className="main main-text-area">
        <div>
          <div className="header-text">
            <h2>
              AWARD-<i>WINNING</i>
            </h2>
            <h2>RESTAURANTS & BARS</h2>
          </div>
          <p className="sub-text-long">
            The table is set. The menu is ready. All that’s missing now is you.
            Discover unparalleled fine dining and extraordinary culinary
            experiences at Four Seasons acclaimed restaurants and bars around
            the globe.
          </p>{" "}
          {/* {//https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D} */}
          <div className="button-container">
            {" "}
            <button className="btn-reg">Make A reservation</button>
          </div>
          <div className="card-section">
            <div className="card">
              <img src={DarkImg} alt="drink" />
            </div>
            <div className="card">
              <img src={DarkImg} alt="drink" />
            </div>
            <div className="card">
              <img src={DarkImg} alt="drink" />
            </div>
          </div>
        </div>
      </section>

  );
};

export default CardSection;
