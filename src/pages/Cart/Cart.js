import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { OrderContext } from "../../context/OrderProvider"
import { Link, useNavigate } from "react-router-dom";
import { collection, getFirestore, addDoc, updateDoc, doc } from "firebase/firestore";
import { FaTrashCan } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
// import Item from "../../components/Item/Item"
import Form from 'react-bootstrap/Form';
import '../Cart/Cart.css'

const Cart = () => {

  const db = getFirestore();

  const { products, clearCart, deleteItem } = useContext(CartContext);

  const { setOrder } = useContext(OrderContext);

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInput = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value })
  };

  const createOrder = () => {
    const querySnapshot = collection(db, 'orders')
    const newOrder = {
      buyer: formValue,
      items: products.map((product) => {
        return {
          img:product.imagen,
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
        console.log('Orden creada con exito');
        clearCart();
        setOrder(newOrder);
        navigate('/checkout')
      })
      .catch((err) => console.log(err));
  };

  const updateStock = () => {
    products.forEach((product) => {
      const querySnapshot = doc(db, 'products', product.id)
      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      });
    });
  };

  const validateForm = formValue.name === '' || formValue.phone === '' || formValue.email === '';

  return (
    <div className="cartContainer">
      <h1 className="text-center text-3xl my-10">Resumen de compra</h1>
 
      {products.length > 0 ?
        <div className="item-list-container">
          <Table className="divide-y divide-gray-200">
            <tbody className="tbody">
              {products.map((product) => (
                <tr className="tabla" key={product.id}>
                  <td><img src={product.imagen} alt={product.nombre} style={{ height:'6rem'}}/></td>
                  <td className="cartName text-center">{product.nombre}</td>
                  <td className="cartPrecio text-center">${product.precio}</td>
                  <td className="cartQuantity text-center">Cantidad: {product.quantity}</td>
                  <td className="cartDelete text-center">
                    <button className="borrarItem ms-2" onClick={() => deleteItem(product.id)}><FaTrashCan /></button>
                  </td>
                  <td className="cartDetalle text-center">
                    <Link to={`/item/${product.id}`}><Button className="verDetalle ms-2" variant="dark">Ver detalle</Button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h2 className=" precioFinal text-2xl  mt-10 text-left">
            Precio Final:
            <strong className="precioTotal">
              ${(products.reduce((acc, p) => acc + p.precio * p.quantity, 0))}
            </strong>
          </h2>
        </div> : <h2 className="sinProductos">No hay productos en el carrito</h2>
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
        <Button className="finalizarCompra" disabled={validateForm} onClick={createOrder} variant="dark">Finalizar compra</Button>

      </Form>
    </div>

  );
};

export default Cart