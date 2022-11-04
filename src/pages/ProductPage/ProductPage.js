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
  const id = useParams();
  const productData = productsDatas.find((logement) => logement.id === id.id);

  /* Tags */
  const tagsLogement = productData?.tags.map((tags, index) => {
    return <Tag key={index} nom={tags} />;
  });

  /* Notes */
  let productRating = [];
  let isStar = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(productData?.rating)) {
      isStar = false;
    }
    if (isStar === true) {
      productRating.push(
        <img
          key={index}
          className="star"
          src={colorStar}
          alt={`${productData?.rating}/5`}
        />
      );
    } else {
      productRating.push(
        <img
          key={index}
          className="star"
          src={grayStar}
          alt={`${productData?.rating}/5`}
        />
      );
    }
  }

  /* Équipements */
  const productEquipment = productData?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <>
      {productData ? (
        <div className="container">
          <Carrousel images={productData?.pictures} />
          <div className="productAndOwner">
            <div className="productInformations">
              <span className="productTitle">{productData?.title}</span>
              <span className="productLocation">{productData?.location}</span>
              <div className="tags">{tagsLogement}</div>
            </div>
            <div className="ownerAndRating">
              <div className="ownerInformations">
                <span className="ownerName">{productData?.host.name}</span>
                <img
                  className="ownerPicture"
                  src={productData?.host.picture}
                  alt="Propriétaire"
                />
              </div>
              <div className="rating">{productRating}</div>
            </div>
          </div>
          <div className="equipmentDescription">
            <Collapse
              titre="Description"
              description={productData?.description}
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
