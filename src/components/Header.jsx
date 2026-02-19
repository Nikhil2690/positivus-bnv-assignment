import React, { useState } from 'react'
import HeaderLogo from '../../public/HeaderIcon.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='sticky w-full h-20 top-0 bg-white z-50 flex items-center justify-around md:justify-around px-6'>
      <div className='flex gap-3 items-center'>
        <img src={HeaderLogo} alt='logo' className='h-8 w-8' />
        <h1 className='text-black font-bold text-xl'>Positivus</h1>  
      </div>

      <div className='hidden md:block text-black'>
        <ul className='flex items-center gap-10'>
          <li><a href="#" className='hover:text-gray-600'>About us</a></li>
          <li><a href="#" className='hover:text-gray-600'>Services</a></li>
          <li><a href="#" className='hover:text-gray-600'>Use Cases</a></li>
          <li><a href="#" className='hover:text-gray-600'>Pricing</a></li>
          <li><a href="#" className='hover:text-gray-600'>Blog</a></li>
          <button className='border border-black px-6 py-2 rounded-lg transition'>
            Request a quote
          </button>
        </ul>
      </div>

      <div className='md:hidden flex items-center'>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className='text-black focus:outline-none'
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-white border-b border-gray-200 md:hidden flex flex-col items-center py-6 gap-6 shadow-lg z-40'>
          <ul className='flex flex-col items-center gap-6 text-black text-lg'>
            <li><a href="#" onClick={() => setIsOpen(false)}>About us</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Use Cases</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Pricing</a></li>
            <li><a href="#" onClick={() => setIsOpen(false)}>Blog</a></li>
            <button className='border border-black px-6 py-2 rounded-lg'>
              Request a quote
            </button>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Header