import { Link } from "react-router-dom";
import styles from "./Mural.modulo.css";
import { useState, useEffect } from "react";
import axios from "axios";

export function Mural(){
    const [dados, setdados] = useState([]);
    
    useEffect(() => {
        async function posts() {
            const bloco = await axios.get(`https://ironrest.herokuapp.com/camila-dante`)
            setdados(bloco.dados)
        }
        posts()    
    },[])

    return (
        <>
            <Link to="/box-post">
                <button>Criar</button>
            </Link>
            <ul>
            {dados.map((info) => {
              return (
                <li>
                  <p>{info.instituicao}</p>
                  <Link to={`/detail/${info._id}`}>Saiba mais</Link>
                </li>
              );
                })}
            </ul>
      </>
    );
  }

  
 
  