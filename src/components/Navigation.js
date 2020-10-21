import React from 'react';
import {link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="img/logo.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="EasyCart"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#pricing">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
             My Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;