
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
//import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
 import About from './Components/About';
 import Contact from './Components/Contact';
 import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
function App() {

  return (
    <Router>
      <Header />
      {/* <main> */}
        {/* <Container> */}
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/resume' element={<Resume />} />
          
          </Routes> 
        {/* </Container> */}
         
      
      {/* </main> */}
      <Footer />
      </Router>
      )
}


      export default App;
