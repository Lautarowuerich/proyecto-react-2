import { useState } from "react"

const ItemCount = () => {

  const [ count, setCount] = useState(0);

  const stock = 15;

  const addProduct = () => {
    setCount (count + 1);
  }

  const removeProduct = () => {
    setCount (count - 1);
  }

  return (
    <div>
        <button disabled = {count === 0} onClick={() => removeProduct()}>-</button>
        <span>{count}</span>
        <button disabled = {count === stock} onClick={() => addProduct()}>+</button>
    </div>
  )
}

export default ItemCount