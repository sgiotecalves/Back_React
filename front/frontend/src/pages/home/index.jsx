import React from 'react';
import './styles.css';  // Estilo separado para a página
import Head from '../../components/head';
import { Link } from 'react-router-dom';  // Link interno

export default function Home() {
  return (
    <div>
      <main>
        <div className="container">
          <Head />
          <section className="welcome-section">
            <h2>Bem-vindo à Gestão de Patrimônios!</h2>
            <p>
              Esta é a plataforma para gerenciar e organizar os seus patrimonios,
              ambientes, manutentores e gestores.
              <Link to="/sobre"> Saiba mais</Link>.
            </p>
          </section>
          <section className="features">
            <h3>Funcionalidades</h3>
            <ul>
              <li>
                <Link to="/ordem-servico">
                  Registre e acompanhe ordens de serviço com facilidade.
                </Link>
              </li>
              <li>
                <Link to="/patrimonios">
                  Visualize e administre patrimônios facilmente.
                </Link>
              </li>
              <li>
                <Link to="/ambientes">
                  Gerencie os ambientes em que os patrimônios estão localizados.
                </Link>
              </li>
              <li>
                <Link to="/manutentores">
                  Monitore a manutenção realizada pelos manutentores.
                </Link>
              </li>
              <li>
                <Link to="/gestores">
                  Controle o acesso e a administração dos gestores.
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
