import { createContext, useState, useEffect, } from "react";

const CarroContext = createContext();

const CarroProveedor = ({ children }) => {
    const carroLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
    const [carro, setCarro] = useState( carroLocalStorage ? carroLocalStorage : []);

    useEffect(() => {
        localStorage.setItem("cart-ecommerce", JSON.stringify(carro));
    }, [carro])

    const aniadirProducto = (newProducto) => {
        const indexProducto = carro.findIndex((productoCarro) => productoCarro.id === newProducto.id );

        if (indexProducto === -1){
            setCarro( [...carro, newProducto]);
        } else {
            const newCarro = [...carro];
            newCarro[indexProducto].cantidad = newCarro[indexProducto].cantidad + newProducto.cantidad;
            setCarro(newCarro);
        }
    }

    const cantidadTotal = () => {
        const cantidad = carro.reduce((total, productoCarro) => total + productoCarro.cantidad, 0);
        return cantidad;
    }

    const precioTotal = () => {
        const total = carro.reduce((total, productoCarro) => total + (productoCarro.precio * productoCarro.cantidad), 0);
        return total;
    }

    const borrarPorId = (productoId) => {
        const productosFiltrados = carro.filter((productoCarro) => productoCarro.id !== productoId);
        setCarro(productosFiltrados);
    }

    const borrarCarro = () => {
        setCarro([]);
    }

    return(
        <CarroContext.Provider value={{carro, aniadirProducto, cantidadTotal, precioTotal, borrarPorId, borrarCarro }}>
            {children}
        </CarroContext.Provider>
    )
};

export {CarroContext, CarroProveedor};