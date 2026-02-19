import React from 'react'
import netflix from '../../public/sliderLogos/netflix.svg'
import amazon from '../../public/sliderLogos/amazon.svg'
import dribble from '../../public/sliderLogos/dribble.svg'
import hubspot from '../../public/sliderLogos/hubspot.svg'
import notion from '../../public/sliderLogos/notion.svg'
import zoom from '../../public/sliderLogos/zoom.svg'

const logos = [amazon, dribble, hubspot, notion, netflix, zoom]

const InfinitySlider = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-100 h-25 py-10 flex items-center">

      <div className="hidden sm:flex animate-slide-left gap-28 w-max">
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo} className="h-12" />
        ))}
      </div>

      <div className="flex flex-col gap-8 sm:hidden">

        <div className="overflow-hidden">
          <div className="flex animate-slide-left gap-16 w-max">
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo} className="h-10" />
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-slide-right gap-16 w-max">
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo} className="h-10" />
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default InfinitySlider
