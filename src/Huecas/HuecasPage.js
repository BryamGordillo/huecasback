import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HuecaList from './HuecaList';
import Hueca from './Hueca'
import { getListHuecas } from '../service/HuecaService'

function HuecasPage() {

  const [huecas, setHuecas] = useState([]);

  useEffect(() => {
    
    getListHuecas().then(data => {
      setHuecas(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de Huecas</h2>
      <Link to='/createhueca' >
        Crear
      </Link>
      <HuecaList>
        {
          huecas.map(item =>
            <Hueca
              key={item.idhuecas}
              itemHueca={item} />
          )
        }
      </HuecaList>
    </div>
  );
}

export default HuecasPage;