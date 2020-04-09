import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  return (

      <header className="App-header">
        <a> Bienvenue dans le Pokedex</a> 
        <img src={logo} className="App-logo" alt="logo" />            
<div className="Nav">      
  <a class="navbar-brand"></a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>  
  </form>
 </div>
      </header>


   
  );
}
export default App;