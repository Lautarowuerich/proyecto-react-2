import { useState, useEffect } from 'react';
import '../ItemListContainer/itemListContainer.css'
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ItemListContainer(){

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState (true)


    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => setProductList(data))
        .finally(() =>{
            setLoading(false)
        })
    }, [])

    return (
        <>
            <ItemCount/>

            <div className='contenedorCards'>
                {loading ?
                <Box sx={{ display: 'flex'}}>
                <CircularProgress />
                </Box>
                :
                <ItemList productList={productList} />
            }
            </div>
        </>
    );
}

export default ItemListContainer