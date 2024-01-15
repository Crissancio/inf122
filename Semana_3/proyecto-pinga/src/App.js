import './App.css';
import Contador from './components/Contador';
import Boton from './components/Boton';
import { useState } from "react";

//ejercicios cualquieras de react challenges 

//const [show,setShow] = useState(true);
//const mostrar = () => setShow

function App() {

  const [nroClicks,setNumClicks] = useState(0)

  const reiniciar = () => {
    setNumClicks(0);
    console.log("pingan't");
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
  return (
    <div className="App">

      <div className='contenedor-principal'>
        <Contador nroClicks={nroClicks}
        />
        <div className='contenedor-botones'>
          <div className='sub-contenedor-botones'>
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

        </div>
      </div>
    </div>
  );
}

export default App;
