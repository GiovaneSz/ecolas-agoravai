import React from 'react';
import '../componentes/HomeDecore.scss';
//import Escola from './escolas2.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="Home">
      <header>
          <a href="/home">Home</a>
          <Link to="/escolas">
            <a>Escolas</a>
          </Link>
          <a href="/cadastro">Cadastrar</a>
          
      </header>
      <nav>
          <div>
              <h1>Faça seu cadastro</h1>
          </div>
          <div>
              <h1>Já possui cadastro?
                  Login aqui.
              </h1>
          </div>
      </nav>
     

    </div>
  );
}

export default Home;