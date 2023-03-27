
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
//import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
 import About from './Components/About';

function App() {

  return (
    <Router>
      <Header />
      {/* <main> */}
        {/* <Container> */}
        <Routes>
          <Route path='/about' Component={About} />
          </Routes> 
        {/* </Container> */}
         
      
      {/* </main> */}
      <Footer />
      </Router>
      )
}


      export default App;
