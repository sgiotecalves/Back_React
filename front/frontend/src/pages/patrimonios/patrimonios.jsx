import React, { useState } from 'react';
import Head from '../../components/head';
import axios from 'axios';
import "./styles.css"



export default function Patrimonio() {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    localizacao: ''
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
    axios.post('http://localhost:8000/api/patrimonios/', formData)
      .then(res => {
        setSuccessMsg('Patrimônio cadastrado com sucesso!');
        setErrorMsg('');
        setFormData({
          nome: '',
          descricao: '',
          localizacao: ''
        });
      })
      .catch(err => {
        console.error(err);
        setSuccessMsg('');
        setErrorMsg('Erro ao cadastrar o patrimônio.');
      });
  };

  return (
    <div className="container">
      <Head />
      <h2>Novo Patrimônio</h2>
      
      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="patrimonio-form">
        <div>
          <label>Nome do Patrimônio:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>

        <div>
          <label>Descrição:</label>
          <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} required />
        </div>

        <div>
          <label>Localização:</label>
          <input type="text" name="localizacao" value={formData.localizacao} onChange={handleChange} required />
        </div>

        <button type="submit">Cadastrar Patrimônio</button>
      </form>
    </div>
  );
}
