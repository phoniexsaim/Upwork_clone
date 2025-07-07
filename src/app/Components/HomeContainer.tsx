"use client";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export default function HomeContainer() {
  const [activeTab, setActiveTab] = useState("findTalent");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="mx-0 md:mx-34 font-sans md:rounded-2xl overflow-hidden shadow-lg">
      <div
        className="relative w-full h-[480px] md:h-[600px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/Images/ApartmentCoder.jpg')" }}
      >
        <div className="absolute inset-0 md:bg-black/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-34 md:py-20 flex flex-col">
          {/* Heading */}
          <div className="text-white mb-6 md:mb-10 md:w-1/2">
            <h1 className="text-[36px] leading-[1.05] sm:text-[44px] sm:font-[500] sm:leading-[1.1] md:text-[55px] md:font-[600] md:leading-[1.1] max-w-full md:max-w-3xl">
              Connecting clients in need to freelancers who deliver
            </h1>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="bg-[#423a3d] rounded-xl p-4 md:p-6 text-white shadow-lg relative">
              {/* Tabs */}
              <div className="flex space-x-2 mb-4">
                <button
                  className={`w-1/2 py-[6px] text-sm rounded-full cursor-pointer border font-semibold text-white ${
                    activeTab === "findTalent"
                      ? "border-2 border-white"
                      : "border border-white"
                  }`}
                  onClick={() => setActiveTab("findTalent")}
                >
                  Find talent
                </button>
                <button
                  className={`w-1/2 py-[6px] text-sm rounded-full cursor-pointer border font-semibold text-white ${
                    activeTab === "browseJobs"
                      ? "border-2 border-white"
                      : "border border-white"
                  }`}
                  onClick={() => setActiveTab("browseJobs")}
                >
                  Browse jobs
                </button>
              </div>

              {/* Find Talent Tab */}
              {activeTab === "findTalent" ? (
                <>
                  {/* Input + Search button (styled like Upwork) */}
                  <div className="flex items-center bg-white rounded-full px-3 py-[6px]">
                    <input
                      type="text"
                      placeholder={`Try "virtual assistant" or "website"`}
                      className="flex-grow text-sm text-black placeholder-gray-500 outline-none bg-transparent px-2"
                      onFocus={() => setIsPopupOpen(true)}
                      onBlur={() => setTimeout(() => setIsPopupOpen(false), 150)}
                    />
                    <button className="bg-black rounded-full p-2 text-[#d2ff00] text-lg flex items-center justify-center">
                      <IoMdSearch />
                    </button>
                  </div>

                  {/* Suggestions */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden mt-4 ${
                      isPopupOpen
                        ? "max-h-[200px] opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                    }`}
                  >
                    <div className="bg-[#423a3d] text-white rounded-lg p-4 shadow-md text-sm">
                      <p className="py-2 cursor-pointer flex items-center">
                        <IoMdSearch className="text-[20px] mr-2" />
                        Design my mobile app
                      </p>
                      <p className="py-2 cursor-pointer flex items-center">
                        <IoMdSearch className="text-[20px] mr-2" />
                        Hire a virtual assistant
                      </p>
                      <p className="py-2 cursor-pointer flex items-center">
                        <IoMdSearch className="text-[20px] mr-2" />
                        AI/ML consultant for AI startup
                      </p>
                    </div>
                  </div>

                  {/* Logos */}
                  <div className="mt-6 flex flex-wrap justify-center md:justify-between gap-4 text-gray-400 text-xs sm:text-sm">
                    <img
                      src="/Images/logo-microsoft-grey.svg"
                      alt="Microsoft"
                      className="h-4 md:h-5"
                    />
                    <img
                      src="/Images/logo-airbnb-grey.svg"
                      alt="Airbnb"
                      className="h-4 md:h-5"
                    />
                    <img
                      src="/Images/logo-bissell-grey.svg"
                      alt="Bissell"
                      className="h-4 md:h-5"
                    />
                    <img
                      src="/Images/logo-glassdoor.svg"
                      alt="Glassdoor"
                      className="h-4 md:h-5"
                    />
                  </div>
                </>
              ) : (
                <div className="text-center mt-6">
                  <p className="text-white mb-4 text-base md:text-lg">
                    Build your freelancing career on Upwork, with thousands of
                    jobs posted every week.
                  </p>
                  <button className="bg-[#108a00] cursor-pointer text-white px-6 py-2 rounded-lg font-[500] text-sm md:text-base">
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
