import React from "react";
import View from "../components/onview/View";
import { useParams } from "react-router-dom";
import Hero from "../components/hero/Hero";
import Plant from "../assets/plant.svg";
import Reservation from "../components/reservation/Reservation";
const getImageUrls = () => {
  return [
    "https://studioiro.co/panel/storage/uploads/2024/04/13/07---Eagle-Wharf---Main-Image_uid_661a7d7377a3d.jpg",
    "https://studioiro.co/panel/storage/uploads/2024/04/13/08---Greenwich-Village---Main-Image_uid_661a7e0d9fdc5.jpg",
    "https://studioiro.co/panel/storage/uploads/2024/04/13/01---Albion-Drive---Main-Image_uid_661a7fbc095ae.jpg",
    "https://studioiro.co/panel/storage/uploads/2024/04/13/02---The-Greyhound---Main-Image-Duzy_uid_661a7f1eb0b89.jpeg",
    "https://studioiro.co/panel/storage/uploads/2024/04/13/03---Camden-Workshop---Main-Image-Duzy_uid_661a8005e3f5f.jpeg",
    "https://studioiro.co/panel/storage/uploads/2024/04/13/04---Blacksmith-Cottage---Main-Image-Duzy_uid_661a7f5f95fc0.jpeg",
    "https://studioiro.co/panel/storage/uploads/2024/04/13/05---Effingham---Main-Image-Duzy_uid_661a7e8520d22.jpeg",
    "https://studioiro.co/panel/storage/uploads/2024/04/13/06---Burberry-Factory---Main-Image_uid_661a7ee0b829d.jpg",
    "https://studioiro.co/panel/storage/uploads/2024/04/13/09---Providence---Main-Image_uid_661a7dc9db39a.jpg",
  ];
};
/* <div style={{ position: "sticky", top: "0", left: "0" }}>
        {/* <Hero
          imageUrl={
            "https://images.unsplash.com/photo-1556784344-ad913c73cfc4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VpdGVzfGVufDB8fDB8fHww"
          }
        /> }
      </div> */

const BookingsTwo = () => {
  const { id } = useParams();
  const imageUrls = getImageUrls();
  const imageUrl = imageUrls[parseInt(id, 10)];

  if (!imageUrl) {
    return (
      <section>
        <View />
        <div>Product not found</div>
      </section>
    );
  }

  return (
    <div className="booking-section">
      <div className="rooms-content">
        <section className="product-detail">
          <div>
            <div className="p-d-img-div">
              <div className="p-d-img-div-inner">
                <img
                  src="https://www.chateauwittem.com/wp-content/uploads/2022/10/Chateau-Wittem-Superior-Room.webp"
                  alt={`Product ${id}`}
                />
              </div>
              <div className="p-d-img-div-inner">
                <img src={imageUrl} alt={`Product ${id}`} />
              </div>
            </div>
            <div>
          <Reservation />
        </div>
          </div>
          <div>
            <div className="product-header">
              <h2>Product Detail</h2>
            </div>
            <div className="product-detail-list">
              <div className="flexsvg-header">
                <div>
                  <img className="plantsvg" src={Plant} alt="icon" />
                </div>{" "}
                <p className="boldp">BEDS</p>
              </div>
              <p className="small-text">
                One king or two double beds, One rollaway or one crib
              </p>
            </div>
            <div className="product-detail-list">
              <div>
                <img className="plantsvg" src={Plant} alt="icon" />
              </div>
              <p className="boldp">OCCUPANCY</p>
              <p className="small-text">
                King bed: 3 adults, or 2 adults and 1 child
              </p>
              <p className="small-text">
                Double beds: 3 adults, or 2 adults and 2 children
              </p>
            </div>
            <div className="product-detail-list">
              <div>
                <img className="plantsvg" src={Plant} alt="icon" />
              </div>
              <p className="boldp">SIZE</p>
              <p className="small-text">450 sq. ft. 42 m2</p>
              <p className="small-text">5th floor</p>
            </div>
            <div className="product-detail-list">
              <div>
                <img className="plantsvg" src={Plant} alt="icon" />
              </div>
              <p className="boldp">BATHROOM</p>
              <p className="small-text">One full marble bathroom</p>
            </div>

            <div className="product-detail-list">
              <div>
                <img className="plantsvg" src={Plant} alt="icon" />
              </div>
              <p className="boldp">UNIQUE FEATURES</p>
              <p className="small-text">
                Outdoor living space with intimate seating + pool
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookingsTwo;
