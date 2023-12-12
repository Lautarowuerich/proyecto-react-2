import Button from 'react-bootstrap/Button';
import '../ItemCount/itemCount.css'

const ItemCount = ({ stock, setCount, count, quantity }) => {

  const addProduct = () => {
    if (count === stock) return;
    setCount(count + 1);
  }

  const removeProduct = () => {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <div className='containerStock'>
      <span className="stockDisponible">
        Unidades disponibles: {stock}
      </span>
      <div className='countContainer'>
        <Button className="buttonRemove" disabled={count === 0} onClick={() => removeProduct()} variant="dark">-</Button>
        <span className="count">{count}</span>
        <Button className="buttonAdd" disabled={stock - quantity <= 0} onClick={() => addProduct()} variant="dark">+</Button>
      </div>
    </div>
  )
}

export default ItemCount