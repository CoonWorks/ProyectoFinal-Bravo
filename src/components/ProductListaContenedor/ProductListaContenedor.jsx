import { useState, useEffect } from "react";
import ProductLista from "../ProductLista/ProductLista";
import './productlistacontenedor.css';
import { useParams } from "react-router-dom";
import { collection,getDocs,query,where } from "firebase/firestore";
import database from "../../database/database.js";

const ProductListaContenedor = ({ bienvenida }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();
  const refProducto = collection(database, "products");

  const obtenerProducto = async() => {
    try {
      const dbData = await getDocs(refProducto);
      const data = dbData.docs.map((dbProducto) => {
        return{ id: dbProducto.id, ...dbProducto.data() };
      });
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const obtenerProductosCategoria = async() => {
    try {
      const q = query( refProducto, where("categoria", "==", categoria));
      const dbData = await getDocs(q);
      const data = dbData.docs.map((dbProducto) => {
        return { id: dbProducto.id, ...dbProducto.data() };
      });
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(categoria){
      obtenerProductosCategoria();
    } else{
      obtenerProducto();
    }
  }, [categoria]);

  return(
    <div className="productlistacontenedor">
      <h2>{bienvenida}</h2>
      {
        loading ? <div>Cargando productos...</div> : <ProductLista products={products}/>
      }
    </div>
  )
}

export default ProductListaContenedor