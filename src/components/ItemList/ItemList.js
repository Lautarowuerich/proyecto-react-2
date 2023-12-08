import '../ItemList/itemList.css'
import Item from "../Item/Item"
import { Link } from 'react-router-dom';

const ItemList = ({productList}) => {

  return (
    <div className="item-list-container">
        {productList.map((product) => (
            <Link to={'item/' + product.id } key={product.id}>
                <Item
                    nombre={product.nombre}
                    descripcion={product.descripcion}
                    precio={product.precio}
                    imagen={product.imagen}
                />
            </Link>
        ))}
    </div>
  );
};

export default ItemList;