import React, { Component } from 'react';
import { NavBar } from './NavBar.js';
import { AboutPage } from './AboutPage.js';
import { AppRouter } from './AppRouter.js';
import { Carousel } from './Carousel.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class App extends Component {
  render() {
    return (
      
      <div className="App">

        <header className="App-header">
          <NavBar />
        </header>
          <Carousel className="carousel-item active"/>
          <br/>
          <AppRouter />
          <AboutPage />
      </div>
    );
  }
}

export default App;