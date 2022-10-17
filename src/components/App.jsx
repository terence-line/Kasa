import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import '../styles/App.css';
import Header from './Header'
import Home from './Home'
import Apropos from './Apropos'

function App ()
{
  return (
    <div className="container">
      <Router>
        <Header />
        <Route path="/" component={ Home } />
        <Route path="/apropos" component={ Apropos } />
      </Router>

    </div>
  );
}

export default App;
