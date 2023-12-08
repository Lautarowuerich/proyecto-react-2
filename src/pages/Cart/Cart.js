import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom";
import Item from "../../components/Item/Item"
import Form from 'react-bootstrap/Form';
import { collection, getFirestore, addDoc, updateDoc, doc } from "firebase/firestore";
import '../Cart/Cart.css'

const Cart = () => {

  const db = getFirestore();
  const navigate = useNavigate()

  const { products, clearCart, deleteItem } = useContext(CartContext)
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInput = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value })
  };

  const createOrder = (event) => {
    event.preventDefault()
    const querySnapshot = collection(db, 'orders')
    const newOrder = {
      buyer: formValue,
      items: products.map((product) => {
        return {
          nombre: product.nombre,
          precio: product.precio,
          id: product.id,
          quantity: product.quantity
        }
      }),
      date: new Date(),
      total: products.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0)
    }

    addDoc(querySnapshot, newOrder)
      .then((res) => {
        newOrder.id = res.id
        updateStock();
        alert('Orden creada con exito');
        clearCart();
        createOrder();
        navigate('/checkout');
      })
      .catch((err) => alert('Error al crear la orden'));
  };

  const updateStock = () => {
    products.forEach((product) => {
      const querySnapshot = doc(db, 'products', product.id)
      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      });
    });

  }

  const validateForm = formValue.name === '' || formValue.phone === '' || formValue.email === '';

  return (
    <div>
      <h1>Tu carrito de compras</h1>
      <button onClick={clearCart}>Vaciar carrito</button>
      {products.length > 0 ?
        <div className="item-list-container">
          {products.map((product) => (
            <div key={product.id}>
              <Item
                nombre={product.nombre}
                descripcion={product.descripcion}
                precio={product.precio}
                imagen={product.imagen}
                quantity={product.quantity}
                action={() => deleteItem(product.id)}
                textButton="Eliminar"
              />
            </div>
          ))}
        </div> : <h2>No hay productos en el carrito</h2>
      }

<Form className="form-container">
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Ingresa tu nombre"
            value={formValue.name}
            onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Ingresa tu numero de telefono"
            value={formValue.phone}
            onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            value={formValue.email}
            onChange={handleInput} />
        </Form.Group>
        <button disabled={validateForm} onClick={createOrder}>Confirmar Compra</button>
      </Form>
    </div>

  );
};

export default Cart