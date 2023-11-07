import { useState, useEffect } from 'react';
import './itemListContainer.css'
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";

function ItemListContainer(){

    const [productList, setProductList] = useState([]);

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json)
            .then((data) => setProductList(data))
            .catch((error) => console.log(error))
    };

    useEffect (() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <ItemCount />
            <ItemList productList={productList}/>
        </div>
    );
}

export default ItemListContainer