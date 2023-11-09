import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContent from "./pages/ItemDetailContainer/ItemDetailConteiner"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
