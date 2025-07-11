 "use client";
import { FaBriefcase } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";

export default function HomeExpertise() {
return(
 <div className="min-h-screen bg-white font-sans text-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <section className="grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
      
      <div className="order-1 md:order-2 w-full h-full">
        <img
          src="/Images/enterprise-2023.webp"
          alt="Enterprise Suite"
          className="w-full h-[250px] sm:h-[400px] md:h-full object-cover rounded-t-lg md:rounded-none md:rounded-r-lg"
        />
      </div>

      <div className="order-2 md:order-1 bg-[#13544e] text-white px-5 py-8 sm:p-10 h-full flex flex-col justify-center rounded-b-lg md:rounded-none md:rounded-l-lg">
        <h3 className="text-sm font-semibold text-[20px] sm:text-[24px] mb-4 sm:mb-6">Enterprise Suite</h3>
        <h1 className="text-[30px] sm:text-[36px] md:text-[48px] leading-[1.2] font-medium mb-4 sm:mb-6">
          This is how <br />
          <span className="text-[#91e6b3]">good companies</span><br />
          <span className="text-[#91e6b3]">find good company.</span>
        </h1>
        <p className="mb-4 sm:mb-6 text-[16px] sm:text-[18px] md:text-[20px]">
          Access the top 1% of talent on Upwork, and a full suite of hybrid workforce
          management tools. This is how innovation works now.
        </p>

        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <span><LuPencilRuler className="mt-[4px] text-[#91e6b3]" /></span>
            <span className="text-[16px] sm:text-[18px]">Access expert talent to fill your skill gaps</span>
          </li>
          <li className="flex items-start gap-2">
            <span><FaBriefcase className="mt-[4px] text-[#91e6b3]" /></span>
            <span className="text-[16px] sm:text-[18px]">Control your workflow: hire, classify and pay your talent</span>
          </li>
          <li className="flex items-start gap-2">
            <span><RiCustomerService2Line className="mt-[4px] text-[#91e6b3]" /></span>
            <span className="text-[16px] sm:text-[18px]">Partner with Upwork for end-to-end support</span>
          </li>
        </ul>

        <button className="mt-6 bg-white text-green-900 px-6 py-2 rounded-lg cursor-pointer font-medium w-fit">
          Learn more
        </button>
      </div>
    </section>
  </div>
</div>
);
}