import React from "react";
import "./Smallsection.css";

const SmallSection = () => {
  return (
    <div className="small-section">
      <div className="ss-grid">
        <div>
          <h2>VESPERTINE</h2>
          <p>
            {" "}
            <i className="num">/ ves·​per·​tine /</i>
          </p>
          <p className="small-text">
            : of, relating to, or occurring in the <i>evening.</i>
          </p>
        </div>
        <div>
          <ul>
            <li>
              <div>
              <p className="boldp ">RATINGS/REVIEWS</p>
              <div className="boldp">Google ★★★★★</div>
              <p className="small-text">5.0/ 1232</p>

              </div>
              <p  className="small-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates ex eos facere molestiae molestias alias at ut amet
                quibusdam ipsam illum, est, eum esse corporis dignissimos, aut
                aliquam. Magni, maiores.
              </p>
            </li>
            <li>
             <div>
             <p className="boldp">MICHELLIN STARS</p>
              <div className="boldp ">★★★</div>
             </div>
              <p  className="small-text">
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
  );
};

export default SmallSection;
