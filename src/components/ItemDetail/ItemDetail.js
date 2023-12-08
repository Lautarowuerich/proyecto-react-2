import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/itemDetail.css"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({itemSelected}) => {

  const [ count, setCount] = useState(1);
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
            <img className='imagen_productos' src={itemSelected?.imagen} alt={itemSelected?.nombre} width={150} />
            <h6 className="titulo_producto">{itemSelected?.nombre}</h6>
        </div>
        <h3 className='detalle_producto'>{itemSelected?.descripcion}</h3>
        <div>
          <p className='precio_detalle'>${itemSelected?.precio}</p>
          {itemSelected?.stock === 0 && (
            <p>Sin stock</p>
          )}
          {itemSelected?.stock > 0 && (
            <h5 className="stock">Stock:{itemSelected?.stock}</h5>
          )}
        </div>
        <div className="button">
          <button onClick={() => handleNavigation()}>Ir al carrito</button>
          <button onClick={addToCart}>Agregar al carrito</button>
        </div>
        <ItemCount stock={itemSelected?.stock} count={count} setCount={setCount}/>
    </div>    
  )
}

export default ItemDetail