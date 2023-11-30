import { useContext } from 'react'
import '../CartWidget/CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { CartContext } from '../../context/CartContext';

function CartWidget(){
    const { productQuantity} = useContext(CartContext)
    return (
        <div className='cart'>
            <ShoppingCartIcon fontSize="large"/>{productQuantity}
        </div>
    );
}

export default CartWidget