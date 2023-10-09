import React, { Fragment, useState } from 'react';
import { HiMail } from 'react-icons/hi';
import {FiSmartphone} from 'react-icons/fi'
import {FiSearch} from 'react-icons/fi'
import {PiHandbagLight} from 'react-icons/pi'

const Navbar =() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    const modal = document.querySelector('.modal');

    button.addEventListener('mouseover', () => {
        modal.style.display = 'block';
      });
      
      button.addEventListener('mouseout', () => {
        modal.style.display = 'none';
      });
  
    // button.addEventListener('mouseleave', () => {
    //   modal.style.display = 'none';
    // });
  });

  return (
    <Fragment>
        <div className=''>
            <div className='bg-black text-gray-400 w-full px-12 py-4 '>
                <div id="blackheader" className='lg:flex lg:justify-between '>
                    <div className='flex justify-center gap-2'>
                        <span className=' hover:text-white cursor-pointer ease-in'><a href="#">Login</a></span>
                        <hr className='border-r-3 border-gray-600 w-4 rotate-90 mt-3' />
                        <span className='hover:text-white cursor-pointer ease-in'><a href="#">Signup</a></span>
                    </div>

                    <div className='flex text-center lg:text-start  lg:gap-2'>
                        <span className='flex gap-1'><FiSmartphone className='mt-1'/>+86.36.166</span>
                        <hr className='border-r-3 border-gray-600 w-4 rotate-90 mt-3 hidden  lg:block' />
                        <span className='flex gap-1'><HiMail className='mt-2'/>contact@yourdomain.com</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white  py-5 px-6">
            <nav className="container mx-auto flex items-center  py-4">
                <div className="flex md:flex-grow-0 flex-grow">
                    <img src="/logo.png" alt="no image" />
                    <hr className=' md:flex hidden bg-gray-500 w-10 py-[1px] rotate-90 mt-7' />
                </div>
            
                <div className="md:hidden md:order-first order-last ml-12">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-8 h-8"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            {isOpen ? (
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`tab md:flex flex-grow text-gray-700 ${isOpen ? 'block' : 'hidden'}`} >
                    <a href="#" className={activeTab === 'home' ? 'active' : 'text-black font-bold mx-5'} onClick={() => handleTabClick('home')} >
                        Home
                    </a>
                    <a href="#" className={activeTab === 'about' ? 'active' : 'mx-5'} onClick={() => handleTabClick('about')} >
                        About
                    </a>
                    <a href="#" className={activeTab === 'shop' ? 'active' : 'mx-5'} onClick={() => handleTabClick('shop')} >
                        Shop
                    </a>
                    <a href="#" className={activeTab === 'blog' ? 'active' : 'mx-5'} onClick={() => handleTabClick('blog')} >
                        Blog
                    </a>
                    <a href="#" className= {activeTab === 'contact' ? 'active' : 'mx-5'} onClick={() => handleTabClick('contact')} >
                        Contact
                    </a>
                </div>

                <div className='flex gap-3 '>
                    <div className='lg:flex gap-2 hidden'>
                        <h4 className='font-bold text-lg mt-3'>Search</h4>
                        <div className='rounded-full h-10 w-10 p-3 mt-1 bg-gray-300'><FiSearch/></div>
                    </div>
                    <div className='lg:flex hidden'>
                        <button id='myButton' className='button flex gap-2'>Basket (0) <PiHandbagLight className='mt-1'/></button>
                        <div id='myModal' className='modal shadow-sm shadow-white bg-red-800 rounded-md py-4 px-4 w-96 h-60'>
                            <div id='modalImage' className='w-24  absolute right-0 left-32 top-10 flex justify-center items-center'>
                                <p className='text-gray-400 font-bold text-center'>CART IS EMPTY</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:hidden block'>
                        <button id='' className='flex bg-[#f4952c] rounded-full h-12 w-12 p-3 ml-14 text-white justify-center'><PiHandbagLight className='mt-1'/></button>
                    </div>
                </div>
            </nav>
        </div>
    </Fragment>
 
  );
}

export default Navbar;
