import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Comentario() {
  const { topicId } = useParams();
  const [topic, setTopic] = useState({comentarios: [] });
  const [form, setForm] = useState({
    nome: "",
    comentario: "",
  });

  const [submitStatus, setSubmitStatus] = useState(false);

  useEffect(() => {
    async function fetchTopic() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/camila-dante/${topicId}`
      );
      setTopic(response.data);
      setSubmitStatus(false);
    }

    fetchTopic();
  }, [topicId, submitStatus]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const attTopic = { ...topic };
    attTopic.comentarios.push(form);

    delete attTopic._id;

    await axios.put(
      `https://ironrest.herokuapp.com/camila-dante/${topicId}`,
      attTopic
    );

    setSubmitStatus(true);
  }

  return (
    <>
      <h1>{topic.insttuicao}</h1>
      <p>{topic.descricao}</p>

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