"use client";

import { useRef } from "react";
import Link from "next/link";
import Footer from "../Components/Footer";
import EnterpriseScroll from "../Components/Enterprise-Scroll";
import EnterpriseFeatureBanner from "../Components/EnterpriseFeature-Banner";
import EnterpriseFeatureHire from "../Components/EnterpriseFeature-Hire";
import EnterpriseFeatureWhyEnterprise from "../Components/EnterpriseFeature-Why_Enterprise";
import EnterpriseFeatureIntegeration from "../Components/EnterpriseFeature-Integerations";

export default function EnterpriseFeatures() {
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
        <EnterpriseFeatureBanner/>
        <EnterpriseFeatureHire/>
        <div ref={triggerRef}>
        <EnterpriseFeatureWhyEnterprise/>
        </div>
        <EnterpriseFeatureIntegeration/>
        {/* <EnterpriseTrusted/>
        <EnterpriseServicesTalent/>
        <EnterpriseServicesAdabtable/>
        <EnterpriseServicesChecks/> */}
         <Footer />
    </div>
    </div>
          <EnterpriseScroll triggerRef={triggerRef} />
    </>
  );
}