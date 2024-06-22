import React, { useState, useEffect, useCallback } from "react";
import "./Slideshow.css";
import plateLogo from "../../assets/platelogo.svg";
import Wedding from "../../img/wed.webp";
import Spa from "../../img/spa.webp";
import Trolly from "../../img/trolly.webp";
import ArrowLink from "../ArrowLink";
import Logo from "../../util/Logo/Logo";

const rooms = [
  {
    id: 1,
    name: "1",
    Title: "Events",
    ptext: "HOST YOUR EVENTS WITH US",
    subtext:
      "Our Ocean Club Garden, A special place to celebrate your event covered by glamour and luxury, what better place to be than here with us!",
    image: Wedding,
  },
  {
    id: 2,
    name: "2",
    Title: "Spa",
    ptext: "COMES FREE WITH PREMIUM ROOM",
    subtext:
      "The Spa at Vespertine offers a wide range of pampering and therapeutic massage treatments from licensed therapists based in traditional Balinese techniques.",
    imgLogo: plateLogo,
    image: Spa,
  },
  {
    id: 3,
    name: "3",
    ptext: "CALL FOR AIRPORT PICKUP",
    Title: "Airport Pickup",
    subtext:
      "Convenient Transit from touchdown. We valet your luggage and ensure you and your company have a smooth stress-free transition from the airport to our Hotel",
    imgLogo: plateLogo,
    image: Trolly,
  },
  {
    id: 4,
    name: "1",
    Title: "Events",
    ptext: "HOST YOUR EVENTS WITH US",
    subtext:
      "Our Ocean Club Garden, A special place to celebrate your event covered by glamour and luxury, what better place to be than here with us!",
    image: Wedding,
  },
];

const Slideshow = ({ handleImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currIdxData = {
      curImg: rooms[currentIndex].image,
      curTitle: rooms[currentIndex].Title,
    };
    handleImages(currIdxData);
  }, [currentIndex, handleImages]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="prev" onClick={prevSlide}>
        ❮
      </div>
      <div className="slide relative">
        <div className="room-no">
          <p>{rooms[currentIndex].name}</p>
          <div>—————</div>
          <p>3</p>
        </div>
        <div className="hero-overlay r-overlay SS-overlay">
          <Logo hero={"hero"}/>
          <h2>{rooms[currentIndex].Title}</h2>
          <div className="small-text flexCenter animateLink">
            <ArrowLink />
            {rooms[currentIndex].ptext}
          </div>
        </div>
        <div className="ss-img-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {rooms.map((room, index) => (
            <img
              key={room.id}
              className="ss-img"
              src={room.image}
              alt={`Room ${room.name}`}
            />
          ))}
        </div>
        <div className="caption">
          <p>{rooms[currentIndex].subtext}</p>
          <ul>
            <button className="btn-reg">READ MORE</button>
          </ul>
        </div>
      </div>
      <div className="next" onClick={nextSlide}>
        ❯
      </div>
    </div>
  );
};

export default Slideshow;

