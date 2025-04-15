// src/components/head/index.jsx
import React from 'react';
import './styles.css'; // Estilo separado
import { Link } from 'react-router-dom'; // Usar Link ao invés de <a>

export function Head() {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/home">
          <h1>Gestão de Patrimônios</h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/patrimonios">Patrimônios</Link></li>
          <li><Link to="/ambientes">Ambientes</Link></li>
          <li><Link to="/manutentores">Manutentores</Link></li>
          <li><Link to="/gestores">Gestores</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Head;
