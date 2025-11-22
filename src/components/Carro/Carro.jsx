import { useContext } from "react";
import { CarroContext } from "../../context/CarroContext";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import "./carro.css";

const Carro = () => {
    const { carro, borrarPorId, precioTotal, borrarCarro } = useContext(CarroContext);

    if(carro.length === 0){
        return(
            <div>
                <h2>El carrito se encuentra actualmente vacío</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    return(
        <div className="carro">
            <h1 className="titulo-carro">Productos en el carrito</h1>
            {
                carro.map((productoCarro) => (
                        <div className="item-carro" key={productoCarro.id}>
                        <img className="img-item-carro" src={productoCarro.image} width={100} alt="" />
                        <p className="texto-item-carro">{productoCarro.nombre}</p>
                        <p className="texto-item-carro">Precio por item: ${productoCarro.precio}</p>
                        <p className="texto-item-carro">Cantidad: {productoCarro.cantidad}</p>
                        <p className="texto-item-carro">Precio total: ${productoCarro.cantidad * productoCarro.precio}</p>
                        <button className="borrar-item-carro" onClick={ () => borrarPorId(productoCarro.id)}>
                            <BsFillTrash3Fill/>
                        </button>
                    </div>
                ))
            }

            <div className="info-carro">
                <p className="texto-info-carro">Precio final: ${precioTotal()}</p>
                <Link className="boton-cont-carro" to="/checkout">Continuar con la compra</Link>
                <button className="boton-borrar-carro" onClick={borrarCarro}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Carro