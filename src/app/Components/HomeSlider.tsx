'use client';

import { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative font-sans max-w-7xl mx-auto px-4 md:px-6 py-16 overflow-hidden">
      <h2 className="md:text-[60px] text-[38px] leading-10 md:leading-14 text-black font-[500] mb-10">
        Trusted by leading <br /> brands and startups
      </h2>

      {/* Cards Container */}
      <div
        className={`
          flex 
          gap-4 
          transition-transform 
          duration-500 
          ease-in-out 
          md:flex-row 
          flex-col 
          md:overflow-hidden 
        `}
        style={{
          transform: isMobile ? 'none' : `translateX(-${index * 45}%)`,
          width: isMobile ? '100%' : `${testimonials.length * 45}%`,
        }}
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="md:w-[35%] w-full flex-shrink-0 rounded-xl h-[520px] overflow-hidden"
          >
            {item.type === 'logoCard' ? (
              <div className="flex h-full rounded-xl overflow-hidden bg-white shadow mt-6 flex-col md:flex-row">
                <div className="md:w-[45%] w-full h-[200px] md:h-full">
                  <Image
                    src={item.leftImage}
                    alt="Person working"
                    width={300}
                    height={520}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="md:w-[55%] w-full bg-black text-white px-6 py-6 flex flex-col justify-start">
                  <p className="text-[20px] text-white mb-4">{item.heading}</p>
                  <div className="flex flex-wrap md:flex-col gap-4">
                    {item.logos.map((logo, i) => (
                      <Image
                        key={i}
                        src={logo}
                        alt={`Company logo ${i}`}
                        width={100}
                        height={40}
                        className="object-contain"
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

      {/* Arrows (desktop only) */}
      {index > 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          className="hidden md:flex absolute left-2 top-[60%] transform -translate-y-1/2 bg-white rounded-full shadow p-2 cursor-pointer"
        >
          <FaArrowLeftLong className="w-5 h-5 text-[#108a00]" />
        </button>
      )}

      {index < testimonials.length - 2 && (
        <button
          onClick={() => setIndex(index + 1)}
          className="hidden md:flex absolute right-2 top-[60%] transform -translate-y-1/2 bg-white rounded-full shadow p-2 cursor-pointer"
        >
          <FaArrowRightLong className="w-5 h-5 text-[#108a00]" />
        </button>
      )}
    </div>
  );
}
