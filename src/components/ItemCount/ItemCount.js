const ItemCount = ({stock, setCount, count}) => {

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