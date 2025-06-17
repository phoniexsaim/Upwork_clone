"use client";


import HomeContainer from "../Components/HomeContainer";
import HomeTalentCategory from "../Components/HomeTalentCategory";
import HomeUpYourWork from "../Components/HomeUpYourWork";
import HomeExpertise from "../Components/HomeExpertise";
import HomeFindTalent from "../Components/HomeFindTalent";
import HomeFindGreatWork from "../Components/HomeFindGreatWork";
import HomeTopSkill from "../Components/HomeTopSkill";
import HomeWhyBuisness from "../Components/HomeWhyBuisness";
import HomeSlider from "../Components/HomeSlider";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function MainHome() {


  return (
    <>
    <div className="bg-white">
      <Navbar/>
        <div className="pt-[5rem]">
        <HomeContainer></HomeContainer>
        </div>
        <HomeUpYourWork></HomeUpYourWork>
        <HomeTalentCategory></HomeTalentCategory>
        <HomeExpertise></HomeExpertise>
        <HomeFindTalent></HomeFindTalent>
        <HomeWhyBuisness></HomeWhyBuisness>
        <HomeFindGreatWork></HomeFindGreatWork>
        <HomeSlider></HomeSlider>
        <HomeTopSkill></HomeTopSkill>
        <Footer></Footer>
    </div>
    </>
  )
}
