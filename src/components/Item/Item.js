import '../Item/item.css'

const Item = ({tittle, description, price, image}) => {
  return (
    <div className="card-container">
        <img src={image} alt={tittle} width={70}/>
        <h3 className="card-tittle">{tittle}</h3>
        <p className="card-description">{description}</p>
        <p>${price}</p>
    </div>
  )
}

export default Item