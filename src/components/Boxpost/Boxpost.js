import { useState } from 'react';
import axios from "axios";
//import { Botao } from '../Botao/Botao';

export function Boxpost(props) {
   
    const [cat, setCat] = useState("");
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

    setForm({
        instituicao: "",
        descricao: "",
        categoria: "",
    });
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Instituição:</label>
            <input onChange={handleChange} value={form.instituicao}  name= "instituicao" placeholder="Instituição"/>
            <input onChange={handleChange} value={form.descricao}  name= "descricao" placeholder="Descrição"/>
            <h3>{cat}</h3>
            <button onChange={handleChange} onClick={() => setCat("doacao")} value={cat} name= "categoria"> Doacao</button>
            <button onChange={handleChange}  onClick={() => setCat("carencia")} value={cat} name= "categoria"> Carencia</button> 
            <button type="submit"> set!</button>
      </form>
      
    </div>
  );
}
