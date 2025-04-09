import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/Home";
import Head from "./components/head";
import OrdemServico from './pages/ordem-servico/OrdemServico';
import Patrimonios from './pages/patrimonios/patrimonios'; // ou 'Patrimonios' se o arquivo tiver P maiúsculo
import Ambientes from './pages/ambientes';
import Manutentores from './pages/manutentores'; // ajuste o caminho se necessário
import Gestores from './pages/gestores';

 // <- CORREÇÃO AQUI

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ordem-servico" element={<OrdemServico />} />
        <Route path="/patrimonios" element={<Patrimonios />} /> {/* <- E AQUI */}
        <Route path="/head" element={<Head />} />
        <Route path="/ambientes" element={<Ambientes />} />
        <Route path="/manutentores" element={<Manutentores />} />
        <Route path="/gestores" element={<Gestores />} />
      </Routes>
    </Router>
  );
}

export default App;
