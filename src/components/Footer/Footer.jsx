import React, { useState } from "react";
import "./Footer.css";
import ArrowLink from "../ArrowLink";
const BackToTop = React.lazy(() => import("./BackToTop"));

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState(
    "Subscribe to our newsletter"
  );

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
      <div className="f-header">
        <div className="flex-btn-reg animateLink">
          <ArrowLink /> <p>VESPERTINE</p>
        </div>
        <div className="flex-btn-reg animateLink">
          <ArrowLink /> <p>Reservation Guidelines</p>
        </div>
        <div className="flex-btn-reg animateLink">
          <ArrowLink /> <p>© copyright' 2024</p>
        </div>
      </div>
      <div className="f-title">
        <h2>INFORMATION</h2>
      </div>

      <div className="footer-container">
        <div className="footer--text footer-col">
          <div>
            <h1 className="fhs">
              Subscribe and Receive <br />
              News And Offers!
            </h1>
            <div className="newsletter-div">
              <p
                className="small-text"
                style={{
                  color:
                    subscribeMessage === "Enter a valid email"
                      ? "red"
                      : "#f1f1f1",
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
        <div className="footer-col">
          <div className="flex-btn-reg-footer animateLink">
            <p>ROOMS & SUITES. RESTURANT & BAR</p>
            <ArrowLink />
          </div>

          <ul className="aligned-paragraphs footer-ap">
            <li className="small-text">
              Business
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur voluptates quo fuga dolorum repellendus dignissimos
              nesciunt consequuntur earum. Accusantium, officiis.
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <p>CONTACT</p>
          <ul className="aligned-paragraphs footer-ap">
            <li className="small-text">0031 0 434 50 12 08</li>
            <li className="small-text">
              Location <br />
              Wittemer Allee 3, 6286 AA Wittem
            </li>
            <li className="small-text">
              History
              <br />
              welcome@chateauwittem.com
            </li>
          </ul>
        </div>
      </div>
      <ul className="footer-strip">
        <li className="flex-btn-reg-f">
          <ArrowLink /> <span>© copyright' 2024</span>
        </li>
        <li className="flex-btn-reg-f">
          <ArrowLink /> <span>DEVELOPER.SOCIAL.INSTAGRAM/KENNY.LJ 2024</span>
        </li>
        <li className="flex-btn-reg-f">
          <ArrowLink /> <span>CODE BY @KENNYCOD3R</span>
        </li>
        <li className="flex-btn-reg-f">
          <ArrowLink /> <span>PRIVACY POLICY</span>
        </li>
        <li className="flex-btn-reg-f">
          <ArrowLink /> <span>TERMS AND CONDITIONS</span>
        </li>
      </ul>
    </footer>
  );
}
