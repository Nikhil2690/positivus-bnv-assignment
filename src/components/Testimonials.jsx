import React, { useState } from "react";
import rightArrow from '../../public/right-arrow.png'
import leftArrow from '../../public/arrow.png'
import star from '../../public/fourStar.svg'

const Testimonials = () => {
  const [index, setIndex] = useState(1);

  const testimonials = Array(5).fill({
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  });

  return (
    <div className="p-6 sm:p-10 mt-8">

      {/* Heading */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-1/2 mb-10 sm:mb-16 text-center sm:text-left sm:mx-0 mx-auto">
        <h2 className="font-bold text-3xl sm:text-3xl text-black px-3 py-2 rounded-xl custom-neon">
          Testimonials
        </h2>
        <p className="text-black text-sm sm:text-base">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="relative bg-[#111827] rounded-[40px] px-6 sm:px-16 py-12 sm:py-20 overflow-hidden text-white">

        <div
          className="flex transition-transform duration-500 ease-in-out gap-6 sm:gap-10"
          style={{
            transform: `translateX(-${index * 260}px)`, // smaller on mobile
          }}
        >
          {testimonials.map((item, i) => (
            <div key={i} className="w-full sm:max-w-180 shrink-0">

              <div className="relative border border-[#b9ff66] rounded-3xl p-6 sm:p-10">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {item.text}
                </p>

                {/* Tail */}
                <div className="absolute -bottom-3 left-12 w-6 h-6 bg-[#111827] border-l border-b border-[#b9ff66] rotate-315"></div>
              </div>

              <div className="mt-4 sm:mt-8 text-center sm:text-left">
                <h4 className="text-[#b9ff66] font-semibold">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {item.role}
                </p>
              </div>

            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 sm:gap-12 mt-8 sm:mt-16">

          <img
            src={leftArrow}
            alt="left arrow"
            onClick={() =>
              setIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="h-6 w-6 text-white cursor-pointer opacity-70 hover:opacity-100"
          />

          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, i) => (
              <img
                src={star}
                alt="star icon"
                key={i}
                onClick={() => setIndex(i)}
                className={`h-5 w-5 sm:h-6 sm:w-6 cursor-pointer transition-all duration-300 
                            rotate-45 ${i === index ? 'filter brightness-150' : 'opacity-70'}`}
                style={{
                  filter: i === index ? 'bg-[#b9ff66]' : 'none',
                }}
              />
            ))}
          </div>

          <img
            src={rightArrow}
            alt="right arrow"
            onClick={() =>
              setIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
            className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100"
          />

        </div>

      </div>
    </div>
  );
};

export default Testimonials;
