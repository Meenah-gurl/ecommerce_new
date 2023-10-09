import React from 'react';
import Navbar from './Included/Navbar';
import './index.css';
import Footer from './Included/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
        <>
          <Navbar />
          {/* <Router>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/products' component={Products} />
              <Route path='/services' component={Services} />
              <Route path='/sign-up' component={SignUp} />
            </Switch>
          </Router> */}
          <div className='bg-[#ffffff]'>
            {/* main content */}
            <div className='space-y-2'>
                <Home/>
                <About/>
            </div>
          </div>

          <Footer />
        
        </>
        
    
   
  );
}

export default App;


