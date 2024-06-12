import React from "react";
import "./View.css";
import TO from "../../img/to.webp";

const View = () => {
  return (
    <div className="view-section">
      <div className="header-text view-header-text">
       .
      </div>
      <div className="view-list-container">
        <div className="view-item">
          <div className="view-card">
            <div className="view-overlay">
              <span className="view-overlay-text">
                ALL ACCESS. INCLUDES GYM, POOL
              </span>
            </div>
            <img src={TO} className="view-image" alt="View" />
          </div>
        </div>
        <div className="view-item">
          <div className="view-card">
            <div className="view-overlay">
              <span className="view-overlay-text">
                SLEEPS 4 ADULTS. INCLUDES OUTDOOR POOL
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGx1eHVyeSUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
              className="view-image"
              alt="View"
            />
          </div>
        </div>
        <div className="view-item">
          <div className="view-card">
            <div className="view-overlay">
              <span className="view-overlay-text">
                SLEEPS 2 ADULTS. INCLUDES POOL
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGx1eHVyeSUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
              className="view-image"
              alt="View"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
