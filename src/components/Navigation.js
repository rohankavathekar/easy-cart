import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

const Navigation = () => {
  return (

    <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      <Link to="/">
        <img src="img/logo.png" width="100" alt="store" className="navbar-brand pl-3" />
      </Link>
      <Link to="/cart" className="ml-auto">
        <h6 className="pr-3 pl-3 pt-2">
          <span>
          <i className="fa fa-shopping-cart pr-2"></i>
          </span>
          My Cart
        </h6>
      </Link>
  </Nav>
  );
};

export default Navigation;