import { Link } from "react-router-dom";
import './Huecas.css'

function Hueca(props){
   
return(
    <tr > 
        <td>{props.itemHueca.idhuecas}</td>        
        <td> {props.itemHueca.Nombre} </td>
        <td> {props.itemHueca.Descripcion} </td>
        <td>{props.itemHueca.WhatsApp}</td>        
        <td> {props.itemHueca.Ubicacion} </td>
        <td><Link to={`/updatehueca/${props.itemHueca.idhuecas}`}>Edit</Link></td>
        
    </tr>
);

}
export default Hueca