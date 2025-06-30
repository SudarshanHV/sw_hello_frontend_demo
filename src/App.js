import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  const [name, setName] = useState('World');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React App</h1>
        <Greeting name={name} />
        
        <div className="input-section">
          <label htmlFor="nameInput">Change greeting name:</label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name"
          />
        </div>

        <Counter />
        
        <footer>
          <p>Built with React - A simple hello world application</p>
        </footer>
      </header>
    </div>
  );
}

export default App;