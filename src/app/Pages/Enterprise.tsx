"use client";

import EnterpriseLanguages from "../Components/Enterprise-Languages";
import EnterpriseSlider from "../Components/Enterprise-Slider";
import Footer from "../Components/Footer";



export default function Enterprise() {
  return (
    <>
    <div className="bg-black">
    <EnterpriseSlider></EnterpriseSlider>
    <EnterpriseLanguages></EnterpriseLanguages>
    <Footer></Footer>
    </div>
    </>
  )
}