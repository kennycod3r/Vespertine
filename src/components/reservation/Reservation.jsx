// src/components/Reservation.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Reservation.css';

const Reservation = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
      <label className="reservation-label" htmlFor="name">Name</label>
      <input
        className="reservation-input"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label className="reservation-label" htmlFor="email">Email</label>
      <input
        className="reservation-input"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className="reservation-label" htmlFor="checkInDate">Check-in Date</label>
      <Calendar
        id="checkInDate"
        onChange={setCheckInDate}
        value={checkInDate}
        minDate={new Date()}
      />
      <label className="reservation-label" htmlFor="checkOutDate">Check-out Date</label>
      <Calendar
        id="checkOutDate"
        onChange={setCheckOutDate}
        value={checkOutDate}
        minDate={checkInDate}
      />
      <button className="reservation-button" type="submit">Book Now</button>
    </form>
  );
};

export default Reservation;
