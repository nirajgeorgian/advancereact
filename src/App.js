import React, { Component } from 'react';
import Toggle from './Toggle'
import { withToggle } from './Toggle'
import logo from './logo.svg';
import './App.css';

const MyToggle = withToggle(({toggle: { on, toggle }}) => (
  <button onClick={toggle}>{on ? 'On' : 'Off'}</button>
))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle
          onToggle={(data) => console.log(data)}
        >
          <Toggle.Button />
          <Toggle.On>Toggle is On</Toggle.On>
          <Toggle.Off>Toggle is Off</Toggle.Off>
          <MyToggle />
          <hr />
        </Toggle>
      </div>
    );
  }
}

export default App;
