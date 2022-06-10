import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import ProductContextProvider from "./context/ProductContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <PrimarySearchAppBar />

            <MainRoutes />
            <Footer />
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
