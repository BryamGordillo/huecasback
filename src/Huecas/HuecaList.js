
function HuecaList(props){
return(
    <table>
    <thead >
      <tr>
        <th >Id</th>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>WhatsApp</th>
        <th>Ubicacion</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default HuecaList