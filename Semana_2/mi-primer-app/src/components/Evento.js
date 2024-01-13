import React from "react";
import "../styleSheets/Evento.css";
import Evento_1 from "../images/evento1.jpeg";

function Evento() {
    return(
        <div className="card-container">

            <img src={Evento_1} alt="img-bruh" className="card-img"/>
            
            <div className="card-content">
                <h2 className="card-title">Py Pizza 03 - PyPuzzle</h2>
                <p className="card-date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                <p className="card-place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>
                <p className="card-description">
                    Py Pizza 03 - PyPuzzle
                    09 de Diciembre de 2023 - 13:30 GMT-4
                    Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia
                    ¡Hola Pythonista!
                    Participa en este Evento Presencial de la comunidad Python La Paz
                    ¿Cuánto conoces de Python?
                    Aprende a trabajar en equipo resolviendo increíbles acertijo
                    ¡Anímate a ser parte de esta actividad!</p>
            </div>
        </div>
    );
}
export default Evento;
