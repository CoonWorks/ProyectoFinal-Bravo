import { useState } from "react";
import "./productcount.css";

const ProductCount = ({stock, aniadirAlCarro}) => {
    const [count, setCount] = useState(1);

    const handleClickDecrement = () => {
        if (count > 1){
            setCount(count - 1);
        }
    };

    const handleClickIncrement = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    };

    return(
        <div className="count-item">
            <div className="control-count">
                <button onClick={handleClickDecrement}>-</button>
                <p>{count}</p>
                <button onClick={handleClickIncrement}>+</button>
            </div>
            <button className="boton-add-cont" onClick={() => aniadirAlCarro(count)}>Agregar Producto</button>
        </div>
    )
}

export default ProductCount