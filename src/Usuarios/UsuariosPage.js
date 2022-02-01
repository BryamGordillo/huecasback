import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UsuarioList from './UsuarioList';
import Usuario from './Usuario'
import { getListUsuarios } from '../service/UsuarioService'

function UsuariosPage() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    
    getListUsuarios().then(data => {
      setUsuarios(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <Link to='/createusuario' >
        Crear
      </Link>
      <UsuarioList>
        {
          usuarios.map(item =>
            <Usuario
              key={item.idusuarios}
              itemUsuario={item} />
          )
        }
      </UsuarioList>
    </div>
  );
}

export default UsuariosPage;