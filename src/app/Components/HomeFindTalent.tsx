"use client";

export default function HomeFindTalent() {


  return (
    <>
  <div className="max-w-7xl mx-auto px-6 py-16">
  <section className="relative w-full rounded-lg overflow-hidden">
    <img
      src="/find-talent.jpg"
      alt="Find Talent"
      className="w-full h-[600px] object-cover"
    />

    <div className="absolute inset-0 h-[600px] bg-black/40 flex flex-col justify-center text-white">
      <div className="w-full pl-6 pr-6">
        <h4 className="text-[24px] font-[600] mb-18">For clients</h4>
        <h1 className="text-[64px] font-[600] text-base/16 mb-4 max-w-md">Find talent your way</h1>
        <p className="mb-10 text-[24px] max-w-2xl text-base/8">
          Work with the largest network of independent professionals and get things done—from
          quick turnarounds to big transformations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          <div className="bg-[#108a00] text-white hover:bg-white hover:text-[#108a00] p-8 rounded-lg cursor-pointer">
            <h3 className="text-[34px] text-base/8 font-[500] mb-2">Post a job and hire a pro</h3>
            <p className="text-[16px] opacity-90 mt-8">Talent Marketplace™ →</p>
          </div>
          <div className="bg-[#108a00] text-white hover:bg-white hover:text-[#108a00] p-8 rounded-lg cursor-pointer">
            <h3 className="text-[34px] text-base/8 font-[500] mb-2">Browse and buy projects</h3>
            <p className="text-[16px] opacity-90 mt-8">Project Catalog™ →</p>
          </div>
          <div className="bg-[#108a00] text-white hover:bg-white hover:text-[#108a00] p-8 rounded-lg cursor-pointer">
            <h3 className="text-[34px] text-base/8 font-[500] mb-2">Get advice from an industry expert</h3>
            <p className="text-[16px] opacity-90 mt-8">Consultations →</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    </>
  );
}