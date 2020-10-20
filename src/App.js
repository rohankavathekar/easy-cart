import React from 'react';
import Navbar from './components/Navbar';
import Catagories from './components/Catagories';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  return (
    <div>
      <Navbar/>
      <Catagories/>
      <Products/>
      <Details/>
      <Cart/>
    </div>
  );
};

export default App;