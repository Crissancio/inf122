import React from 'react';
//import DynamicComponent from './components/SocialNet';
import './App.css';

//import Evento from "./components/Evento";
import EventoB from "./components/EventoB";
import EventoC from './components/EventoC';

function App() {
  const data = [
    {imageSocial: 'rauw_1' ,url:'https://www.facebook.com', alternativo: 'red social' },
    {imageSocial: 'rauw_2' ,url:'https://www.instagram.com/', alternativo: 'red social' },
    {imageSocial: 'rauw_3' ,url:'https://www.twitch.tv/', alternativo: 'red social' }
  ];

  return (
    <div className="App">
      <EventoB
        image = "tigua"
        title = "Las chicas se sueltan si ven Rauw con el Yankee"
        dateLiteral = "Llueven los brazzieres y los panties"
        placeLiteral = "¿¿QUE??¿¿QUE??¿¿QUE??"
        description = "Tu dime y te busco en la Dukati, pa que te ponga perry como Katy"
        icon1 = "daddy_1"
        icon2 = "daddy_2"
        icon3 = "daddy_3"/>
      <EventoB
        image = "elZorro"
        title = "SUELTAAAAAAAAAAAA"
        dateLiteral = "SALIO SIN PERMISO CON TODAS SUS NENAS"
        placeLiteral = "DAN UNA VUELTAAAAAA"
        description = "ESTO PA' LA NATURALES Y LAS QUE ESTAN HECHAS NO DEJAN SOSPECHAAAAAAAAAAAAAAAAA"
        icon1 = "rauw_1"
        icon2 = "rauw_2"
        icon3 = "rauw_3"/>
        <EventoC 
          image = "elZorro"
          title = "SUELTAAAAAAAAAAAA"
          dateLiteral = "SALIO SIN PERMISO CON TODAS SUS NENAS"
          placeLiteral = "DAN UNA VUELTAAAAAA"
          description = {[
            "ESTO PA' LA NATURALES Y LAS QUE ESTAN HECHAS",
            "NO DEJAN SOSPECHAAAAAAAAAAAAAAAAA",
            ""]}
          socialNetwork={data}
          />
    </div>
  );
}

export default App;
