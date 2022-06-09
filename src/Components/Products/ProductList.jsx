import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter";
import { cartContext } from "../../context/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { productContext } from "../../context/ProductContext";
import "./ProductList.css";

const ProductsList = () => {
  const { getProducts, products } = useContext(productContext);

  const { addProductToCart } = useContext(cartContext);

  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(...searchParams);

  const [type, setType] = useState(searchParams.get("type") || "all");

  const paramsWithType = () => {
    // console.log("params With Type");
    return {
      type: type,
      q: searchParams.get("q"),
    };
  };

  const paramsNoType = () => {
    // console.log("params No Type");
    return {
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);

  return (
    <div className="contFull">
      <div className="filter">
        <Filter type={type} setType={setType} />
      </div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          mt: 5,
        }}
      >
        {products
          ? products.map((item) => (
              <Grid xs={3.5} mb={7} key={item.id}>
                <Card sx={{ maxWidth: 350 }}>
                  <CardActionArea className="cardMedia">
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.img1}
                      alt="product_img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <NavLink to={`/details/${item.id}`}>
                      <Button size="small" color="primary">
                        Просмотр
                      </Button>
                    </NavLink>
                    <Button onClick={() => addProductToCart(item)}>
                      <AddShoppingCartIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          : null}
      </Box>
    </div>
  );
};

export default ProductsList;
