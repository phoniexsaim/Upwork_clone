"use client";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export default function HomeContainer() {
  const [activeTab, setActiveTab] = useState("findTalent");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="mx-34 rounded-2xl overflow-hidden shadow-lg">
      <div
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/ApartmentCoder.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-col">
          <div className="md:w-1/2 text-white mb-10">
            <h1 className="text-[50px] font-[600] text-base/14 max-w-3xl">
              Connecting clients in need to freelancers who deliver
            </h1>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-[#423a3d] rounded-xl p-6 text-white shadow-lg relative">
              <div className="flex space-x-2 mb-4">
                <button
                  className={`flex-1 py-[6px] cursor-pointer rounded-full border text-white font-semibold ${
                    activeTab === "findTalent"
                      ? "border-3 border-white"
                      : "border border-white"
                  }`}
                  onClick={() => setActiveTab("findTalent")}
                >
                  Find talent
                </button>
                <button
                  className={`flex-1 py-[6px] cursor-pointer rounded-full border text-white font-semibold ${
                    activeTab === "browseJobs"
                      ? "border-3 border-white"
                      : "border border-white"
                  }`}
                  onClick={() => setActiveTab("browseJobs")}
                >
                  Browse jobs
                </button>
              </div>

            {activeTab === "findTalent" ? (
  <>
<div className="flex items-center bg-white rounded-full overflow-hidden px-2 py-1 border-2 transition-all duration-300 hover:border-[#d2ff00] focus-within:border-[#d2ff00]">
  <input
    type="text"
    placeholder="Search by role, skills, or keywords"
    className="flex-grow px-3 py-2 text-black outline-none"
    onFocus={() => setIsPopupOpen(true)}
    onBlur={() => setTimeout(() => setIsPopupOpen(false), 150)} 
  />
  <button className="bg-black text-white px-4 py-[6px] rounded-full flex items-center justify-center">
    <span className="text-[#d2ff00] font-bold text-[28px]">
      <IoMdSearch />
    </span>
    &nbsp;Search
  </button>
</div>

<div
  className={`transition-all duration-500 ease-in-out overflow-hidden mt-4 
    ${isPopupOpen ? "max-h-[200px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
>
  <div className="bg-[#423a3d] text-white rounded-lg p-4 shadow-md">
    <p className="py-2 cursor-pointer flex items-center">
      <IoMdSearch className="text-[24px] mr-2" />
      Design my mobile app
    </p>
    <p className="py-2 cursor-pointer flex items-center">
      <IoMdSearch className="text-[24px] mr-2" />
      Hire a virtual assistant
    </p>
    <p className="py-2 cursor-pointer flex items-center">
      <IoMdSearch className="text-[24px] mr-2" />
      AI/ML consultant for AI startup
    </p>
  </div>
</div>

    {/* ▼ Popup inside flow (expands card height) */}
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden mt-4 
        ${isPopupOpen ? "max-h-[200px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
    >
      <div className="bg-[#423a3d] text-white rounded-lg p-4 shadow-md">
        <p className="py-2 cursor-pointer flex items-center"><IoMdSearch  className="text-[24px] mr-2"/> Design my mobile app</p>
        <p className="py-2 cursor-pointer flex items-center"><IoMdSearch  className="text-[24px] mr-2"/> Hire a virtual assistant</p>
        <p className="py-2 cursor-pointer flex items-center"><IoMdSearch  className="text-[24px] mr-2"/> AI/ML consultant for AI startup</p>
      </div>
    </div>

    {/* Logos */}
    <div className="mt-6 flex justify-between items-center text-gray-400 text-sm">
      <span><img src="/logo-microsoft-grey.svg" alt="Microsoft" /></span>
      <span><img src="/logo-airbnb-grey.svg" alt="Airbnb" /></span>
      <span><img src="/logo-bissell-grey.svg" alt="Bissell" /></span>
      <span><img src="/logo-glassdoor.svg" alt="Glassdoor" /></span>
    </div>
  </>
) : (
  // Browse Jobs Tab
  <div className="text-center mt-6">
    <p className="text-white mb-4 text-lg">
      Build your freelancing career on Upwork, with thousands of jobs posted every week.
    </p>
    <button className="bg-[#108a00] cursor-pointer text-white px-6 py-2 rounded font-semibold">
      Explore recently posted jobs
    </button>
  </div>
)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
