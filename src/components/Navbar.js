import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/huecas"} className="navlink">
                    HUECAS
                </NavLink>

            </li>
        </ul>

    );

}