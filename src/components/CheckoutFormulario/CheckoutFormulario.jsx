const CheckoutFormulario = ({ dataForm, handleChangeInput, sendOrder }) => {
    return(
        <form onSubmit={sendOrder}>
            <input type="text" name="nombrecompleto" value={dataForm.nombrecompleto} onChange={handleChangeInput} placeholder="Ingrese su nombre completo" />
            <input type="number" name="telefono" value={dataForm.telefono} onChange={handleChangeInput} placeholder="Ingrese su teléfono" />
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="Ingrese su correo electrónico" />

            <button type="submit">Enviar Orden</button>
        </form>
    )
}

export default CheckoutFormulario;