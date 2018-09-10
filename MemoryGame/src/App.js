import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MemoryCard from './MemoryCard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Memory Game</h1>
          <h2 className="App-subtitle">Match cards to win</h2>
        </header>

        <div><MemoryCard/><MemoryCard/><MemoryCard/><MemoryCard/></div>
        <div><MemoryCard/><MemoryCard/><MemoryCard/><MemoryCard/></div>
        <div><MemoryCard/><MemoryCard/><MemoryCard/><MemoryCard/></div>
        <div><MemoryCard/><MemoryCard/><MemoryCard/><MemoryCard/></div>
        
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
