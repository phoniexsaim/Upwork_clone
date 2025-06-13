"use client";



export default function BlogMarketPlace() {
  return (
    <>
          <div className="max-w-7xl text-black font-sans mx-auto px-6 py-16">
            <div>
                <h2 className="text-[38px] font-[600] mb-6">Join the world’s work marketplace</h2>
            </div>
            <div className="flex justify-center gap-6">
                <div>
                    <div className="bg-[#bda1e7] py-8 flex items-center justify-center text-white rounded-t-lg">
                    <img src="/Images/IMG1.svg" alt="" />
                    </div>
                    <div className="bg-[#1f57c3] px-[14px] py-[14px] text-white rounded-b-lg">
                        <h2 className="text-[30px] text-base/8 font-[500]">Find talent your way and get things done.</h2>
                        <button className="bg-white mt-4 py-[8px] px-[24px] text-[#001e18] font-[600] rounded-4xl transition cursor-pointer hover:bg-[#d0eecc]">Find Talent</button>
                    </div>
                </div>
                <div>
                    <div className="bg-[#d6e2d6] py-8 flex items-center justify-center text-white rounded-t-lg">
                    <img src="/Images/IMG2.svg" alt="" />
                    </div>
                    <div className="bg-[#1f57c3] px-[14px] py-[14px] text-white rounded-b-lg">
                        <h2 className="text-[30px] text-base/8 font-[500]">Find work you love with like-minded clients.</h2>
                        <button className="bg-white py-[8px] px-[24px] mt-4 text-[#001e18] font-[600] rounded-4xl transition cursor-pointer hover:bg-[#d0eecc]">Find Work</button>
                    </div>
                </div>
            </div>
          </div>
    </>
  );
}