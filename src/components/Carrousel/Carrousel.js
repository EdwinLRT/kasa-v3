import React, { useState } from "react";
import "./Carrousel.css";
import fleche from "../../assets/img/Components/Carrousel/arrow.png";

function Carrousel({ images }) {
  /* Crée un Hook d'état */
  let [imgAfficher, changerImg] = useState(0);
  let nombreImg = images.length;

  const imgPrecedente = () => {
    if (imgAfficher === 0) {
      changerImg(nombreImg - 1);
    } else {
      changerImg(imgAfficher - 1);
    }
    return changerImg;
  };

  const imgSuivante = () => {
    if (imgAfficher === nombreImg - 1) {
      changerImg((nombreImg = 0));
    } else {
      changerImg(imgAfficher + 1);
    }
    return changerImg;
  };

  return (
    <div className="carrousel">
      {nombreImg > 1 && (
        <img
          className="arrow leftArrow"
          src={fleche}
          alt="Photographie précédente"
          onClick={imgPrecedente}
        />
      )}
      {images.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === imgAfficher ? "carrouselImage actif" : "carrouselImage"
            }
            src={image}
            alt="Logement"
          />
        );
      })}
      {nombreImg > 1 && (
        <img
          className="arrow rightArrow"
          src={fleche}
          alt="Photographie suivante"
          onClick={imgSuivante}
        />
      )}
    </div>
  );
}

export default Carrousel;
