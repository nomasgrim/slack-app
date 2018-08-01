import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <p>Cliff is here</p>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <HelloWorld />
      </Fragment>
    );
  }
}

export default App;
