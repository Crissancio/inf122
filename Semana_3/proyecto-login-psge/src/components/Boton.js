import React from "react";

function Boton({nameButton,funcion}){
    
    const bruh = () => {
        console.log(nameButton);
        funcion();
    }

    return(
        <div>
            <button onClick={bruh} >
                {nameButton}
            </button>
        </div>
    );
}

export default Boton;