import React from 'react';
//import Cadastro from '../src/componentes/Cadastro';
import Home from './componentes/Home';
import './App.scss';
import Escolas from './componentes/Escolas.jsx';
import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path= "/" component={Home}/>
      <Route path="/escolas" component={Escolas}/>
    </BrowserRouter>
    </div>
  );
}

export default App;