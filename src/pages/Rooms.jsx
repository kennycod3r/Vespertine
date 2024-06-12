import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Rooms = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const urls = getImageUrls();
    setImageUrls(urls);
  }, []);

  const chunks = chunkArray(imageUrls, 3);

  return (
    <section className="rooms-page">
      <div className="fixed-sidebar">
        <div className="room-header">
          <h3>Rooms</h3>
        </div>
      </div>
      <div>
        {chunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="rooms-container">
            {chunk.map((url, index) => (
              <div key={index} className="tal">
                
                <Link to={`/booking/${chunkIndex * 3 + index}`} className="room-card">
                  <div className="hero-overlay r-overlay">
                    <span className="small-text">
                      SLEEPS 2 ADULTS. INCLUDES POOL
                    </span>
                  </div>
                  <img src={url} className="roomcard-img" alt={`Room ${chunkIndex * 3 + index + 1}`} />
                </Link>
                <span className="small-text">
                  IMAGE. ROOM LISTING {chunkIndex * 3 + index + 1}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
