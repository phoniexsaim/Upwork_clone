 "use client";
import { useState } from "react";

import { IoMdSearch } from "react-icons/io";

export default function HomeContainer() {
    const [activeTab, setActiveTab] = useState("findTalent");

 return(

 <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/ApartmentCoder.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-col ">
        <div className="md:w-1/2 text-white mb-10">
          <h1 className="text-[64px] font-[600] leading-tight">
            Connecting clients in need to freelancers who deliver
          </h1>
        </div>

        <div className="md:w-1/2">
          <div className="bg-[#423a3d] rounded-xl p-6 text-white shadow-lg">
            {/* Tabs */}
            <div className="flex space-x-2 mb-4">
              <button
                className={`flex-1 py-[6px] cursor-pointer rounded-full border text-white font-semibold ${
                  activeTab === "findTalent"
                    ? "border-2 border-white"
                    : "border border-white"
                }`}
                onClick={() => setActiveTab("findTalent")}
              >
                Find talent
              </button>
              <button
                className={`flex-1 py-[6px] cursor-pointer rounded-full border text-white font-semibold ${
                  activeTab === "browseJobs"
                    ? "border-2 border-white"
                    : "border border-white"
                }`}
                onClick={() => setActiveTab("browseJobs")}
              >
                Browse jobs
              </button>
            </div>

            {/* Conditional Content */}
            {activeTab === "findTalent" ? (
              <>
                <div className="flex items-center bg-white rounded-full overflow-hidden px-2 py-1">
                  <input
                    type="text"
                    placeholder="Search by role, skills, or keywords"
                    className="flex-grow px-3 py-2 text-black outline-none"
                  />
                  <button className="bg-black text-white px-4 py-[6px] rounded-full flex items-center justify-center">
                    <span className="text-lime-400 font-bold text-[28px]">
                      <IoMdSearch />
                    </span>
                    &nbsp;Search
                  </button>
                </div>
                <div className="mt-6 flex justify-between items-center text-gray-400 text-sm">
                  <span>
                    <img src="/logo-microsoft-grey.svg" alt="Microsoft" />
                  </span>
                  <span>
                    <img src="/logo-airbnb-grey.svg" alt="Airbnb" />
                  </span>
                  <span>
                    <img src="/logo-bissell-grey.svg" alt="Bissell" />
                  </span>
                  <span>
                    <img src="/logo-glassdoor.svg" alt="Glassdoor" />
                  </span>
                </div>
              </>
            ) : (
              <div className="text-center mt-6">
                <p className="text-white mb-4 text-lg">
                 Build your freelancing career on Upwork, with thousands of jobs posted every week.
                </p>
                <button className="bg-[#108a00] text-white px-6 py-2 rounded font-semibold">
                      Explore recently posted jobs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
 );
}
