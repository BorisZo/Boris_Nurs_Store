import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContext";
import "./ProductDetail.css";
import "swiper/css";
import "./swiper.css";
import SwiperCore, { Thumbs } from "swiper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../../context/CartContext";

SwiperCore.use([Thumbs]);

const ProductsDetails = () => {
  const { addProductToCart } = useContext(cartContext);
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
                  Удал.
                </button>
              </NavLink>
              <NavLink to={`/edit/${id}`}>
                <button className="btnED">Изм.</button>
              </NavLink>
              <button
                className="btnED"
                onClick={() => addProductToCart(productDetails)}
              >
                <AddShoppingCartIcon />
              </button>
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
