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
            <ul>
                <li></li>
            </ul>
        </nav>
    );
}