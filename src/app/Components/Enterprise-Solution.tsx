"use client";


export default function EnterpriseSolution() {
  return (
    <>
      <div className="w-full max-w-7xl font-sans mx-auto mb-14">

        <div className="mb-8 mt-3">
            <h1 className="text-[48px] font-[500]">Enterprise solutions to scale a winning talent strategy</h1>
        </div>

        <div className=" w-full flex gap-4">
            <div className="w-[40%] mt-16 max-w-[430px]">
                <div>
                    <h2 className="text-[28px] mb-4 leading-7.5">Track talent end-to-end</h2>
                    <p className="text-[16px]">Do it all in one place, from shortlisting top candidates to project management to collaboration tools.</p>
                </div>
                 <div className="mt-5">
                    <h2 className="text-[28px] mb-4 leading-7.5">Work with talent you trust</h2>
                    <p className="text-[16px]">Bring in talent you already know and manage their experience through one platform.</p>
                </div>
                 <div className="mt-5">
                    <h2 className="text-[28px] mb-4 leading-7.5">Secure compliance and work protection</h2>
                    <p className="text-[16px]">Use our global classification services to protect your business from legal risks.</p>
                </div>
            </div>
            <div className="w-[60%] aspect-[1.6115] rounded-[24px]  relative overflow-hidden">
                <img src="/Images/IMAGE.jpg" alt="image" />
            </div>
        </div>
                    
      </div>
    </>
  )
}