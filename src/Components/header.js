import React from "react";
import { Navbar, Nav, Container
 } from "react-bootstrap";
 //import About from './About';


const Header =()=>{
return(
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Durga</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="About">AboutMe</Nav.Link>
         
            <Nav.Link href="#link">Portfolio</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
)
}

export default Header