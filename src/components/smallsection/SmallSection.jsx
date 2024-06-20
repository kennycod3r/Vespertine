import React from "react";
import "./Smallsection.css";
import View from "../onview/View";
import michelin from "../../assets/michelin.svg";

const SmallSection = () => {
  return (
    <>
      <div className="small-section">
        <div className="ss-grid">
          <div>
            <h2>VESPERTINE</h2>
            <p>
              {" "}
              <i className="num">/ ves·​per·​tine /</i>
            </p>
            <p className="small-text ratingsp">
              : of, relating to, or occurring in the{" "}
              <i className="num">evening.</i>
            </p>
          </div>
          <div>
            <ul>
              <li>
                <div>
                  <p className="boldp ratingsp">RATINGS/REVIEWS</p>
                  <div className="boldp ratingsp">Google ★★★★★</div>
                  <p className="small-text ratingsp">5.0/ 1232</p>
                </div>
                <p className="small-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptates ex eos facere molestiae molestias alias at ut amet
                  quibusdam ipsam illum, est, eum esse corporis dignissimos, aut
                  aliquam. Magni, maiores.
                </p>
              </li>
              <li className="li-2">
                <div>
                  <p className="boldp ratingsp">MICHELLIN STARS</p>
                  <div className="michelin-stars">
                    <img src={michelin} alt="michelin" />
                    <img src={michelin} alt="michelin" />
                  </div>
                </div>
                <p className="small-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptates ex eos facere molestiae molestias alias at ut amet
                  quibusdam ipsam illum, est, eum esse corporis dignissimos, aut
                  aliquam. Magni, maiores.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <View />
    </>
  );
};

export default SmallSection;
