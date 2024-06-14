import React, { useState } from "react";
import "./Footer.css";
const BackToTop = React.lazy(() => import("./BackToTop"));

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("Subscribe to our newsletter");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscription = () => {
    if (subscribeMessage === "Subscribed!") return;

    if (email.length < 10) {
      setSubscribeMessage("Enter a valid email");
    } else {
      setSubscribeMessage("Subscribed!");
      setEmail("");
    }
  };

  return (
    <footer className="Homefooter">
      <React.Suspense fallback={<div>Loading...</div>}>
        <BackToTop />
      </React.Suspense>
      <div className="f-title">
        <h2>INFORMATION</h2>
      </div>
      <div className="footer-container">
        <div className="footer-col">
          <p>ROOMS & SUITES. RESTURANT & BAR</p>
          <ul className="aligned-paragraphs footer-ap">
            <li className="small-text">Business</li>
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
          <h2 className="headtext-small fhs">
            Subscribe and Receive News And Offers!
          </h2>
          <div className="newsletter-div">
            <p
              className="small-text"
              style={{
                color: subscribeMessage === "Enter a valid email" ? "red" : "#f1f1f1",
              }}
            >
              {subscribeMessage}
            </p>
            <input
              placeholder="Enter Your Email Address"
              type="email"
              required
              onChange={handleEmailChange}
              value={email}
            />
            <div className="sub-btn" onClick={handleSubscription}>
              <p className="boldp">Subscribe</p>
            </div>
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
