"use client";

export default function ResearchExperts() {
  return (
    <>
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div>
                <div>
                    <h1 className="text-black font-[600] text-[48px] font-sans mb-0">Meet the experts</h1>
                </div>
                <div className="mt-4 flex flex-col gap-10">
                    <div className="w-full flex gap-4">

                        <div className="w-[60%] text-black mt-6">
                          <p className="text-[12px] font-sans mb-3 uppercase">Managing Director, Upwork Research Institute</p>
                          <h2 className="text-[34px] font-sans font-[600] mb-3">Kelly Monahan, Ph.D</h2>
                          <p className="text-[16px] font-sans mb-6">Dr. Kelly Monahan is the Founder and Managing Director of the Upwork Research Institute, where she leads research on emerging technologies, workforce transformation, and the rise of independent professionals. Previously, she held leadership roles at Meta, Accenture, and Deloitte, shaping future of work strategies for global organizations. She’s the author of two books, including the USA Today bestseller Essential, and a sought-after keynote speaker on talent innovation. Kelly holds a Ph.D. in organizational leadership and blends behavioral science with workforce strategy.</p>
                           <p className="text-[16px] font-sans font-[600] cursor-pointer text-[#108a00] hover:text-[#14a800]">LinkedIn</p>
                        </div>
                        
                        <div className="w-[40%]">
                            <img className="aspect-[1.74] object-cover rounded-lg" src="Images/Ex1.webp" />
                        </div>

                    </div>
                     <div className="w-full flex gap-4">

                        <div className="w-[60%] text-black mt-6">
                          <p className="text-[12px] font-sans mb-3 uppercase">Senior Research Manager, Upwork Research Institute</p>
                          <h2 className="text-[34px] font-sans font-[600] mb-3">Gabby Burlacu, Ph.D</h2>
                          <p className="text-[16px] font-sans mb-6">Dr. Gabby Burlacu is a Senior Research Manager at Upwork, focused on how organizations evolve their talent strategies in a rapidly evolving world of work. Her research has shaped workforce transformation efforts at Fortune 500 companies and appears in peer-reviewed journals and books. She holds a Ph.D. in industrial-organizational psychology from Portland State University and brings deep expertise in workplace behavior and inclusive, agile work models.</p>
                           <p className="text-[16px] font-sans font-[600] cursor-pointer text-[#108a00] hover:text-[#14a800]">LinkedIn</p>
                        </div>
                        
                        <div className="w-[40%]">
                            <img className="aspect-[1.74] object-cover rounded-lg" src="Images/Ex2.webp" />
                        </div>

                    </div>
                     <div className="w-full flex gap-4">

                        <div className="w-[60%] text-black mt-6">
                          <p className="text-[12px] font-sans mb-3 uppercase">Economist, Upwork Research Institute</p>
                          <h2 className="text-[34px] font-sans font-[600] mb-3">Ted Liu, Ph.D</h2>
                          <p className="text-[16px] font-sans mb-6">Dr. Ted Liu is an Economist at Upwork, where he studies how AI and technological change are transforming the labor market and reshaping skill demand. He holds a Ph.D. in economics from the University of California, Santa Cruz, and specializes in labor market dynamics and quantitative research. His work informs Upwork’s insights on workforce shifts, economic opportunity, and policy.</p>
                           <p className="text-[16px] font-sans font-[600] cursor-pointer text-[#108a00] hover:text-[#14a800]">LinkedIn</p>
                        </div>
                        
                        <div className="w-[40%]">
                            <img className="aspect-[1.74] object-cover rounded-lg" src="Images/Ex3.webp" />
                        </div>

                    </div>
                </div>

                <div className="flex justify-between mt-10">
                    <div>
                       <h2 className="font-[600] font-sans text-black text-[48px]">In the news</h2>
                    </div>
                    <div>
                        <button className="text-white text-center bg-[#108a00] border-none rounded-xl justify-center items-center px-6 py-[9px] font-sans text-base font-medium leading-[1.375em] transition-colors duration-200 flex hover:bg-[#14a800]">Explore All</button>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-6">

                    <div className="border border-[#e9e9e9] rounded-lg py-8 px-4">
                        <div>
                            <img className="object-contain object-left w-full h-[12.25rem] mb-8"  src="Images/LO1.jpeg" alt="" />
                        </div>
                        <div>
                            <p className="uppercase text-[12px] text-black leading-[1.2em] tracking-[0.075rem] mb-2">MAY 8, 2025</p>
                            <h3 className="text-[#181818] tracking-[0.015em] mb-[15px] font-sans text-[28px] font-semibold leading-[1.1em]">HBS Managing The Future of Work Podcast: Upwork’s Hayden Brown on bridging volatility with contingency</h3>
                        </div>
                    </div>
                     <div className="border border-[#e9e9e9] rounded-lg py-8 px-4">
                        <div>
                            <img className="object-contain object-left w-full h-[12.25rem] mb-8"  src="Images/LO2.png" alt="" />
                        </div>
                        <div>
                            <p className="uppercase text-[12px] text-black leading-[1.2em] tracking-[0.075rem] mb-2">March 18, 2025</p>
                            <h3 className="text-[#181818] tracking-[0.015em] mb-[15px] font-sans font-semibold text-[28px] leading-[1.1em]">Fast Company: The Most Innovative Human Resources Companies of 2025</h3>
                        </div>
                    </div>
                     <div className="border border-[#e9e9e9] rounded-lg py-8 px-4">
                        <div>
                            <img className="object-contain object-left w-full h-[12.25rem] mb-8"  src="Images/LO3.png" alt="" />
                        </div>
                        <div>
                            <p className="uppercase text-[12px] text-black leading-[1.2em] tracking-[0.075rem] mb-2">January 22, 2025</p>
                            <h3 className="text-[#181818] tracking-[0.015em] mb-[15px] font-sans text-[28px] font-semibold leading-[1.1em]">Entrepreneur: Don't Expect to Get a New Job in 2025 If You Lack These 2 Skill Sets, New Report Reveals</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
}