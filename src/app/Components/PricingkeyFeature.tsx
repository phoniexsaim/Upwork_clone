"use client";
import { useEffect, useRef, useState } from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md';

export default function ComparePlans() {
  const [isSticky, setIsSticky] = useState(false);
  const [scrolledPastFeatures, setScrolledPastFeatures] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!featuresRef.current || !containerRef.current) return;

      const featuresRect = featuresRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      setIsSticky(featuresRect.top <= 100 && featuresRect.bottom > 200);

      setScrolledPastFeatures(containerRect.bottom <= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="px-[2rem] w-full md:flex md:flex-col hidden" ref={containerRef}>
      <div className="text-center mb-12 cursor-pointer" onClick={scrollToFeatures}>
        <h1 className="text-[1rem] font-[500] mb-4 leading-[1.5em] tracking-[.03em] text-[#14a800]">Compare plans <span className="text-[#14a800]">↓</span></h1>
      </div>
    
    <div 
    ref={featuresRef}
    className={`bg-white mb-4 transition-all duration-300 ${
        isSticky && !scrolledPastFeatures ? 'sticky top-0 z-10 py-4 ' : ''
    } ${scrolledPastFeatures ? 'relative' : ''}`}
    >
    <div className="flex flex-wrap lg:flex-nowrap items-start pt-[4rem]">
        
        <h2 className="text-[34px] tracking-[.02125rem] leading-[1.1em] font-normal text-[#001e00] mt-[10px] w-full lg:w-1/4">
        Key features
        </h2>

        <div className="flex flex-1 gap-5 justify-end">
      <div className="py-[24px] px-[35px] border border-[#d9d9d9] rounded-[16px] justify-center items-center flex flex-col">
        <h3 className="font-normal text-[20px] mb-[8px] text-[#181818]">Marketplace</h3>
        <p className="text-[14px] text-[#181818] mb-6 flex items-center">5% Service fee
             <span className="relative group">
                <MdOutlineErrorOutline className="text-[#181818] cursor-pointer w-[22px] h-[22px] rotate-180 ml-[5px]" />
                 <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] bg-white text-[#181818] text-[13px] p-3 rounded-md shadow-lg opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                 5% Marketplace fee. Eligible ACH payments discounted to 3%. A <a className='text-[#14a800] underline'> contract initiation fee</a> is charged per contract.
                </span>
             </span>  
        </p>
        <button className="w-[100px] bg-[#0c7100] hover:bg-[#14a800] text-white py-2 rounded-[12px] transition-colors">
          Sign up
        </button>
      </div>

      <div className="py-[24px] px-[33px] bg-[#f9f9f9] rounded-[16px] justify-center items-center flex flex-col">
        <h3 className="font-normal text-[20px] mb-[8px] text-[#181818]">Business Plus</h3>
        <p className="text-[14px] text-[#181818] mb-6 flex items-center">10% Service fee
             <span className="relative group">
                <MdOutlineErrorOutline className="text-[#181818] cursor-pointer w-[22px] h-[22px] rotate-180 ml-[5px]" />
                 <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] bg-white text-[#181818] text-[13px] p-3 rounded-md shadow-lg opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                 10% Business Plus fee. Eligible ACH payments discounted to 8%. No contract initiation fee, with the exception of fixed-price contracts of $100 USD or less.
                </span>
            </span>
        </p>
        <button className="w-[100px] bg-[#0c7100] hover:bg-[#14a800] text-white py-2 rounded-[12px] transition-colors">
          Sign up
        </button>
      </div>

      <div className="py-[24px] px-[22px] border border-[#d9d9d9] rounded-[16px] justify-center items-center flex flex-col">
        <h3 className="font-normal text-[20px] mb-[8px] text-[#181818]">Enterprise</h3>
        <p className="text-[14px] text-[#181818] mb-6">Custom pricing</p>
        <button className="w-[150px] bg-[#0c7100] hover:bg-[#14a800] text-white py-2 rounded-[12px] transition-colors">
        <a href='/PricingContact'> Contact Sales</a>
        </button>
      </div>
    </div>
  </div>

</div>

<div>
 <div className="flex flex-col">
  <div className="flex-col border border-b-[#d9d9d9]">
    <div>
        <div className='flex items-center justify-between'>
            <div>
         <h2 className="text-[20px] font-medium text-[#181818]">Talent</h2>
         </div>
         <div className='flex justify-end gap-[25px]'>
          <div className='w-[194px] pt-[30px] border border-t-[#d9d9d9] border-r-[#d9d9d9] border-l-[#d9d9d9] rounded-tr-[1rem] rounded-tl-[1rem]'>.</div>
          <div className='w-[194px] pt-[30px] bg-[#f9f9f9] border-t-[#d9d9d9] border-r-[#d9d9d9] border-l-[#d9d9d9]  rounded-tr-[1rem] rounded-tl-[1rem]'>.</div>
          <div className='w-[194px] pt-[30px]  border border-t-[#d9d9d9] border-r-[#d9d9d9] border-l-[#d9d9d9] rounded-tr-[1rem] rounded-tl-[1rem]'>.</div>
         </div>
       </div>
      </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Access to Upwork's global work marketplace</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Talent ID verified</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Verified freelancer work history and reviews on Upwork</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

    <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Top Rated and Rising Talent search filter</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
     </div>

       <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600 flex items-center">Expert-Vetted talent
            <span className="relative group">
                <MdOutlineErrorOutline className="text-[#181818] cursor-pointer w-[22px] h-[22px] rotate-180 ml-[5px]" />
                 <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] bg-white text-[#181818] text-[13px] p-3 rounded-md shadow-lg opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                 The top 1% of talent on Upwork, these freelancers and agencies have completed a thorough screening process to evaluate their technical expertise and soft skills.
                </span>
             </span>  
            </p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
     </div>

     <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Diversity-certified talent</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
      </div>

  </div>
</div>

<div className="flex flex-col">
  <div className="flex-col border border-b-[#d9d9d9] ">
    <div>
        <div className='flex items-center justify-between'>
            <div>
         <h2 className="text-[20px] font-medium text-[#181818] pt-[10px]">Support and on-demand services</h2>
         </div>
         <div className='flex justify-end gap-[25px]'>
          <div className='w-[194px] pt-[30px] border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px]  border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
         </div>
       </div>
      </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Customer support</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
               Premium 24/7
              </div>
              <div className="flex justify-center items-center w-[194px] py-[10px] text-[#181818] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] text-center">
                Premium 24/7
                </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Talent shortlisting services</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <p className="text-[#181818] flex items-center text-[14px]">Limited
                <span className="relative group">
                    <MdOutlineErrorOutline className="text-[#181818] cursor-pointer w-[22px] h-[22px] rotate-180 ml-[5px]" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] bg-white text-[#181818] text-[13px] p-3 rounded-md shadow-lg opacity-0 text-center group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                    The top 1% of talent on Upwork, these freelancers and agencies have completed a thorough screening process to evaluate their technical expertise and soft skills.
                    </span>
                </span>  
            </p>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">On-demand coaching for hiring and managing contracts</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

    <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Invites per job post</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
            <div className="flex justify-center items-center w-[194px] py-[10px] text-[#181818] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] text-center">
            30 invites
            </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             60 invites
              </div>
             <div className='flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
     </div>

       <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600 flex items-center">Program management</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
     </div>

     <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Dedicated account manager</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
      </div>

  </div>
</div>

<div className="flex flex-col">
  <div className="flex-col border border-b-[#d9d9d9]">
    <div>
        <div className='flex items-center justify-between'>
            <div>
         <h2 className="text-[20px] font-medium text-[#181818] pt-[10px]">Collaboration and project tracking</h2>
         </div>
         <div className='flex justify-end gap-[25px]'>
          <div className='w-[194px] pt-[30px] border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px]  border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
         </div>
       </div>
      </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Chat, share files, and make voice and video calls</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div className="flex justify-center items-center w-[194px] py-[10px] text-[#181818] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] text-center">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Teams and member permissions settings</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Timesheets, time tracker, work diary</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
                <div>
                <p className="text-gray-600">Standard reporting</p>
                </div>
                <div className='flex justify-end gap-[25px]'>
                <div className="flex justify-center items-center w-[194px] py-[10px] text-[#181818] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] text-center">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div className='flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
            </div>
        </div>

       <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600 flex items-center">Activity codes</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
     </div>

     <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Standard reporting</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
      </div>

      <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Advanced reporting</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
      </div>

      <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Custom reporting</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
      </div>

  </div>
</div>

<div className="flex flex-col">
  <div className="flex-col border border-b-[#d9d9d9]">
    <div>
        <div className='flex items-center justify-between'>
            <div>
         <h2 className="text-[20px] font-medium text-[#181818] pt-[10px]">AI-powered features</h2>
         </div>
         <div className='flex justify-end gap-[25px]'>
          <div className='w-[194px] pt-[30px] border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px]  border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
         </div>
       </div>
      </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Job post generator</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div className="flex justify-center items-center w-[194px] py-[10px] text-[#181818] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] text-center">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </div>
  </div>
</div>

<div className="flex flex-col">
  <div className="flex-col border border-b-[#d9d9d9]">
    <div>
        <div className='flex items-center justify-between'>
            <div>
         <h2 className="text-[20px] font-medium text-[#181818] pt-[10px]">APIs and integrations</h2>
         </div>
         <div className='flex justify-end gap-[25px]'>
          <div className='w-[194px] pt-[30px] border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px]  border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
         </div>
       </div>
      </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">API access</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div className="flex justify-center items-center w-[194px] py-[10px] text-[#181818] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] text-center">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
          </div>
        </div>
 
        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Single sign on (SAML SSO)</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Vendor Management Systems (SAP Fieldglass, Workday Vndly, Flextrack)</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
                <div>
                <p className="text-gray-600">Applicant Tracking Systems</p>
                </div>
                <div className='flex justify-end gap-[25px]'>
                <div className="flex justify-center items-center w-[194px] py-[10px] text-[#181818] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] text-center">
                </div>
                <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
                </div>
                <div className='flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
            </div>
        </div>

       <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600 flex items-center">Spend Management Systems</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

       <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Human Resources Information Systems</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
       </div>

  </div>
</div>

<div className="flex flex-col mb-[4rem]">
  <div className="flex-col">
    <div>
        <div className='flex items-center justify-between'>
            <div>
         <h2 className="text-[20px] font-medium text-[#181818] pt-[10px]">Operations and compliance</h2>
         </div>
         <div className='flex justify-end gap-[25px]'>
          <div className='w-[194px] pt-[30px] border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
          <div className='w-[194px] pt-[30px]  border border-r-[#d9d9d9] border-l-[#d9d9d9]'>.</div>
         </div>
       </div>
      </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600 flex items-center">Contract initiation fees
               <span className="relative group">
                    <MdOutlineErrorOutline className="text-[#181818] cursor-pointer w-[22px] h-[22px] rotate-180 ml-[5px]" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] bg-white text-[#181818] text-[13px] p-3 rounded-md shadow-lg opacity-0 text-start group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                    For Marketplace, a contract initiation fee applies per contract. Business Plus has no initiation fee, except for fixed-price contracts of $100 USD or less.
                    </span>
                </span>  
            </p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div className="flex justify-center items-center w-[194px] py-[10px] text-[#181818] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] text-center">
                </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Payment protection and disputes</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

        <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Purchase orders</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
            <div className="flex justify-center items-center py-[10px] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] w-[194px] text-center text-[#181818]">
            1 per team
            </div>
             <div className='w-[194px] pt-[20px] py-[10px] border-r bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             1 per team
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
        </div>

       <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600 flex items-center">Net 30 payment terms
                <span className="relative group">
                    <MdOutlineErrorOutline className="text-[#181818] cursor-pointer w-[22px] h-[22px] rotate-180 ml-[5px]" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[300px] bg-white text-[#181818] text-[13px] p-3 rounded-md shadow-lg opacity-0 text-start group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                     Monthly invoicing with 30-day payment terms for U.S. based companies only, will require an application and approval.Monthly invoicing with 30-day payment terms for U.S. based companies only, will require an application and approval.
                    </span>
                </span>  
            </p>
            </div>
            <div className='flex justify-end gap-[25px]'>
            <div className="flex justify-center items-center w-[194px] py-[10px] text-[#181818] border-l border-r border-l-[#d9d9d9] border-r-[#d9d9d9] text-center">
            </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
             <div className='flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
       </div>

       <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600 flex items-center">Custom talent onboarding plans</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
       </div>

      <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Hiring pre-approvals workflow</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
      </div>

      <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Compliance Worker Protection Program (WPP)</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] w-[194px] border border-r-[#d9d9d9] border-l-[#d9d9d9] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-r-[#d9d9d9] border-l-[#d9d9d9] flex justify-center items-center text-[#181818]'>
              </div>
             <div className='flex justify-center items-center w-[194px] py-[10px] border-r border-l  border-r-[#d9d9d9] border-l-[#d9d9d9] text-center text-[#181818]'>
             Subscription required
             </div>
          </div>
      </div>

      <div className='flex justify-between items-center hover:bg-[#f9f9f9]'>
            <div>
            <p className="text-gray-600">Automated payroll services</p>
            </div>
            <div className='flex justify-end gap-[25px]'>
             <div className='flex justify-center items-center py-[10px] border-b border-b-[#d9d9d9]  border-r border-l w-[194px] border-r-[#d9d9d9] border-l-[#d9d9d9]  rounded-bl-[1rem] rounded-br-[1rem] text-cente'>
             </div>
             <div className='w-[194px] pt-[20px] py-[10px] bg-[#f9f9f9] border-b-[#d9d9d9] border-r-[#d9d9d9] border-l-[#d9d9d9]  rounded-bl-[1rem] rounded-br-[1rem] flex justify-center items-center text-[#181818]'>
              </div>
             <div className=' flex justify-center items-center w-[194px] py-[10px] border-b border-b-[#d9d9d9] border-r border-l border-r-[#d9d9d9] border-l-[#d9d9d9] rounded-bl-[1rem] rounded-br-[1rem] text-center'>
             <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8332 5.83301L7.50741 13.333L4.1665 10.3042" stroke="#181818" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
             </div>
          </div>
      </div>

  </div>
</div>
      </div>
    </div>
  );
}