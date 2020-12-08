import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const TopMenu = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand>React App</Navbar.Brand>
        </Link>
        
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default TopMenu;
