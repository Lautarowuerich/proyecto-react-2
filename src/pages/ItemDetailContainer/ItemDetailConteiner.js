import { useEffect, useState} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () => {

  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();

  const fetchProductId = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProductSelected(data))
        .catch((error) => console.log(error))
    };

    useEffect(() =>{
        fetchProductId();
    }, [])

  return (
    <ItemDetail itemSelected={productSelected}/>
  )
}

export default ItemDetailConteiner