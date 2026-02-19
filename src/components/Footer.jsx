import React from 'react'
import FooterLogo from '../../public/footer/footerIcon.svg'
import facebook from '../../public/footer/facebook.svg'
import twitter from '../../public/footer/twitter.svg'
import linkedin from '../../public/footer/linkedin.svg'

const Footer = () => {
  return (
    /* h-auto for mobile to stop overflow; h-screen for desktop */
    <div className='p-6 md:p-10 mt-8 h-auto md:h-screen text-white'>

      <div className='flex flex-col gap-10 md:gap-20 h-full w-full bg-[#111827] rounded-3xl md:rounded-4xl p-10 md:p-12 pb-8'>

        {/* --- TOP ROW --- */}
        <div className='flex flex-col md:flex-row items-center justify-between w-full gap-8'>
          {/* Logo */}
          <div className='flex items-center gap-3'>
            <img src={FooterLogo} alt='logo' className='h-10 w-10 mt-2' />
            <h1 className='text-2xl font-bold'>Positivus</h1>  
          </div>

          {/* Navigation */}
          <nav className='w-full md:w-auto'>
            <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-10 underline text-center'>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Use Cases</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </nav>

          {/* Desktop Socials: Hidden on mobile to allow reordering below */}
          <div className='hidden md:flex gap-4'>
            <img src={linkedin} alt='social logo' className='cursor-pointer' />
            <img src={facebook} alt='social logo' className='cursor-pointer' />
            <img src={twitter} alt='social logo' className='cursor-pointer' />
          </div>
        </div>  
            
        {/* --- MIDDLE SECTION --- */}
        <div className='flex flex-col md:flex-row justify-between w-full items-center md:items-start gap-8'>

          {/* Contact Info - Order 1 on mobile */}
          <div className='flex flex-col gap-4 items-center md:items-start text-center md:text-left order-1 md:order-none'>
            <button className='text-black custom-neon px-2 py-1 rounded-md font-bold'>
                <span>Contact Us:</span>
            </button>
            <div className='space-y-2'>
                <h5>Email: info@positivus.com</h5>
                <h5>Phone: 555-567-8901</h5>
                <h5 className='max-w-[250px] md:max-w-none'>Address: 1234 Main St, Moonstone City, Stardust State 12345</h5>
            </div>
          </div> 

          {/* Buttons Div - Order 2 on mobile (Appears in the Middle) */}
          <div className='flex flex-col md:flex-row gap-4 p-6 md:p-10 bg-[#292A32] w-full md:w-2xl rounded-2xl order-2 md:order-none'>
            <button className='px-8 py-3 !bg-black text-white w-full md:w-1/2 border border-white rounded-lg'>Email</button>
            <button className='px-8 py-3 custom-neon text-black w-full md:w-1/2 rounded-lg font-bold'>Subscribe to news</button>
          </div> 
        </div>

        {/* Mobile Social Icons - Order 3 (Below Buttons) */}
        <div className='flex md:hidden gap-6 justify-center order-3'>
            <img src={linkedin} alt='social logo' className='h-6 w-6' />
            <img src={facebook} alt='social logo' className='h-6 w-6' />
            <img src={twitter} alt='social logo' className='h-6 w-6' />
        </div>

        {/* HR - Order 4 */}
        <hr className='border-gray-600 order-4'/>

        {/* Bottom Section - Order 5 */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-10 pb-4 items-center md:items-start text-center md:text-left order-5'>
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p className='underline cursor-pointer'>Privacy Policy</p>
        </div>

      </div>
    </div>
  )
}

export default Footer