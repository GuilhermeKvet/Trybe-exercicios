import React from 'react'
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['estudar', 'trabalhar', 'descansar'].map((compromisso) => Task(compromisso));

function App() {
  return (<ul>{compromissos.map((compromisso) => Task(compromisso))}</ul>);
}

export default App;
