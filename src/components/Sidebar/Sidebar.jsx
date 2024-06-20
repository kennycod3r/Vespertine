import React from "react";
import "./Sidebar.css";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CloseButton from "../../util/CloseButton";

const Sidebar = ({ openSidebar, handleSidebar }) => {
  const sideBar = document.getElementById("sideBar");
  const location = useLocation();

  if (!sideBar) return null;

  const isActive = (path) => location.pathname === path;

  return createPortal(
    <div className={`main-sidebar ${openSidebar ? "open" : ""}`}>
      <div className="inner-main-sidebar">
        <div className="close-btn-circle-sidebar"  onClick={handleSidebar}>
            <CloseButton/>
        </div>
        <ul>
          <li className="navigatin-sidelink">Navigation</li>
          <li>
            <div className="flex-btn-reg" onClick={handleSidebar}>
              <Link to="/" className="sidebar-link">
                <div>
                  <h3>HOME</h3>
                </div>
                <div className={`dot ${isActive("/") ? "active" : ""}`}></div>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex-btn-reg" onClick={handleSidebar}>
              <Link to="/dinning" className="sidebar-link">
                <h3>DINING</h3>
                <div
                  className={`dot ${isActive("/dinning") ? "active" : ""}`}
                ></div>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex-btn-reg" onClick={handleSidebar}>
              <Link to="/rooms" className="sidebar-link">
                <h3>ROOMS</h3>
                <div
                  className={`dot ${isActive("/rooms") ? "active" : ""}`}
                ></div>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex-btn-reg" onClick={handleSidebar}>
              <Link to="/services" className="sidebar-link">
                <h3>SERVICES</h3>
                <div
                  className={`dot ${isActive("/services") ? "active" : ""}`}
                ></div>
              </Link>
            </div>
          </li>
        </ul>
        <div className="semi-circle"></div>
      </div>
    </div>,
    sideBar
  );
};

export default Sidebar;
