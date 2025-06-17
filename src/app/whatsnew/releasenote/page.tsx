"use client";

import FilterSelect from "@/app/Components/FilterSelect";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import ProductReleaseTimeline from "@/app/Components/ProductReleaseTimeline";



export default function WhatsNewReleaseNotes() {
  return (
    <>
    <Navbar/>
<div className="max-w-screen-2xl font-sans mx-auto px-6 py-16">
        <div className="bg-white mt-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-black text-[72px] font-[500]">Release notes</h1>
            <p className="text-black text-[20px] font-[400]">
              Upwork’s latest product news, additions, and updates.
            </p>
            <div className="mt-6 w-full max-w-md">
              <FilterSelect />
            </div>
          </div>
        </div>
      </div>
      <ProductReleaseTimeline></ProductReleaseTimeline>
      <Footer></Footer>
    </>
  );
}
