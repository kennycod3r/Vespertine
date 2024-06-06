// src/pages/Home.jsx
import React from 'react';
import Main from '../components/Main';
import Hero from '../components/Hero';
import HeroTwo from '../components/HeroTwo';
import SmallSection from '../components/SmallSection';
import Slideshow from '../components/Slideshow/Slideshow';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Main/>
      <Slideshow/>
     
      <h1>Welcome to Our Hotel</h1>
      <p>Enjoy your stay!</p>
    </div>
  );
};

export default Home;
