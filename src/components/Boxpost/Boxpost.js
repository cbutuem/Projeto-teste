import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
//import { Botao } from '../Botao/Botao';

export function Boxpost(props) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        instituicao: "",
        descricao: "",
        categoria: "",
    });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }


  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post("https://ironrest.herokuapp.com/camila-dante", form);

    navigate("/");
  }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Instituição:</label>
            <input onChange={handleChange} value={form.instituicao}  name= "instituicao" placeholder="Instituição"/>
            <input onChange={handleChange} value={form.descricao}  name= "descricao" placeholder="Descrição"/>
            <input onChange={handleChange} value={form.categoria}  name= "categoria" placeholder="Categoria"/>
            <button type="submit"> set!</button>
      </form>
    </div>
  );
}
