import { Link } from "react-router-dom";
export function Navbar(){
    return(
        <nav>
            <h1>
              <Link to="/" style={{ textDecoration: "none" }}>
                    {" "}
                Mural Solidario{" "}
              </Link>
            </h1>
            <ul class='botoes'>
                <li>
                <Link to= '/'>
                <button>Mural</button>
                </Link>
                </li>
                <li>
                <Link to= '/'>
                <button>Carências</button>
                </Link>
                </li>
                <li>
                <Link to= '/'>
                <button>Doações</button>
                </Link>
                </li>
            </ul>
        </nav>
    );
}