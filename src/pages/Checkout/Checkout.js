import React, { useContext } from 'react'
import { OrderContext } from '../../context/OrderProvider'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../Checkout/Checkout.css'

const Checkout = () => {

    const { order } = useContext(OrderContext)
    return (
        <>
            <div className='checkout'>
        
                <h2>Orden de compra: <span className='datos'> #{order.id}</span></h2>

                <h3>Fecha de compra: <span className='datos'>{new Date(order.date).toLocaleString()}</span></h3>

                <div className='mb-4 border px-3"'>
                    <h4 className='datos'>Datos del comprador</h4>

                    <div className='contacto'>
                        <p><strong>Nombre:</strong> {order.buyer.name}</p>
                        <p><strong>Email:</strong> {order.buyer.email}</p>
                        <p><strong>Teléfono:</strong> {order.buyer.phone}</p> 
                    </div>
                </div>


                <div className='mb-4 border px-3'>
                    <h4>Resumen de compra</h4>
                    <Table className="divide-y divide-gray-200 mb-10">
                        <thead>
                            <tr>
                                <th className="py-3 sm:px-6 text-center">PRODUCTO</th>
                                <th className="py-3 sm:px-6 text-center">PRECIO</th>
                                <th className="py-3 sm:px-6 text-center">CANTIDAD</th>
                                <th className="py-3 sm:px-6 text-center">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((p) => (
                                < tr key={p.id} >
                                    <td className="py-4 px-6 border-b text-center">{p.nombre}</td>
                                    <td className="py-4 px-6 border-b text-center" >${p.precio}</td>
                                    <td className="py-4 px-6 border-b text-center">Cantidad: {p.quantity}</td>
                                    <td className="py-4 px-6 border-b text-center">Total: {p.quantity * p.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <h3>Precio Final:<span className='datos'> ${order.total}</span></h3>
                </div>

                <Link to={'/'}><Button className='seguirComprando' variant="dark">Seguir comprando</Button></Link>
            </div >
        </>
    )
}

export default Checkout