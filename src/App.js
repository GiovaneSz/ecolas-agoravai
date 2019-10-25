import React from 'react';
import Cadastro from '../src/componentes/js/Cadastro.js';
import Home from './componentes/js/Home';
import './App.scss';
import Escolas from './componentes/js/Escolas.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path= "/" component={Home}/>
      <Route path="/escolas" component={Escolas}/>
      <Route path="/cadastro" component={Cadastro}/>
    </BrowserRouter>
    </div>
  );
}

export default App;