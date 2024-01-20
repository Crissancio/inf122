import React from "react";
import Boton from "./Boton";
import '../styles/Registro.css'

function Registro(){
    const Registrar=()=>{
    }
    return(
        <div className="registro">
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
                nameButton={"Resgistrar"}
                funcion={Registrar} />
        </div>
    );
}

export default Registro;