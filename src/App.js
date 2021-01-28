import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <div className="flex flex-col items-center w-screen p-8">
          <h1 className="text-5xl">tailwindCSS</h1>
          <h2 className="text-4xl">Component Library</h2>
        </div>
        <div className="options">
          <Switch>
            <Route path='./components/Navbar.js'>
              <Navbar />
            </Route>
            <Route path='./components/Hero.js'>
              <Hero />
            </Route>
            <Route path='./components/Feature.js'>
              <Feature />
            </Route>
            <Route path='./components/Card.js'>
              <Card />
            </Route>
            <Route path='./components/Contact.js'>
              <Contact />
            </Route>
            <Route path='./components/Footer.js'>
              <Footer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;