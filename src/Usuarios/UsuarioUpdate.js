import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdUsuario,updateUsuario } from '../service/UsuarioService'
import './Usuarios.css'

function UsuariosPage() {
  
  const { usuarioId } = useParams();
  const [usuario, setUsuario] = useState({idusuarios:'',username:'',password:'',status:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateUsuario(hueca);
  }
  const onChange = (event) =>{
    if(event.target.name==='id')
    setUsuario({...usuario,idusuarios:event.target.value})
    if(event.target.name==='username')
    setUsuario({...usuario,username:event.target.value})    
    if(event.target.name==='password')    
    setUsuario({...usuario,password:event.target.value})
    if(event.target.name==='status')
    setUsuario({...usuario,status:event.target.value})
  }

  useEffect(() => {    
    findByIdUsuario(usuarioId).then(data => {
      setUsuario(data);  
    }
    );
  }, [usuarioId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actulizar Datos</h2>

          <input 
          className="formUpdateInput"
            name="idusuarios"
            placeholder="id" 
            value={usuario.idusuarios}
            onChange={onChange}
   
          />
  
          <input 
          className="formUpdateInput"
            name="username"
            placeholder="username" 
            value={usuario.username}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
           placeholder="password" 
            name="password"
            value={usuario.password}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="status"
            name="status"
            value={usuario.status}
            onChange={onChange}
          />
        
        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default UsuariosPage;