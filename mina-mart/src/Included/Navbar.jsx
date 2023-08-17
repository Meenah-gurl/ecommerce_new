import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="App bg-gray-900 sticky top-0">
      <div className='max-w-7xl mx-auto'>
        <nav className=" text-black relative  shadow-sm font-mono" role="navigation">
              <div className='py-3 px-3 w-full'>
                  <div className='flex'>
                      <div className='flex justify-between '>
                        <aside>
                          <div>
                            <Link>
                              Login
                            </Link>
                          </div>
                        </aside>
                          {/* <a href="/" className="text-lg text-white">MinaMart</a> */}
                          {/* <div className="px-4 cursor-pointer  md:">
                            <svg className="w-6 h-10 text-white -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                          </div> */}
                      </div>
                  </div>
              </div>
              
        </nav>

      </div>
   
  </div>
  )
}

export default Navbar