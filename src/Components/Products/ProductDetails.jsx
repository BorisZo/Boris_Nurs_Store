import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContext";
import "./ProductDetail.css";
import "swiper/css";
import "./swiper.css";
import SwiperCore, { Thumbs } from "swiper";

SwiperCore.use([Thumbs]);

const ProductsDetails = () => {
  const { productDetails, getProductsDetails, deleteProduct } =
    useContext(productContext);
  let { id } = useParams();
  useEffect(() => {
    getProductsDetails(id);
  }, []);
  return (
    <>
      {productDetails ? (
        <div className="global">
          <div className="container">
            <div className="contImgDetails">
              <img className="imageDetails" src={productDetails.img1} />
              <NavLink to="/list">
                <button className="btnED" onClick={() => deleteProduct(id)}>
                  delete
                </button>
              </NavLink>
              <NavLink to={`/edit/${id}`}>
                <button className="btnED">edit</button>
              </NavLink>
            </div>
            <div className="innerText">
              <h2 className="titleText">Модель: {productDetails.title}</h2>
              <h2 className="titleText">
                Производитель: {productDetails.type}
              </h2>
              <h2 className="titleText">
                Описание: {productDetails.description}
              </h2>
              <h2 className="titleText">Цена$: {productDetails.price}</h2>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductsDetails;
