import React, { useEffect, useState } from 'react';
import Head from '../../components/head';
import axios from 'axios';
import "./styles.css"

export default function OrdemServico() {
  const [formData, setFormData] = useState({
    descri: '',
    status: '',
    prio: '',
    patri: '',
    ambi: '',
    manu: '',
    respo: '',
  });

  const [patrimonios, setPatrimonios] = useState([]);
  const [ambientes, setAmbientes] = useState([]);
  const [manutentores, setManutentores] = useState([]);
  const [gestores, setGestores] = useState([]);

  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/patrimonios/').then(res => {
      console.log('Patrimonios:', res.data); // debug
      setPatrimonios(res.data);
    });

    axios.get('http://localhost:8000/api/ambientes/').then(res => {
      console.log('Ambientes:', res.data); // debug
      setAmbientes(res.data);
    });

    axios.get('http://localhost:8000/api/manutentores/').then(res => {
      console.log('Manutentores:', res.data); // debug
      setManutentores(res.data);
    });

    axios.get('http://localhost:8000/api/gestores/').then(res => {
      console.log('Gestores:', res.data); // debug
      setGestores(res.data);
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
    axios.post('http://localhost:8000/api/ordem-servico/', formData)
      .then(res => {
        setSuccessMsg('Ordem de Serviço registrada com sucesso!');
        setFormData({
          descri: '',
          status: '',
          prio: '',
          patri: '',
          ambi: '',
          manu: '',
          respo: '',
        });
      })
      .catch(err => {
        console.error(err);
        setSuccessMsg('Erro ao registrar ordem de serviço.');
      });
  };

  return (
    <div className="container">
      <Head />
      <h2>Nova Ordem de Serviço</h2>
      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
      <form onSubmit={handleSubmit} className="ordem-form">
        <div>
          <label>Descrição:</label>
          <textarea name="descri" value={formData.descri} onChange={handleChange} required />
        </div>

        <div>
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="iniciada">Iniciada</option>
            <option value="em_andamento">Em andamento</option>
            <option value="finalizada">Finalizada</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </div>

        <div>
          <label>Prioridade:</label>
          <select name="prio" value={formData.prio} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
          </select>
        </div>

        <div>
          <label>Patrimônio:</label>
          <select name="patri" value={formData.patri} onChange={handleChange}>
            <option value="">(Opcional)</option>
            {patrimonios.map(p => (
              <option key={p.id} value={p.id}>
                {p.ni} - {p.desc}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Ambiente:</label>
          <select name="ambi" value={formData.ambi} onChange={handleChange} required>
            <option value="">Selecione</option>
            {ambientes.map(a => (
              <option key={a.id} value={a.id}>
                {a.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Manutentor:</label>
          <select name="manu" value={formData.manu} onChange={handleChange} required>
            <option value="">Selecione</option>
            {manutentores.map(m => (
              <option key={m.id} value={m.id}>
                {m.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Responsável:</label>
          <select name="respo" value={formData.respo} onChange={handleChange}>
            <option value="">(Opcional)</option>
            {gestores.map(g => (
              <option key={g.id} value={g.id}>
                {g.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Registrar OS</button>
      </form>
    </div>
  );
}
