"use client";


export default function ResearchSecondBanner() {
  return (
    <>
     <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
  <div>
    <h1 className="text-black text-[48px] font-[600]">Latest Research</h1>
  </div>
  <div className="w-full gap-10 flex mt-6">
    <div className="w-[50%]">
      <img
        className="rounded-lg aspect-3/2 object-cover h-full w-full"
        src="/6808033ad36887b84250132a_Blog_Header Image_1500x600.png"
        alt="Research Image"
      />
    </div>
    <div className="w-[50%] text-black flex flex-col justify-center">
      <p className="text-[12px] font-[400]">APR 23, 2025</p>
      <h2 className="text-[30px] leading-snug font-[600] mt-2 mb-3">
        The Future Workforce Index: Evolving <br /> Talent Trends in 2025  and Beyond
      </h2>
      <p className="text-[18px] font-[400]">
        Research from The Upwork Research Institute reveals that skilled <br /> freelance knowledge workers are reshaping careers, leading the AI <br /> race and boosting U.S. economic growth.
      </p>
    </div>
  </div>
</div>

    </>
  );
}