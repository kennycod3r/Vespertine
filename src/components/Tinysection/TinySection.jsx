import React from "react";
import "../Tinysection/Tinysection.css";
import WhiteSection from "../WhiteSection";

const TinySection = ({ currentData }) => {
  return (
    <>
      <div className="tinysection">
        <p className="small-text">.</p>
        <p className="small-text">
          <i className="boldp num">“ </i>
          As one of New York's culinary gems, this restaurant dazzles with its
          innovative dishes and impeccable service. A must-visit for discerning
          food enthusiasts. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ratione.
          <i className="boldp num"> ”</i>
          <span className="boldp num">- THE NEW YORK TIMES</span>
        </p>
        <p className="small-text">
          <i className="boldp num">“ </i>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum porro,
          ipsum molestiae nostrum nam eius molestias asperiores sint sapiente.
          Ea porro explicabo possimus asperiores cumque iure eligendi soluta,
          necessitatibus unde.
          <i className="boldp num"> ”</i>
          <span className="boldp">- THE NEW YORK TIMES</span>
        </p>
        <WhiteSection
          text={currentData.curTitle}
          className={"ss-white-cut"}
          imageUrl={currentData.curImg}
        />
      </div>
    </>
  );
};

export default TinySection;

