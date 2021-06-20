import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Square() {
  return <button className="square"></button>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setCount(count + 1)}>
          you click {count} times
        </button>
        <Square></Square>
      </header>
    </div>
  );
}

export default App;
