import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";

const Login = () => {
    const [dataForm, setDataForm] = useState({ email: "", password: ""});
    const navegar = useNavigate();
    const auth = getAuth();

    const handleChangeInput = (e) =>
        setDataForm({...dataForm, [e.target.name] : e.target.value});

    const handleSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const credUsuario = await signInWithEmailAndPassword(auth, dataForm.email, dataForm.password);
            if (!credUsuario.user.emailVerified){
                auth.signOut();
                throw new error("El correo no está verificado");
            }

            Navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div className="login">
            <form className="form-login" onSubmit={handleSubmitForm}>
                <h2>Iniciar Sesión</h2>

                <div className="input-caja">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        className="input"
                        placeholder="Ingresar Email"
                        type="email"
                        id="email"
                        name="email"
                        value={dataForm.email}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="input-caja">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        className="input"
                        placeholder="Ingresar contraseña"
                        type="password"
                        id="password"
                        name="password"
                        value={dataForm.password}
                        onChange={handleChangeInput}
                    />
                </div>

                <button className="enviar" type="submit">Iniciar sesión</button>

                <div className="boton-registro">
                    <p>¿Eres nuevo?</p>
                    <Link className="link" to="/registro">Regístrate</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;