"use client";

export default function EnterpriseSolution() {
  return (
<>
<div className="w-full max-w-7xl font-sans mx-auto mb-14 px-4">
  <div className="mb-8 mt-3">
    <h1 className="text-[48px] font-[500] max-md:text-[30px] max-md:font-[600] max-md:leading-[1.1] max-md:text-left">
      Enterprise solutions to scale a winning talent strategy
    </h1>
  </div>

  <div className="hidden max-md:block w-full mb-8">
    <div className="aspect-[1.6115] rounded-[24px] overflow-hidden max-md:aspect-auto max-md:h-[300px]">
      <img src="/Images/IMAGE.jpg" alt="image" className="w-full h-full object-cover rounded-[24px]" />
    </div>
  </div>

  <div className="w-full flex gap-4 max-md:flex-col max-md:gap-10 max-md:flex-col-reverse">
    <div className="w-[40%] mt-16 max-w-[430px] max-md:w-full max-md:mt-0">
      <div>
        <h2 className="text-[28px] mb-4 leading-7.5 max-md:text-[20px] max-md:leading-[1.4] max-md:text-left">
          Track talent end-to-end
        </h2>
        <p className="text-[16px] max-md:text-[15px] max-md:text-left max-md:leading-[1.5]">
          Do it all in one place, from shortlisting top candidates to project management to collaboration tools.
        </p>
      </div>

      <div className="mt-5">
        <h2 className="text-[28px] mb-4 leading-7.5 max-md:text-[20px] max-md:leading-[1.4] max-md:text-left">
          Work with talent you trust
        </h2>
        <p className="text-[16px] max-md:text-[15px] max-md:text-left max-md:leading-[1.5]">
          Bring in talent you already know and manage their experience through one platform.
        </p>
      </div>

      <div className="mt-5">
        <h2 className="text-[28px] mb-4 leading-7.5 max-md:text-[20px] max-md:leading-[1.4] max-md:text-left">
          Secure compliance and work protection
        </h2>
        <p className="text-[16px] max-md:text-[15px] max-md:text-left max-md:leading-[1.5]">
          Use our global classification services to protect your business from legal risks.
        </p>
      </div>
    </div>

    <div className="w-[60%] aspect-[1.6115] rounded-[24px] relative overflow-hidden max-md:hidden">
      <img src="/Images/IMAGE.jpg" alt="image" className="w-full h-full object-cover rounded-[24px]" />
    </div>
  </div>
</div>
</>
  )
}