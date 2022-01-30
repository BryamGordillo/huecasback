import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HuecasPage from './Huecas/HuecasPage';
import HuecaCreate from './Huecas/HuecaCreate';
import HuecaUpdate from './Huecas/HuecaUpdate';
import Navbar from "./components/Navbar";

function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/huecas" element={<HuecasPage />} />            
        <Route path="/createhueca" element={ <HuecaCreate />   }/>   
        <Route path="/updatehueca/:huecaId" element={ <HuecaUpdate />   }/>   
        
      </Routes>

    </BrowserRouter>   
  );
}

export default App;