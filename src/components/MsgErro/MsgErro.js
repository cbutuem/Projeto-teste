import { Link } from "react-router-dom"


export function MsgErro(){
    return(
        <>
            <Link to={`/`}>
                <h1>Senha incorreta tente novamente</h1>
            </Link>
        </>
    );
}