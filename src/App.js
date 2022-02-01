import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HuecasPage from './Huecas/HuecasPage';
import HuecaCreate from './Huecas/HuecaCreate';
import HuecaUpdate from './Huecas/HuecaUpdate';

import UsuariosPage from './Usuarios/UsuariosPage';
import UsuarioCreate from './Usuarios/UsuarioCreate';
import UsuarioUpdate from './Usuarios/UsuarioUpdate';

import Navbar from "./components/Navbar";

function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/huecas" element={<HuecasPage />} />             
        <Route path="/createhueca" element={ <HuecaCreate />   }/>   
        <Route path="/updatehueca/:huecaId" element={ <HuecaUpdate />   }/>
        
        <Route path="/usuarios" element={<UsuariosPage />} /> 
        <Route path="/createusuario" element={ <UsuarioCreate />   }/>   
        <Route path="/updateusuario/:usuarioId" element={ <UsuarioUpdate />   }/>      
        
      </Routes>

    </BrowserRouter>   
  );
}

export default App;