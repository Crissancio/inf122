'use client';

import React from 'react';
import style from './page.module.css';
import Contador from './components/Contador';
import Boton from './components/Boton';
import { useState } from "react";

//ejercicios cualquieras de react challenges 

//const [show,setShow] = useState(true);
//const mostrar = () => setShow

export default function App() {

  const [mostrar,setMostrar] = useState(true)
  const [nroClicks,setNumClicks] = useState(0)

  const reiniciar = () => {
    setNumClicks(0);
    console.log("bruh");
  }

  const resTres = () => {
    setNumClicks(nroClicks-3);
  }

  const sumTres = () => {
    setNumClicks(nroClicks+3);
  }

  const resUno = () => {
    setNumClicks(nroClicks-1);
  }

  const sumUno = () => {
    setNumClicks(nroClicks+1);
  }

  const show = () => {
    setMostrar(!mostrar);
  }

  return (
    <div className={style["App"]}>

      <div className={style['contenedor-principal']}>
        <Contador nroClicks={nroClicks}
          mostrar={mostrar}
        />
        <div className={style['contenedor-botones']}>
          <div className={style['sub-contenedor-botones']}>
            <Boton texto={"-3"}
              esBotonClick={true}
              funcionClick={resTres}/>

            <Boton texto={"+3"}
              esBotonClick={true}
              funcionClick={sumTres}/>

            <Boton texto={"-1"}
              esBotonClick={true}
              funcionClick={resUno}/>

            <Boton texto={"+1"}
              esBotonClick={true}
              funcionClick={sumUno}/>
          </div>
          <Boton texto="reset"
            esBotonClick={false}
            funcionClick={reiniciar}/>
          <Boton texto="Mostrar/Ocultar"
            esBotonClick={false}
            funcionClick={show}/>

        </div>
      </div>
    </div>
  );
}
