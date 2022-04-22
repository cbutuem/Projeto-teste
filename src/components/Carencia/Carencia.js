import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Carencia(){
    const [dados, setdados] = useState([]);
    let setFiltro = [];

    useEffect(() => {
        async function posts() {
            const bloco = await axios.get('https://ironrest.herokuapp.com/camila-dante');
            setdados(bloco.data);
        }
        posts();    
    },[])

    setFiltro = dados.filter(carents => carents.categoria === 'carencia');
    return(
        <>
            <ul>
            {setFiltro.map((info) => {
              return (
                <li>
                  <h1>{info.instituicao}</h1>
                  <h2>{info.descricao}</h2>
                  <p>{info.categoria}</p>
                  <Link to={`/detail/${info._id}`}>Saiba mais</Link>
                </li>
              );
                })}
            </ul>
        </>
    );

}