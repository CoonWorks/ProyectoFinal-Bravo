import { FaCartShopping } from 'react-icons/fa6';
import { useContext } from 'react';
import { CarroContext } from '../../context/CarroContext';
import { Link } from 'react-router-dom';
import './carrowidget.css';

const CarroWidget = () => {
  const { cantidadTotal } = useContext(CarroContext);
  const cantidad = cantidadTotal();

  return (
    <Link to="/carrito" className="carrowidget">
        <FaCartShopping size={30} />
        <p>{ cantidad !== 0 && cantidad }</p>
    </Link>
  )
}

export default CarroWidget;