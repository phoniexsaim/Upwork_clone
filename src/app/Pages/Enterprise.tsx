"use client";

import { useRef } from "react";
import EnterpriseLanguages from "../Components/Enterprise-Languages";
import EnterpriseSlider from "../Components/Enterprise-Slider";
import Footer from "../Components/Footer";
import EnterpriseGovernance from "../Components/Enterprise-Governance";
import EnterpriseSolution from "../Components/Enterprise-Solution";
import EnterpriseDedicated from "../Components/Enterprise-Dedicated";
import EnterpriseHiringTeam from "../Components/Enterprise-HiringTeam";
import EnterpriseHigherTalent from "../Components/Enterprise-HigherTalent";
import EnterpriseForSmallTalent from "../Components/Enterprise-ForSmallProjects";
import EnterpriseVideo from "../Components/Enterprise-Video";
import EnterpriseTopBanner from "../Components/Enterprise-TopBanner"; 
import EnterpriseScroll from "../Components/Enterprise-Scroll";

export default function Enterprise() {
  const triggerRef = useRef(null);

  return (
    <>
      <div className="bg-black">
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#181818] text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6 text-sm">
            <a href="" className="hover:text-[#14a800] hover:underline">Enterprise Suite</a>
            <a href="" className="hover:text-[#14a800] hover:underline">Managed Services</a>
            <a href="" className="hover:text-[#14a800] hover:underline">Features</a>
            <a href="" className="hover:text-[#14a800] hover:underline">Contact us</a>
          </div>
        </nav>

        <div className="pt-[60px]">
          <EnterpriseTopBanner />
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
