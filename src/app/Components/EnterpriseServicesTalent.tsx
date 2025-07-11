"use client";

export default function EnterpriseServicesTalent() {
  return (
<>
 <div className="w-full max-w-7xl py-16 font-sans mx-auto mb-0 px-4">
  <div className="flex justify-center md:justify-center mb-8">
    <h1 className="text-[30px] leading-[32px] font-[600] md:text-[48px] md:leading-[1.2] text-left md:text-center">
      Top talent and experts at a controlled-cost
    </h1>
  </div>

  <div className="relative w-full h-auto md:h-[600px] flex flex-col md:block">
    <img
      src="/Images/ServiceBanner.jpg"
      alt="background"
      className="w-full h-[220px] sm:h-[300px] md:h-full object-cover rounded-[24px]"
    />

    <div className="relative md:absolute top-0 right-0 md:h-full flex items-start md:items-center justify-start md:justify-end px-4 md:pr-10 mt-6 md:mt-0">
      <div className="bg-[#0e0e0e] text-white p-6 md:p-14 rounded-[24px] md:rounded-[40px] w-full md:max-w-[450px]">
        <h2 className="text-[20px] leading-[1.3] font-[500] mb-4 md:text-[28px] md:mb-6">
          Save time and resources<br />
          by relying on experienced<br />
          program managers
        </h2>
        <p className="text-[14px] leading-relaxed text-[#d9d9d9] mb-6 md:text-[16px] md:mb-8">
          From strategy to delivery, rely on our team of experts to scope and meet project needs. We’ll build a custom program that delivers outcomes.
        </p>

        <h3 className="text-[20px] font-[500] mb-2 leading-[1.2] md:text-[24px]">
          On-demand access to top talent
        </h3>
        <p className="text-[14px] leading-relaxed text-[#d9d9d9] md:text-[16px]">
          Our recruiters source talent across 180 countries and 80+ languages on the Upwork Talent Marketplace to build your unique delivery team.
        </p>
      </div>
    </div>
  </div>
</div>
</>
  );
}