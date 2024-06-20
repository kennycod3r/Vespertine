import React, { useState } from "react";
import Wedding from "../img/wed.webp";
import Spa from "../img/spa.webp";
import Trolly from "../img/trolly.webp";
import "./Services.css";
import WhiteSection from "../components/WhiteSection";

const Services = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ eventName, eventDate, eventDescription });
    // Add your form submission logic here
  };

  return (
    <section className="services-section">
      <div className="relative-con serviceHero hero">
        <img className="serviceHeroimg" src={Wedding} alt="wedimg" />
        <div className="hero-overlay service-overlay">
          <div className="so-g"></div>
          <div className="so-g">
            <div className="service-hero-text">
              <h2>We Got You</h2>
              <h2>Covered!</h2>
            </div>
          </div>
        </div>
      </div>
      <section className="green-service-section">
        <div className="green-service-section-grid">
          <div className="green-service-section-inner">
          <h2>Red Mountain Golf Club.
          <br/>Your Occation beautifull</h2>
          <div className="authors">
            <div>
              <p>Words by</p>
              <p>Joe Schmoe</p>
            </div>
            <div>
              <p>Words by</p>
              <p>Joe Schmoe</p>
            </div>
          </div>
          <WhiteSection/>
          </div>
          <div className="ser-form">
            <h3>Plan Your Event</h3>
            <form className="event-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="eventName">Event Name</label>
                <input
                  type="text"
                  id="eventName"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>
                <input
                  type="date"
                  id="eventDate"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventDescription">Event Description</label>
                <textarea
                  id="eventDescription"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;

