"use client";

import EnterpriseDedicated from "@/app/Components/Enterprise-Dedicated";
import EnterpriseForSmallTalent from "@/app/Components/Enterprise-ForSmallProjects";
import EnterpriseGovernance from "@/app/Components/Enterprise-Governance";
import EnterpriseHigherTalent from "@/app/Components/Enterprise-HigherTalent";
import EnterpriseHiringTeam from "@/app/Components/Enterprise-HiringTeam";
import EnterpriseLanguages from "@/app/Components/Enterprise-Languages";
import EnterpriseScroll from "@/app/Components/Enterprise-Scroll";
import EnterpriseSlider from "@/app/Components/Enterprise-Slider";
import EnterpriseSmallNav from "@/app/Components/Enterprise-SmallNav";
import EnterpriseSolution from "@/app/Components/Enterprise-Solution";
import EnterpriseTopBanner from "@/app/Components/Enterprise-TopBanner";
import EnterpriseTrusted from "@/app/Components/Enterprise-Trusted";
import EnterpriseVideo from "@/app/Components/Enterprise-Video";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { useRef } from "react";
export default function Enterprise() {
  const triggerRef = useRef(null);

  return (
    <>
       <Navbar isEnterprise/>
      <div className="bg-black">
        <EnterpriseSmallNav/>
        <div className="pt-[60px]">
          <EnterpriseTopBanner />
          <EnterpriseTrusted/>
          <div ref={triggerRef}>
            <EnterpriseVideo />
          </div>
          <EnterpriseForSmallTalent />
          <EnterpriseHigherTalent />
          <EnterpriseHiringTeam />
          <EnterpriseDedicated />
          <EnterpriseSolution />
          <EnterpriseGovernance />
          <EnterpriseSlider />
          <EnterpriseLanguages />
          <Footer />
        </div>
      </div>

      <EnterpriseScroll triggerRef={triggerRef} />
    </>
  );
}
