import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import '../styles/App.css';
import Header from './Header'
import Home from './Home'
import Apropos from './Apropos'
import FicheLogement from './FicheLogement'
import Footer from './Footer'


function App ()
{
  return (
    <div className="container">
      <Router>
        <Header />
        <Route path="/" exact component={ Home } />
        <Route path="/apropos" exact component={ Apropos } />
        <Route path="/logement/:id" component={ FicheLogement } />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
