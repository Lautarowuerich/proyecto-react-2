import React from 'react'
import { useState, useEffect } from 'react';
import { CartContext } from './CartContext'

const CartProvider = ({ children }) => {
  
  const [products, setProducts] = useState ([]);
  const [productQuantity, setProductQuantity] = useState(0);

  const deleteItem = (productId) => {
    // setProducts(products.filter((product) => product.id !== productId ))
    const updatedCart = (products.map((p) => {
      if (p.id === productId) {
        const restar = p.quantity - 1;

        if (restar <= 0) {
          return null;
        }
        return {...p, quantity: restar};
      }

      return p;
    }))
    
    const filtrarCarrito = updatedCart.filter ((p) => p !== null);

    setProducts (filtrarCarrito);
  };

  const addItem = (product, quantity) => {
    if (repeatItem(product.id)) {
      const newProducts = products.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setProducts(newProducts);
    }else{
      setProducts([...products, {...product, quantity}])
    }
  };
  
  const repeatItem = (id) => {
    return products.some ((product) => product.id === id)
  }

  const clearCart = () => {
    setProducts ([]);
  }

  useEffect(() => {
    setProductQuantity(products.reduce((acc, product) => acc + product.quantity, 0), 0)
  },[products]);

  
  return (
    <CartContext.Provider value ={{ products, addItem, deleteItem, productQuantity, clearCart }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider