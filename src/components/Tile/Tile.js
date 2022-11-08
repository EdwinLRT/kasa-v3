import React from "react";
import "./Tile.css";

function Tile({ id, image, titre }) {
  return (
    <div className="tile" id={id}>
      <img className="tileImage" src={image} alt="Tile" />
      {/* to allow the addition of a colored filter on the tiles */}
      <div className="tileDarken"></div>
      <span className="tileTitle">{titre}</span>
    </div>
  );
}

export default Tile;
