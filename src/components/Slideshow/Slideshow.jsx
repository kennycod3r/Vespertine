// src/components/Slideshow.js
import React, { useState } from 'react';
import './Slideshow.css';

const rooms = [
  { id: 1, name: 'Room 1', subTitle:"BAHAMAS", expText:"The Ocean Club, A Four Seasons Resort Bahamas", image: 'https://images.unsplash.com/photo-1695512937087-859dc39418bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZiUyMGZpcmV8ZW58MHx8MHx8fDA%3D' },
  { id: 2, name: 'Room 2', image: 'https://images.unsplash.com/photo-1695512937087-859dc39418bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZiUyMGZpcmV8ZW58MHx8MHx8fDA%3D' },
  { id: 3, name: 'Room 3', image: 'https://images.unsplash.com/photo-1695512937087-859dc39418bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZiUyMGZpcmV8ZW58MHx8MHx8fDA%3D' },
  // Add more rooms as needed
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length);
  };

  return (
    <div className="slideshow-container">
      <button className="prev" onClick={prevSlide}>❮</button>
      <div className="slide relative">
        <div className='dark-wrapper'></div>
        <img src={rooms[currentIndex].image} alt={rooms[currentIndex].name} />
        <div className="caption">
            <h1>{rooms[0].subTitle}</h1>
            <p  className='small-text'>{rooms[0].expText}</p>
            {rooms[currentIndex].name}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slideshow;
