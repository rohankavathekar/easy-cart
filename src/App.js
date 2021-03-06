import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Catagories from './components/Catagories';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 

const App = () => {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Catagories} />
        <Route path="/products" component={Products} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;