import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AboutPage } from './pages/AboutPage.js';
import { FlyingDuck } from './pages/FlyingDuck.js';
import { ContactPage } from './pages/ContactPage.js';

function Index() {
  return <h1>Home</h1>;
}

function About() {
  return <AboutPage />;
}

function Contact() {
  return <ContactPage />;
}

function Random() {
  return <FlyingDuck />;
}

export function AppRouter() {
  return (
    <Router>
      <div>
        <div className="Pages"> 
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/random" component={Random} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;