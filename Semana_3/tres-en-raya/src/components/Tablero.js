import React from "react";
import Cuadro from "./Cuadro";
import { useState } from "react";
import '../styleShet/Tablero.css'

function Tablero() {

    function calcularGanador(cuadros){
        const convinaciones = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0; i<convinaciones.length;i++){
            const [a, b, c] = convinaciones[i];
            if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
                return cuadros[a];
            }
        }
        return null;
    }
    
    const [cuadros,setCuadros] = useState(Array(9).fill(null));
    const [jugador,setJugardor] = useState("O");

    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        if(cuadrosTemp[i]===null){
            cuadrosTemp[i] = jugador;
            setCuadros(cuadrosTemp);
            setJugardor(jugador==="X"? "O":"X");
        }
        if(calcularGanador(cuadrosTemp) !== null){
            alert("Ganador: " + calcularGanador(cuadrosTemp));
            setCuadros(Array(9).fill(null));
        }
        console.log(i);
        console.log(jugador);
        console.log(cuadrosTemp);
    }
    return(
        <div className="juego">
            <h1>Jugador de turno {jugador}</h1>
            <div className="tablero">
            <Cuadro valor={cuadros[0]} funcion={() => click(0)}/>
            <Cuadro valor={cuadros[1]} funcion={() => click(1)}/>
            <Cuadro valor={cuadros[2]} funcion={() => click(2)}/>
            <Cuadro valor={cuadros[3]} funcion={() => click(3)}/>
            <Cuadro valor={cuadros[4]} funcion={() => click(4)}/>
            <Cuadro valor={cuadros[5]} funcion={() => click(5)}/>
            <Cuadro valor={cuadros[6]} funcion={() => click(6)}/>
            <Cuadro valor={cuadros[7]} funcion={() => click(7)}/>
            <Cuadro valor={cuadros[8]} funcion={() => click(8)}/>
        </div>
        </div>

    );
}

export default Tablero;