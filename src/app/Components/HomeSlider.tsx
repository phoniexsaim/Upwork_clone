'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const testimonials = [
  {
    type: 'testimonial',
    companyImage: 'Images/perfectserve.svg',
    quote:
      "If we didn't have Upwork… the quality of talent wouldn't be as easy to measure, and we wouldn't have the incredible support we get from the Upwork team.",
    author: 'Jessica Khawaja, VP of People Operations',
    results: [
      {
        title: '11 days',
        text: 'to post a job, hire, classify, and onboard selected talent',
      },
      {
        title: 'Nearly Doubled',
        text: 'the support hours for a project',
      },
    ],
    color: 'bg-[#13544e]',
  },
  {
    type: 'testimonial',
    companyImage: 'Images/microsoft-lg-light.svg',
    quote:
      'One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.',
    author: 'Carol Taylor, Director of Content Experience',
    results: [
      {
        title: '50% Faster',
        text: 'launch of projects',
      },
      {
        title: '10,000',
        text: 'projects completed',
      },
    ],
    color: 'bg-[#bc5118]',
  },
  {
    type: 'logoCard',
    leftImage: '/company-logos-cover.jpg',
    logos: [
      'Images/logo-airbnb.svg',
      'Images/automattic-light.svg',
      'Images/cloudflare.svg',
      'Images/glassdoor.svg',
      'Images/bissell-light.svg',
    ],
    heading: 'And many more',
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative font-sans max-w-7xl mx-auto px-4 md:px-6 py-16 mt-10 overflow-hidden">
      <h2 className="text-4xl font-bold mb-10">
        Trusted by leading brands and startups
      </h2>

      <div
        className="flex transition-transform duration-500 ease-in-out gap-4"
        style={{
          transform: `translateX(-${index * 45}%)`,
          width: `${testimonials.length * 45}%`,
        }}
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="w-[35%] flex-shrink-0 rounded-xl h-[520px] overflow-hidden"
          >
            {item.type === 'logoCard' ? (
              <div className="flex h-full rounded-xl overflow-hidden bg-white shadow mt-6">
                {/* Left Image */}
                <div className="w-[45%] h-full">
                  <Image
                    src={item.leftImage}
                    alt="Person working"
                    width={300}
                    height={520}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="w-[55%] bg-black text-white px-9 py-18 flex flex-col justify-start">
                  <p className="text-[20px] text-white mb-4">{item.heading}</p>
                  <div className="flex flex-col gap-8 mt-2">
                    {item.logos.map((logo, i) => (
                      <Image
                        key={i}
                        src={logo}
                        alt={`Company logo ${i}`}
                        width={120}
                        height={40}
                        className="object-contain gap-4"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`${item.color} h-full rounded-xl p-6 text-white flex flex-col justify-between mt-6`}
              >
                <div>
                  <div className="mb-6">
                    <Image
                      src={item.companyImage}
                      alt="Company logo"
                      width={120}
                      height={40}
                    />
                  </div>

                  <div className="min-h-[140px] flex flex-col justify-between">
                    <p className="text-[20px] font-semibold italic">
                      “{item.quote}”
                    </p>
                    <p className="text-[16px] font-medium">{item.author}</p>
                  </div>
                </div>

                {/* Bottom Content */}
                <div>
                  <p className="text-[16px] font-[500] mb-1">Results</p>
                  <div className="border-t border-white pt-4 space-y-3 pb-6">
                    {item.results.map((result, i) => (
                      <div key={i}>
                        <p className="text-[20px]">{result.title}</p>
                        <p className="text-[16px] text-[#c6c6c6]">
                          {result.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      {index > 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 cursor-pointer"
        >
          <FaArrowLeftLong className="w-5 h-5 text-[#108a00]" />
        </button>
      )}

      {/* Right Arrow */}
      {index < testimonials.length - 2 && (
        <button
          onClick={() => setIndex(index + 1)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 cursor-pointer"
        >
          <FaArrowRightLong className="w-5 h-5 text-[#108a00]" />
        </button>
      )}
    </div>
  );
}
