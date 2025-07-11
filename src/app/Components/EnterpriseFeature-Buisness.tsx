"use client";

export default function EnterpriseFeatureBuisness() {
    return(
<>
<div className="w-full max-w-7xl py-16 font-sans mx-auto px-4">
                <div className="mb-8 flex justify-center">
                    <h1 className="md:text-[48px] font-[600] text-[32px] leading-[1.0]">Businesses like yours love our talent</h1>
                </div>
                 <div className="relative w-full h-auto md:h-[600px] flex flex-col md:block">
    <img
      src="/Images/EnterpriseFeatureBanner.jpg"
      alt="background"
      className="w-full h-[220px] sm:h-[300px] md:h-full object-cover rounded-[24px]"
    />

    <div className="relative md:absolute top-0 left-0 md:h-full flex items-start md:items-center justify-start md:justify-start px-4 md:pl-10 mt-6 md:mt-0">
      <div className="bg-[#1f1e1f] text-white p-5 md:p-10 rounded-xl md:rounded-2xl w-full md:max-w-[350px]">
        <h2 className="text-[32px] leading-[1.1] font-[600] mb-4 md:text-[40px] md:mb-6">
           And we have 3 million reviews to prove it
        </h2>
        <div className="md:mt-30 mt-10 md:justify-center md:flex md:items-center items-start">
            <button className="border-2 border-white text-[16px] py-[12px] px-[24px] w-[250px] rounded-xl text-white transation hover:bg-white hover:border-[#95df00] cursor-pointer hover:text-[#95df00]">View reviews</button>
        </div>
      </div>
    </div>
                 </div>
                 {/* <div className="flex justify-center gap-8 mt-8">
                    <div>
                        <div className="flex gap-2 items-center">
                            <img src="/Images/enterprise1.png" alt="image"  className="h-[40px] w-[40px]"/>
                            <h3 className="text-[34px] font-[500]">Thousands</h3>
                        </div>
                        <div className="md:ml-12">
                            <p className="text-[20px]">of companies using Upwork</p>
                        </div>
                    </div>
                     <div>
                        <div className="flex gap-2 items-center">
                            <img src="/Images/enterprise2.png" alt="image"  className="h-[40px] w-[40px]"/>
                            <h3 className="text-[34px] font-[500]">Millions</h3>
                        </div>
                        <div className="md:ml-12">
                            <p className="text-[20px]">of active talent on Upwork</p>
                        </div>
                    </div>
                     <div>
                        <div className="flex gap-2 items-center">
                            <img src="/Images/enterprise3.png" alt="image"  className="h-[40px] w-[40px]"/>
                            <h3 className="text-[34px] font-[500]">4.9/5</h3>
                        </div>
                        <div className="md:ml-12">
                            <p className="text-[20px]">Average rating of talent by enterprises</p>
                        </div>
                    </div>
                     <div>
                        <div className="flex gap-2 items-center">
                            <img src="/Images/enterprise4.png" alt="image"  className="h-[40px] w-[40px]"/>
                            <h3 className="text-[34px] font-[500]">10k+ skills</h3>
                        </div>
                        <div className="md:ml-12">
                            <p className="text-[20px]">Represented by talent on Upwork</p>
                        </div>
                    </div>
                 </div> */}
        </div>
</>
    )
}
