import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ProductListaContenedor from './components/ProductListaContenedor/ProductListaContenedor.jsx';
import ProductDetallesContenedor from './components/ProductDetallesContenedor/ProductDetallesContenedor.jsx';
import { CarroProveedor } from './context/CarroContext.jsx';
import Carro from "./components/Carro/Carro.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Registro from './components/Registro/Registro.jsx';
import Login from "./components/Login/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Perfil from "./components/Perfil/Perfil.jsx";
import './App.css'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <CarroProveedor>
            <NavBar />
            <Routes>
              <Route path="/" element={ <ProductListaContenedor bienvenida={"¡Bienvenidos a Gunpla Bragado!"} /> } />
              <Route path="/categoria/:categoria" element={ <ProductListaContenedor bienvenida={"¡Bienvenidos a Gunpla Bragado!"} /> } />
              <Route path="/detalle/:id" element={ <ProductDetallesContenedor /> } />
              <Route path="/carrito" element={ <Carro /> } />
              <Route path="/checkout" element={ <Checkout /> } />
              <Route path="/registro" element={ <Registro /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/perfil" element={ <Perfil /> } />
              <Route path="*" element={ <div>Error 404 - No encontrado</div> } />
            </Routes>
          </CarroProveedor>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
