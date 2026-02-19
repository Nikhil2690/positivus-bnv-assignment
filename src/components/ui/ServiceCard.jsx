import React from 'react'
import learn from '../../../public/LearnMoreIcon.svg'

const ServiceCard = ({heading, headingBg, rightImage, cardBg}) => {
  return (
    <div className={`
      /* Layout: Grid on mobile (2 cols), Flex on desktop */
      grid grid-cols-2 md:flex md:flex-row 
      w-full md:w-2xl 
      p-6 md:p-15 
      h-auto md:h-64 
      items-center md:justify-between 
      border-b-6 border-black rounded-3xl md:rounded-4xl 
      gap-4 md:gap-0
      ${cardBg}
    `}>
      
      {/* 1. Heading: Top Left on mobile */}
      <div className='col-start-1 row-start-1 self-start md:h-full md:flex md:flex-col md:justify-between'>
        <div className='w-full md:w-60'>
          <span className={`
            ${headingBg} 
            text-lg md:text-2xl 
            font-medium rounded-lg md:rounded-xl 
            px-2 py-1 inline-block leading-tight
          `}>
            {heading}
          </span>
        </div>

        {/* 2. Button: Bottom Left on mobile */}
        {/* Added hidden md:flex to the desktop version and a mobile-only version below */}
        <div className='hidden md:flex items-center gap-3'>
          <button className='flex gap-2 items-center font-medium'>
            <img src={learn} alt='goToLogo' className='h-6 w-6' />
            Learn more
          </button>
        </div>
      </div>

      {/* 3. Illustration: Top Right on mobile */}
      <div className='col-start-2 row-start-1 flex justify-end items-start md:items-center'>
        <img 
          src={rightImage} 
          alt={heading} 
          className='w-28 md:w-auto h-auto object-contain'
        />
      </div>

      {/* 4. Mobile Button: Specific styling for small screens only */}
      <div className='col-span-2 md:hidden mt-2'>
        <button className='bg-transparent flex gap-2 items-center font-medium p-0'>
          <img src={learn} alt='goToLogo' className='h-8 w-8' />
          <span>Learn more</span>
        </button>
      </div>
      
    </div>
  )
}

export default ServiceCard