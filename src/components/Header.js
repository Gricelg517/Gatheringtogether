import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header= () => {
  return <header>
      return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>Container>Gathering Together</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href='/login'><i className= 'fas fa-user'></i> Sign In </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

    </header>
}

export default Header
