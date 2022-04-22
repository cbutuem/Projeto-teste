import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Edit() {
  const params = useParams();
  const [form, setForm] = useState({
        instituicao: "",
        descricao: "",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/camila-dante/${params.userId}`
      );
      console.log(response.data);
      setForm({ ...response.data });
    }
    fetchData();
  }, [params.userId]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const editObject = { ...form };

    delete editObject._id;

    axios.put(
      `https://ironrest.herokuapp.com/crud-intro/${params.userId}`,
      editObject
    );

    setForm({
      instituicao: "",
      descricao: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputName">Instituição</label>
      <input onChange={handleChange} value={form.instituicao} name="instituicao" />
      <label htmlFor="inputNickName">Descrição</label>
      <input value={form.descricao} name="ndescricao" onChange={handleChange} />
      <button type="submit">Editar!</button>
    </form>
  );
}