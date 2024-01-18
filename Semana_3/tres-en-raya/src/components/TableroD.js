import React from 'react';
import '../styleShet/Tablero.css';
//import { useState } from 'react';
import Cuadro from './Cuadro';

function TableroD({cuadros,click}) {
    
    function renderizarCuadro(i) {
        return (
            <Cuadro
                valor={cuadros[i]}
                funcion={() => click(i)}
            />
        );
    }

    return (
        <div>
            <div className="tablero">
                {renderizarCuadro(0)}
                {renderizarCuadro(1)}
                {renderizarCuadro(2)}
                {renderizarCuadro(3)}
                {renderizarCuadro(4)}
                {renderizarCuadro(5)}
                {renderizarCuadro(6)}
                {renderizarCuadro(7)}
                {renderizarCuadro(8)}
            </div>
        </div>
    );
}
export default TableroD;