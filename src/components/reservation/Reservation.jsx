// src/components/Reservation.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Reservation.css";

const Reservation = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationDetails = {
      name,
      email,
      checkInDate,
      checkOutDate,
    };
    onSubmit(reservationDetails);
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="checkin-divs">
        <div>
          <label className="reservation-label" htmlFor="checkInDate">
            Check-in Date
          </label>
          <Calendar
            id="checkInDate"
            onChange={setCheckInDate}
            value={checkInDate}
            minDate={new Date()}
          />
        </div>
        <div>
          <label className="reservation-label" htmlFor="checkOutDate">
            Check-out Date
          </label>
          <Calendar
            id="checkOutDate"
            onChange={setCheckOutDate}
            value={checkOutDate}
            minDate={checkInDate}
          />
        </div>
      </div>
      <div className="input-btn-div">
      <div className="form-input-reg">
        <label className="reservation-label-reg" htmlFor="name">
          Name
        </label>
        <input
          className="reservation-input"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="reservation-label-reg" htmlFor="email">
          Email
        </label>
        <input
          className="reservation-input"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-btn-con"><button className="btn-reg reservation-button" type="submit">
        Book Now
      </button></div>
      </div>
    </form>
  );
};

export default Reservation;
