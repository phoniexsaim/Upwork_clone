 "use client";
import { FaStar } from "react-icons/fa";

export default function HomeTalentCategory() {
    const categories = [
  { title: "Development & IT", rating: "4.85", skills: 1853 },
  { title: "AI Services", rating: "4.8", skills: 294 },
  { title: "Design & Creative", rating: "4.91", skills: 968 },
  { title: "Sales & Marketing", rating: "4.77", skills: 392 },
  { title: "Writing & Translation", rating: "4.92", skills: 505 },
  { title: "Admin & Customer Support", rating: "4.77", skills: 508 },
  { title: "Finance & Accounting", rating: "4.79", skills: 214 },
  { title: "Engineering & Architecture", rating: "4.85", skills: 650 },
];
    return(
<>
        <div className="max-w-7xl font-sans mx-auto px-6 py-16">
      <h2 className="text-[40px] font-[500] text-gray-900 mb-2 leading-[1.1] sm:text-[44px] sm:leading-[1.3] ">
        Browse talent by category
      </h2>
      <p className="text-[20px] text-[#676767] mb-8">
        Looking for work?{" "}
        <a href="#" className="text-[#108a00] underline font-medium">
          Browse jobs
        </a>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-gray-100 text-black text-[24px] rounded-lg p-5 cursor-pointer hover:bg-[#e9e9e9] hover:shadow-md transition"
          >
            <h3 className="text-xl font-medium mb-2">{cat.title}</h3>
            <div className="flex gap-8">
             <div className="flex items-center text-[16px] text-black mb-1">
              <FaStar className="text-[#108a00] mr-1 mb-[2px]" />
              {cat.rating}/5
            </div>
            <div className="text-[16px] text-black">{cat.skills} skills</div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
</>
    )
}