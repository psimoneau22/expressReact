import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test test={`test: ${this.props.appData.test}`} />
      </div>
    );
  }
}

export default App;
