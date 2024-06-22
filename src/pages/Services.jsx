import React, { useState } from "react";
import Wedding from "../img/wed.webp";

import "./Services.css";

import Logo from "../util/Logo/Logo";

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
      <div className="serviceHero hero">
        <img src={Wedding} alt="wedimg" />
        <div className="hero-overlay service-overlay">
          <div className="so-g"></div>
          <div className="so-g2">
            <div className="service-hero-text">
              <h2>We Got You</h2>
              <h2>Covered!</h2>
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
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="green-service-section">
        <div className="green-service-section-grid">
          <div className="green-service-section-inner">
            <h2>Your Occasion Beautiful</h2>
            <div className="event-packages">
              <h3>
                <i>Our</i> Event Packages
              </h3>
              <div className="services-whiteSection">
                <ul className="row grid">
                  <li className="col">
                    <a href="#" className="single-packages-card">
                      <div className="spc-div"></div>
                      <p className="fC"> WEDDINGS</p>

                      <div className="card-content">
                        <div className="titleH">
                          <div>
                            <p>Save over 15%</p>
                            <p>Accomodates 150 guests</p>
                          </div>
                          <p>A dawn dolphin safari in Lovina Bay</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="col">
                    <a href="#" className="single-packages-card">
                      <div className="spc-div SPC-DIV2"></div>
                      <p className="fC"> CORPORATE</p>

                      <div className="card-content">
                        <div className="titleH">
                          <div>
                            <p>Save over 15%</p>
                            <p>Accomodates 150 guests</p>
                          </div>
                          <p>A dawn dolphin safari in Lovina Bay</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
