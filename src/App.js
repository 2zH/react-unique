import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  TestFetchProxy = () => {
    const req = fetch("/api/article/1").then(body => body.json());
    console.log(req);
    return 1;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <button onClick={this.TestFetchProxy}>If you click me, i will fetch test's data and log in console.</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
