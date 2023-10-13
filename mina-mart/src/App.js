import React from 'react';
import Navbar from './Included/Navbar';
import './index.css';
import Footer from './Included/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

function App() {
  return (
        <>
          <Navbar />
          <Router>
              <Routes>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/shop' component={Shop} />
                <Route path='/blog' component={Blog} />
                <Route path='/contact' component={Contact} />
              </Routes>
          </Router>
          <div className='bg-[#ffffff]'>
            {/* main content */}
            <div className='space-y-2'>
                <Home/>
                {/* <About/> */}
            </div>
          </div>

          <Footer />
        
        </>
   
  );
}

export default App;


