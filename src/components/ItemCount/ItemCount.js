const ItemCount = ({stock, setCount, count}) => {

  const addProduct = () => {
    if(count === stock) return;
    setCount(count + 1);
  }

  const removeProduct = () => {
    if(count === 0) return;
    setCount(count - 1);
  }

  return (
    <div>
        <button disabled = {count === 0} onClick={() => removeProduct()}>-</button>
        <span>{count}</span>
        <button disabled={stock === count} onClick={() => addProduct()}>+</button>
    </div>
  )
}

export default ItemCount