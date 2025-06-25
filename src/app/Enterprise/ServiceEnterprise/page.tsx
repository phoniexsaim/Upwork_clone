"use client";

import { useRef } from "react";
import Link from "next/link";
import EnterpriseHigherTalent from "@/app/Components/Enterprise-HigherTalent";
import EnterpriseScroll from "@/app/Components/Enterprise-Scroll";
import EnterpriseTrusted from "@/app/Components/Enterprise-Trusted";
import EnterpriseServicesAdabtable from "@/app/Components/EnterpriseServices-Adaptable";
import EnterpriseServicesBanner from "@/app/Components/EnterpriseServices-Banner";
import EnterpriseServicesChecks from "@/app/Components/EnterpriseServices-checks";
import EnterpriseServicesPartial from "@/app/Components/EnterpriseServices-Partial";
import EnterpriseServicesTalent from "@/app/Components/EnterpriseServicesTalent";
import Footer from "@/app/Components/Footer";
import EnterpriseSmallNav from "@/app/Components/Enterprise-SmallNav";

export default function EnterpriseServices() {
      const triggerRef = useRef(null);
    
  return (
    <>
    <div className="bg-black">
        <EnterpriseSmallNav/>
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