import React from 'react';
import '../css/EscolasDecore.scss';
import { Link } from 'react-router-dom';



const Escolas = () => {
  return (
    <div className="Escolas"> 
    <nav>
    <Link to="/">
      <a>Home</a>
      </Link>
      <Link to="/cadastro">
      <a>Cadastro</a>
      </Link>
    </nav>
    
    
    
    
    
    </div>
    );
  }

export default Escolas;