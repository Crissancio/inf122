import React from 'react';
import './App.css';
import Perfil from './components/Perfil';
import Login from './components/Login';
import Registro from './components/Registro'; 
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<NavBar/>} >
              <Route path='/login' element={<Login/>}/>
              <Route path='/registro' element={<Registro/>}/>
              <Route path='/perfil' element={<Perfil/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
//agregar un enrutador de imagenes c:

export default App;
