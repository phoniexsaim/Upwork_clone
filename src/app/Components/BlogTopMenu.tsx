"use client";


import clsx from 'clsx';
import { useState } from 'react';

const tabs = [
  { label: 'All', value: 'All' },
  { label: 'Company News', value: 'CompanyNews' },
  { label: 'Product & Innovation', value: 'Product & Innovation' },
  { label: 'People & Culture', value: 'People & Culture' },
  { label: 'Social Impact', value: 'Social Impact' },
  { label: 'Research & Reports', value: 'Research & Reports' },
];



const dummyData = {
  'All': [
    {title:'SAIM', img: '/Images/Ex1.webp', desc: 'Upwork Study Finds 1 in 4 U.S. Skilled Knowledge Workers Now Work Independently...', date: 'June 1, 2025' },
    {title:'SAIM', img: '/Images/6808033ad36887b84250132a_Blog_Header Image_1500x600.png', desc: 'Upwork Named to Fast Company’s Most Innovative Companies of 2025', date: 'May 27, 2025' },
    {title:'SAIM', img: '/Images/Ex2.webp', desc: 'Upwork Unveils 2025’s Most In-Demand Skills', date: 'May 14, 2025' },
    {title:'SAIM', img: '/Images/Ex3.webp', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num1.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num2.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    { title:'SAIM', img: '/Images/Num3.jpg', desc: 'Exploring how AI boosts team productivity.', date: 'June 2, 2025' },
    { title:'SAIM', img: '/Images/Num4.jpg', desc: 'Insights into distributed work culture.', date: 'May 19, 2025' },
    { title:'SAIM', img: '/Images/Num5.jpg', desc: 'Trends shaping freelance economy.', date: 'April 25, 2025' },
    { title:'SAIM', img: '/Images/Num6.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num7.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num1.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
  ],
  CompanyNews: [
    { title:'SAIM', img: '/Images/Num3.jpg', desc: 'Exploring how AI boosts team productivity.', date: 'June 2, 2025' },
    { title:'SAIM', img: '/Images/Num4.jpg', desc: 'Insights into distributed work culture.', date: 'May 19, 2025' },
    { title:'SAIM', img: '/Images/Num5.jpg', desc: 'Trends shaping freelance economy.', date: 'April 25, 2025' },
    { title:'SAIM', img: '/Images/Num6.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num7.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num1.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
     {title:'SAIM', img: '/Images/Ex1.webp', desc: 'Upwork Study Finds 1 in 4 U.S. Skilled Knowledge Workers Now Work Independently...', date: 'June 1, 2025' },
    {title:'SAIM', img: '/Images/6808033ad36887b84250132a_Blog_Header Image_1500x600.png', desc: 'Upwork Named to Fast Company’s Most Innovative Companies of 2025', date: 'May 27, 2025' },
    {title:'SAIM', img: '/Images/Ex2.webp', desc: 'Upwork Unveils 2025’s Most In-Demand Skills', date: 'May 14, 2025' },
    {title:'SAIM', img: '/Images/Ex3.webp', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num1.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num2.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
  ],
  'Product & Innovation': [
        { title:'SAIM', img: '/Images/Num3.jpg', desc: 'Exploring how AI boosts team productivity.', date: 'June 2, 2025' },
    { title:'SAIM', img: '/Images/Num4.jpg', desc: 'Insights into distributed work culture.', date: 'May 19, 2025' },
    { title:'SAIM', img: '/Images/Num5.jpg', desc: 'Trends shaping freelance economy.', date: 'April 25, 2025' },
    { title:'SAIM', img: '/Images/Num6.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num7.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num1.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    {title:'SAIM', img: '/Images/Ex1.webp', desc: 'Upwork Study Finds 1 in 4 U.S. Skilled Knowledge Workers Now Work Independently...', date: 'June 1, 2025' },
    {title:'SAIM', img: '/Images/6808033ad36887b84250132a_Blog_Header Image_1500x600.png', desc: 'Upwork Named to Fast Company’s Most Innovative Companies of 2025', date: 'May 27, 2025' },
    {title:'SAIM', img: '/Images/Ex2.webp', desc: 'Upwork Unveils 2025’s Most In-Demand Skills', date: 'May 14, 2025' },
    {title:'SAIM', img: '/Images/Ex3.webp', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num1.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num2.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
  ],
    'People & Culture': [
 { title:'SAIM', img: '/Images/Num3.jpg', desc: 'Exploring how AI boosts team productivity.', date: 'June 2, 2025' },
    { title:'SAIM', img: '/Images/Num4.jpg', desc: 'Insights into distributed work culture.', date: 'May 19, 2025' },
    { title:'SAIM', img: '/Images/Num5.jpg', desc: 'Trends shaping freelance economy.', date: 'April 25, 2025' },
    { title:'SAIM', img: '/Images/Num6.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num7.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num1.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
     {title:'SAIM', img: '/Images/Ex1.webp', desc: 'Upwork Study Finds 1 in 4 U.S. Skilled Knowledge Workers Now Work Independently...', date: 'June 1, 2025' },
    {title:'SAIM', img: '/Images/6808033ad36887b84250132a_Blog_Header Image_1500x600.png', desc: 'Upwork Named to Fast Company’s Most Innovative Companies of 2025', date: 'May 27, 2025' },
    {title:'SAIM', img: '/Images/Ex2.webp', desc: 'Upwork Unveils 2025’s Most In-Demand Skills', date: 'May 14, 2025' },
    {title:'SAIM', img: '/Images/Ex3.webp', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num1.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num2.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
  ],
    'Social Impact': [
    {title:'SAIM', img: '/Images/Ex1.webp', desc: 'Upwork Study Finds 1 in 4 U.S. Skilled Knowledge Workers Now Work Independently...', date: 'June 1, 2025' },
    {title:'SAIM', img: '/Images/6808033ad36887b84250132a_Blog_Header Image_1500x600.png', desc: 'Upwork Named to Fast Company’s Most Innovative Companies of 2025', date: 'May 27, 2025' },
    {title:'SAIM', img: '/Images/Ex2.webp', desc: 'Upwork Unveils 2025’s Most In-Demand Skills', date: 'May 14, 2025' },
    {title:'SAIM', img: '/Images/Ex3.webp', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num1.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num2.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    { title:'SAIM', img: '/Images/Num3.jpg', desc: 'Exploring how AI boosts team productivity.', date: 'June 2, 2025' },
    { title:'SAIM', img: '/Images/Num4.jpg', desc: 'Insights into distributed work culture.', date: 'May 19, 2025' },
    { title:'SAIM', img: '/Images/Num5.jpg', desc: 'Trends shaping freelance economy.', date: 'April 25, 2025' },
    { title:'SAIM', img: '/Images/Num6.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num7.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num1.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
  ],
    'Research & Reports': [
    { title:'SAIM', img: '/Images/Num3.jpg', desc: 'Exploring how AI boosts team productivity.', date: 'June 2, 2025' },
    { title:'SAIM', img: '/Images/Num4.jpg', desc: 'Insights into distributed work culture.', date: 'May 19, 2025' },
    { title:'SAIM', img: '/Images/Num5.jpg', desc: 'Trends shaping freelance economy.', date: 'April 25, 2025' },
    { title:'SAIM', img: '/Images/Num6.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num7.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
    { title:'SAIM', img: '/Images/Num1.jpg', desc: 'The next wave of digital disruption.', date: 'April 1, 2025' },
     {title:'SAIM', img: '/Images/Ex1.webp', desc: 'Upwork Study Finds 1 in 4 U.S. Skilled Knowledge Workers Now Work Independently...', date: 'June 1, 2025' },
    {title:'SAIM', img: '/Images/6808033ad36887b84250132a_Blog_Header Image_1500x600.png', desc: 'Upwork Named to Fast Company’s Most Innovative Companies of 2025', date: 'May 27, 2025' },
    {title:'SAIM', img: '/Images/Ex2.webp', desc: 'Upwork Unveils 2025’s Most In-Demand Skills', date: 'May 14, 2025' },
    {title:'SAIM', img: '/Images/Ex3.webp', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num1.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
    {title:'SAIM', img: '/Images/Num2.jpg', desc: 'Upwork Announces Organizational Changes for Growth...', date: 'May 3, 2025' },
  ],
};


export default function BlogTopMenu() {
 const [activeTab, setActiveTab] = useState('CompanyNews');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
    setCurrentPage(1); // Reset page when tab changes
  };

  const tabData = dummyData[activeTab];
  const totalPages = Math.ceil(tabData.length / itemsPerPage);
  const paginatedItems = tabData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
       <div className="max-w-7xl text-black font-sans mx-auto px-6 py-16">
      <div>
        <h2 className="text-[#14a800] text-[56px] font-[600]">Upwork Blog</h2>
        <p className="text-[#5e6d55] text-[18px]">
          Read updates on Upwork’s products, corporate initiatives, and partnerships to get insight <br />
          into the world’s work marketplace.
        </p>
      </div>

      <div className="flex space-x-8 border-b border-gray-200 mt-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={clsx(
              'relative py-4 text-sm font-medium transition-colors duration-200',
              activeTab === tab.value ? 'text-black' : 'text-gray-500 hover:text-black'
            )}
          >
            {tab.label}
            <span
              className={clsx(
                'absolute left-0 right-0 bottom-0 h-[2px]',
                activeTab === tab.value ? 'border-b-2 border-black' : ''
              )}
            />
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedItems.map((item, index) => (
          <div key={index} className="flex flex-col h-full">
            <img
              src={item.img}
              alt="News thumbnail"
              className="w-full h-[160px] object-cover rounded mb-4"
            />
            <p className="text-[16px] text-[#5e6d55] mb-0">{item.title}</p>
            <p className="text-[22px] font-[500] text-black mb-1">{item.desc}</p>
            <p className="text-[16px] text-[#5e6d55] mb-4">{item.date}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4  justify-center mt-10 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-2 bg-[#108a00] cursor-pointer text-white hover:bg-[#14a800] border rounded-4xl disabled:opacity-50"
        >
          Back
        </button>

         <span className="text-[16px] mt-2 text-gray-700">
           {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-6 py-2 cursor-pointer bg-[#108a00] hover:bg-[#14a800] text-white border rounded-4xl disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
}