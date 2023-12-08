import '../Item/item.css'

const Item = ({ nombre, descripcion, precio, imagen, quantity, stock, action, textButton }) => {
  return (
    <div className="card-container">
      <img src={imagen} alt={nombre} width={70} />
      <h3 className="card-tittle">{nombre}</h3>
      <p className="card-description">{descripcion}</p>
      <p>${precio}</p>
      {stock === 0 && (
        <p className="text-red-600 text-right text-xl px-5 font-bold">
          Sin Stock
        </p>
      )}
      {
        quantity && <span>Cantidad: {quantity}</span>
      }
      {action && textButton && (<button onClick={() => action()}>{textButton}</button>)}
    </div>
  )
}

export default Item