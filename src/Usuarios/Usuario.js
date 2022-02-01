import { Link } from "react-router-dom";
import './Usuarios.css'

function Usuario(props){
   
return(
    <tr > 
        <td>{props.itemUsuario.idusuarios}</td>        
        <td> {props.itemUsuario.username} </td>
        <td> {props.itemUsuario.password} </td>
        <td>{props.itemUsuario.status}</td>        
        <td><Link to={`/updateusuario/${props.itemUsuario.idusuarios}`}>Edit</Link></td>
        
    </tr>
);

}
export default Usuario