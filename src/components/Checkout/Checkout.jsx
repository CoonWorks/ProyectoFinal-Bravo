import { useContext, useState } from "react";
import { CarroContext } from "../../context/CarroContext";
import { addDoc, collection } from "firebase/firestore";
import database from "../../database/database.js";
import CheckoutFormulario from "../CheckoutFormulario/CheckoutFormulario";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        nombrecompleto: "",
        telefono: "",
        email: ""
    });
    const [idOrden, setIdOrden] = useState(null);
    const { carro, precioTotal} = useContext(CarroContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name] : event.target.value});
    }

    const enviarOrden = (event) => {
        event.preventDefault();

        const orden = {
            comprador: {...dataForm},
            productos: {...carro},
            total: precioTotal()
        }

        subirOrden(orden);
    }

    const subirOrden = async(orden) => {
        try{
            const referenciaOrden = collection(database, "ordenes");
            const respuesta = await addDoc(referenciaOrden, orden);

            setIdOrden(respuesta.id);
        } catch (error){
            console.log("Ha habido un error al subir la orden de compra");
        }
    }

    return(
        <div>
            {
                idOrden ? (
                    <div>
                        <h2>La orden se ha generado correctamente</h2>
                        <p>Guarde el codigo identificador de la compra: {idOrden}</p>
                    </div>
                ) : (
                    <CheckoutFormulario dataForm={dataForm} handleChangeInput={handleChangeInput} enviarOrden={enviarOrden} />
                )
            }
        </div>
    )
}

export default Checkout