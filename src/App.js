import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContent from "./pages/ItemDetailContainer/ItemDetailConteiner"
import Cart from "./pages/Cart/Cart"
import CartProvider from "./context/CartProvider";

function App() {

  return (
    <>
      <BrowserRouter>
          <CartProvider>
            <Navbar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContent/>}/>
                <Route path="/cart" element={<Cart/>} />
              </Routes>
            </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
