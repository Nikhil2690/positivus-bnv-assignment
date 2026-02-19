import React from 'react';
import illustration from '../../public/Illustration.png';

const Hero = () => {
  return (
    /* Changed md:items-start to md:items-center to middle-align the content */
    <div className="flex flex-col md:flex-row md-pt-10 items-center md:items-center justify-between h-auto md:h-screen  px-6 md:px-16 gap-10">
      
      {/* Text Section */}
      <div className="flex flex-col gap-5 md:w-1/2 text-black text-[1.1rem]">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Navigating the digital landscape for success
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media marketing,
          and content creation.
        </p>
        <button className="px-6 py-3 self-start mt-4 md:mt-6 custom-button-bg text-white rounded-lg hover:bg-gray-800 transition">
          Book a Consultation
        </button>
      </div>

      {/* Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={illustration} 
          alt="illustration" 
          className="w-full max-w-md md:max-w-full"
        />
      </div>
    </div>
  );
};

export default Hero;