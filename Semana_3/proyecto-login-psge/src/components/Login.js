import React from "react";
import '../styles/Login.css'
import Boton from "./Boton";

function Login(){
    const Registrar = () => {
    }

    const Ingresar = () => {
    }

    return(
        <div className="login">
            <div className="input-container">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="nameInput"/>
            </div>
            <div className="input-container">
                <label htmlFor="pass">Contraseña</label>
                <input type="password" name="pass" id="password-login"/>
            </div>
            <div className="button-container">
                <Boton
                    nameButton={"Resgistrar"}
                    funcion={Registrar} />
                <Boton
                    nameButton={"Ingresar"}
                    funcion={Ingresar} />
            </div>
        </div>
    );
}
export default Login;