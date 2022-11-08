import React, { useState } from "react";
import "./Carrousel.css";
import arrow from "../../assets/img/Components/Carrousel/arrow.png";

function Carrousel({ images }) {
  /* Crée un Hook d'état */
  let [imageToShow, changeImage] = useState(0);
  let imageIndex = images.length;

  const imagePrevious = () => {
    if (imageToShow === 0) {
      changeImage(imageIndex - 1);
    } else {
      changeImage(imageToShow - 1);
    }
    return changeImage;
  };

  const imageNext = () => {
    if (imageToShow === imageIndex - 1) {
      changeImage((imageIndex = 0));
    } else {
      changeImage(imageToShow + 1);
    }
    return changeImage;
  };

  return (
    <div className="carrousel">
      {imageIndex > 1 && (
        <img
          className="arrow leftArrow"
          src={arrow}
          alt="Photographie précédente"
          onClick={imagePrevious}
        />
      )}
      {images.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === imageToShow ? "carrouselImage actif" : "carrouselImage"
            }
            src={image}
            alt="Logement"
          />
        );
      })}
      {imageIndex > 1 && (
        <img
          className="arrow rightArrow"
          src={arrow}
          alt="Photographie suivante"
          onClick={imageNext}
        />
      )}
    </div>
  );
}

export default Carrousel;
