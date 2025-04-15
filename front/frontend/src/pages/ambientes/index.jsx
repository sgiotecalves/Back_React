// src/pages/Ambientes.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Head from '../../components/head'; // se estiver duas pastas acima
import './styles.css';

export default function Ambientes() {
  const [formData, setFormData] = useState({
    ni: '',
    nome: ''
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/ambientes/', formData)
      .then(res => {
        setSuccessMsg('Ambiente cadastrado com sucesso!');
        setErrorMsg('');
        setFormData({ ni: '', nome: '' });
      })
      .catch(err => {
        console.error(err);
        setSuccessMsg('');
        setErrorMsg('Erro ao cadastrar o ambiente.');
      });
  };

  return (
    <div className="container_a">
      <Head />
      <h2>Novo Ambiente</h2>

      {successMsg && <p className="success">{successMsg}</p>}
      {errorMsg && <p className="error">{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>NI (Código):</label>
          <input type="text" name="ni" value={formData.ni} onChange={handleChange} required />
        </div>

        <div>
          <label>Nome do Ambiente:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>

        <button type="submit">Cadastrar Ambiente</button>
      </form>
    </div>
  );
}
