import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Connexion from './components/Connexion';
import { Route , Switch} from 'react-router-dom';
import Error404 from './components/Error404';
import PseudoCo from './components/PseudoCo';


function App() {
  return (
    <div className="Box" >
      <Switch>
    <Route exact path='/' component={Connexion}/>
    <Route path='/pseudo/:pseudo' component={PseudoCo}/>

    <Route component={Error404}/>
    </Switch>
    </div>
  );
}

export default App;
