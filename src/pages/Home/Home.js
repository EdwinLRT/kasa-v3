import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/img/Pages/Home/banner.png";
import { Link } from "react-router-dom";
import Tile from "../../components/Tile/Tile";
import productsDatas from "../../assets/datas/productsDatas.json";

function Home() {
  return (
    <div className="home">
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
      <div className="productsList">
        {/* use of the mapping to display all the objects present in the datas file */}
        {productsDatas.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Tile
              key={product.id}
              id={product.id}
              image={product.cover}
              titre={product.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
