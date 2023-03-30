import React from "react";
import { Navbar, Container
 } from "react-bootstrap";

import {NavLink} from 'react-router-dom';

const Header =()=>{
 return(
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Durga</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="headertiles">
           
           <li><NavLink to="/about" style={{textDecoration:'none',color:"white"}}>AboutMe</NavLink></li>

           <li><NavLink to="/portfolio" style={{textDecoration:'none',color:"white"}}>Portfolio</NavLink></li>

            <li><NavLink to="/contact" style={{textDecoration:'none',color:"white"}}>Contact</NavLink></li>
            <li><NavLink to="/resume" style={{textDecoration:'none',color:"white"}}>Resume</NavLink></li>
            </ul>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
)
}

export default Header