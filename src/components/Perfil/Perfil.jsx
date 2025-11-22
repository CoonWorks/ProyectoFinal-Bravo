import { useContext,useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
    const {user, userLoading, signOutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user.id && !userLoading){
            navigate("/login");
        }
    }, [user, userLoading]);

    if (userLoading){
        return(
            <div>
                <h1>Perfil del usuario</h1>
                <h3>Bienvenido {user.username}</h3>
                <button onClick={signOutUser}>Cerrar Sesión</button>
            </div>
        )
    }
}

export default Perfil;