import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Senha(props){
    const navigate = useNavigate();
    const params = useParams();
    const [form, setForm] = useState({
        senha:"",
    });
    const [senga, setSenga] = useState("");

    useEffect(() => {
        async function fetchData() {
          const response = await axios.get(
            `https://ironrest.herokuapp.com/camila-dante/${params.userId}`
          );
          setForm({ ...response.data});
        }
        fetchData();
      }, [params.userId]);

      function handleChange(event) {
        setSenga(event.target.value);
      }

      async function handleSubmit(event) {
        if (senga === form.senha){
            navigate("/edit/:userId");
        }
        if (senga !== form.senha){
            navigate("/ERRO"); 
        }
      }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Senha</label>
                <input onChange={handleChange} value={senga.se} placeholder="senha"/>
                <button type="submit">gogo</button>
            </form>
        </>
    );
}