import './navbar.css';
import logo from '../../assets/img/logo.png';
import CarroWidget from '../CarroWidget/CarroWidget.jsx';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
        <nav className='navbar'>
            <Link to="/">
                <img src={logo} className='logo' alt="" />
            </Link>
            <h2 className='titulo'>Gunpla Bragado</h2>
            <ul className='categorias'>
                <li>
                    <Link to="/categoria/highgrade">High Grade</Link>
                </li>
                <li>
                    <Link to="/categoria/realgrade">Real Grade</Link>
                </li>
                <li>
                    <Link to="/categoria/mastergrade">Master Grade</Link>
                </li>
                <li>
                    <Link to="/categoria/herramienta">Herramientas</Link>
                </li>
                <li>
                    <Link to={"/registro"}>Registrarse</Link>
                </li>
                <li>
                    <Link to={"/login"}>Iniciar Sesión</Link>
                </li>
                <li>
                    <Link to={"/perfil"}>Mi Perfíl</Link>
                </li>
            </ul>
            <CarroWidget />
        </nav>
    )
}

export default NavBar;