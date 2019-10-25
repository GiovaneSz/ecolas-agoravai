import React from 'react';
//import '../componentes/HomeDecore.scss';
import '../css/CadastroDecore.scss';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  return (
    <div className="cadastro">
       <nav>
    <Link to="/">
      <a>Home</a>
      </Link>
      <Link to="/escolas">
      <a>Escola</a>
      </Link>
    </nav>
    <header>
      <div><input placeholder="Nome" type="text"/>
            <input placeholder="Email" type="email" name="" id=""/>
            <input placeholder="Senha" type="password" name="" id=""/>
            <input placeholder="Número de celular" type="tel" name="" id=""/>
            </div></header>
          
    </div>
  );
}

export default Cadastro;