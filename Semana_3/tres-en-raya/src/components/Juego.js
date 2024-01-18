import React from "react";
import { useState } from "react";
import '../styleShet/Juego.css'
import TableroD from "./TableroD";
import Historial from "./Historial";
//import Cuadro from "./Cuadro";


function Juego(){

    const [historial, setHistorial] = useState([
        {
            cuadros: Array(9).fill(null)
        },
    ]);

    const [nroMovimiento, setNroMovimiento] = useState(0);
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const [ganador, setGanador] = useState(null);

    const click = (i) => {
        const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
        console.log("nuevoMovimiento", nuevoMovimiento);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
        console.log("movimientoActual", movimientoActual);
        const cuadros = movimientoActual.cuadros.slice();
        if (cuadros[i] === null) {
            cuadros[i] = jugador;
            setCuadros(cuadros);
            setJugador(jugador === "X" ? "O" : "X");
            setHistorial(nuevoMovimiento.concat([{ cuadros }]));
            setNroMovimiento(nuevoMovimiento.length);
        };
        if (calcularGanador(cuadros) !== null) {
            setGanador(calcularGanador(cuadros));
        };  
    }
    const saltarA = (movimiento) => {
        console.log("movimiento", movimiento);
        setNroMovimiento(movimiento);
        setJugador(jugador === "X" ? "O" : "X");

    }
    const movimientoActual = historial[nroMovimiento];

    return(
        <div className="juego">
            <div className="juego-tablero">
                <h1>{ganador? `Ganador: ${ganador}`:`Proximo jugador: ${jugador}`}</h1>
                <TableroD cuadros={movimientoActual.cuadros} click={(i)=>click(i)}/>
            </div>
            <Historial historial={historial} saltarA={saltarA}/>
        </div>
    );

    function calcularGanador(cuadros) {
        const lineas = [
            [0, 1, 2], // primera fila
            [3, 4, 5], // segunda fila
            [6, 7, 8], // tercera fila
            [0, 3, 6], // primera columna
            [1, 4, 7], // segunda columna
            [2, 5, 8], // tercera columna
            [0, 4, 8], // diagonal
            [2, 4, 6] // diagonal
        ];
        for (let i = 0; i < lineas.length; i++) {
            const [a, b, c] = lineas[i];
            if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
                return cuadros[a];
            }
        }
        return null;
    }
}
export default Juego;
//Resolver volver al inicio se debe limpiar el historial
//El player al momento de cambiar en el historial