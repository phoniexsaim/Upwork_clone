"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const releases = [
  {
    date: "Apr 15, 2025",
    type: "Improvement",
    typeColor: "bg-yellow-100 text-yellow-800",
    title: "Availability Badge now supported for Agency Plus",
    description:
      "Agency Plus members can now use Agency Connects to turn on the Availability Badge, giving agency freelancers another way to get noticed by clients. Badge usage is tracked in the agency’s Connects history, and usage updates are shared with both freelancers and admins.",
    tags: ["Agency Plus"],
  },
  {
    date: "Apr 7, 2025",
    type: "Improvement",
    typeColor: "bg-yellow-100 text-yellow-800",
    title: "Improved shortlisting for Business Plus clients",
    description:
      "Business Plus clients now see clearer banners, task cards, and notifications when using Upwork’s free shortlisting service, making it easier to request, track, and review curated talent recommendations.",
    tags: ["Business Plus"],
  },
  {
    date: "Apr 3, 2025",
    type: "New",
    typeColor: "bg-blue-100 text-blue-800",
    title: "Client search bar enhancements",
    description:
      "Clients now have an improved search bar with a wider input area and more relevant suggestions based on recent activity. This update improves speed and accuracy in freelancer discovery.",
    tags: ["Marketplace", "Business Plus"],
  },
   {
    date: "Mar 31, 2025",
    type: "Improvement",
    typeColor: "bg-yellow-100 text-yellow-800",
    title: "Milestone actions now unblocked during edits",
    description:
      "Clients and freelancers can now submit work and release payment for active milestones, even if there’s a pending change to future milestones. This removes confusion and helps work move forward without delays.",
    tags: ["Marketplace", "Freelancer Plus", "Agency Plus", "Business Plus"],
  },
   {
    date: "Mar 27, 2025",
    type: "New",
    typeColor: "bg-blue-100 text-blue-800",
    title: "New local currency payouts via Direct to Local Bank",
    description:
      "Freelancers in Costa Rica, Norway, Saudi Arabia, Serbia, UAE, and Uruguay can now get paid in local currency to their local bank account. This update expands our global payout solutions, making it easier for freelancers to access their earnings.",
    tags: ["Marketplace", "Freelancer Plus", "Agency Plus"],
  },
  {
    date: "Mar 27, 2025",
    type: "Policy Update",
    typeColor: "bg-red-100 text-red-800",
    title: "Australia SERR tax reporting now supported",
    description:
      "Upwork now supports reporting under Australia’s Sharing Economy Reporting Regime (SERR), ensuring compliance with local tax laws. Freelancers earning through Upwork in Australia will have their income reported to the ATO as required, with updates delivered through our existing tax reporting hub.",
    tags: ["Marketplace"],
  },
];

export default function ProductReleaseTimeline() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="flex px-4 py-12">
      <div className="w-full font-sans max-w-6xl relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        <AnimatePresence>
          {releases.slice(0, visibleCount).map((release, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-12"
              initial={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Left Side */}
              <div className="w-1/2 flex justify-end pr-6 text-sm text-gray-600">
                <div className="flex items-center mt-1 gap-2">
                  <span className={`px-2 py-0.5 text-xs rounded-xl ${release.typeColor}`}>
                    {release.type}
                  </span>
                  <span className="text-[10px]">{release.date}</span>
                </div>
              </div>

              {/* Middle dot and line */}
              <div className="relative flex justify-center">
                <div className="w-0.5 bg-gray-300"></div>
                <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-gray-300 top-1.5"></div>
              </div>

              {/* Right Side */}
              <div className="w-1/2 pl-6">
                <h3 className="text-[30px] text-base/8 font-[600] text-black mb-2">
                  {release.title}
                </h3>
                <p className="text-gray-800 text-[18px] mb-2">{release.description}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {release.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-xl bg-gray-100 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Load More Button */}
        {visibleCount < releases.length && (
          <div className="text-end mt-6">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 rounded-md text-[#108a00] border-2 cursor-pointer border-[#d9d9d9] hover:bg-[#d9d9d9] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}




