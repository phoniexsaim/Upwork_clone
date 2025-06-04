
"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Research = [
  "All",
  "Future Of Work Insights",
  "Platform Data Insights",
  "Commentry",
  "Ask A Thought Leader",
  "Info Graphics",
  "Videos",
];

export default function ResearchSelect() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div>
          <p className="text-black font-[600] text-[24px]">More from the Research Institute</p>
          <p className="text-[#676767] font-[600] text-[20px]">Category</p>
        </div>
          <div className="w-[400px] mt-4 text-black">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full border cursor-pointer rounded-lg px-6 py-2 flex justify-between items-center bg-white shadow"
        >
          <span className="font-medium">All</span>
          <span
            className={`transition-transform duration-300 ease-in-out transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <ChevronDown size={18} />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute  mt-2 w-[400px] bg-white shadow-xl rounded-xl px-10 py-6 z-10">
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
             <div>
            {Research.map((prod) => (
              <label key={prod} className="flex cursor-pointer text-[#676767] text-[12px] hover:text-black items-center space-x-2 mb-1">
                <span>{prod}</span>
              </label>
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}


























// export default function FilterSelect() {

//   return (
//     <div className="relative text-black w-full max-w-4xl mx-auto mt-0">
//       {/* Filter button */}
//       <div className="w-[260px] mx-auto">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-full border cursor-pointer rounded-full px-6 py-2 flex justify-between items-center bg-white shadow"
//         >
//           <span className="font-medium">Filter</span>
//           <span
//             className={`transition-transform duration-300 ease-in-out transform ${isOpen ? "rotate-180" : "rotate-0"}`}
//           >
//             <ChevronDown size={18} />
//           </span>
//         </button>
//       </div>

//       {isOpen && (
//         <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[580px] bg-white shadow-xl rounded-xl px-10 py-6 z-10">
//           <div className="grid grid-cols-2 gap-x-16 gap-y-4">
//             <div>
//               <h4 className="font-semibold mb-2">Category</h4>
//               {categories.map((cat) => (
//                 <label key={cat} className="flex items-center space-x-2 mb-2">
//                   <input
//                     type="checkbox"
//                     checked={selected.category.includes(cat)}
//                     onChange={() => toggleOption("category", cat)}
//                     className="transform h-4 w-4 scale-110 accent-[#108a00]"
//                   />
//                   <span>{cat}</span>
//                 </label>
//               ))}
//             </div>
//              <div>
//             <h4 className="font-semibold mb-2">Product</h4>
//             {products.map((prod) => (
//               <label key={prod} className="flex items-center space-x-2 mb-1">
//                 <input
//                 className="transform h-4 w-4 scale-110 accent-[#108a00]"
//                   type="checkbox"
//                   checked={selected.product.includes(prod)}
//                   onChange={() => toggleOption("product", prod)}
//                 />
//                 <span>{prod}</span>
//               </label>
//             ))}
//           </div>
//           </div>

//           <div className="pt-0">
//             <button
//               onClick={clearFilters}
//               className="text-[#108a00] cursor-pointer font-medium hover:underline"
//             >
//               Clear filters
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
