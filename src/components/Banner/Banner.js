import React from "react";
import "./Banner.css";

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img className="bannerImage" src={image} alt="Montagnes et paysages" />
      <div className="bannerDarken"></div>
      <div className="bannerContent">{title}</div>
    </div>
  );
}

export default Banner;
