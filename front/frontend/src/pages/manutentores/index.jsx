import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from '../../components/head';
import './styles.css';

export default function Manutentores() {
  const [formData, setFormData] = useState({
    ni: '',
    nome: '',
    area: '',
    gestor: ''
  });

  const [gestores, setGestores] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/gestores/')
      .then(res => {
        setGestores(res.data);
      })
      .catch(err => {
        console.error('Erro ao buscar gestores', err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/manutentores/', formData)
      .then(res => {
        setSuccessMsg('Manutentor cadastrado com sucesso!');
        setErrorMsg('');
        setFormData({ ni: '', nome: '', area: '', gestor: '' });
      })
      .catch(err => {
        console.error(err);
        setSuccessMsg('');
        setErrorMsg('Erro ao cadastrar o manutentor.');
      });
  };

  return (
    <div className="container">
      <Head />
      <h2>Novo Manutentor</h2>

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
          <label>Gestor:</label>
          <select name="gestor" value={formData.gestor} onChange={handleChange} required>
            <option value="">Selecione um gestor</option>
            {gestores.map(gestor => (
              <option key={gestor.id} value={gestor.id}>
                {gestor.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Cadastrar Manutentor</button>
      </form>
    </div>
  );
}
