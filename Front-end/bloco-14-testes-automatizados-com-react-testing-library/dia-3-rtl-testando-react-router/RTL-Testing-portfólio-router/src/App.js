import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Início</Link>
        <Link to="/about">Sobre Mim</Link>
        <Link to="/contact">Contatos</Link>
        <Link to="/projects">Projetos</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route path="/projects" component={ Projects } />
        <Route path="*" component={ NotFound } />
      </Switch>
      <header className="App-header">
        <h1>Meu portifólio</h1>
      </header>
    </div>
  );
}

export default App;
