import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Boxpost(props) {
    const navigate = useNavigate();
    const [cat, setCat] = useState("");
    const [form, setForm] = useState({
        instituicao: "",
        descricao: "",
        categoria: "",
        senha:"",
        comentarios:[{}],
    });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  } 
  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post("https://ironrest.herokuapp.com/camila-dante", form);

    setForm({
        instituicao: "",
        descricao: "",
        categoria: "",
    });
    navigate("/");
  }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <label>Instituição:</label>
            <input onChange={handleChange} value={form.instituicao}  name= "instituicao" placeholder="Instituição"/>
            <input onChange={handleChange} value={form.descricao}  name= "descricao" placeholder="Descrição"/>
            <input onChange={handleChange} value={form.senha}  name= "senha" placeholder="senha"/>
            <input onChange={handleChange} value={cat}  name= "categoria" placeholder="Categoria"/>
            <h3>{cat}</h3>
            <button type= "button" onClick={() => setCat("doacao")} value={form.categoria = cat} name= "categoria"> Doacao</button>
            <button type= "button" onClick={() => setCat("carencia")} value={form.categoria = cat} name= "categoria"> Carencia</button> 
            <button type="submit"> set!</button>
      </form>
      
    </div>
  );
}
