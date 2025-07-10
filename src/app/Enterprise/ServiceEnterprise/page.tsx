"use client";

import { useRef } from "react";
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
import Navbar from "@/app/Components/Navbar";

export default function EnterpriseServices() {
  const triggerRef = useRef(null);

  return (
    <>
      <Navbar isEnterprise/>
      <EnterpriseSmallNav />
      <div className="bg-black pt-[112px]"> 

        <EnterpriseServicesBanner />
        <EnterpriseServicesPartial />

        <div ref={triggerRef}>
          <EnterpriseHigherTalent />
        </div>

        <EnterpriseTrusted />
        <EnterpriseServicesTalent />
        <EnterpriseServicesAdabtable />
        <EnterpriseServicesChecks />
        <Footer />
      </div>

      <EnterpriseScroll triggerRef={triggerRef} />
    </>
  );
}
