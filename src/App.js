
import React from "react";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './Components/Header';
//import Footer from './Components/Footer';
 import About from './Components/About';
 import Contact from './Components/Contact';
 import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
function App() {

  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path='/' element={<About />} smooth={true} offset={-500} duration={500}/>
          {/* <Link to={<About />} smooth={true} offset={-500} duration={500}></Link> */}
          <Route path='/' element={<About />}/>

          <Route path='/portfolio' element={<Portfolio />} smooth={true} offset={-500} duration={500}/>

          <Route path='/contact' element={<Contact />}/>

          <Route path='/About' element={<About />}/>
          
          <Route path='/resume' element={<Resume />} />
          
          </Routes> 
            {/* <Footer /> */}
      </Router>
      )
}


      export default App;
