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
import Link from "next/link";
import EnterpriseTrusted from "../Components/Enterprise-Trusted";

export default function Enterprise() {
  const triggerRef = useRef(null);

  return (
    <>
      <div className="bg-black">
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#181818] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex gap-6 md:gap-6 text-[12px] md:text-[14px] flex-wrap">
        <Link href={""} className="hover:text-[#14a800] hover:underline">Enterprise Suite</Link>
        <Link href={""} className="hover:text-[#14a800] hover:underline">Managed Services</Link>
        <Link href={""} className="hover:text-[#14a800] hover:underline">Features</Link>
        <Link href={""} className="hover:text-[#14a800] hover:underline">Contact us</Link>
      </div>
    </nav>

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
