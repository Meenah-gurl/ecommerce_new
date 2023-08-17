import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-5 lg:px-0 px-5'>
      <div className=' max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-5 md:grid-cols-1 grid-cols-1 gap-2'>
          {/* Column 1 */}
          <div className='text-white'>
            <h1 className='text-2xl font-bold'>Mina<span className='text-green-700'>Mart</span></h1>
            <p className='max-w-lg text-sm font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum adipisicing elit. Quisquam, voluptatum .</p>
          </div>
         
           {/* // Column 2 */}
            <div className='text-white'>
              <h1 className='text-md mb-2'>INFORMATION</h1>
              <hr className='border-2 border-green-700 w-8 mb-2' />

              <div>
                <ul className='space-y-2 font-mono'>
                  <li>About us</li>
                  <li>Delivery Information</li>
                  <li>Inventory Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Contact Us</li>
                </ul>
              </div>
           </div>

          <div className='text-white'>
              <h1 className='text-md mb-2'>MY ACCOUNT</h1>
              <hr className='border-2 border-green-700 w-8 mb-2' />

              <div>
                <ul className='space-y-2 font-mono'>
                  <li>My Account</li>
                  <li>Order History</li>
                  <li>My Waitlist</li>
                  <li>Orders</li>
                  <li>Shopping</li>
                  <li>Orders</li>
                </ul>
              </div>
          </div>

          <div className='text-white'>
              <h1 className='text-md mb-2'>EXTRA</h1>
              <hr className='border-2 border-green-700 w-8 mb-2' />

              <div>
                <ul className='space-y-2 font-mono'>
                  <li>My Account</li>
                  <li>Order History</li>
                  <li>My Waitlist</li>
                  <li>Orders</li>
                  <li>Shopping</li>
                  <li>Orders</li>
                </ul>
              </div>
          </div>

          <div className='text-white'>
              <h1 className='text-md mb-2'>CONTACT INFO</h1>
              <hr className='border-2 border-green-700 w-8 mb-2' />

              <div>
                <ul className='space-y-2 font-mono'>
                  <li>Address: <br /> <span className=''> Umuerim road, opposite Mela's lodge, Owerri, Imo State.</span> </li>
                  <li>Phone: 09034364675</li>
                  <li>Fax: 000 678 11</li>
                  <li>Email: meenahsani8@yahoo.com</li>
                  
                </ul>
              </div>
          </div>

        </div> 
        <hr className=' mt-5 border-1' />
        <small className='text-white'>copyright&copy;2023 Mina Mart. All Right Reserved</small>
      </div>
    </div>
  )
}

export default Footer