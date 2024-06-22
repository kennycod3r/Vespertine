import React, { Suspense } from "react";
import ErrorBoundary from "../Errorboundary/ErrorBoundary"; // Correct import path
import "./Blacksection.css";
import ArrowLink from "../ArrowLink";
import blackWhite from "../../img/blackWhite.webp";
import dinnerF from "../../img/dinnerF.webp";

const BlackSection = ({ dinner }) => {
  return (
    <ErrorBoundary>
      <section className="main blacksection">
        <div className="header-text footer-header">
          <h2>Extraordinary</h2>
          <h2>Experiences</h2>
        </div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <img
              src={dinner ? dinnerF : blackWhite}
              alt="black and white"
              loading="lazy"
              className="hidemobile"
            />
          </Suspense>
        </div>
        <div className="white-cutaway bs-cut">
          <p className="boldp">{dinner ? "viewsocials" : "vespertine"}</p>
          <div
            className="white-cutaway-inner"
            style={{ backgroundImage: `url(${dinner ? dinnerF : blackWhite})` }}
          >
            <div className="hero-overlay wc-overlay">
              <div className="small-text flexCenter animateLink">
                <ArrowLink />
                {dinner ? "EXPLORE OUR ROOMS" : "EXPLORE OUR hISTORY"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default BlackSection;
