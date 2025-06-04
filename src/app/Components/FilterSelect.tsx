import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = ["New", "Update", "Improvement", "Policy update"];
const products = [
  "Marketplace",
  "Freelancer Plus",
  "Business Plus",
  "Uma",
  "Agency Plus",
  "Partners",
];

export default function FilterSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({ category: [], product: [] });

  const toggleOption = (type, value) => {
    setSelected((prev) => {
      const isSelected = prev[type].includes(value);
      const updated = isSelected
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updated };
    });
  };

  const clearFilters = () => {
    setSelected({ category: [], product: [] });
  };

  return (
    <div className="relative font-sans text-black w-full max-w-4xl mx-auto mt-0">
      <div className="w-[260px] mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full border-2 cursor-pointer rounded-full px-6 py-2 flex justify-between items-center bg-white shadow"
        >
          <span className="font-medium">Filter</span>
          <span
            className={`transition-transform duration-300 ease-in-out transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <ChevronDown size={18} />
          </span>
        </button>
      </div>

      {isOpen && (
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[580px] border border-[#d9d9d9] bg-white shadow-2xl rounded-xl px-10 py-6 z-10">
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            <div>
              <h4 className="font-semibold mb-2">Category</h4>
              {categories.map((cat) => (
                <label key={cat} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    checked={selected.category.includes(cat)}
                    onChange={() => toggleOption("category", cat)}
                    className="transform cursor-pointer h-4 w-4 scale-110 accent-[#108a00]"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
             <div>
            <h4 className="font-semibold mb-2">Product</h4>
            {products.map((prod) => (
              <label key={prod} className="flex items-center space-x-2 mb-1">
                <input
                className="transform cursor-pointer h-4 w-4 scale-110 accent-[#108a00]"
                  type="checkbox"
                  checked={selected.product.includes(prod)}
                  onChange={() => toggleOption("product", prod)}
                />
                <span>{prod}</span>
              </label>
            ))}
          </div>
          </div>

          <div className="pt-0">
            <button
              onClick={clearFilters}
              className="text-[#108a00] cursor-pointer font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
