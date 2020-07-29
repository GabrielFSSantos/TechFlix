import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video/index.js';
import CadastroCategoria from './pages/cadastro/Categoria/index.js';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component={() => (<div>Página não Encontrada: Erro 404</div>)} />
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <Home />
  // </React.StrictMode>,
  document.getElementById('root')
);
