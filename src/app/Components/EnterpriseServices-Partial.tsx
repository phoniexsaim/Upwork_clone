"use client";

export default function EnterpriseServicesPartial() {
  return (
    <>
 <div className="bg-[#1c1c1c] text-white">
  <div className="w-full max-w-7xl py-16 font-sans mx-auto mb-14 px-4">

    {/* Desktop Layout: side-by-side | Mobile Layout: stacked & reordered */}
    <div className="w-full flex flex-col md:flex-row justify-center gap-8">

      {/* Left Section (Text Content) */}
      <div className="w-full md:w-[45%] flex flex-col">

        {/* Heading - show first on all screens */}
        <h1 className="text-[28px] md:text-[48px] font-semibold leading-tight order-1 md:order-none">
          Part ways with partial results
        </h1>

        {/* Paragraph - second on mobile */}
        <p className="text-[16px] md:text-[20px] mt-6 md:mt-13 order-2 md:order-none">
          Rest easy knowing that work will be done right the first time. Our experts will work directly with Upwork’s freelancers to meet your business needs.
        </p>

        {/* Subheading - third on mobile */}
        <h2 className="text-[18px] md:text-[28px] font-medium mt-6 order-3 md:order-none">
          Our service-led project management supports a variety of industries:
        </h2>
      </div>

      {/* Right Section (Industries Grid) */}
      <div className="w-full md:w-[55%] mt-10 md:mt-0 order-4 md:order-none">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">

          {/* Technology & AI */}
          <div>
            <div className="flex md:block items-center gap-3 mb-2">
            <img src="/Images/SVG1.svg" alt="Technology & AI" className="h-[40px] w-[40px]" />
            <h3 className="text-[20px] md:text-[24px] font-semibold">Technology & AI</h3>
            </div>

            <div className="text-[14px] md:text-[16px] leading-[1.8]">
              <p>• Artificial Intelligence, Machine Learning & Data Labeling</p>
              <p>• Cloud & Infrastructure</p>
              <p>• Technical Project Management</p>
              <p>• Web, Mobile & Software Development</p>
            </div>
          </div>

          {/* Operational Support */}
          <div>
            <div className="flex md:block items-center gap-3 mb-2">
              <img src="/Images/SVG2.svg" alt="Operational Support" className="h-[40px] w-[40px] mb-2" />
              <h3 className="text-[20px] md:text-[24px] font-semibold">Operational Support</h3>
            </div>
            <div className="text-[14px] md:text-[16px] leading-[1.8]">
              <p>• Customer Support</p>
              <p>• Data & Analytics</p>
              <p>• Technical Customer Support</p>
              <p>• Translation & Localization</p>
            </div>
          </div>

          {/* HR Outsourcing */}
          <div>
            <div className="flex md:block items-center gap-3 mb-2">
              <img src="/Images/SVG3.svg" alt="HR Outsourcing" className="h-[40px] w-[40px] mb-2" />
              <h3 className="text-[20px] md:text-[24px] font-semibold">HR Outsourcing</h3>
            </div>
            <div className="text-[14px] md:text-[16px] leading-[1.8]">
              <p>• HR Projects</p>
              <p>• HR Service Center</p>
              <p>• Talent Acquisition</p>
              <p>• Training, Learning & Development</p>
            </div>
          </div>

          {/* Sales & Marketing */}
          <div>
            <div className="flex md:block items-center gap-3 mb-2">
              <img src="/Images/SVG4.svg" alt="Sales & Marketing" className="h-[40px] w-[40px] mb-2" />
              <h3 className="text-[20px] md:text-[24px] font-semibold">Sales & Marketing</h3>
            </div>
            <div className="text-[14px] md:text-[16px] leading-[1.8]">
              <p>• Creative & Design</p>
              <p>• Digital Marketing</p>
              <p>• Lead Generation</p>
              <p>• Technical Writing</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>



    </>
  );
}