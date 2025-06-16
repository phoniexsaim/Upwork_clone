"use client";

import { useState } from "react";

export default function EnterpriseVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-7xl py-16 font-sans mx-auto mb-14 px-4">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center gap-10">
        
        {/* LEFT TEXT SECTION */}
        <div className="w-full lg:w-[35%] mt-8 lg:mt-2 flex flex-col gap-6">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-[600] text-left">
            How it works
          </h1>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <span className="text-[32px] md:text-[40px] lg:text-[48px] font-[600] leading-[1]">1.</span>
              <p className="text-[16px] md:text-[18px] lg:text-[20px]">
                Tell us about your project and the skills you're looking for.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <span className="text-[32px] md:text-[40px] lg:text-[48px] font-[600] leading-[1]">2.</span>
              <p className="text-[16px] md:text-[18px] lg:text-[20px]">
                Instantly browse qualified talent with proven track records.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <span className="text-[32px] md:text-[40px] lg:text-[48px] font-[600] leading-[1]">3.</span>
              <p className="text-[16px] md:text-[18px] lg:text-[20px]">
                Hire quickly and securely with our customizable tools.
              </p>
            </div>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="w-full lg:w-[65%]">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
            {!isPlaying ? (
              <>
                <img
                  src="/Images/BG1.webp"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover cursor-pointer"
                />

                <div className="absolute bottom-4 left-4 bg-[#4c433e] text-white text-[14px] md:text-[16px] px-4 py-1 rounded-full">
                  1:14 min
                </div>

                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center transition"
                >
                  <img
                    src="/Images/PLAY1.png"
                    className="w-[80px] md:w-[100px] lg:w-[142px] h-auto"
                    alt="Play Button"
                  />
                </button>
              </>
            ) : (
              <video
                src="/How to Hire Freelance Talent on Upwork.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
