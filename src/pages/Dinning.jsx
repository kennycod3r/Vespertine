import React, { useState, useEffect } from "react";
import "./Card.css";
import Logo from "../assets/hotelLogo.svg";
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

  useEffect(() => {
    const getTimeOptions = () => {
      const options = [];
      const now = new Date();
      for (let hour = 6; hour <= 11; hour++) {
        if (hour === 11) {
          options.push("11:00", "11:30");
        } else {
          options.push(`${hour.toString().padStart(2, "0")}:00`);
          options.push(`${hour.toString().padStart(2, "0")}:30`);
        }
      }
      return options.filter((option) => {
        const [hours, minutes] = option.split(":").map(Number);
        const optionDate = new Date();
        optionDate.setHours(hours, minutes, 0, 0);
        return optionDate > now;
      });
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

  return (
    <>
      <div className="static-nav">
        <p className="logo-text">VESPERTINE</p>
        <button className="btn-reg">BOOK YOUR STAY</button>
      </div>
      <div className="fixed-reserve-resturant">
        {reservation.reservationState ? (
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Name" />
            </li>
            <li className="flex-time-co">
              <select
                id="company"
                name="company"
                value={reservedCompany}
                onChange={(e) => setReservedCompany(e.target.value)}
              >
                <option value="">Select Company</option>
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
                {timeOptions.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <button
                className="dinner-reserve-btn"
                onClick={handleReservation}
              >
                RESERVE
              </button>
            </li>
          </ul>
        ) : (
          <div className="res-complete-div" onClick={handleReservation}>
            <>
              <ArrowLink/>
             <div> {reservation.reservationText}</div>
            </>
          </div>
        )}
      </div>
      <Menu />
      <BlackSection dinner={true} />
    </>
  );
};

export default Dinning;
