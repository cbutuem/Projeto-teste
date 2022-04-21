import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ReadDetails(){
    const params = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
  
    useEffect(() => {
      async function fetchUser() {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/camila-dante/${params.userId}`
        );
  
        setUser(response.data);
      }
      fetchUser();
    }, [params.userId]);
  
    async function handleDelete() {
      await axios.delete(
        `https://ironrest.herokuapp.com/camila-dante/${params.userId}`
      );
  
      navigate("/");
    }
  
    return (
      <>
        <h1>{user.instituicao}</h1>
        <p>{user.descricao}</p>
        <p>{user.categoria}</p>
        <Link to={`/edit/${params.userId}`}>
          <button>Editar</button>
        </Link>
        <button onClick={handleDelete}>Deletar</button>
      </>
    );
}