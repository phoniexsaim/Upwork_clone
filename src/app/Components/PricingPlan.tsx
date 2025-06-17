"use client"
import { Link } from 'lucide-react'
import React from 'react'
import { LuDot } from 'react-icons/lu'
import { MdOutlineErrorOutline } from 'react-icons/md'

const Pricing = () => {
  return (
    // pt-[3rem] |
    <div className='pt-[6rem] pb-[3rem] px-[2rem] w-full'>
        <h1 className='text-[rgb(24,24,24)] text-[40px] tracking-[.025rem] leading-[1.1em] font-[500] font-Neuemontreal Variable,sans-serif mb-[2.5rem]'>Pricing plans for every business</h1>
        <div className='mb-[1rem] flex items-center'>
            <p className='tracking-[.02625rem] text-[#676767] text-[14px] leading-[21px] font-[530] mr-[4px]'>Job seeker?</p>
            <a href="#" className='text-[#14a800] text-[14px] tracking-[.02625rem] leading-[21px] font-[530] underline'>Join as a Youtuber</a>
        </div>
        <div className='flex gap-[20px] flex-col md:flex-row '>
                <div className='flex flex-col border border-[#d9d9d9] rounded-[24px] p-[2rem] w-full gap-[1.5rem]'>
                    <div>
                        <h1 className='text-[24px] leading-[1.1em] text-[#181818] font-600 tracking-[.025rem]'>Marketplace</h1>
                        <p className='text-[14px] text-[#676767] mb-[1.5rem] tracking-[.02625rem] leading-[1.5em] font-[530]'>Essential tools for small businesses</p>
                        <span className='text-[16px] text-[#181818] leading-[1.5em] tracking-[.03em] font-[530]'>5% Service fee</span>
                    </div>
                    <div className='flex flex-col'>
                         <a href='#'
                                className='w-[180px] cursor-pointer text-[16px] text-center leading-[24px] font-[500] 
                                rounded-[12px] py-[.5rem] px-[1.2rem] bg-[#0c7100] hover:bg-[#14a800] transition-[.2s]'>
                                Sign up for free
                         </a>

                         <div className='mt-[2rem] w-full bg-[#d9d9d9] h-[1px] mb-[2rem]'></div>
                         <div className='flex-col flex z-[2] items-start'>
                            <p className='mb-[1rem] tracking-[.03em] leading-[1.5em] text-[1rem] font-[530] text-[#181818]'>Marketplace plan includes:</p>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Upwork’s global freelance marketplace</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Access to AI-powered features</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Collaboration and project tracking tools</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Standard reporting</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Pay as work is completed</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>30 invites per job post</p>
                            </div>
                            
                         </div>
                    </div>
                </div>

            <div className='flex flex-col border border-[#d9d9d9] rounded-[24px] p-[2rem] w-full gap-[1.5rem]'>
                    <div>
                        <h1 className='text-[24px] leading-[1.1em] text-[#181818] font-600 tracking-[.025rem]'>Business Plus</h1>
                        <p className='text-[14px] text-[#676767] mb-[1.5rem] tracking-[.02625rem] leading-[1.5em] font-[530]'>Premium features for growing businesses</p>
                        <span className='text-[16px] text-[#181818] leading-[1.5em] tracking-[.03em] font-[530]'>10% Service fee</span>
                    </div>
                    <div className='flex flex-col'>
                        
                            <a href='#'
                            className='w-[180px] cursor-pointer text-[16px] text-center leading-[24px] font-[500] 
                            rounded-[12px] py-[.5rem] px-[1.2rem] bg-[#0c7100] hover:bg-[#14a800] transition-[.2s]'>
                            Sign up for free
                            </a>

                         <div className='mt-[2rem] w-full bg-[#d9d9d9] h-[1px] mb-[2rem]'></div>
                         <div className='flex-col flex z-[2] items-start'>
                            <p className='mb-[1rem] tracking-[.03em] leading-[1.5em] text-[1rem] font-[530] text-[#181818]'>Everything in Marketplace, and:</p>
                              <div className="flex items-center mb-[0.5rem] space-x-1">
                                <LuDot className="text-[#181818] text-[22px] mb-auto" />
                                <p className="text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818] flex items-center">
                                    No upfront costs or ongoing subscription fees
                                    <span className="relative group">
                                    <MdOutlineErrorOutline className="text-[#181818] cursor-pointer w-[22px] h-[22px] rotate-180 ml-[5px]" />
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] bg-white text-[#181818] text-[12px] p-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                                        10% Business Plus fee. Eligible ACH payments discounted to 8%. No contract initiation fee, with the exception of fixed-price contracts of $100 USD or less.
                                    </span>
                                    </span>
                                </p>
                                </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Instant access to pre-vetted top 1% of talent</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Fast shortlisting within 2 business days</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Advanced reporting</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Premium customer support 24/7</p>
                            </div>
                            <div className="flex items-center mb-[0.5rem] space-x-1">
                                <LuDot className="text-[#181818] text-[22px] mb-auto" />
                                <p className="text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818] flex items-center">
                                Flexible payment options with Net 30 terms
                                    <span className="relative group">
                                    <MdOutlineErrorOutline className="text-[#181818] cursor-pointer w-[22px] h-[22px] rotate-180 ml-[5px]" />
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[250px] z-[99999] bg-white text-[#181818] text-[12px] p-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    Monthly invoicing with 30-day payment terms for U.S. based companies only, will require an application and approval.
                                    </span>
                                    </span>
                                </p>
                                </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>60 invites per job posts</p>
                            </div>
                            
                         </div>
                    </div>
                </div>

           <div className='flex flex-col border border-[#d9d9d9] rounded-[24px] p-[2rem] w-full gap-[1.5rem] z-0'>
                    <div>
                        <h1 className='text-[24px] leading-[1.1em] text-[#181818] font-600 tracking-[.025rem]'>Enterprise</h1>
                        <p className='text-[14px] text-[#676767] mb-[1.5rem] tracking-[.02625rem] leading-[1.5em] font-[530]'>Comprehensive solutions for the entire organization</p>
                        <span className='text-[16px] text-[#676767] leading-[1.5em] tracking-[.03em] font-[530]'>Custom pricing</span>
                    </div>
                    <div className='flex flex-col'>

                        <a
                        href="/pricing/pricingcontact"
                        className="w-[180px] block text-[16px] text-center leading-[24px] font-[500] 
                         rounded-[12px] py-[.5rem] px-[1.2rem] bg-[#0c7100] hover:bg-[#14a800] 
                         text-white transition-colors duration-200 cursor-pointer"
                        >
                        Contact Sales
                        </a>
                            
                         <div className='mt-[2rem] w-full bg-[#d9d9d9] h-[1px] mb-[2rem]'></div>
                         <div className='flex-col flex z-[2] items-start'>
                            <p className='mb-[1rem] tracking-[.03em] leading-[1.5em] text-[1rem] font-[530] text-[#181818]'>Everything in Business Plus, and:</p>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px] mb-auto' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Dedicated account and program management</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px] mb-auto' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>SSO and Integrations including VMS, ATS, and HRIS</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px] mb-auto  ' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Hiring pre-approvals and talent onboarding workflows</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Customized reporting and invoicing</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Compliance services subscription</p>
                            </div>
                            <div className='flex items-center mb-[.5rem]'>
                            <LuDot className='text-[#181818] text-[22px]' />
                                <p className='text-[14px] leading-[1.5em] tracking-[.02625rem] text-[#181818]'>Unlimited invites per job post</p>
                            </div>
                            
                         </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Pricing