import { useState } from "react";
import "./Footer.css";
import React from "react";
import BackToTop from "./BackToTop";

export default function Footer() {
  const [userEmail, setUserEmail] = useState({
    eventValue: "",
    subscribeMsg: "Subscribe to our newsletter",
  });

  const handleSubscribe = (event) => {
    setUserEmail((prevState) => ({
      ...prevState,
      eventValue: event.target.value,
    }));
  };

  const handleSubscribeText = () => {
    if (userEmail.subscribeMsg === "Subscribed!") {
      return;
    } else if (userEmail.eventValue.length < 10) {
      setUserEmail((prevState) => ({
        ...prevState,
        subscribeMsg: "Enter a valid email",
      }));
    } else {
      setUserEmail((prevState) => ({
        ...prevState,
        subscribeMsg: "Subscribed!",
      }));
    }
    setUserEmail((prevState) => ({
      ...prevState,
      eventValue: "",
    }));
  };

  return (
    <footer className="Homefooter">
      <BackToTop />
      <div className="f-title">
        <h2>INFORMATION</h2>
      </div>
      <div className="footer-container">
        <div className="footer-col">
          <div>
            <p>ROOMS & SUITES. RESTURANT & BAR</p>
          </div>
          <ul className="aligned-paragraphs footer-ap">
            <li className="small-text">Bussiness</li>
            <li className="small-text">Location</li>
            <li className="small-text">History</li>
          </ul>
        </div>
        <div className="footer-col">
          <p>CONTACT</p>

          <ul className="aligned-paragraphs footer-ap">
            <li className="small-text">0031 0 434 50 12 08</li>
            <li className="small-text">Wittemer Allee 3, 6286 AA Wittem</li>
            <li className="small-text">welcome@chateauwittem.com</li>
          </ul>
        </div>
        <div className="footer--text footer-col">
          <div>
            <h2 className="headtext-small fhs">
              Subscribe and Receive News And Offers!
            </h2>
          </div>
          <div className="newsletter-div">
            <p className="small-text"
              style={{
                color:
                  userEmail.subscribeMsg === "Enter a valid email"
                    ? "red"
                    : "#f1f1f1",
              }}
            >
              {userEmail.subscribeMsg}
            </p>
            <input
              placeholder="Enter Your Email Address"
              type="email"
              required
              onChange={handleSubscribe}
              value={userEmail.eventValue}
            />
            <div className="sub-btn" onClick={handleSubscribeText}><p className="boldp">Subscribe</p></div>
          </div>
        </div>
      </div>
      <ul className="footer-strip">
        <li>© copyright' 2024</li>
        <li>developer-social/x/instagram</li>
        <li>codebykennycod3r</li>
        <li>Privacy Policy</li>
        <li>Terms and Condition</li>
      </ul>
    </footer>
  );
}
