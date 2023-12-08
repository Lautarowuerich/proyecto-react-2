import React from 'react'

const CartDetail = ({products}) => {

  const totalPrice = products.reduce((acc, p) => acc + p.precio * p.quantity, 0);

  return (
    <ul className="bg-teal-600 px-2 py-3 rounded-md text-white font-bold w-30  mt-5 absolute shadow-md right-10 ">
      {products.map((p) => (
        <li key={p.id} className="mb-3 border-b-2 pb-2">
          {` ${p.quantity} x ${p.nombre} - `}
          <span className="font-bold text-xl">
            ${p.price * p.quantity}
          </span>
        </li>
      ))}

      <div className="bg-teal-700 text-center  py-2 px-2">
        <span className=" text-2xl">Total a pagar: {totalPrice}</span>
      </div>
    </ul>
  )
}

export default CartDetail