import React from "react";
import "./Tile.css";

function Tile({ id, image, titre }) {
  return (
    <div className="tile" id={id}>
      <img className="tileImage" src={image} alt="Tile" />
      <div className="tileDarken"></div>
      <span className="tileTitle">{titre}</span>
    </div>
  );
}

export default Tile;
