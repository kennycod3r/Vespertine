import React, { useState } from "react";
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

function App() {
  useLenis();

  const [openSidebar, setOpenSidebar] = useState(false);

  function handleSidebar() {
    setOpenSidebar(prevState => !prevState);
  }

  return (
    <Router>
      <div className="wrapper">
        <Navbar handleSidebar={handleSidebar} openSidebar={openSidebar}/>
        <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dinning" element={<Dinning />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking/:id" element={<BookingsTwo />} />
        </Routes>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
