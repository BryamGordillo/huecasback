import React, { useState } from "react";
import { createHueca } from '../service/HuecaService'

function HuecaCreate() {
  
  const [idhuecas, setIdHuecas] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [WhatsApp, setWhatsApp] = useState('');
  const [Ubicacion, setUbicacion] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      idhuecas:idhuecas,
      Nombre: Nombre,
      Descripcion: Descripcion,
      WhatsApp: WhatsApp,
      Ubicacion: Ubicacion,
    }
    createHueca(objeto)

  }

  const onChange = (event) =>{

    if(event.target.name==='idhuecas')
    setIdHuecas(event.target.value)

    if(event.target.name==='Nombre')
    setNombre(event.target.value)
    
    if(event.target.name==='Descripcion')
    setDescripcion(event.target.value)

    if(event.target.name==='WhatsApp')
    setWhatsApp(event.target.value)

    if(event.target.name==='Ubicacion')
    setUbicacion(event.target.value)
  }

  return (
    <div>
      <h2>Crear Huecas</h2>
      <form onSubmit={onSubmit}>
        <label>
          idhuecas
          <input 
            name="idhuecas"
            value={idhuecas}
            onChange={onChange}
          />
        </label>
        <label>
          Nombre
          <input 
            name="Nombre"
            value={Nombre}
            onChange={onChange}
          />
        </label>
        <label>
          Descripcion
          <input 
            name="Descripcion"
            value={Descripcion}
            onChange={onChange}
          />
        </label>
        <label>
          WhatsApp
          <input 
            name="WhatsApp"
            value={WhatsApp}
            onChange={onChange}
          />
        </label>
        <label>
          Ubicación
          <input 
            name="Ubicacion"
            value={Ubicacion}
            onChange={onChange}
          />
        </label>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default HuecaCreate;