import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import '../styles/App.css';
import Header from '../components/Header'
import Home from '../pages/Home'
import Apropos from '../pages/Apropos'
import FicheLogement from '../pages/FicheLogement'
import Error from '../pages/Error'
import Footer from '../components/Footer'




/*Switch  nous permet d'afficher uniquement la première route dont le chemin correspond, 
et on ajoute une route à laquelle on ne passe pas de prop  path.
En indiquant une route sans path à la fin du Switch, cela permet de capturer toutes les routes 
dont le path ne correspond à aucune route déclarée, et donc de créer une page 404.*/

function App ()
{
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/apropos" exact component={ Apropos } />
          <Route path="/fichelogement/:id" component={ FicheLogement } />
          <Route path="*" component={ Error } />
        </Switch>
        <Footer />
      </Router>
        
    </div>
  );
}

export default App;
