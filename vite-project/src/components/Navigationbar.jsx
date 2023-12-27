import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Navigationbar() {
  return (
    <div>
       <Navbar expand="lg" className="bg-secondary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* <Link className='nav-link' to="/">HOME</Link> */}
                {/* <Link className='nav-link' to="/Products">Products</Link> */}
                <Link className='nav-link ' to="/Signup">Signup</Link>
                <Link className='nav-link' to="/Login">Login</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Navigationbar;


