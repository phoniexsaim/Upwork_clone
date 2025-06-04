"use client";
import Image from "next/image";



export default function MainHome() {
    return(
        <>
 <div className="min-h-screen bg-white">
  <main className="max-w-7xl font-sans mx-auto px-6 py-16">
    <div className="flex flex-col lg:flex-row items-stretch gap-0">
      
      <div className="w-full lg:w-1/2 rounded-l-lg overflow-hidden">
        <Image
          src="/find-great-work@2x.webp"
          alt="Freelancer working"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full rounded-r-lg lg:w-1/2 bg-[#086add] text-white pt-6 pb-8 px-8 flex flex-col justify-start border-r-4 border-white">
        <p className="text-[24px] font-[600] mb-2">For talent</p>
        <h1 className="text-[64px] font-[600] leading-[1.1] mb-4">
          Find great<br />work
        </h1>
        <p className="mb-6 text-[20px]">
          Meet clients you’re excited to work with and take your career or
          business to new heights.
        </p>

        <hr className="border-t mt-34 border-white mb-4" />

        <div className="flex flex-col lg:flex-row gap-4 mb-6 text-[16px]">
          <p className="flex-1">Find opportunities for every stage of your freelance career</p>
          <p className="flex-1">Control when, where, and how you work</p>
          <p className="flex-1">Explore different ways to earn</p>
        </div>

        <button className="bg-white text-blue-600 cursor-pointer hover:bg-[#a5a5a5] font-[500] px-[12px] py-[6px] rounded-lg w-[35%]">
          Find opportunities
        </button>
      </div>
      
    </div>
  </main>
</div>




        </>
    );
}