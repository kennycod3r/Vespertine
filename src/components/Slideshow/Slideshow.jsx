import React, { useState } from 'react';
import './Slideshow.css';
import plateLogo from '../../assets/platelogo.svg';
import richmen from '../../img/richmen.webp';

const rooms = [
  { id: 1, name: '1', imgLogo: plateLogo, subTitle: "BAHAMAS", expText: "The Ocean Club, A Four Seasons Resort Bahamas", image: 'https://images.unsplash.com/photo-1695512937087-859dc39418bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZiUyMGZpcmV8ZW58MHx8MHx8fDA%3D' },
  { id: 2, name: '2', imgLogo: plateLogo, image: richmen },
  { id: 3, name: '3', imgLogo: plateLogo, image: 'https://images.unsplash.com/photo-1695512937087-859dc39418bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZiUyMGZpcmV8ZW58MHx8MHx8fDA%3D' },
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
      <div className="prev" onClick={prevSlide}>❮</div>
      <div className="slide relative">
        <div className="room-no">
          <p>{rooms[currentIndex].name}</p> 
          <div>—————</div> 
          <p>4</p>
        </div>
        <div className='dark-wrapper'></div>
        <img src={rooms[currentIndex].image} alt={`Room ${rooms[currentIndex].name}`} />
        <div className="caption">
          <ul>
            <li>
              <div>
                <img className="svg" src={rooms[currentIndex].imgLogo} alt="logo" style={{objectFit: "contain", border: "none"}} />
              </div>
            </li>
            <button className='btn-reg'>READ MORE IN DINNING</button>
          </ul>
        </div>
      </div>
      <div className="next" onClick={nextSlide}>❯</div>
    </div>
  );
};

export default Slideshow;
