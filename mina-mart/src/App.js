import React from 'react';
import Navbar from './Included/Navbar';
import './index.css';
import Footer from './Included/Footer';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
        <>
          <Navbar />

          {/* main content and side bar */}

          <div className=" bg-gray-100">
            {/* side bar */}
            <div className='grid grid-rows-3 flex-col lg:block md: '>
               gcg
            </div>
          
          </div>
          <div>
            {/* main content */}
            <div className='h-screen '>
                gcg
            </div>
          </div>


         

          <Footer />
        
        </>
        
    
   
  );
}

export default App;


