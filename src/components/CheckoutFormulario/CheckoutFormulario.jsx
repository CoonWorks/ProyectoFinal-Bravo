import "./checkoutformulario.css";

const CheckoutFormulario = ({ dataForm, handleChangeInput, sendOrder }) => {
    return(
        <form className="formu-checkout" onSubmit={sendOrder}>
            <input className="input" type="text" name="nombrecompleto" value={dataForm.nombrecompleto} onChange={handleChangeInput} placeholder="Ingrese su nombre completo" />
            <input className="input" type="number" name="telefono" value={dataForm.telefono} onChange={handleChangeInput} placeholder="Ingrese su teléfono" />
            <input className="input" type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="Ingrese su correo electrónico" />

            <button className="enviar" type="submit">Enviar Orden</button>
        </form>
    )
}

export default CheckoutFormulario;