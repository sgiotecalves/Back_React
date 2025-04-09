import React, { useState } from 'react';
import axios from 'axios';
import Head from '../../components/head';
import './styles.css'; // Lembre de criar esse arquivo ou remover essa linha

export default function Gestores() {
  const [formData, setFormData] = useState({
    ni: '',
    nome: '',
    area: '',
    cargo: ''
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
    axios.post('http://localhost:8000/api/gestores/', formData)
      .then(res => {
        setSuccessMsg('Gestor cadastrado com sucesso!');
        setErrorMsg('');
        setFormData({
          ni: '',
          nome: '',
          area: '',
          cargo: ''
        });
      })
      .catch(err => {
        console.error(err);
        setSuccessMsg('');
        setErrorMsg('Erro ao cadastrar o gestor.');
      });
  };

  return (
    <div className="container">
      <Head />
      <h2>Novo Gestor</h2>

      {successMsg && <p className="success">{successMsg}</p>}
      {errorMsg && <p className="error">{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>NI (Código):</label>
          <input type="text" name="ni" value={formData.ni} onChange={handleChange} required />
        </div>

        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>

        <div>
          <label>Área:</label>
          <input type="text" name="area" value={formData.area} onChange={handleChange} required />
        </div>

        <div>
          <label>Cargo:</label>
          <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} required />
        </div>

        <button type="submit">Cadastrar Gestor</button>
      </form>
    </div>
  );
}
