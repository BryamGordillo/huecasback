import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdHueca,updateHueca } from '../service/HuecaService'
import './Huecas.css'

function HuecasPage() {
  
  const { huecaId } = useParams();
  const [hueca, setHueca] = useState({idhuecas:'',Nombre:'',Descripcion:'',WhatsApp:'',Ubicacion:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateHueca(hueca);
  }
  const onChange = (event) =>{
    if(event.target.name==='id')
      setHueca({...hueca,idhuecas:event.target.value})
    if(event.target.name==='Nombre')
      setHueca({...hueca,Nombre:event.target.value})    
    if(event.target.name==='Descripcion')    
      setHueca({...hueca,Descripcion:event.target.value})
    if(event.target.name==='WhatsApp')
      setHueca({...hueca,WhatsApp:event.target.value})
    if(event.target.name==='Ubicacion')
      setHueca({...hueca,Ubicacion:event.target.value})
  }

  useEffect(() => {    
    findByIdHueca(huecaId).then(data => {
      setHueca(data);  
    }
    );
  }, [huecaId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actulizar Datos</h2>

          <input 
          className="formUpdateInput"
            name="id"
            placeholder="id" 
            value={hueca.idhuecas}
            onChange={onChange}
   
          />
  
          <input 
          className="formUpdateInput"
            name="Nombre"
            placeholder="Nombre" 
            value={hueca.Nombre}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
           placeholder="Descripcion" 
            name="Descripcion"
            value={hueca.Descripcion}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="WhatsApp"
            name="WhatsApp"
            value={hueca.WhatsApp}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Ubicacion"
            name="Ubicacion"
            value={hueca.Ubicacion}
            onChange={onChange}
          />
        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default HuecasPage;