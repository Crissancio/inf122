import React from "react";

function IngresarDatos({nameLabel, tipo,nameInput,id}){
    return(
        <div>
            <label htmlFor={ nameInput }> { nameLabel } </label>
            <input type={tipo} name={nameInput} id={id}/>
        </div>
    );
}
export default IngresarDatos;