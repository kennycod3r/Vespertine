import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import BookingsTwo from "./pages/BookingsTwo";
import useLenis from "./hooks/UseLennis";
import Dinning from "./pages/Dinning"; // Ensure the correct filename and path

function App() {
  useLenis();

  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dinning" element={<Dinning />} />
          <Route path="/booking/:id" element={<BookingsTwo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;