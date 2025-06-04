'use client';

import React, { useState } from 'react';

const cardsData = [
  {
    id: 1,
    image: '/6808033ad36887b84250132a_Blog_Header Image_1500x600.png',
    date: '2025-06-01',
    description: 'Description for image 1',
  },
  {
    id: 2,
    image: '/Num1.jpg',
    date: '2025-06-02',
    description: 'Description for image 2',
  },
  {
    id: 3,
    image: '/Num2.jpg',
    date: '2025-06-03',
    description: 'Description for image 3',
  },
  {
    id: 4,
    image: '/Num3.jpg',
    date: '2025-06-04',
    description: 'Description for image 4',
  },
  {
    id: 5,
    image: '/Num4.jpg',
    date: '2025-06-05',
    description: 'Description for image 5',
  },
  {
    id: 6,
    image: '/Num5.jpg',
    date: '2025-06-06',
    description: 'Description for image 6',
  },
  {
    id: 7,
    image: '/Num6.jpg',
    date: '2025-06-07',
    description: 'Description for image 7',
  },
  {
    id: 8,
    image: '/Num7.jpg',
    date: '2025-06-08',
    description: 'Description for image 8',
  },
  {
    id: 9,
    image: '/Num1.jpg',
    date: '2025-06-09',
    description: 'Description for image 9',
  },
  {
    id: 10,
    image: '/Num1.jpg',
    date: '2025-06-10',
    description: 'Description for image 10',
  },
  {
    id: 11,
    image: '/Num1.jpg',
    date: '2025-06-11',
    description: 'Description for image 11',
  },
  {
    id: 12,
    image: '/Num1.jpg',
    date: '2025-06-12',
    description: 'Description for image 12',
  },
   {
    id: 13,
    image: '/Num1.jpg',
    date: '2025-06-12',
    description: 'Description for image 12',
  },
   {
    id: 14,
    image: '/Num1.jpg',
    date: '2025-06-12',
    description: 'Description for image 12',
  },
   {
    id: 15,
    image: '/Num1.jpg',
    date: '2025-06-12',
    description: 'Description for image 12',
  },
   {
    id: 16,
    image: '/Num1.jpg',
    date: '2025-06-12',
    description: 'Description for image 12',
  },
   {
    id: 17,
    image: '/Num1.jpg',
    date: '2025-06-12',
    description: 'Description for image 12',
  },
   {
    id: 18,
    image: '/Num1.jpg',
    date: '2025-06-12',
    description: 'Description for image 12',
  },
];

const ITEMS_PER_PAGE = 6;

export default function ResearchPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardsData.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleCards = cardsData.slice(start, start + ITEMS_PER_PAGE);

  const goToPrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="max-w-7xl font-sans mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCards.map((card) => (
          <div key={card.id}>
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-full h-60 object-cover rounded-lg"
            />
            <div className="p-4">
              <p className="text-[10px] text-black mb-2">{card.date}</p>
              <p className="text-black font-[600] text-[28px]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-8 justify-center items-center mt-10">
        <button
          onClick={goToPrevious}
        //   disabled={currentPage === 1}
          className="px-[24px] py-[9px] bg-[#108a00] text-[14px] text-white rounded-lg hover:bg-[#14a800] cursor-pointer disabled:opacity-50"
        >
          Back
        </button>
        <span className="text-sm text-gray-700">
           {currentPage} / {totalPages}
        </span>
        <button
          onClick={goToNext}
        //   disabled={currentPage === totalPages}
          className="px-[24px] py-[9px]  text-[14px] rounded-lg bg-[#108a00] text-white  hover:bg-[#14a800] cursor-pointer disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
} 
