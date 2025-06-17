"use client";

import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import ResearchBanner from "@/app/Components/ResarchBanner";
import ResearchAbout from "@/app/Components/ResearchAbout";
import ResearchExperts from "@/app/Components/ResearchExperts";
import ResearchPagination from "@/app/Components/ResearchPagination";
import ResearchSecondBanner from "@/app/Components/ResearchSecondBaneer";
import ResearchSelect from "@/app/Components/ResearchSelect";

export default function WhatsNewResearch() {
  return (
    <>
    <Navbar/>
     <ResearchBanner></ResearchBanner>
     <ResearchSecondBanner></ResearchSecondBanner>
     <ResearchSelect></ResearchSelect>
     <ResearchPagination></ResearchPagination>
     <ResearchAbout></ResearchAbout>
     <ResearchExperts></ResearchExperts>
     <Footer></Footer>
    </>
  );
}
