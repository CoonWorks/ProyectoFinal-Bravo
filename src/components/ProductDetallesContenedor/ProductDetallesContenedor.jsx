import { useState, useEffect } from "react";
import ProductDetalles from "../ProductDetalles/ProductDetalles";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import database from "../../database/database.js";

const ProductDetallesContenedor = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const getProduct = async() => {
        try {
            const refProducto = doc(database, "products", id);
            const dbData = await getDoc(refProducto);
            const data = { id: dbData.id, ...dbData.data()};
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div>
            <ProductDetalles product = { product } />
        </div>
    )
}

export default ProductDetallesContenedor