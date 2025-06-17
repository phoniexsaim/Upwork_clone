"use client";

import { useRef } from "react";
import EnterpriseHigherTalent from "../Components/Enterprise-HigherTalent";
import EnterpriseTrusted from "../Components/Enterprise-Trusted";
import EnterpriseServicesBanner from "../Components/EnterpriseServices-Banner";
import EnterpriseServicesPartial from "../Components/EnterpriseServices-Partial";
import Footer from "../Components/Footer";
import EnterpriseScroll from "../Components/Enterprise-Scroll";
import EnterpriseServicesTalent from "../Components/EnterpriseServicesTalent";
import EnterpriseServicesAdabtable from "../Components/EnterpriseServices-Adaptable";
import EnterpriseServicesChecks from "../Components/EnterpriseServices-checks";
import Link from "next/link";

export default function EnterpriseServices() {
      const triggerRef = useRef(null);
    
  return (
    <>
    <div className="bg-black">
         <nav className="fixed top-0 left-0 w-full z-50 bg-[#181818] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex gap-5 md:gap-6 text-[12px] md:text-[14px] flex-wrap">
        <Link href={""} className="hover:text-[#14a800] hover:underline">Enterprise Suite</Link>
        <Link href={""} className="hover:text-[#14a800] hover:underline">Managed Services</Link>
        <Link href={""} className="hover:text-[#14a800] hover:underline">Features</Link>
        <Link href={""} className="hover:text-[#14a800] hover:underline">Contact us</Link>
      </div>
    </nav>

     <div className="pt-[60px]">
        <EnterpriseServicesBanner/>
        <EnterpriseServicesPartial/>
        <div ref={triggerRef}>
        <EnterpriseHigherTalent />
        </div>
        <EnterpriseTrusted/>
        <EnterpriseServicesTalent/>
        <EnterpriseServicesAdabtable/>
        <EnterpriseServicesChecks/>
         <Footer />
    </div>
    </div>
          <EnterpriseScroll triggerRef={triggerRef} />
    </>
  );
}