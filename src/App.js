import React from "react";
import Navbar from "../src/components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  const mensaje = "Estamos en mantenimiento, por favor vuelva pronto"


  return (
    <>
      <Navbar/>
      <ItemListContainer 
      greeting ={mensaje}/>
    </>
  );
};

export default App;
