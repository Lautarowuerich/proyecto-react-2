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
            <div className='quantityCart'>
                {productQuantity > 0 && (
                    <span>{productQuantity}</span>
                )}
            </div>
        </div>
    );
}

export default CartWidget