import React from "react";
import "./Staffsection.css";
import Pretty from "../../img/pretty.jpg";
import ArrowLink from "../ArrowLink";

const StaffSection = ({cheffText }) => {
  const arr = [
    {
      img: "https://media.istockphoto.com/id/1095091374/photo/served-dinner-table-restaurant-interior.jpg?s=612x612&w=0&k=20&c=O9DxefboLugEDvjKCtrSnwwHcT-Rib6HYnonr_eoowE=",
    },
    {
      img: "https://www.fourseasons.com/alt/img-opt/~70.961.1,3333-0,0000-2997,3333-1686,0000/publish/content/dam/fourseasons/images/web/APL/APL_1016_original.jpg",
    },
    {
      img: Pretty,
    },
    {
      img: "https://images.unsplash.com/photo-1611765083444-a3ce30f1c885?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbGlhbiUyMHdpbmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      img: "https://media.istockphoto.com/id/173814765/photo/pouring-wine.jpg?s=612x612&w=0&k=20&c=DgiHVEADXeXSltrgOpY7AMcUL-Ain1_a7I2z3RWTLMY=",
    },
  ];

  return (
    <section className="staff-section">
      {!cheffText ? (
        <h1>
          Explore <i>“our”</i> Restaurant
        </h1>
      ) : (
        <>{cheffText}</>
      )}
      <p className="sub-text">
        Our cuisine has won international awards and has featured in Major
        cookbooks.
      </p>
      <div className="flex-con">
        <div className="inner-flex-con">
          {arr.map((item, index) => {
            return (
              <div key={index} className="small-card">
                <img
                  src={item.img}
                  loading="lazy"
                  draggable="false"
                  alt="Chef"
                  className="cover-img u--rel"
                />
                <div className="chef-name">
                  <p>chef name 1</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="staff-span animateLink">
        <ArrowLink /> <span>MAKE A RESERVATION</span>
      </div>
    </section>
  );
};

export default StaffSection;
