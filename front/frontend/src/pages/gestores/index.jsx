import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from '../../components/head';
import './styles.css';

export default function Gestores() {
  const [formData, setFormData] = useState({
    ni: '',
    nome: '',
    area: '',
    cargo: ''
  });

  const [gestores, setGestores] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchGestores();
  }, []);

  const fetchGestores = () => {
    axios.get('http://localhost:8000/api/gestores/')
      .then(res => setGestores(res.data))
      .catch(err => console.error('Erro ao carregar gestores:', err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = editingId
      ? axios.put(`http://localhost:8000/api/gestores/${editingId}/`, formData)
      : axios.post('http://localhost:8000/api/gestores/', formData);

    request
      .then(() => {
        setSuccessMsg(editingId ? 'Gestor atualizado com sucesso!' : 'Gestor cadastrado com sucesso!');
        setErrorMsg('');
        setFormData({ ni: '', nome: '', area: '', cargo: '' });
        setEditingId(null);
        fetchGestores();
      })
      .catch(err => {
        console.error(err);
        setSuccessMsg('');
        setErrorMsg('Erro ao salvar os dados.');
      });
  };

  const handleEdit = (gestor) => {
    setFormData({
      ni: gestor.ni,
      nome: gestor.nome,
      area: gestor.area,
      cargo: gestor.cargo
    });
    setEditingId(gestor.id);
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ ni: '', nome: '', area: '', cargo: '' });
    setSuccessMsg('');
    setErrorMsg('');
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este gestor?')) {
      axios.delete(`http://localhost:8000/api/gestores/${id}/`)
        .then(() => {
          setSuccessMsg('Gestor excluído com sucesso!');
          setErrorMsg('');
          fetchGestores();
        })
        .catch(err => {
          console.error(err);
          setSuccessMsg('');
          setErrorMsg('Erro ao excluir o gestor.');
        });
    }
  };

  return (
    <div className="container">
      <Head />
      <h2 className="title">{editingId ? 'Editar Gestor' : 'Novo Gestor'}</h2>

      {successMsg && <p className="success">{successMsg}</p>}
      {errorMsg && <p className="error">{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>NI (Código):</label>
          <input type="text" name="ni" value={formData.ni} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Área:</label>
          <input type="text" name="area" value={formData.area} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Cargo:</label>
          <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} required />
        </div>

        <button type="submit">{editingId ? 'Atualizar' : 'Cadastrar'} Gestor</button>

        {editingId && (
          <button type="button" className="cancel-button" onClick={handleCancelEdit}>Cancelar Edição</button>
        )}
      </form>

      <h3 className="subtitle">Gestores Cadastrados</h3>
      <div className="gestores-grid">
        {gestores.map(gestor => (
          <div key={gestor.id} className="gestor-card">
            <p><strong>Nome:</strong> {gestor.nome}</p>
            <p><strong>Área:</strong> {gestor.area}</p>
            <p><strong>Cargo:</strong> {gestor.cargo}</p>
            <button onClick={() => handleEdit(gestor)}>Editar</button>
            <button onClick={() => handleDelete(gestor.id)} className="cancel-button">Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
}
