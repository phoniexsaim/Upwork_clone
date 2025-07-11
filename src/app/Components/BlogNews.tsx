"use client";
import clsx from 'clsx';
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const tabs = ['Press releases', 'Research', 'Upwork in the news'];

const dummyData = {
  'Press releases': [
    { title: 'Press', desc: 'Upwork Study Finds 1 in 4 U.S. Skilled Knowledge Workers Now Work Independently, Generating $1.5 Trillion in Earnings' },
    { title: 'Press', desc: 'Upwork Named to Fast Company’s Most Innovative Companies of 2025' },
    { title: 'Press', desc: 'Upwork Unveils 2025’s Most In-Demand Skills ' },
    { title: 'Press', desc: 'Upwork Announces Organizational Changes to Drive Continued Profitable Growth and Provides Preliminary Third Quarter 2024 Results Above Financial Guidance ' },
  ],
  Research: [
    { title: 'Research', desc: 'Exploring how AI boosts team productivity.' },
    { title: 'Research', desc: 'Insights into distributed work culture.' },
    { title: 'Research', desc: 'Trends shaping freelance economy.' },
    { title: 'Research', desc: 'The next wave of digital disruption.' },
  ],
  'Upwork in the news': [
    { title: 'May 8, 2025', desc: 'How Upwork is redefining the job market.' },
    { title: 'March 18, 2025', desc: 'Interview with Upwork CEO on tech hiring.' },
    { title: 'January 21, 2025', desc: 'Freelancer tools getting smarter.' },
    { title: 'January 22, 2025', desc: 'Supporting economic growth through talent.' },
  ],
};



export default function BlogNews() {

      const [activeTab, setActiveTab] = useState('Research');
  return (
    <>
        <div className="max-w-7xl text-black font-sans mx-auto px-6 py-16">
             <div className='mb-4'>
                <h2 className="text-[38px] font-[600]">Latest news about Upwork</h2>
                <p className="text-[#5e6d55] text-[16px]">Supporting you with data, trends, and insights you need to succeed today and prepare for tomorrow.</p>
            </div> 
            <div className="border-b border-gray-200">
      <div className="flex space-x-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              'py-4 text-sm font-medium',
              activeTab === tab
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-black'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyData[activeTab].map((item, index) => (
         <div key={index} className="bg-[#f2f7f2] p-4 rounded shadow-sm hover:shadow-md transition flex flex-col h-full">
  <h3 className="text-[16px] font-[500] mb-2 text-[#6e7f69]">{item.title}</h3>
  <p className="text-[22px] font-[500] text-base/7 text-black mb-3">{item.desc}</p>
  <div className="mt-auto">
    <a href="#" className="text-[16px] flex items-center text-[#1f57c3] underline">
      Read News <FaArrowRightLong className="ml-1" />
    </a>
  </div>
</div>

        ))}
      </div>
    </div>
        </div>
    </>
  );
}