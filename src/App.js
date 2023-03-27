
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
 import About from './Components/About';

function App() {

  return (
    <Router>
      <Header />
      <main>
        <Container>
        <Routes path='/about' Component={About} />
        </Container>
         
      
      </main>
      <Footer />
      </Router>
      )
}


      export default App;
