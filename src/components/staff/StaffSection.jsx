import React from "react";
import "./Staffsection.css";
import chef from "../../img/chef.webp";

const StaffSection = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className="main">
      <h1>Our Major Chefs</h1>
      <p className="sub-text">
        Our cuisine has won international awards and has been featured in two
        cookbooks.
      </p>
      <div className="flex-con">
        <div className="inner-flex-con">
          {arr.map((item, index) => {
            return (
              <div key={index} className="small-card">
                <img
                  src={chef}
                  loading="lazy"
                  draggable="false"
                  alt="Chef"
                  className="cover-img u--rel"
                />
                <div className="chef-name"><p>chef name 1</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
