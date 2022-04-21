import './App.css';
import { Boxpost } from '../src/components/Boxpost/Boxpost';
import { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route } from "react-router-dom";
import { Botao } from './components/Botao/Botao';
import { Mural } from '../src/components/Mural/Mural';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [post, setpost] = useState([]);
  // === USE EFFECT ===
  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/camila-dante"
      );
      setpost(response.data.results);
    }
    fetchPost();
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Botao/>}/>
        <Route path="/box-post" element={<Boxpost/>}/>
        <Route path="/mural" element={<Mural/>}/>
      </Routes>      
    </div>
  );
}

export default App;
