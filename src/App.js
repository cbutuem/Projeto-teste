import './App.css';
import { Boxpost } from '../src/components/Boxpost/Boxpost';
//import { useState, useEffect } from "react";
//import axios from "axios";
import {Routes, Route } from "react-router-dom";
import { Mural } from '../src/components/Mural/Mural';
import { Navbar } from './components/Navbar/Navbar';
import { ReadDetails } from './components/ReadDetails/ReadDetails';
import { Edit } from './components/Edit/Edit';
import { Senha } from './components/Senha/Senha';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Mural/>}/>
        <Route path="/box-post" element={<Boxpost/>}/>
        <Route path="/detail/:userId" element={<ReadDetails/>}/>
        <Route path="/edit/:userId" element={<Edit/>}/>
        <Route path="/senha/:userId" element={<Senha/>}/>

      </Routes>      
    </div>
  );
}

export default App;
