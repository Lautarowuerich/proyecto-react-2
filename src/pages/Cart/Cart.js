import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Item from "../../components/Item/Item"

const Cart = () => {

  const { products, clearCart, deleteItem } = useContext(CartContext)

  return (
    <div>
      <h1>Tu carrito de compras</h1>
      <button onClick={clearCart}>Vaciar carrito</button>

      {products.length > 0 ?
        <div className="item-list-container">
          {products.map((product) => (
            <div key={product.id}>
              <Item
                tittle={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
              />
              <button onClick={() => deleteItem(product.id)}>Eliminar</button>
            </div>
          ))}
        </div> : <h2>No hay productos en el carrito</h2>
      }
    </div>

  );
};

export default Cart