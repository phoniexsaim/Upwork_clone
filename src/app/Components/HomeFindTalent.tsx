"use client";

export default function HomeFindTalent() {


  return (
    <>
<div className="max-w-7xl font-sans mx-auto px-4 sm:px-6 py-10 sm:py-16">
  <section className="relative w-full rounded-lg overflow-hidden">
    {/* Responsive Image */}
    <img
      src="/Images/find-talent.jpg"
      alt="Find Talent"
      className="w-full min-h-[700px] sm:min-h-[550px] md:h-[600px] object-cover"
    />

    {/* Dark overlay and content */}
    <div className="absolute inset-0 min-h-[700px] sm:min-h-[550px] md:h-[600px] bg-black/40 flex flex-col justify-center text-white">
      <div className="w-full md:mt-2 sm:mt-0 px-4 sm:px-6">
        <h4 className="text-[18px] sm:text-[20px] md:text-[24px] font-[600] mb-4">
          For clients
        </h4>

        <h1 className="text-[36px] sm:text-[36px] md:text-[64px] font-[600] leading-[1.1] mb-4 max-w-full md:max-w-md">
          Find talent your way
        </h1>

        <p className="mb-8 sm:mb-10 text-[16px] sm:text-[20px] md:text-[24px] max-w-full md:max-w-2xl leading-[1.4]">
          Work with the largest network of independent professionals and get
          things done—from quick turnarounds to big transformations.
        </p>

        {/* Responsive card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          {/* Card 1 */}
          <div className="bg-[#108a00] text-white hover:bg-white hover:text-[#108a00] p-4 sm:p-6 md:p-8 rounded-lg cursor-pointer">
            <h3 className="text-[20px] sm:text-[26px] md:text-[34px] font-[500] mb-2">
              Post a job and hire a pro
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] opacity-90 mt-4 sm:mt-6 md:mt-8">
              Talent Marketplace™ →
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#108a00] text-white hover:bg-white hover:text-[#108a00] p-4 sm:p-6 md:p-8 rounded-lg cursor-pointer">
            <h3 className="text-[20px] sm:text-[26px] md:text-[34px] font-[500] mb-2">
              Browse and buy projects
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] opacity-90 mt-4 sm:mt-6 md:mt-8">
              Project Catalog™ →
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#108a00] text-white hover:bg-white hover:text-[#108a00] p-4 sm:p-6 md:p-8 rounded-lg cursor-pointer">
            <h3 className="text-[20px] sm:text-[26px] md:text-[34px] font-[500] mb-2">
              Get advice from an industry expert
            </h3>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] opacity-90 mt-4 sm:mt-6 md:mt-8">
              Consultations →
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>




    </>
  );
}