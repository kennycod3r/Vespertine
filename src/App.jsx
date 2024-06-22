import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import BookingsTwo from "./pages/BookingsTwo";
import useLenis from "./hooks/UseLennis";
import Dinning from "./pages/Dinning";
import Services from "./pages/Services";
import Sidebar from "./components/Sidebar/Sidebar";
import Loading from './components/Loader/Loading';

function App() {
  useLenis();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const [openSidebar, setOpenSidebar] = useState(false);

  function handleSidebar() {
    setOpenSidebar(prevState => !prevState);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="wrapper">
        <Navbar handleSidebar={handleSidebar} openSidebar={openSidebar} />
        <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dinning" element={<Dinning />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking/:id" element={<BookingsTwo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
