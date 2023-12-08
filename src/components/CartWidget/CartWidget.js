import { useContext } from 'react'
import '../CartWidget/CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';
// import CartDetail from '../CartDetail/CartDetail';
import { useState } from 'react';

function CartWidget({products}) {
    const { productQuantity } = useContext(CartContext)
    const [visible, setVisible] = useState(false)


    return (
        <div className='cart'>

            <button className='butonCart' onClick={() => setVisible(!visible)}>
                <FaShoppingCart className='iconCart'/>
            </button>
            {productQuantity > 0 && (
                <span className='quantityCart' >{productQuantity}</span>
            )}


            {/* {visible && products.length > 0 && <CartDetail/>} */}
        </div>
    );
}

export default CartWidget