import React, { Component } from 'react';

import { NavBar } from './NavBar.js';
import { AboutPage } from './AboutPage.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <body className="App-body">
          <AboutPage/>
        </body>
      </div>
    );
  }
}

export default App;