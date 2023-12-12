import '../Item/item.css'
import Button from 'react-bootstrap/Button';

const Item = ({ nombre, precio, imagen, quantity, stock, action, textButton }) => {
  return (
    <div className="card-container">
      <img className='card-image' src={imagen} alt={nombre} width={70} />
      <h3 className="card-tittle">{nombre}</h3>
      <p className='card-price'>${precio}</p>
      {stock === 0 && (
        <p className="text-red-600 text-right text-xl px-5 font-bold">
          Sin Stock
        </p>
      )}
      {
        quantity && <span>Cantidad: {quantity}</span>
      }
      {action && textButton && (<button onClick={() => action()}>{textButton}</button>)}
      <Button className='card-button' variant="dark">Ir a detalles</Button>
    </div>
  )
}

export default Item