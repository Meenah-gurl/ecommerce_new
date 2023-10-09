import React from 'react'

const Footer = () => {
  return (
    <div className='text-black py-5 lg:px-0 px-5'>
      <div className=' max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-5 md:grid-cols-1 grid-cols-1 gap-2'>
          {/* Column 1 */}
          <div className='w-ful'>
            <img src="/logo.png" alt="no image" />
          </div>
         
           {/* // Column 2 */}
            <div className='lg:ml-16 ml-0'>
              <h1 className='text-lg mb-3 font-bold'>Product</h1>

              <div>
                <ul className='space-y-2'>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Universal Cake</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Candy</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Confectionaries</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Gifts</li>
                </ul>
              </div>
           </div>

          <div className='lg:ml-10 ml-0'>
              <h1 className='text-lg mb-3 font-bold'>Company </h1>
            
              <div>
                <ul className='space-y-2'>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Conditions</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Open a Shop</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Licensing & Terms</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Technology</li>
                </ul>
              </div>
          </div>

          <div className='lg:ml-10 ml-0'>
              <h1 className='text-lg mb-3 font-bold'>About</h1>
              <div>
                <ul className='space-y-2'>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Our Mission</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Our Story</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Our Culture</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Team</li>
                </ul>
              </div>
          </div>

          <div className=''>
              <h1 className='text-lg mb-3 font-bold'>Support</h1>

              <div>
                <ul className='space-y-2'>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Get Started </li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Help Center</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Suggest A Feature</li>
                  <li className='hover:text-gray-400 hover:text-bold ease-in-out cursor-pointer'>Report A Bug</li>
                  
                </ul>
              </div>
          </div>

        </div> 
        <hr className=' mt-5 border-1' />
        <small className=''>Copyright&copy;2023 Mina Mart. All Right Reserved</small>
      </div>
    </div>
  )
}

export default Footer