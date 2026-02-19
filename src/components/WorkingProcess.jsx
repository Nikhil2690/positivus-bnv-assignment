import React from 'react'

const WorkingProcess = () => {
  return (
    <div className='text-black h-auto md:h-[50%] p-6 md:p-10 mt-8'>
        {/* Header Section: Centered on mobile, left-aligned on desktop */}
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-1/2 text-center md:text-left'>      
            <h2 className='font-bold text-2xl md:text-3xl px-2 py-2 rounded-md md:w-95 custom-neon'>
                Our Working Process
            </h2>
            <p className='text-sm md:text-base'>
                Step-by-Step Guide to Achieving Your Business Goals
            </p>
        </div>

        {/* Card 01 */}
        <div className='custom-neon mt-10 p-8 border border-b-4 rounded-2xl h-auto md:h-50 flex flex-col justify-between'>
            {/* Hidden on small screens (md:block keeps it visible on desktop) */}
            <div className='hidden md:flex flex-col gap-3'>
                <hr/>
                <p>
                    During the initial consultation, we will discuss your business goals and objectives, 
                    target audience, and current marketing efforts. This will allow us to understand 
                    your needs and tailor our services to best fit your requirements.
                </p>
            </div>

            <div className='flex gap-3 items-center'>
                <h1 className='text-2xl font-bold'>01</h1>
                <h2 className='text-xl font-semibold'>Consultation</h2>
            </div>
        </div>

        {/* Card 02 */}
        <div className='flex items-center custom-grey mt-6 md:mt-10 p-8 border-b-4 border rounded-2xl'>
            <h1 className='text-2xl font-bold mr-3'>02</h1>
            <h2 className='text-xl font-semibold'>Research and Strategy Development</h2>
        </div>
      
    </div>
  )
}

export default WorkingProcess