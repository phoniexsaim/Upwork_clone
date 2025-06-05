"use client";

import ResearchBanner from "../Components/ResarchBanner";
import ResearchAbout from "../Components/ResearchAbout";
import ResearchExperts from "../Components/ResearchExperts";
import ResearchSecondBanner from "../Components/ResearchSecondBaneer";
import ResearchSelect from "../Components/ResearchSelect";
import ResearchPagination from "../Components/ResearchPagination";
import Footer from "../Components/Footer";

export default function WhatsNewResearch() {
  return (
    <>
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
