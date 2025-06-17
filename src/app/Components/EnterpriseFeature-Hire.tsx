"use client";

import { GoArrowRight } from "react-icons/go";

export default function EnterpriseFeatureBanner() {
  return (
    <>
      <div className="w-full max-w-7xl py-16 font-sans mx-auto px-4">
        <div>
          <h1 className="text-[36px] leading-[1.1] md:text-[48px] font-[600]">
            Hire and scale on one secure, integrated platform
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8 cursor-pointer">
          {[
            {
              title: "Integrations",
              desc: "Streamline and centralize your contingent workforce by connecting with your existing apps",
            },
            {
              title: "Scale",
              desc: "Onboard, engage, and pay your remote workforce on one easy-to-use platform",
            },
            {
              title: "Security",
              desc: "Safeguard your information with encryption tools, continuous monitoring, and data protection",
            },
            {
              title: "Talent",
              desc: "Connect with Expert-Vetted talent around the world with future-forward hiring solutions",
            },
          ].map((item, index) => (
           <div
            key={index}
             className="group flex flex-col flex-1 justify-between gap-4 p-6 bg-[#1c1c1c] text-[var(--white)] rounded-[16px] border-none hover:shadow-[0_0_20px_4px_rgba(128,128,128,0.2)] transition-[box-shadow,color] duration-200 no-underline min-w-[280px] max-w-[300px]">
              <h1 className="text-[28px]">{item.title}</h1>
              <p className="text-[16px]">{item.desc}</p>
              <p className="transition-all duration-300 transform group-hover:translate-x-2 group-hover:text-[#95df00]">
                <GoArrowRight  className="h-[35px] w-[35px]"/>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
