import React from "react";
function Historial({historial,saltarA}){
    const moviminetos = historial.map((paso,movimiento) => {
        const descripcion = movimiento?
            `Ir al movimiento #${movimiento}`:
            `Ir al inicio del juego`;
        return(
            <li key={movimiento}>
                <button onClick={()=>saltarA(movimiento)}>{descripcion}</button>
            </li>
        );
    });
    
    return(
        <div className="informacion-juego">
            <ol>{moviminetos}</ol>
        </div>
    );
}
export default Historial;