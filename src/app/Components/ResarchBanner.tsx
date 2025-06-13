"use client";

export default function ResearchBanner() {
  return (
    <>
      <div className="max-w-7xl font-sans mx-auto px-6 py-16">
        <div
          className="relative bg-cover bg-center h-[400px] rounded-xl overflow-hidden"
          style={{ backgroundImage: "url('Images/ApartmentCoder.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 h-full flex flex-col justify-center text-white px-8 items-start">
            <h1 className="text-[55px] text-base/14 font-bold mb-4 max-w-lg">
              The Upwork Research Institute
            </h1>
            <p className="text-[34px] font-[600] text-base/10  mb-6 max-w-md">
             Changing work one insight at a time.
            </p>
            <button className="bg-white text-black font-medium py-[9px] px-[24px] cursor-pointer rounded-xl hover:bg-gray-100 transition text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
