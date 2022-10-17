import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import '../styles/App.css';
import Header from './Header'
import Home from './Home'
import Apropos from './Apropos'
import Footer from './Footer'
import Error from './Error'

function App ()
{
  return (
    <div className="container">
      <Router>
        <Header />
        <Route path="/" component={ Home } />
        <Route path="/apropos" component={ Apropos } />
        <Route path="*" component={ Error } />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
