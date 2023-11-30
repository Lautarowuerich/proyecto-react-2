import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/itemDetail.css"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({itemSelected}) => {

  const [ count, setCount] = useState(1);
  const stock = 5
  const navigate = useNavigate();
  const {addItem} = useContext(CartContext)

  const handleNavigation = () => {
    navigate('/cart');
  };

  const addToCart = () => {
    addItem(itemSelected, count)
  }

  return (
    <div className='contenedorProductosDetail'>
        <div className="descripcionCard">
            <img className='imagen_productos' src={itemSelected?.image} alt={itemSelected?.title} width={150} />
            <h6 className="titulo_producto">{itemSelected?.title}</h6>
        </div>
        <h3 className='detalle_producto'>{itemSelected?.description}</h3>
        <div>
          <p className='precio_detalle'>${itemSelected?.price}</p>
          <p className="stock">Stock:{stock}</p>
        </div>
        <div className="button">
          <button onClick={() => handleNavigation()}>Ir al carrito</button>
          <button onClick={addToCart}>Agregar al carrito</button>
        </div>
        <ItemCount count={count} setCount={setCount} stock={stock}/>
    </div>    
  )
}

export default ItemDetail