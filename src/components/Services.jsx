import React from 'react'
import ServiceCard from './ui/ServiceCard'
import rightImage from '../../public/serviceCardImage.png'
import rightImage2 from '../../public/serviceCardImage2.png'

const Services = () => {
  return (
    <div className='text-black h-auto md:h-[50%] p-6 md:p-10 mt-8'>
        {/* Header: Centered on mobile, horizontal on desktop */}
        <div className='flex flex-col md:flex-row items-center text-center md:text-left gap-4 w-full md:w-1/2'>      
            <h2 className='font-bold text-3xl px-4 py-2 rounded-xl custom-neon shrink-0'>
                Services
            </h2>
            <p className='text-sm md:text-base'>
                At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
        </div>

        {/* Cards Container: Stacked on mobile, side-by-side on desktop */}
        <div className='p-0 md:p-4 flex flex-col md:flex-row gap-5 mt-10'>
            <ServiceCard 
                heading={"Search engine optimization"} 
                headingBg={"custom-neon"} 
                rightImage={rightImage} 
                cardBg={"bg-[#f3f3f3]"}
            />
            <ServiceCard 
                heading={"Pay-per-click advertizing"} 
                headingBg={"bg-[#f3f3f3]"} 
                rightImage={rightImage2} 
                cardBg={"custom-neon"}
            /> 
        </div>
    </div>
  )
}

export default Services