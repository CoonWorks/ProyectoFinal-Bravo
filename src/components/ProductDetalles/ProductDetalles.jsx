import ProductCount from "../ProductCount/ProductCount";
import { useContext, useState } from "react";
import { CarroContext } from "../../context/CarroContext";
import { Link } from "react-router-dom";
import "./productdetalles.css";

const ProductDetalles = ({ product }) => {
    const { aniadirProducto } = useContext(CarroContext);
    const [verProductCount, setVerProductCount] = useState(true);

    const aniadirAlCarro = (count) => {
        setVerProductCount(false);
        const newProducto = {...product, cantidad : count};
        aniadirProducto(newProducto);
    }

    return (
        <div className="detalle-producto">
            <div className="detalle-producto-imagen-cont">
                <img src={product.image} className="producto-detalle-imagen" alt="" />
            </div>

            <div className="producto-detalle-cont-texto">
                <p className="producto-detalle-texto">{product.nombre}</p>
                <p className="producto-detalle-texto-desc">{product.descripcion}</p>
                <p className="producto-detalle-texto">${product.precio}</p>
                {
                    verProductCount ? (
                        <ProductCount stock={product.stock} aniadirAlCarro={aniadirAlCarro} />
                    ) : (
                        <Link className="boton-carrito" to="/carrito">
                            <button>Ir al carrito</button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default ProductDetalles;