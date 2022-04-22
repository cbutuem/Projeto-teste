import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Senha(){
    const params = useParams();
    const [form, setForm] = useState({
        senha:"",
    })
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get(
            `https://ironrest.herokuapp.com/camila-dante/${params.userId}`
          );
          console.log("bla",response.data,"senha", response.data.senha);
          setForm({ ...response.data });
        }
        fetchData();
      }, [params.userId]);
    return(
        <>
        <label>Senha</label>
        <input/>
        </>
    );
}