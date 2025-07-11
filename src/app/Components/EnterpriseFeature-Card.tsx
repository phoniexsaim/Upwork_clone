"use client";

export default function EnterpriseFeatureCard() {
    return(
<>
<div className="w-full max-w-7xl py-16 font-sans mx-auto px-4">
  <div className="border-2 border-[#3c3c3c] rounded-4xl p-[24px] sm:p-[60px] w-full h-auto flex flex-col items-start justify-start">
    
    <div className="flex justify-start items-start">
      <img
        src="/Images/MicrosoftLogo.png"
        alt="image"
        className="object-contain w-[100px] h-[22px] sm:w-[122px] sm:h-[26px]"
      />
    </div>

    <div className="my-6 sm:my-8">
      <h1 className="text-[24px] leading-[1.4em] font-[500] sm:text-[56px] sm:leading-[1.2em]">
        We could never have accomplished this in such a short period of time
        without the depth of freelance talent we were able to harness.
      </h1>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 mt-10 sm:mt-16 w-full">
      <div className="bg-[#1c1c1c] rounded-2xl p-4 sm:p-[24px] flex flex-col items-start justify-start w-full sm:w-auto">
        <h2 className="text-[24px] sm:text-[34px] font-[500]">50% Faster</h2>
        <p className="text-[16px] sm:text-[20px] font-[500]">launch of projects</p>
      </div>
      <div className="bg-[#1c1c1c] rounded-2xl p-4 sm:p-[24px] flex flex-col items-start justify-start w-full sm:w-auto">
        <h2 className="text-[24px] sm:text-[34px] font-[500]">10,000</h2>
        <p className="text-[16px] sm:text-[20px] font-[500]">projects completed</p>
      </div>
    </div>
  </div>
</div>
</>
);
}