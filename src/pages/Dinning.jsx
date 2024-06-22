import React, { useState, useEffect } from "react";
import "./Card.css";
import Logo from "../assets/hotelLogo.svg";
import VespertineWhite from "../assets/vespertineWhite.svg";
import CloseSvg from "../util/CloseSvg";
import butterfly from "../assets/butterfly.svg";
import pin from "../assets/pin.svg";
import ArrowLink from "../components/ArrowLink";
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
  const [visibleCards, setVisibleCards] = useState([true, true, true]);

  useEffect(() => {
    const getTimeOptions = () => {
      const options = [];
      for (let hour = 6; hour <= 11; hour++) {
        options.push(`${hour.toString().padStart(2, "0")}:00`);
        options.push(`${hour.toString().padStart(2, "0")}:30`);
      }
      return options;
    };

    setTimeOptions(getTimeOptions());
  }, []);

  const handleCardClick = (index) => {
    setVisibleCards((prevVisibleCards) =>
      prevVisibleCards.map((isVisible, i) => (i === index ? false : isVisible))
    );
  };

  const handleReservation = () => {
    setReservation((prevState) => ({
      reservationState: !prevState.reservationState,
      reservationText: reservedTime
        ? `Reservation set for ${reservedTime}, Table for ${reservedCompany}`
        : "Make a reservation",
    }));
  };

  const toggleMobileReservation = () => {
    setIsMobileReservationOpen(!isMobileReservationOpen);
  };

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
          backgroundColor: isMobileReservationOpen ? "#fff" : "#161d15",
        }}
      >
        <CloseSvg isOpen={isMobileReservationOpen} />
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
      <section className="kids-section">
        <div className="logo-div-kids">
          <img src={VespertineWhite} alt="logo" />
        </div>
        <h1>Kids get Free</h1>
        <h1>
          <i> Dessert!</i>
        </h1>
        <p>★ ★ ★</p>
        <div className="kids-card-image">
          <div className="pinsvg">
            <img src={pin} alt="pin" />
          </div>
          <div className="butterflysvg">
            <img src={butterfly} className="svg" alt="butterfly" />
          </div>
          {visibleCards.map((isVisible, index) => (
            <div
              key={index}
              className={`kidscard card${index + 1}`}
              style={{
                transform: isVisible ? `rotate(${index * 10}deg)` : "translateX(-300px)",
              }}
              onClick={() => handleCardClick(index)}
            >
              {!isVisible && <div className="hero-overlay h-overlay-bc"></div>}
            </div>
          ))}
        </div>
      </section>
      <BlackSection dinner={true} />
    </>
  );
};

export default Dinning;

