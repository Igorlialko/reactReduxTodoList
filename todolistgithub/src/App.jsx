import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact render={() => <Home/>} />
          <Route path='/services' render={() => <Services/>} />
          <Route path='/products' render={() => <Products/>} />
          <Route path='/sign-up' render={() => <SignUp/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
