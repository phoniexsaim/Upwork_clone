"use client";

import Image from "next/image";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaAward, FaStar } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiShieldStar } from "react-icons/pi";


export default function HomeWhyBuisness() {
    return(
        <>
     <section className="bg-white py-16">
  <div className="max-w-7xl font-sans mx-auto px-6 relative flex flex-col lg:flex-row gap-6">
    
    <div className="w-full lg:w-[70%] bg-gray-50 p-10 rounded-lg z-10 relative">
      <h2 className="text-[64px] font-[500] mb-8 text-black text-base/16 max-w-[500px]">
        Why businesses turn to Upwork
      </h2>

      <div className="space-y-6 text-lg">
        {[
          {
            icon: <PiShieldStar className="mr-2 size-[24px]" />,
            title: "Proof of quality",
            desc:
              "Check any pro’s work samples, client reviews, and identity verification.",
          },
          {
            icon: <AiOutlineDollarCircle className="mr-2 size-[24px]" />,
            title: "No cost until you hire",
            desc:
              "Interview potential fits, negotiate rates, and only pay for work you approve.",
          },
          {
            icon: (
              <IoIosCheckmarkCircleOutline className="mr-2 size-[24px]" />
            ),
            title: "Safe and secure",
            desc:
              "We're here with 24/7 support to help protect your data and privacy.",
          },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="max-w-[480px]">
            <h4 className="text-[34px] font-[500] text-black mb-1 flex items-center">
              {icon}
              <span>{title}</span>
            </h4>
            <p className="text-[#676767] text-[16px] ml-8 font-[400] leading-snug max-w-[340px]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>

<div className="w-full lg:w-[30%] bg-[#14a800] text-white p-10 rounded-lg z-10 relative flex flex-col justify-end">
  <h3 className="text-[34px] font-[500] text-base/8 mb-2 ">
    We’re <br />
    the world’s work<br />
    marketplace
  </h3>

  <div className="space-y-2">
    <div>
      <div className="flex items-center gap-2 text-white text-[28px] font-[500]">
        <FaStar  className="size-[28px]" />
        <span>4.9/5</span>
      </div>
      <p className="text-white text-[16px] ml-9 font-normal leading-snug">
        Clients rate professionals on Upwork
      </p>
    </div>

    <div>
      <div className="flex items-center gap-2 text-white text-[28px] font-[500]">
        <FaAward className="size-[28px]" />
        <span>Award winner</span>
      </div>
      <p className="text-white text-[16px] ml-9 font-normal leading-snug">
        G2’s 2021 Best Software Awards
      </p>
    </div>
  </div>
</div>


    {/* Larger Overlapping Image */}
    <div className="absolute left-[66%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.75] z-20 pointer-events-none">
      <Image
        src="/person-with-headset.webp"
        alt="Person"
        width={900}
        height={900}
        priority
      />
    </div>
  </div>
</section>


        </>
    );
}