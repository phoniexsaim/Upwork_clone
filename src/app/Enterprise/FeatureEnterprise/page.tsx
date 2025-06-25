"use client";

import { useRef } from "react";
import Link from "next/link";
import EnterpriseScroll from "@/app/Components/Enterprise-Scroll";
import EnterpriseFeatureBanner from "@/app/Components/EnterpriseFeature-Banner";
import EnterpriseFeatureHire from "@/app/Components/EnterpriseFeature-Hire";
import EnterpriseFeatureIntegeration from "@/app/Components/EnterpriseFeature-Integerations";
import EnterpriseFeatureWhyEnterprise from "@/app/Components/EnterpriseFeature-Why_Enterprise";
import Footer from "@/app/Components/Footer";
import EnterpriseFeatureBuisness from "@/app/Components/EnterpriseFeature-Buisness";
import EnterpriseFeatureCard from "@/app/Components/EnterpriseFeature-Card";
import EnterpriseTrusted from "@/app/Components/Enterprise-Trusted";
import EnterpriseFeatureVideoSlider from "@/app/Components/EnterpriseFeature-VideoSlider";
import EnterpriseSmallNav from "@/app/Components/Enterprise-SmallNav";

export default function EnterpriseFeatures() {
      const triggerRef = useRef(null);
    
  return (
    <>
    <div className="bg-black">
        <EnterpriseSmallNav/>
     <div className="pt-[60px]">
        <EnterpriseFeatureBanner/>
        <EnterpriseFeatureHire/>
        <div ref={triggerRef}>
        <EnterpriseFeatureWhyEnterprise/>
        </div>
        <EnterpriseFeatureIntegeration/>
        <EnterpriseFeatureBuisness/>
        <EnterpriseFeatureCard/>
        <EnterpriseTrusted/>
        <EnterpriseFeatureVideoSlider/>
         <Footer />
    </div>
    </div>
          <EnterpriseScroll triggerRef={triggerRef} />
    </>
  );
}