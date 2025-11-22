import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {
    return (
        <li className="product">
            <div className="product-contenedor-img">
                <img className="product-img" src={ product.image } alt="" />
            </div>
            <div className="product-texto">
                <p className="product-titulo">{ product.nombre }</p>
                <p className="product-precio">${ product.precio }</p>
                <Link to={ "/detalle/" + product.id } className="product-boton">MAS INFORMACIÓN</Link>
            </div>
        </li>
    )
}

export default Product