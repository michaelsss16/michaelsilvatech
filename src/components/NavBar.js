import { Link } from "react-router-dom";
import Constantes from "../Util/Constantes.js";

function NavBar()
{
    return (			
    <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
            <li>
                <Link to="/">Página Inicial</Link>
            </li>
            <li>
            <Link to={`${Constantes.RotaArtigos}`}>Artigos</Link>
            </li>
        </ul>
    </nav>)
}

export default NavBar; 