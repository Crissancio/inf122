import React from "react";
import Boton from "./Boton";
import '../styles/Perfil.css'

function Perfil(){
    const Editar = () => {

    }
    return(
        <div className="perfil">
            <div className="input-container">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="nameInput-registro"/>
            </div>
            <div className="input-container">
                <label htmlFor="lastName">Apellido</label>
                <input type="text" name="lastName" id="lastNameInput"/>
            </div>
            <div className="input-container">
                <label htmlFor="pass">Contraseña</label>
                <input type="password" name="pass" id="password-registro"/>
            </div>
            <Boton
                nameButton={"Editar"}
                funcion={Editar} />
        </div>
    );
}

export default Perfil;