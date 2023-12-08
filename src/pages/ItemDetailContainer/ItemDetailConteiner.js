import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../index"


const ItemDetailConteiner = () => {

  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams("id");


  useEffect(() => {
    const querySelected = doc (db, "products", id)
    
    getDoc(querySelected)
    .then ((res) => {
      setProductSelected({id: res.id, ...res.data()})
    })
    .catch((err) => console.log(err))
  }, [id])

  return (
    <ItemDetail itemSelected={productSelected} />
  )
}

export default ItemDetailConteiner