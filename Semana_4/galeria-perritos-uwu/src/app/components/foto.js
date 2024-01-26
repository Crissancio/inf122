'use client'

import style from './foto.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Foto(){

    const [perrito,setPerrito]=useState("./vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [habilidad, setHabilidad]=useState("esperando");
    
    const url = "https://pokeapi.co/api/v2/pokemon/eevee";
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data=>{
            setPerrito(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidad(data.abilities[0].ability.name)
        });
    },[]);

    return(
        <div className={style.galleryContainer}>
            <h1>Nombre: {estado}</h1>
            <Image src={perrito} width={400} height={400}/>
            <h1>Habilidad: {habilidad}</h1>
        </div>
    );
}