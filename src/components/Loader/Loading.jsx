// src/components/Loading.jsx

import React from "react";
import "./Loading.css";
import { MutatingDots } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-screen">
        <div>
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#232e22"
            secondaryColor="#232e22"
            radius="10.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <div className="spinner"></div>
          <p>Vespertine...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
