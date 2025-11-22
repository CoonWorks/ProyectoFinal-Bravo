import { useState } from "react";
import { getAuth,createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import { setDoc,doc } from "firebase/firestore";
import database from "../../database/database.js";
import "./registro.css";

const Registro = () => {
    const [dataForm, setDataForm] = useState({
        username: "",
        email: "",
        password: ""
    });
    const auth = getAuth();
    const navigate = useNavigate();

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value});
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const credUsuario = await createUserWithEmailAndPassword(auth, dataForm.email, dataForm.password);
            if(!credUsuario) throw new Error("Error al crear el usuario");
            await setDoc(doc(database, "users", credUsuario.user.uid), {
                username: dataForm.username,
                email: dataForm.email,
                avatar: "default.jpg"
            });
            await sendEmailVerification(credUsuario.user);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="registro">
            <form className="registro-formu" onSubmit={handleSubmitForm}>
                <h2></h2>

                <div className="input-caja">
                    <label htmlFor="username"></label>
                    <input 
                        className="input"
                        placeholder="Nombre de usuario"
                        type="username"
                        id="username"
                        name="username"
                        value={dataForm.username}
                        onChange={handleChangeInput}
                    />
                </div>

                <div>
                    <label htmlFor="email"></label>
                    <input 
                        className="input"
                        placeholder="Dirección de email"
                        type="email"
                        id="email"
                        name="email"
                        value={dataForm.email}
                        onChange={handleChangeInput}
                    />
                </div>

                <div>
                    <label htmlFor="pasword"></label>
                    <input 
                        className="input"
                        placeholder="Contraseña"
                        type="password"
                        id="password"
                        name="password"
                        value={dataForm.password}
                        onChange={handleChangeInput}
                    />
                </div>

                <button className="enviar" type="submit">Registrar cuenta</button>

                <div className="boton-a-login">
                    <p>Ya posees un usuario</p>
                    <Link className="link" to="/login">Iniciar sesión</Link>
                </div>
            </form>
        </div>
    );
}

export default Registro;