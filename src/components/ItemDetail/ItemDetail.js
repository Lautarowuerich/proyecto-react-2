import "../ItemDetail/itemDetail.css"

const ItemDetail = ({itemSelected}) => {
  return (
    <div className='contenedorProductosDetail'>
        <div className="descripcionCard">
            <img className='imagen_productos' src={itemSelected?.image} alt={itemSelected?.title} width={150} />
            <h6 className="titulo_producto">{itemSelected?.title}</h6>
        </div>
        <h3 className='detalle_producto'>{itemSelected?.description}</h3>
        <p className='precio_detalle'>${itemSelected?.price}</p>
    </div>    
  )
}

export default ItemDetail