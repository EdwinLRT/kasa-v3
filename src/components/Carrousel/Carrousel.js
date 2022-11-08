import React, { useState } from "react";
import "./Carrousel.css";
import arrow from "../../assets/img/Components/Carrousel/arrow.png";

function Carrousel({ images }) {
  /* Create a Status Hook */
  let [imageToShow, changeImage] = useState(0);
  let imageIndex = images.length;

  /* To return to the previous image */
  const imagePrevious = () => {
    if (imageToShow === 0) {
      changeImage(imageIndex - 1);
    } else {
      changeImage(imageToShow - 1);
    }
    return changeImage;
  };
  /* To go to the next image */
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
      {/* If the number of images is greater than 1 then display the left arrow */}
      {imageIndex > 1 && (
        <img
          className="arrow leftArrow"
          src={arrow}
          alt="Photographie précédente"
          onClick={imagePrevious}
        />
      )}
      {/* mapping on the number of images */}
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
      {/* If the number of images is greater than 1 then display the right arrow */}
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
