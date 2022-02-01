
function UsuarioList(props){
return(
    <table>
    <thead >
      <tr>
        <th >Id</th>
        <th>username</th>
        <th>password</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default UsuarioList