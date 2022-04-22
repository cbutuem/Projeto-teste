import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Comentario() {
  const params = useParams();
  const [topic, setTopic] = useState({comentarios: [] });
  const [form, setForm] = useState({
    nome: "",
    comentario: "",
  });

  const [submitStatus, setSubmitStatus] = useState(false);

  useEffect(() => {
    async function fetchTopic() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/camila-dante/${params.userId}`
      );
      setTopic(response.data);
      console.log("oii",response.data);
      setSubmitStatus(false);
    }

    fetchTopic();
  }, [params.userId, submitStatus]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const attTopic = { ...topic };
    attTopic.comentarios.push(form);

    delete attTopic._id;

    await axios.put(
      `https://ironrest.herokuapp.com/camila-dante/${params.userId}`,
      attTopic
    );
    setForm({
      nome: "",
      comentario: "",
  });

    setSubmitStatus(true);
  }

  return (
    <>
      <h2>Respostas</h2>
      {topic.comentarios.map((currentComentarios) => {
        return (
          <div>
            <p>{currentComentarios.nome}</p>
            <small>{currentComentarios.comentario}</small>
          </div>
        );
      })}

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="nome" value={form.nome} placeholder="Nome"/>
        <input onChange={handleChange} name="comentario" value={form.comentario}  placeholder="Comentario"/>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}