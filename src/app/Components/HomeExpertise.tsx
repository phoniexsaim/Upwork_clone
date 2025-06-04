 "use client";

import { FaBriefcase } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";

export default function HomeExpertise() {

    return(

 
 <div className="min-h-screen bg-white font-sans text-gray-900">
  <div className="max-w-7xl font-sans mx-auto px-6 py-16">
    <section className="grid md:grid-cols-2 gap-0 items-center overflow-hidden">
      <div className="bg-[#13544e] text-white p-10 h-full flex flex-col justify-center rounded-l-lg">
        <h3 className="text-white text-sm font-[600] text-[24px] mb-6">Enterprise Suite</h3>
        <h1 className="text-[48px] leading-[1.1] font-[500] mb-6">
          This is how <br />
          <span className="text-[#91e6b3]">good companies</span><br />
          <span className="text-[#91e6b3]">find good company.</span>
        </h1>
        <p className="mb-6 text-[20px]">
          Access the top 1% of talent on Upwork, and a full suite of hybrid workforce
          management tools. This is how innovation works now.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span><LuPencilRuler className="mt-[4px] text-[#91e6b3]" /></span>
            <span className="text-[18px]">Access expert talent to fill your skill gaps</span>
          </li>
          <li className="flex items-start gap-2">
            <span><FaBriefcase className="mt-[4px] text-[#91e6b3]" /></span>
            <span className="text-[18px]">Control your workflow: hire, classify and pay your talent</span>
          </li>
          <li className="flex items-start gap-2">
            <span><RiCustomerService2Line className="mt-[4px] text-[#91e6b3]" /></span>
            <span className="text-[18px]">Partner with Upwork for end-to-end support</span>
          </li>
        </ul>
        <button className="mt-6 bg-white text-green-900 px-6 py-2 rounded-lg cursor-pointer font-[400] w-fit">
          Learn more
        </button>
      </div>

      <div className="h-full">
        <img
          src="/enterprise-2023.webp"
          alt="Enterprise Suite"
          className="w-full h-full object-cover rounded-r-lg"
        />
      </div>
    </section>
  </div>
</div>


    );
}