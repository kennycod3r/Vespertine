import React from "react";
import "./Smallsection.css";

const SmallSection = () => {
  return (
    <div className="small-section">
      <div className="ss-grid">
        <div>
          <h1>VESPERTINE</h1>
          <p>
            {" "}
            <i>/ ves·​per·​tine /</i>
          </p>
          <p className="sub-text p2">
            : of, relating to, or occurring in the <i>evening.</i>
          </p>
        </div>
        <div>
          <ul>
            <li>
              <div>
              <p>RATINGS/REVIEWS</p>
              <div>Google ★★★★★</div>
              <p className="small-text">5.0/ 1232</p>

              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates ex eos facere molestiae molestias alias at ut amet
                quibusdam ipsam illum, est, eum esse corporis dignissimos, aut
                aliquam. Magni, maiores.
              </p>
            </li>
            <li>
             <div>
             <p>MICHELLIN STARS</p>
              <div>★★★</div>
             </div>
              <p>
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
