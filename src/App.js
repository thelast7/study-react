import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Component/Greet';
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import { Ulanggreet } from './TestComponent/Ulanggreet';
import Ulangwelcome from './TestComponent/Ulangwelcome';
import Ulanghello from './TestComponent/Ulanghello';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Greet />
        <Welcome />
        <Hello />

        <Ulanggreet />
        <Ulangwelcome />
        <Ulanghello />
      </div>
    );
  }
}

export default App;
