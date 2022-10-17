import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import '../styles/App.css';
import Header from './Header'

function App ()
{
  return (
    <div className="container">
      <Router>
        <Header />
      </Router>

    </div>
  );
}

export default App;
