import React from "react";
import "./Banner.css";
//props to allow to put a title or not
function Banner({ image, title }) {
  return (
    <div className="banner">
      <img className="bannerImage" src={image} alt="Montagnes et paysages" />
      {/*Adds a filter to darken */}
      <div className="bannerDarken"></div>
      <div className="bannerContent">{title}</div>
    </div>
  );
}

export default Banner;
