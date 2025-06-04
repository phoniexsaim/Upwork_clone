"use client";

import { FaPenToSquare } from "react-icons/fa6";
import { TbShieldStar } from "react-icons/tb";
import { TiPinOutline } from "react-icons/ti";

export default function HomeUpYourWork() {

  return (
    <>
     <div className="bg-white font-sans text-gray-900">
  <div className="max-w-7xl font-sans mx-auto px-6 py-16">
    <main className="grid md:grid-cols-2 gap-12 items-center">
      <div className="bg-[#f2f7f2] flex items-center justify-center w-full h-full rounded">
       <video
  src="/Animation - 1748862529303.webm"
  className="w-full h-auto max-w-[400px] object-contain"
  autoPlay
  loop
  muted
  playsInline
/>

      </div>

      <div>
        <h1 className="text-[44px] font-[500] mb-1">Up your work game, it’s easy</h1>
        <ul className="space-y-3">
          <li className="flex gap-2 items-start">
            <span><FaPenToSquare className="mt-[6px]" /></span>
            <div>
              <strong className="text-[20px] font-[500]">No cost to join</strong>
              <div className="text-[15px] font-[400]">
                Register and browse talent profiles, explore projects, or even book a consultation.
              </div>
            </div>
          </li>
          <li className="flex gap-2 items-start">
            <span><TiPinOutline className="mt-[6px] text-[20px]" /></span>
            <div>
              <strong className="text-[20px] font-[500]">Post a job and hire top talent</strong>
              <div className="text-[15px] font-[400]">
                Finding talent doesn’t have to be a chore. Post a job or we can search for you!
              </div>
            </div>
          </li>
          <li className="flex gap-2 items-start">
            <span><TbShieldStar className="mt-[6px] text-[20px]" /></span>
            <div>
              <strong className="text-[20px] font-[500]">Work with the best—without breaking the bank</strong>
              <div className="text-[15px] font-[400]">
                Upwork makes it affordable to up your work and take advantage of low transaction rates.
              </div>
            </div>
          </li>
        </ul>

        <div className="mt-6 flex gap-4">
          <button className="bg-[#108a00] text-white px-6 py-2 rounded-lg cursor-pointer">Sign up for free</button>
          <button className="border border-[#108a00] text-[#108a00] px-6 py-2 rounded-lg cursor-pointer">Learn how to hire</button>
        </div>
      </div>
    </main>
  </div>
</div>


    </>
  )
}