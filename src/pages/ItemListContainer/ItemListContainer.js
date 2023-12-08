import { useState, useEffect } from 'react';
import { getDocs, collection, query, where} from "firebase/firestore";
import { db } from "../../index"
import '../ItemListContainer/itemListContainer.css'
import ItemList from "../../components/ItemList/ItemList";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    const fetchProducts = () => {
        const productsQuery = collection(db, "products");
        const querySnapshot = !id ? productsQuery : query(productsQuery, where('categoria', '==', id));

        getDocs(querySnapshot)
            .then((snapshot) => {
                const dbProducts = snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setProductList(dbProducts);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchProducts();
    },[id]);

    return (
        <>
            <div className='contenedorCards'>
                {loading ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '400px' }}>
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