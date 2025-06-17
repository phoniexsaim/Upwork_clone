"use client";

export default function EnterpriseServicesAdabtable() {
    return(
        <>
       <div className="w-full max-w-7xl py-16 font-sans mx-auto mb-14 px-4">

  {/* Heading - Mobile */}
  <div className="mb-8 md:hidden">
    <h1 className="text-[30px] leading-[32px] font-[600] text-left">
      Adaptable and scalable solutions
    </h1>
  </div>

  {/* Heading - Desktop */}
  <div className="mb-8 hidden md:block">
    <h1 className="text-[48px] font-[600]">
      Adaptable and scalable solutions
    </h1>
  </div>

  {/* Desktop layout */}
  <div className="hidden md:flex justify-center gap-8">
    <div className="w-[50%]">
      <img src="/Images/LeftIMG.webp" alt="image" className="aspect-[2.22] rounded-[8px] w-full mb-6" />
      <h2 className="text-[24px]">Freelancer access on your terms</h2>
      <p className="text-[16px] text-[#d9d9d9]">We’ll limit freelancer permissions, so they’ll only access necessary systems.</p>
    </div>
    <div className="w-[50%]">
      <img src="/Images/rightIMG.webp" alt="image" className="aspect-[2.22] rounded-[8px] w-full mb-6" />
      <h2 className="text-[24px]">Scale your program up or down</h2>
      <p className="text-[16px] text-[#d9d9d9]">As your business needs change, Upwork freelancers flex to meet deadlines with our program management and oversight</p>
    </div>
  </div>

  {/* Mobile layout */}
  <div className="flex flex-col gap-8 md:hidden">
    <div>
      <h2 className="text-[20px] leading-[28px] font-semibold mb-2">
        Freelancer access on your terms
      </h2>
      <p className="text-[16px] leading-[24px] text-[#d9d9d9]">
        We’ll limit freelancer permissions, so they’ll only access necessary systems.
      </p>
    </div>
    <div>
      <h2 className="text-[20px] leading-[28px] font-semibold mb-2">
        Scale your program up or down
      </h2>
      <p className="text-[16px] leading-[24px] text-[#d9d9d9]">
        As your business needs change, Upwork freelancers flex to meet deadlines with our program management and oversight
      </p>
    </div>
  </div>
</div>

        </>
    )
}