import React from "react";
import "./ProductPage.css";
import { useParams, Navigate } from "react-router-dom";
import productsDatas from "../../assets/datas/productsDatas.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import colorStar from "../../assets/img/Pages/ProductPage/colorStar.png";
import grayStar from "../../assets/img/Pages/ProductPage/grayStar.png";
import Collapse from "../../components/Collapse/Collapse";

function ProductPage() {
  // retrieves the data using the housing id
  const id = useParams();
  const productData = productsDatas.find((housing) => housing.id === id.id);

  // Tags
  const tagsHousing = productData.tags.map((tags, index) => {
    return <Tag key={index} nom={tags} />;
  });

  //  Notes
  // Use of an array to display the notes.
  // we use a loop to make an iteration on each point from 1 to 5
  // if the variable is true, we push a colored star if it is false we push a gray star.
  let productRating = [];
  let isStar = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(productData.rating)) {
      isStar = false;
    }
    if (isStar === true) {
      productRating.push(
        <img
          key={index}
          className="star"
          src={colorStar}
          alt={`${productData.rating}/5`}
        />
      );
    } else {
      productRating.push(
        <img
          key={index}
          className="star"
          src={grayStar}
          alt={`${productData.rating}/5`}
        />
      );
    }
  }

  // Equipements
  // we use the map function to present all the elements of the equipment list
  const productEquipment = productData.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <>
      {/* use of '?' to return a 404 error if productData is not defined */}
      {productData ? (
        <div className="container">
          <Carrousel images={productData.pictures} />
          <div className="productAndOwner">
            <div className="productInformations">
              <span className="productTitle">{productData.title}</span>
              <span className="productLocation">{productData.location}</span>
              <div className="tags">{tagsHousing}</div>
            </div>
            <div className="ownerAndRating">
              <div className="ownerInformations">
                <span className="ownerName">{productData.host.name}</span>
                <img
                  className="ownerPicture"
                  src={productData.host.picture}
                  alt="Propriétaire"
                />
              </div>
              <div className="rating">{productRating}</div>
            </div>
          </div>
          <div className="equipmentDescription">
            <Collapse
              titre="Description"
              description={productData.description}
            />
            <Collapse titre="Équipements" description={productEquipment} />
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
}

export default ProductPage;
