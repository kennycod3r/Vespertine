import React, { useState, useEffect } from "react";
import "./Card.css";
import Logo from "../assets/hotelLogo.svg";
import CloseSvg from "../util/CloseSvg";
import ArrSvg from "../assets/Arrow.svg";
import Button from "../util/Button/Buttons";
import butterfly from "../assets/butterfly.svg";
import pin from "../assets/pin.svg";
import HamburgerMenu from "../components/Hamburger/HamburgerMenu";
import Kids from "../img/kids.webp";
import ArrowLink from "../components/ArrowLink";
import StaffSection from "../components/staff/StaffSection";
import Menu from "../components/menu/Menu";
import BlackSection from "../components/blacksection/BlackSection";

const Dinning = () => {
  const [timeOptions, setTimeOptions] = useState([]);
  const [reservedTime, setReservedTime] = useState("");
  const [reservedCompany, setReservedCompany] = useState("");
  const [reservation, setReservation] = useState({
    reservationState: false,
    reservationText: "Make a reservation",
  });
  const [isMobileReservationOpen, setIsMobileReservationOpen] = useState(false);

  useEffect(() => {
    const getTimeOptions = () => {
      const options = [];
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes(); // Get current time in minutes

      for (let hour = 6; hour <= 11; hour++) {
        if (hour === 11) {
          options.push("11:00", "11:30");
        } else {
          options.push(`${hour.toString().padStart(2, "0")}:00`);
          options.push(`${hour.toString().padStart(2, "0")}:30`);
        }
      }
      return options;
    };

    setTimeOptions(getTimeOptions());
  }, []);

  const handleReservation = () => {
    setReservation((prevState) => ({
      reservationState: !prevState.reservationState,
      reservationText: !prevState.reservationState
        ? "Make a reservation"
        : `Reservation set for ${reservedTime}, Table for ${reservedCompany}`,
    }));
  };

  const toggleMobileReservation = () => {
    setIsMobileReservationOpen(!isMobileReservationOpen);
  };

  const cheff = true;
  const cheffText = <h1>Meet <i>“our”</i>Cheff</h1>;

  return (
    <>
      <div className="static-nav">
        <p className="logo-text">VESPERTINE</p>
        <button className="btn-reg">BOOK YOUR STAY</button>
      </div>
      <button
        className="mobile-reservation-toggle"
        onClick={toggleMobileReservation}
        style={{
          backgroundColor: isMobileReservationOpen ? "#fff" : "#181818",
        }}
      >
        <CloseSvg
          isOpen={isMobileReservationOpen}
        />
      </button>
     
      <div
        className={`fixed-reserve-restaurant ${
          isMobileReservationOpen ? "open" : ""
        }`}
      >
        {reservation.reservationState ? (
          <ul>
            <h3>Make a Reservation</h3>
            <li>
              <label htmlFor="name">NAME</label>
              <input id="name" name="name" placeholder="Enter Name" />
            </li>
            <li className="flex-time-co">
              <select
                id="company"
                name="company"
                value={reservedCompany}
                onChange={(e) => setReservedCompany(e.target.value)}
              >
                <option value="">company</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
              <select
                id="time"
                name="time"
                value={reservedTime}
                onChange={(e) => setReservedTime(e.target.value)}
              >
                <option value="">Time</option>
                {timeOptions.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <button
                className="dinner-reserve-btn"
                onClick={handleReservation}
              >
                RESERVE TABLE
              </button>
            </li>
          </ul>
        ) : (
          <div className="res-complete-div" onClick={handleReservation}>
            <>
              <ArrowLink />
              <div>{reservation.reservationText}</div>
            </>
          </div>
        )}
      </div>
      <Menu />
      <div>
        
    
      </div>
      <section className="kids-section">
        <h1>
          Kids get Free
        </h1>
        <h1><i> Dessert!</i></h1>
        <p>★ ★ ★</p>
        <div className="kids-card-image">
          <div className="butterflysvg">
            <img src={butterfly} className="svg" alt="butterfly" />
          </div>
          <div className="kidscard card1">
            <div className="hero-overlay h-overlay-bc"></div>
          </div>
          <div className="kidscard card2">
            <div className="hero-overlay h-overlay-bc"></div>
          </div>
          <div className="kidscard card3">
            <div className="hero-overlay r-overlay">
              <div className="small-text flexCenter">
                <ArrowLink />1 of each dessert option
              </div>
            </div>
          </div>
          <div>
            <img src={pin} className="svg pinsvg" alt="pin" />
          </div>
        </div>
      </section>
      <BlackSection dinner={true} />
    </>
  );
};

export default Dinning;

